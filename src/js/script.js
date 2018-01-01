
function cubicBezierHandle(){
  var cubicBezier = $(".cubic-bezier"),
      xPosForTop = 200,
      yPosForTop = 0,
      xPosForBottom = 0,
      yPosForBottom = 200,
      cubicBezierAxis = "";

  $('.top').draggable({
    drag: function(){
      var offset = $(this).offset();
      xPosForTop = offset.left;
      yPosForTop = offset.top;
      cubicBezierAxis = "M0 200 C " +  xPosForBottom + " " + yPosForBottom + ", " + xPosForTop + " " + yPosForTop + ", 200 0";

      cubicBezier.find(".bezier").attr("d", cubicBezierAxis);
      $(".lineTop").attr("x2", xPosForTop);
      $(".lineTop").attr("y2", yPosForTop);
    }
  });
  $('.bottom').draggable({
    drag: function(){
      var offset = $(this).offset();
      xPosForBottom = offset.left;
      yPosForBottom = offset.top;
      cubicBezierAxis = "M0 200 C " +  xPosForBottom + " " + yPosForBottom + ", " + xPosForTop + " " + yPosForTop + ", 200 0";

      cubicBezier.find(".bezier").attr("d", cubicBezierAxis);
      $(".lineBottom").attr("x2", xPosForBottom);
      $(".lineBottom").attr("y2", yPosForBottom);
    }
  });
}
cubicBezierHandle();
