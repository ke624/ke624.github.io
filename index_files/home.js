// JavaScript Document
$(function(){
	$('#home_ban').banner({
		fxLeft:'#ban_fx_left',
		fxRight:'#ban_fx_right',
		idNum:"#ban_num", 
		playback:1,    //切换效果 1:左右，2：上下，3：渐变
		numSel:"current",   //span的class
		imgHeight:598,   //图片高度
		playTime:4000,  //自动播放时间
		scrollTime:1000 //滑动时间
	});
	
	$("#sy_box li").mouseover(function(){
		
		var index = $(this).index();
		if(index>6){
			$("#sy_box li:gt(6)").stop().animate({width:150},400).removeClass('current');
		}else{
			$("#sy_box li:lt(7)").stop().animate({width:150},400).removeClass('current');
		}
		$(this).addClass('current');
		$(this).stop().animate({width:255},400);
	})
	
	$("#sy_box").mouseleave(function(){
		$(this).find('li').stop(true,true).animate({width:165},400).removeClass('current');	
	})
	
	$("#case_sy a.a1").click(function(){
		$("#sy_box ul").stop(true,true).animate({left:0},600);
	})
	
	$("#case_sy a.a2").click(function(){
		$("#sy_box ul").animate({left:-1204},600);
	});
	//视频区
	/*
	$("#sp_box li").hover(function(){
		if($(this).children("video").is(":hidden")){
			$(this).children(".sp_bg").fadeTo(300,0.6).children(".icon").hide();
			$(this).children(".sp_hover").fadeIn(300);
		}
	},function(){
		if($(this).children("video").is(":hidden")){
			$(this).children(".sp_bg").fadeTo(300,1).children(".icon").show();
			$(this).children(".sp_hover").fadeOut(300);
		}
	})
	
	
	$("#sp_box li").click(function(event){
		$(this).children(".sp_bg,.sp_hover").fadeOut(300);
		$(this).children("video").fadeIn(300);
		var myVideo = $(this).children("video").get(0);
		if(myVideo.paused){
			myVideo.play(); 
		}else{
			myVideo.pause();
		};
		//event.stopPropagation();
	});
	*/
	(function(){
		var spNum = $("#case_sp li").size() - 3;
		var i = 0;
		var spWidth = 400;
		var $ul = $("#case_sp ul");
		$("#case_sp a.a1").click(function(){
			i--;
			if (i<0) i = spNum;
			$ul.stop(true,true).animate({left: -i*spWidth},300);
		})
		
		$("#case_sp a.a2").click(function(){
			i++;
			if(i>spNum) i = 0;
			$ul.stop(true,true).animate({left: -i*spWidth},300);
		})
	})();
	
	//店铺装修设计
	(function(){
		var spNum = $("#case_dp li").size() - 4;
		var i = 0;
		var spWidth = 303;
		var $ul = $("#case_dp ul");
		$("#case_dp a.a1").click(function(){
			i--;
			if (i<0) i = spNum;
			$ul.stop(true,true).animate({left: -i*spWidth},300);
		})
		
		$("#case_dp a.a2").click(function(){
			i++;
			if(i>spNum) i = 0;
			$ul.stop(true,true).animate({left: -i*spWidth},300);
		})
	})();

	//详情
	(function(){
		$(".case_list li").hover(function(){
			$(this).find(".bg").stop().animate({height:'436px'},300);	
			$(this).find("h5").stop().fadeIn(300);	
			$(this).find("h4").stop().animate({bottom:'200px'},300);	
		},function(){
			$(this).find(".bg").stop().animate({height:'60px'},300);	
			$(this).find("h5").stop().fadeOut(300);	
			$(this).find("h4").stop().animate({bottom:'0px'},300);	
		})
	})();		
	
});
