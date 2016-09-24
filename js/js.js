;(function($){
	//页面翻转
	$("#main").swipeDown(function(){
		var index=$(".slide> .active").index();
		index=index<=0?0:index-1;
		gotoPage(index);

	})
	$("#main").swipeUp(function(){
		var index=$(".slide>.active").index();
		var len=$(".slide>section").length;
		index=index>=len-1?len-1:index+1;
		gotoPage(index);
		
	}) 
	function gotoPage(index){
		$("#main .slide").animate({
			translateY:-index*100+"%"
		},500,"ease",function(){
			$(this).children("section").eq(index).addClass("active").siblings().removeClass("active");
		})
	}
   
    //魔方转动
    var str={
              x:-25,
              y:25
           }
    var arr={
              x:-25,
              y:25
           }
     $(".p4 ul").css({"transform":"rotateX("+str.x+"deg)","transform":"rotateY("+str.y+"deg)"});
    $(".p4 ul")
            .on("touchstart",function(e){
                   str.x=e.touches[0].clientX;
                   str.y=e.touches[0].clientY;
                   clearInterval(timss);
               })
            .on("touchmove",function(e){
                   var movx=e.touches[0].clientX-str.x,
                       movy=e.touches[0].clientY-str.y;
                       // console.log(movx);
                       $("#dv4_uls").css({"transform":"rotateY("+movx+"deg) rotateX("+movy+"deg)"});
               })
            .on("touchend",function(){
                   timss=setInterval(function(){
                       j++
                     $(".p4 ul").css({"transform":"rotateY("+j*arr.x+"deg) rotateX("+j*arr.y+"deg)"});
                    },100);

               })

    timss=setInterval(function(){
       j++
       $(".p4 ul").css({"transform":"rotateY("+j*arr.x+"deg) rotateX("+j*arr.y+"deg)"});
    },100);
 
    
    
    
    
    
    
	
})(Zepto)