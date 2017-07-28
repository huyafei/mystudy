//首先要在css中为msg添加transition属性

//当页面所有内容(html,js,css)都加载完，才自动触发onload事件
window.onload=function(){
    upd();
};
function upd(){
    //修改msg的bottom为0
    $("#msg").css('bottom','0');
}
function down(){
    $("#msg").css('bottom',"-220px");
    //启动一次性定时器准备上移
    setTimeout(upd,3000+1000);
}
