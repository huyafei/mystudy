
$(function(){
//点击页面中登录按钮弹出模态框

$("#header").on("click","#nav-login",function(e){
    e.preventDefault();
    $("#modal-overlay").css("display","block");
    $("#modal-overlay .form-landing").css("display","block");
    $("#modal-overlay .form-register").css("display","none");
    $(".qr-code").css("display","block");
    $("#btnAL").addClass("lf landing-al active");
    $("#btnRe").removeClass("active");
});
$("#header").on("click","#nav-register",function(e){
    e.preventDefault();
    $("#modal-overlay").css("display","block");
    $("#modal-overlay .form-landing").css("display","none");
    $("#modal-overlay .form-register").css("display","block");
    $(".qr-code").css("display","none");
    $("#btnAL").removeClass("active")	;
    $("#btnRe").addClass("lf landing-re active");
});

$("#btnAL").click(function(e){
    e.preventDefault();
    $("#modal-overlay .form-landing").css("display","block");
    $("#modal-overlay .form-register").css("display","none");
    $(".qr-code").css("display","block");
    $("#btnAL").addClass("lf landing-al active");
    $("#btnRe").removeClass("active");
    $(".user-reg>p").css("display","none");
    $(".pwd-red>p").css("display","none");
});

$("#btnRe").click(function(e){
    e.preventDefault();
    $("#modal-overlay .form-landing").css("display","none");
    $("#modal-overlay .form-register").css("display","block");
    $(".qr-code").css("display","none");
    $("#btnAL").removeClass("active");
    $("#btnRe").addClass("lf landing-re active");
    $(".userp>p").css("display","none");
    $(".pwdp>p").css("display","none");
});

$("#btn-itmes").click(function(e){
    e.preventDefault();
    $("#modal-overlay").css("display","none");
    $(".userp>p").css("display","none");
    $(".pwdp>p").css("display","none");
    $(".user-reg>p").css("display","none");
    $(".pwd-red>p").css("display","none");
});
});