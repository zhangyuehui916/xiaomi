$(".wrap .one").click(function () {
    $(".one").removeClass("on");
    $(this).addClass("on");
    var $i = $(this).index();
    $(".for").eq($i).fadeIn().siblings(".for").stop().fadeOut();

})
$(".btn").click(function(){
    var $uv=$("#userid").val();
    var $pv=$("#pwd").val();
    $.ajax({
        url:"http://www.520mg.com/member/index_login.php",
        type:"post",
        dataType:"json",
        data:{"userid":$uv,"pwd":$pv,"fmdo":"login","dopost":"login"},
        success(res){
            if(res.status==1){
                $(".sp1").html(res.msg+"即将跳转").css("color","green");
                setTimeout(function(){
                    window.location.href="index.html";
                },2000)
            }else{
                $(".sp1").html(res.msg).css("color","red");
            }
           
        }
    })
})