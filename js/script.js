var cubicBezier=$(".cubic-bezier"),svgHeight=490,graphSize=290,handleSizeHalf=$(".bezier-handle").width()/2;function bezierCurveValue(){return[(bottomHandlePositionX/graphSize).toFixed(2),((graphBottomPoint-bottomHandlePositionY)/graphSize).toFixed(2),(topHandlePositionX/graphSize).toFixed(2),((graphBottomPoint-topHandlePositionY)/graphSize).toFixed(2)]}function cubicBezierHandle(){function t(){cubicBezierAxis="M0 "+graphBottomPoint+" C "+bottomHandlePositionX+" "+bottomHandlePositionY+", "+topHandlePositionX+" "+topHandlePositionY+", "+graphSize+" "+graphTopPoint,$(".bezier").attr("d",cubicBezierAxis),$(".lineTop").attr("x2",topHandlePositionX-handleSizeHalf),$(".lineTop").attr("y2",topHandlePositionY),$(".lineBottom").attr("x2",bottomHandlePositionX),$(".lineBottom").attr("y2",bottomHandlePositionY),$(".valueX1").html((bottomHandlePositionX/graphSize).toFixed(2)),$(".valueY1").html(((graphBottomPoint-bottomHandlePositionY)/graphSize).toFixed(2)),$(".valueX2").html((topHandlePositionX/graphSize).toFixed(2)),$(".valueY2").html(((graphBottomPoint-topHandlePositionY)/graphSize).toFixed(2))}$(".top").draggable({drag:function(){var i=$(this).position();topHandlePositionX=i.left,topHandlePositionY=i.top+handleSizeHalf,t()},containment:"parent"}),$(".bottom").draggable({drag:function(){var i=$(this).position();bottomHandlePositionX=i.left,bottomHandlePositionY=i.top+handleSizeHalf,t()},containment:"parent"}),t(),$(".top").css({top:topHandlePositionY,left:topHandlePositionX}),$(".bottom").css({top:bottomHandlePositionY,left:bottomHandlePositionX}),$(".lineTop").attr("x1",graphSize),$(".lineTop").attr("y1",graphTopPoint),$(".lineTop").attr("x2",topHandlePositionX+handleSizeHalf),$(".lineTop").attr("y2",topHandlePositionY+handleSizeHalf),$(".lineBottom").attr("y1",graphBottomPoint),$(".lineBottom").attr("x2",bottomHandlePositionX+handleSizeHalf),$(".lineBottom").attr("y2",bottomHandlePositionY+handleSizeHalf),$(".axisX").attr("x1",0),$(".axisX").attr("y1",graphBottomPoint),$(".axisX").attr("x2",graphSize),$(".axisX").attr("y2",graphBottomPoint),$(".axisY").attr("x1",0),$(".axisY").attr("y1",graphBottomPoint),$(".axisY").attr("x2",0),$(".axisY").attr("y2",graphTopPoint),$(".valueX1").html(((bottomHandlePositionX+handleSizeHalf)/graphSize).toFixed(2)),$(".valueY1").html(((bottomHandlePositionX+handleSizeHalf)/graphSize).toFixed(2)),$(".valueX2").html(((topHandlePositionX+handleSizeHalf)/graphSize).toFixed(2))}function interactionAssets(){function t(){return $(".duration input").val()}$(".tap").click(function(){$(this).toggleClass("animate"),$(this).find(".object").css({"transition-timing-function":"cubic-bezier("+$(".valueX1").html()+", "+$(".valueY1").html()+", "+$(".valueX2").html()+", "+$(".valueY2").html()+")","transition-duration":t()+"s"})}),$(".materialTransition .button").click(function(){var i=$.bez([$(".valueX1").html(),$(".valueY1").html(),$(".valueX2").html(),$(".valueY2").html()]),o=1e3*t();100===$(".materialTransition .container").position().left?($(this).parent().animate({path:new $.path.bezier({start:{x:100,y:400,angle:-60},end:{x:0,y:0,angle:10,length:.25}})},o,i),$(this).parent().toggleClass("animate"),$(this).css({"transition-timing-function":"cubic-bezier("+$(".valueX1").html()+", "+$(".valueY1").html()+", "+$(".valueX2").html()+", "+$(".valueY2").html()+")","transition-duration":t()+"s"})):($(this).parent().delay(0).animate({path:new $.path.bezier({start:{x:0,y:0,angle:10},end:{x:100,y:400,angle:-60,length:.25}})},o,i),$(this).parent().toggleClass("animate"),$(this).css({"transition-timing-function":"cubic-bezier("+$(".valueX1").html()+", "+$(".valueY1").html()+", "+$(".valueX2").html()+", "+$(".valueY2").html()+")","transition-duration":t()+"s"}))}),$(".rippleEffect").click(function(t){var i=$(this).position();t.pageX,i.left,t.pageY,i.top;$(this).append("<div class=object></div>")})}graphBottomPoint=graphSize+(svgHeight-graphSize)/2,graphTopPoint=(svgHeight-graphSize)/2,topHandlePositionX=graphTopPoint,topHandlePositionY=graphTopPoint+graphTopPoint/2,bottomHandlePositionX=graphSize-graphTopPoint,bottomHandlePositionY=svgHeight-(graphTopPoint+graphTopPoint/2),cubicBezierHandle(),$(".interactionList").click(function(){var t=$(this),i=t.data("name");t.parent().addClass("on").siblings().removeClass("on"),$("."+i).fadeIn().siblings().fadeOut()}),interactionAssets();