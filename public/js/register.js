//jQuery做的
//1:获取注册按钮
//2:绑定点击事件
//邮箱和手机号码正则
var reguname=/^(1[34578]\d{9})|(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
//6-16为密码正则
var regupwd=/^[0-9A-Za-z_]{6,16}$/i;
$("#header").on("blur","#zcuname",function(){
    var u = $("#zcuname").val();
    //if(u===""){
    //    $("div.user-reg>.userKong").css("display","block");
    //    return;
    //}else if(u!=""){
    //    $("div.user-reg>.userKong").css("display","none");
    //     return;
    //}else
    if(!reguname.test(u)){
        $("div.user-reg>.userPh").css("display","block");
        return;
    }else{
        $("div.user-reg>.userPh").css("display","none");
        return;
    }
});
$("#header").on("blur","#zcupwd",function(){
    var p =  $("#zcupwd").val();
    //if(p===""){
    //    $("div.pwd-red>.pwdKong").css("display","block");
    //    return;
    //}else{
    //    $("div.pwd-red>.pwdKong").css("display","none");
    //    return;
    //}
    if(!regupwd.test(p)){
        if(!regupwd.test(p)){
            $("div.pwd-red>.pwdPw").css("display","block");
            return;
        }else{
            $("div.pwd-red>.pwdPw").css("display","none");
            return;
        }
    }
});

$("#header").on("click","#btn-register",function(e){
    e.preventDefault();
//3:获取用户输入用户名和密码
    var u = $("#zcuname").val();
    var p =  $("#zcupwd").val();

    if(u===""){
        alert("用户名不能为空");
        return;
    }else if(p===""){
        alert("密码不能为空");
        return;
    }else if(!reguname.test(u)){
       alert("用户名格式不正确");
       return;
    }else if(!regupwd.test(p)){
       alert("密码格式不正确");
       return;
    }
    //5:如果验证不能成功提示，终止程序
    //6:发送AJAX请求
    $.ajax({
        type:"POST",
        url:"/register",
        data:{uname:u,upwd:p},
        success:function(data){//
            if(data.code===1){
                alert("注册成功!3s后跳转到首页");
                //自动跳转 login.html
                setTimeout(function(){
                    location.href = "index.html";
                },3000);

            }else{
                alert("注册失败");
            }
        }
    });
});

