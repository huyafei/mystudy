//登录DOM做的
//1.获得登录按钮btn-landing
var btnLogin=$("#btn-landing");
var modal=$("#modal-overlay");
var textUser=$("#uname");
var textPwd=$("#upwd");
var up=$(".userp>p");
var pp=$(".pwdp>p");
//var btnAL=document.querySelector("#btnAL");
//var btnRe=document.querySelector("#btnRe");

//邮箱和手机号码正则
var reguname=/^(1[34578]\d{9})|(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
//6-16为密码正则
var regupwd=/^[0-9A-Za-z_]{6,16}$/;
$("#header").on("blur","#uname",function(){
    var u1=$("#uname").val();
    if(!reguname.test(u1)){
        $(".userp>p").css("display","block");
        return;
    }
	if(reguname.test(u1)){
        $(".userp>p").css("display","none");
        return;
    }
});
$("#header").on("blur","#upwd",function(){
    var p1=$("#upwd").val();
    if(p1===""){
        $(".pwdp>p").css("display","block");
        return;
    }
});

//2.绑定单击事件
$("#header").on("click","#btn-landing",function(e){
    //阻止默认
    e.preventDefault();
//获得用户用户名和密码
    var u=$("#uname").val();
    var p=$("#upwd").val();
    if(!reguname.test(u)){
        alert("用户名格式不正确");
        $(".userp>p").css("display","block");
        return;
    }

    if(!regupwd.test(p)&&reguname.test(u)){
        alert("密码格式不正确");
        $(".userp>p").css("display","none");
        $(".pwdp>p").css("display","block");
        return;
    }
//5:如果验证不能成功提示，终止程序
    //6:发送AJAX请求
    $.ajax({
        type:"POST",
        url:"/login",
        data:{uname:u,upwd:p},
        success:function(data){
            if(data.code===1){
                //console.log(data);
                alert("登录成功!");
                //将用户uid/uname保存 session会话
                sessionStorage['loginUname']=u;
                sessionStorage['loginUid']=data.uid;
                //自动跳转 usercenter.html
                location.href = "index.html";
            }else{
                alert("登录失败"+data.msg);
            }
        }
    });
});
