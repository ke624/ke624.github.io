$(function($){
	
	$.fn.banner = function(options){
	
		var defaultVal = {
			idNum:"#ban_num", 
			playback:1,    //切换效果 1:左右，2：上下，3：渐变
			numSel:"current",   //span的class
			playTime:3000,  //自动播放时间
			scrollTime:300, //滑动时间
			imgHeight:450,   //图片高度
			playAuto:false,  //自动播放，true：关闭自动，false:开启
			stopAuto:false   //当鼠标在当前对象上时，是否停止播放,同上
		};
		
		var obj = $.extend(defaultVal,options);
		return this.each(function (){
			var selObject = $(this);
			var imgSize = selObject.find('li').size();
			if(imgSize<=1) return false; //图片小于一张时，停止执行下面的代码
			
			var span = '';
			for(var i=1; i<=imgSize; i++){
				span += "<span> </span> ";	
			}
			
			$(obj.idNum).append(span);
			var selNum = $(obj.idNum).find('span');
			selNum.eq(0).addClass(obj.numSel);
			
			var i = 1;
			$(obj.idNum).find('span').mouseenter(function(){
				i = $(this).index();
				imgplay();
			});

			function imgplay(){
				var playback=0;
				if(obj.playback==0){
					playback=Math.ceil(Math.random()*4);
				}else{
					playback=obj.playback;
				}
				if(i>=imgSize) i=0;
				if(i<0) i=imgSize-1;
				var current_i = $(obj.idNum).find('span.current').index();
				if(i==current_i) return false;
				$(obj.idNum).find('span').removeClass("current").eq(i).addClass("current");
				var $li = selObject.find('li');
				$li.stop(true,true).css({zIndex:5,opacity:1,display:'none'});
				$li.eq(current_i).css({zIndex:6,display:'block'});
				if(playback!=1) $li.eq(current_i).fadeTo(obj.scrollTime,0);	
				if(playback==1){
					$li.eq(i).css({zIndex:7}).end()
					.fadeOut(obj.scrollTime).eq(i).fadeIn(obj.scrollTime);
				}else if(playback==2){
					$li.eq(i).css({zIndex:7,width:0,height:0,left:960,top:130,opacity:0}).show().animate({width:'1920px',height:obj.imgHeight,left:0,top:0,opacity:1},obj.scrollTime);
				}else if(playback==3){
					$li.eq(i).css({zIndex:7,width:0,left:960,top:0,opacity:0}).show().animate({width:'1920px',left:0,top:0,opacity:1},obj.scrollTime);
				}else if(playback==4){
					$li.eq(i).css({zIndex:7,height:0,top:100,opacity:0}).show().animate({height:obj.imgHeight,top:0,opacity:1},obj.scrollTime);
				}
				i++;
			}
			$(obj.fxLeft).click(function(){
				i = i-2;
				imgplay();
			});
			$(obj.fxRight).click(function(){
				imgplay();
			});
			$("#home_ban_box").hover(function(){
				$(obj.fxLeft).show();
				$(obj.fxRight).show();	
			},function(){
				$(obj.fxLeft).hide();
				$(obj.fxRight).hide();	
			});
			
			if(obj.playAuto) return false;
			var play = setInterval(imgplay,obj.playTime);
			
			//鼠标在当前对象时，停止自动播放
			if(obj.stopAuto) return false;
			selObject.parent('#home_ban_box').mousemove(function(){ clearInterval(play);});
			selObject.parent('#home_ban_box').hover(function(){
				clearInterval(play);
			},function(){
				play = setInterval(imgplay,obj.playTime);
			});
			
			
		});
	};
	
})(jQuery);