// 购物车
$(".shop").mouseenter(function () {
	$(this).css({
		"background": "#FFF",
		"color": "#ff6700"
	});

	$(".shop .sshop").stop().slideDown();
})
$(".shop").mouseleave(function () {
	$(this).css({
		"background": "#424242",
		"color": "#b0b0b0"
	});
	$(".shop .sshop").stop().slideUp();
})
// 二维码
$(".app").mouseenter(function () {
	$(".app .code").stop().slideDown();
});
$(".app").mouseleave(function () {
	$(".app .code").stop().slideUp();
})
//导航栏
//logn
$(".log").mouseenter(function () {
	$(".log img").eq(0).stop().animate({
		"left": 0,
		"top": 0
	}, 500);
	$(".log img").eq(1).stop().animate({
		"left": "49px",
		"top": 0
	}, 500);
})
$(".log").mouseleave(function () {
	$(".log img").eq(0).stop().animate({
		"left": "-49px",
		"top": 0
	}, 500);
	$(".log img").eq(1).stop().animate({
		"left": 0,
		"top": 0
	}, 500);
})
//搜索框
//小米接口访问失败，借用淘宝接口

$("#search").keyup(function(){
	$(".search .list").css("display","block").empty();
	var $uv=$(this).val();
	$.ajax({
		url:"https://suggest.taobao.com/sug?code=utf-8&q="+$uv,
		dataType:"jsonp",
		success(res){
			
			var $vl=res.result;
			$.each($vl,function(i,vv){
				$(".search .list").append(`
					<li><a class="prduct" href="javaScript:;">${vv[0]}</a></li>
				`)
				// console.log(vv[0])
			})
			
		}
	})
})
//点击li，其内容传给搜素框
$(".top .search .list").on("click","li",function(){
	var $word=$(this).text();
	$(".top #search").val($word);
})
//点击搜索框的其他部分，下拉列表消失
$(document).click(function(e){
	var ev=e||window.event;
	if(ev.target.id=="search"){
		return;
	}else{
		$(".search .list").hide();
	}
	
})
//协议弹出areegment
$(".login").click(function () {
	relo();

})
$(".agreement .top .del").click(function () {
	fadeO();
})
$(window).keyup(function (e) {
	var ev = e || window.event;
	if (ev.keyCode == 27) {
		fadeO();
	}
})

$(".agreement .end .btn1").click(function () {
	window.open("login.html", "_self");

})
$(".agreement .end .btn2").click(function () {
	fadeO();

})
//消失函数
function fadeO() {
	$(".mask").stop().fadeOut();
	$(".agreement").stop().fadeOut();
}
//点击登录或注册
function relo() {
	var $h = $(document).height();//获得浏览器宽高
	var $w = $(document).width();
	console.log()
	$(".mask").css({ "width": $w, "height": $h });
	$(".mask").stop().fadeIn();
	$(".agreement").stop().fadeIn();
}
// 隐藏的导航详情
$(".nav li:lt(7)").mouseenter(function () {
	$(".snav").stop().slideDown();
	var $n = $(this).index();
	$(".snav .box").eq($n).stop().fadeIn();
})
$(".nav li:lt(7)").mouseleave(function () {
	$(".snav").stop().slideUp();
	var $n = $(this).index();
	$(".snav  .box").eq($n).stop().fadeOut();
})
//=======================================此处代码复杂，且存在小问题，布局问题
$(".snav").mouseenter(function () {
	$(this).stop().slideDown();
})
$(".snav").mouseleave(function () {
	$(this).stop().slideUp();
})
$(".box").mouseenter(function () {
	$(this).stop().fadeIn();
})
$(".box").mouseleave(function () {
	$(this).stop().fadeOut();
})
//侧导航隐藏出现
$(".banner .cnav li").hover(function () {
	$navli = $(this).index();
	$(".banner .scnav").eq($navli).stop().fadeIn();
}, function () {
	$(".banner .scnav").stop().fadeOut();
})
$(".banner .scnav").hover(function () {
	$(this).stop().fadeIn();
}, function () {
	$(this).stop().fadeOut();
})
// 轮播图
var $n = 0;
var $timer = null;
var $i = $(".wrap a").length;
//按动右按键
$(".right").click(right);

function right() {
	$n++;
	if ($n > $i - 1) {
		$n = 0;
	}
	$(".wrap a").eq($n).stop().fadeIn().siblings(".wrap a").stop().fadeOut();

	ball($n);
}
//按动左按键
$(".wrap .left").on("click", function () {
	$n--;
	if ($n < 0) {
		$n = $i - 1;
	}
	$(".wrap a").eq($n).stop().fadeIn().siblings(".wrap a").stop().fadeOut();
	ball($n);
})
//小球变色封装
function ball(q) {
	$(".wrap span").eq(q).addClass("on").siblings(".wrap span").removeClass("on");
}
// 自动轮播
move();
function move() {
	$timer = setInterval(right, 2000);
}
//鼠标放在上面时停止轮播
$(".wrap").mouseenter(function () {
	$(".right,.left").fadeIn();
	clearInterval($timer);
	//点击原点时
	$(".wrap span").click(function () {
		$n = $(this).index();
		ball($n);
		console.log($n);
		$(".wrap a").eq($n).stop().fadeIn().siblings(".wrap a").stop().fadeOut();
	})
})
//离开时
$(".wrap").mouseleave(function () {
	$(".right,.left").fadeOut();
	move();
})
// 主要内容部分
// 第一部分 小米闪购
// 倒计时


