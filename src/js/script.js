
function cubicBezierHandle(){
  var cubicBezier = $(".cubic-bezier");
  var svgHeight = 490,
      graphSize = 290,
      handleSizeHalf = $(".bezier-handle").width() / 2
      graphBottomPoint = graphSize + (svgHeight - graphSize) / 2,
      graphTopPoint = (svgHeight - graphSize) / 2,

      topHandlePositionX = graphTopPoint,
      topHandlePositionY = graphTopPoint + graphTopPoint / 2,
      bottomHandlePositionX = graphSize - graphTopPoint,
      bottomHandlePositionY = svgHeight - (graphTopPoint + graphTopPoint / 2);


  $('.top').draggable({
    drag: function(){
      var position = $(this).position();
      topHandlePositionX = position.left + handleSizeHalf;
      topHandlePositionY = position.top + handleSizeHalf;

      bezierCurve();
    }
  });
  $('.bottom').draggable({
    drag: function(){
      var position = $(this).position();
      bottomHandlePositionX = position.left + handleSizeHalf;
      bottomHandlePositionY = position.top + handleSizeHalf;

      bezierCurve();
    }
  });

  function bezierCurve(){
    cubicBezierAxis = "M0" + " " + graphBottomPoint + " C " +  bottomHandlePositionX + " " + bottomHandlePositionY + ", " + topHandlePositionX + " " + topHandlePositionY + ", " + graphSize + " " + graphTopPoint;

    $(".bezier").attr("d", cubicBezierAxis);

    $(".lineTop").attr("x2", topHandlePositionX);
    $(".lineTop").attr("y2", topHandlePositionY);
    $(".lineBottom").attr("x2", bottomHandlePositionX);
    $(".lineBottom").attr("y2", bottomHandlePositionY);

    $(".valueX1").html((bottomHandlePositionX / graphSize).toFixed(2));
    $(".valueY1").html(((graphBottomPoint - bottomHandlePositionY) / graphSize).toFixed(2));
    $(".valueX2").html((topHandlePositionX / graphSize).toFixed(2));
    $(".valueY2").html(((graphBottomPoint - topHandlePositionY) / graphSize).toFixed(2));
  }
  bezierCurve();

  $(".top").css({
    'top': topHandlePositionY,
    'left': topHandlePositionX,
  });
  $(".bottom").css({
    'top': bottomHandlePositionY,
    'left': bottomHandlePositionX,
  });

  $(".lineTop").attr("x1", graphSize);
  $(".lineTop").attr("y1", graphTopPoint);
  $(".lineTop").attr("x2", topHandlePositionX + handleSizeHalf);
  $(".lineTop").attr("y2", topHandlePositionY + handleSizeHalf);
  $(".lineBottom").attr("y1", graphBottomPoint);
  $(".lineBottom").attr("x2", bottomHandlePositionX + handleSizeHalf);
  $(".lineBottom").attr("y2", bottomHandlePositionY + handleSizeHalf);

  $(".axisX").attr("x1", 0);
  $(".axisX").attr("y1", graphBottomPoint);
  $(".axisX").attr("x2", graphSize);
  $(".axisX").attr("y2", graphBottomPoint);
  $(".axisY").attr("x1", 0);
  $(".axisY").attr("y1", graphBottomPoint);
  $(".axisY").attr("x2", 0);
  $(".axisY").attr("y2", graphTopPoint);

  $(".valueX1").html(((bottomHandlePositionX + handleSizeHalf) / graphSize).toFixed(2));
  $(".valueY1").html(((bottomHandlePositionX + handleSizeHalf) / graphSize).toFixed(2));

  $(".valueX2").html(((topHandlePositionX + handleSizeHalf) / graphSize).toFixed(2));

}
cubicBezierHandle();
