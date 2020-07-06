//点击box,地区选择表出现
$(".section .box").click(function(){
     $(this).next(".sel").stop().fadeIn();
    
})
//选择地区后选择表消失
var $p1=$(".box").next(".sel").find("p");
$p1.click(function(){
    var $p=$(this).html();
    $(".district").html($p);
    $(this).parents(".sel").stop().fadeOut();
    $(".choose").addClass("one");
})
// 点击其他地方选择表也会消失
$(document).click(function(e){
    var ev=e||window.event;
    if(ev.target.id!="box"){
        $(".sel").hide();
    }
    console.log(ev.target.id);
})
//点击电话号码框，边框变色
$(".section .number").focus(function(){
    $(this).css("border","1px solid #ff6800")
})
//点击电话，出现选择框
$(".section .phone").click(function(){
    $(this).parent(".tel").next(".sel").stop().fadeIn();
})
var $p2=$(".tel").next(".sel").find("p");
$p2.click(function(){
    var $p=$(this).find("span").html();
    $(".tel .phone").html($p);
    $(this).parents(".sel").stop().fadeOut();
})
//验证手机号
$(".section .number").blur(function(){
   
    var reg=/^1\d{10}$/g;
    var $value=$(this).val();
    if($value){
        if(reg.test($value)){
            $(".hint2").html("");
            return true;
        }else{
            $(".hint2").html("!手机号码格式错误").css({"margin-top":"10px","color":"#f51414"});
            return false;
        }
    }else{
        $(".hint2").html("!请输入手机号").css({"margin-top":"10px","color":"#f51414"});
        return false;
    }
    
})
//提交此处有问题
$(".section .sub").click(function(){
   var $i=$(".section .number").trigger("blur");
   console.log($i);
   return false;
    // if($(".section .number").blur()){
    //     return false;
        
    // }else{
        
    //     return false;
    // }
})
