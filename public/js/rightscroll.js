    //var div= document.getElementById("toTop");
    var div=$("#toTop");
    //为window绑定滚动事件.onscroll
    window.onscroll=function(){
        //火狐不兼容
        //var scrollTop= document.body.scrollTop;
        //var scrollTop=$(document).scrollTop();
        var scrollTop=$(window).scrollTop();//火狐和谷歌及ie都兼容
        if(scrollTop>=85){
            div.css("right","0");
            // $("header").addClass("top-box-scroll");
        }else{
            div.css("right","");
            // $("header").removeClass("top-box-scroll");
        }
    }


