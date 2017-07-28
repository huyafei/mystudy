
//点击添加提问
$("#que-btn").click(function(){
    var u=sessionStorage['loginUname'];
    var t=$("#que_title").val();
    var c=$("#content").val();
    if(t==""){
        alert("请填写问题！");
        return ;
    }else if(u===undefined){
        alert("请先登录！");
        $("#modal-overlay").css("display","block");
        return ;
    }
    $.ajax({
        type:"post",
        url:"/addque_msg",
        data:{uname:u,title:t,content:c},
        success:function(data){
            //5:获取服务器端返回结果
            if(data.code==1){
                alert("提问提交成功！");
                location.href = "que_msg.html";
            }
        }
    });
});
//页面加载自动发送ajax请求
$(function(){
    $.ajax({
        type:"GET",
        url:"/msg",
        success:function(data){
            var html='';
            for(var i=0;i<data.length;i++){
                var obj = data[i];

                html=html+`
                <div class="msg">
                    <span class="username">发布人：${obj.uname} </span>
                    <span class="release-time">发布时间：${obj.pubtime}</span>
                    <div class="post-questions">
                        问题：
                        <span>${obj.title}</span>
                        </div>
                    <div class="questions-added">
                        问题补充：
                        <span>${obj.content}</span>
                     </div>
                </div> 
                `;
            }

            // $(".question-list").prepend(html);
            $(".question-list").html(html.split(",").reverse().join(","));
        }
    })
})