function cubicBezierHandle(){$(".cubic-bezier");var t=290,o=$(".bezier-handle").width()/2;graphBottomPoint=t+(490-t)/2,graphTopPoint=(490-t)/2,topHandlePositionX=graphTopPoint,topHandlePositionY=graphTopPoint+graphTopPoint/2,bottomHandlePositionX=t-graphTopPoint,bottomHandlePositionY=490-(graphTopPoint+graphTopPoint/2),$(".top").draggable({drag:function(){var t=$(this).position();topHandlePositionX=t.left+o,topHandlePositionY=t.top+o,i()}}),$(".bottom").draggable({drag:function(){var t=$(this).position();bottomHandlePositionX=t.left+o,bottomHandlePositionY=t.top+o,i()}});function i(){cubicBezierAxis="M0 "+graphBottomPoint+" C "+bottomHandlePositionX+" "+bottomHandlePositionY+", "+topHandlePositionX+" "+topHandlePositionY+", "+t+" "+graphTopPoint,$(".bezier").attr("d",cubicBezierAxis),$(".lineTop").attr("x2",topHandlePositionX),$(".lineTop").attr("y2",topHandlePositionY),$(".lineBottom").attr("x2",bottomHandlePositionX),$(".lineBottom").attr("y2",bottomHandlePositionY),$(".valueX1").html((bottomHandlePositionX/t).toFixed(2)),$(".valueY1").html(((graphBottomPoint-bottomHandlePositionY)/t).toFixed(2)),$(".valueX2").html((topHandlePositionX/t).toFixed(2)),$(".valueY2").html(((graphBottomPoint-topHandlePositionY)/t).toFixed(2))}i(),$(".top").css({top:topHandlePositionY,left:topHandlePositionX}),$(".bottom").css({top:bottomHandlePositionY,left:bottomHandlePositionX}),$(".lineTop").attr("x1",t),$(".lineTop").attr("y1",graphTopPoint),$(".lineTop").attr("x2",topHandlePositionX+o),$(".lineTop").attr("y2",topHandlePositionY+o),$(".lineBottom").attr("y1",graphBottomPoint),$(".lineBottom").attr("x2",bottomHandlePositionX+o),$(".lineBottom").attr("y2",bottomHandlePositionY+o),$(".axisX").attr("x1",0),$(".axisX").attr("y1",graphBottomPoint),$(".axisX").attr("x2",t),$(".axisX").attr("y2",graphBottomPoint),$(".axisY").attr("x1",0),$(".axisY").attr("y1",graphBottomPoint),$(".axisY").attr("x2",0),$(".axisY").attr("y2",graphTopPoint),$(".valueX1").html(((bottomHandlePositionX+o)/t).toFixed(2)),$(".valueY1").html(((bottomHandlePositionX+o)/t).toFixed(2)),$(".valueX2").html(((topHandlePositionX+o)/t).toFixed(2))}cubicBezierHandle();