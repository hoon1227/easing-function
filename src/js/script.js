
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

      cubicBezier.find("path").attr("d", cubicBezierAxis);
    }
  });
  $('.bottom').draggable({
    drag: function(){
      var offset = $(this).offset();
      xPosForBottom = offset.left;
      yPosForBottom = offset.top;
      cubicBezierAxis = "M0 200 C " +  xPosForBottom + " " + yPosForBottom + ", " + xPosForTop + " " + yPosForTop + ", 200 0";

      cubicBezier.find("path").attr("d", cubicBezierAxis);
    }
  });
}
cubicBezierHandle();
