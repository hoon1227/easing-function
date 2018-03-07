
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


function bezierCurveValue(){
  var valueX1 = (bottomHandlePositionX / graphSize).toFixed(2);
  var valueY1 = ((graphBottomPoint - bottomHandlePositionY) / graphSize).toFixed(2);
  var valueX2 = (topHandlePositionX / graphSize).toFixed(2);
  var valueY2 = ((graphBottomPoint - topHandlePositionY) / graphSize).toFixed(2);
  var bezierValue = [valueX1, valueY1, valueX2, valueY2];
  return bezierValue;
}

function cubicBezierHandle(){


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

$('.interactionList').click(function(){
  var $this = $(this),
      title = $this.data('name');

  $this.parent().addClass('on').siblings().removeClass('on');
  $("." + title).parent().fadeIn().siblings().fadeOut();
  // $("." + title).parent().css('opacity', '1').siblings().css('opacity', '0');
})

function interactionAssets(){
  function durationValue(){
    var dur = $(".duration input").val();
    return dur;
  }
  $('.tap').click(function(){
    $(this).toggleClass('animate');
    $(this).find('.object').css({
      "transition-timing-function": "cubic-bezier(" + $(".valueX1").html() + ", " + $(".valueY1").html() + ", " + $(".valueX2").html() + ", " + $(".valueY2").html() + ")",
      "transition-duration": durationValue() + "s"
    });
  });

  $('.materialTransition .button').click(function(){
    var bezierParamsStart = {
          start: {
            x: 100,
            y: 400,
            angle: -60
          },
          end: {
            x:0,
            y:0,
            angle: 10,
            length: 0.25
          }
        },
        bezierParamsReverse = {
          start: {
            x: 0,
            y: 0,
            angle: 10
          },
          end: {
            x:100,
            y:400,
            angle: -60,
            length: 0.25
          }
        };
    var bezierValue = $.bez([$(".valueX1").html(), $(".valueY1").html(), $(".valueX2").html(), $(".valueY2").html()]),
        duration = durationValue() * 1000;

    if ($(".materialTransition").position().left === 100) {
      $(this).parent().animate({
        path : new $.path.bezier(bezierParamsStart)
      }, duration, bezierValue);
      $(this).parent().toggleClass('animate');
      $(this).css({
        "transition-timing-function": "cubic-bezier(" + $(".valueX1").html() + ", " + $(".valueY1").html() + ", " + $(".valueX2").html() + ", " + $(".valueY2").html() + ")",
         "transition-duration": durationValue() + "s"
      });
    }else{
      $(this).parent().delay(0).animate({
        path : new $.path.bezier(bezierParamsReverse)
      }, duration, bezierValue);
      $(this).parent().toggleClass('animate');
      $(this).css({
        "transition-timing-function": "cubic-bezier(" + $(".valueX1").html() + ", " + $(".valueY1").html() + ", " + $(".valueX2").html() + ", " + $(".valueY2").html() + ")",
        "transition-duration": durationValue() + "s"
      });
    }
  });
}
interactionAssets();