setInterval(time, 100);
function time() {
	var mydate = new Date();
	var future = new Date("2020.6.18 0:0:0");
	var t = Math.floor((future - mydate) / 1000);
	var day=Math.floor(t/86400);
	
	var hour = Math.floor(t % 86400 / 3600);
	var min = Math.floor(t % 86400 % 3600 / 60);
	var sec = Math.floor(t % 60);
	$(".section1 .timer .countdown .hour").html(toTwo(hour));
	$(".section1 .timer .countdown .min").html(toTwo(min));
	$(".section1 .timer .countdown .sec").html(toTwo(sec));
}
function toTwo(obj){
	return obj<10?"0"+obj:obj;
}
// section section5 切换
$(".section .section5 .top p a").mouseenter(function(){
	$i=$(this).index();
	$(this).addClass("on").siblings().removeClass("on");
	$(".section .section5 .mix ul").eq($i).stop().fadeIn().siblings("ul").stop().fadeOut();
})
// section7切换
$(".section .section7 .top p a").mouseenter(function(){
	$i=$(this).index();
	$(this).addClass("on").siblings().removeClass("on");
	$(".section .section7 .mix ul").eq($i).stop().fadeIn().siblings("ul").stop().fadeOut();
})

//点击视频弹出播放框
var veo=document.querySelectorAll("video");
$(".section .section9 ul li").click(function(){
	var $ii=$(this).index();
	relo1($ii);
	// veo.play();
	console.log($ii)
	veo[$ii].play();
})

$(".video .tuichu").click(function(){
	fade1();
	$.each($(".video .tuichu"),function(i,dd){
		veo[i].pause();
	})
	
})
$(window).keyup(function (e) {
	var ev = e || window.event;
	if (ev.keyCode == 27) {
		fade1();
		for(var i=0;i<veo.length;i++){
			veo[i].pause();
		}
	}
})
//消失函数
function fade1() {
	$(".mask").stop().fadeOut();
	$(".video").stop().fadeOut();
}
//点击登录或注册
function relo1(i) {
	var $h = $(window).outerHeight();//获得浏览器宽高
	var $w = $(window).outerWidth();
	$(".mask").css({ "width": $w, "height": $h });
	$(".mask").stop().fadeIn();
	$(".video").eq(i).stop().fadeIn();
}
// .footer部分
$(".footer .rig .wx").mouseenter(function(){
	$(".footer .rig .scan").stop().fadeIn();
});
$(".footer .rig .wx").mouseleave(function(){
	$(".footer .rig .scan").stop().fadeOut();
})
// 侧边导航.sidebar
$(window).resize(function(){
	side();
})
side();
function side(){
	var $conW=$(".con").outerWidth();
	var $offL=$(".con").offset().left;
	// console.log($conW+$offL);
	$(".sidebar").css("left",$conW+$offL);
}
$(".sidebar li").mouseenter(function(){
	$(this).find(".first").stop().fadeOut().siblings("p").stop().fadeIn();
})
$(".sidebar li").mouseleave(function(){
	$(this).find(".first").stop().fadeIn().siblings("p").stop().fadeOut();
})
//回到顶部
$(".sidebar .tip").click(function(){
	$("html,body").stop().animate({"scrollTop":0},500);
})
//楼层效果

$(window).resize(function(){
	side1();
})
side1();
function side1(){
	var $floorW=$(".floor").outerWidth();
	var $offL=$(".con").offset().left;
	// console.log($conW+$offL);
	$(".floor").css("left",$offL-$floorW);
}
$(window).scroll(function(){
	var $sTop=$(window).scrollTop();//获取滚动条滚动的距离；
	var $wH=$(window).outerHeight();//获取而当前浏览器的高度
	// console.log($wH);
	// console.log($sTop);
	$.each($(".page"),function(i,dom){
		var $h=$(".page").eq(i).offset().top;//距离顶部的偏移量
		// console.log($h);
		// console.log("jaj")
		$wH=$(window).outerHeight();
		if($sTop+$wH/2+10>=$h){//与下方偏移量存在问题
			$(".floor li").eq(i).addClass("oon").siblings().removeClass("oon");
		}
	})
})

$(".floor li").click(function(){
		$(this).addClass("oon").siblings().removeClass("oon");
		var $ci=$(this).index();//获取点击楼层的角标
		$wH=$(window).outerHeight();//获取而当前浏览器的高度
		// console.log($wH);
		var $pageH=$(".page").eq($ci).offset().top;//获取对用的偏移量
		console.log($pageH);
		$("html,body").stop().animate({scrollTop:$pageH-$wH/2},500);
})

