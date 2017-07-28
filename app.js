//1:整个项目主模块文件
//负责创建web服务器对象,监听指定端口
//并向客户端提供静态资源+动态资源服务
//加载相应的模块
// HTTP协议服务器(web服务器)
const http = require("http");
const express = require("express");
const qs = require("querystring");
//创建数据库连接模块
const mysql = require("mysql");
//创建连接池
var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'study',
    connectionLimit:10
});
//2:创建express对象
var app = express();
//3:创建web服务器 参数
var server = http.createServer(app);
//4:绑定监听端口
server.listen(8080);
//5:请求处理静态资源
app.use(express.static('public'));
//6:请求处理动态资源
//客户发送 /请求   如 http://127.0.0.1:8080/

//程序自动跳转 login.html页面请用户登录
app.get("/",(req,res)=>{
    res.redirect('index.html');
});
//登录
app.post("/login",(req,res)=>{
    //1:为req对象绑定事件  data
    req.on("data",(data)=>{
        //2:解析其中的参数对象 obj
        var obj = qs.parse(data.toString());
        //3:获取连接
        pool.getConnection((err,conn)=>{
            //4:创建SQL语句并且发送sql
            var sql = "SELECT * FROM study_user WHERE uname = ? AND upwd = ?";
            //5:判断??
            conn.query(sql,[obj.uname,obj.upwd],(err,result)=>{
                //5:判断??
                if(result.length>0){
                    var output = {
                        code:1,
                        msg:"登录成功",
                        uid:result[0].id
                    };
                }else{//未查询到数据.
                    var output = {
                        code:2,
                        msg:"用户名或密码错误"
                    };
                }
                res.json(output);//把数据转化为json
                conn.release();  //释放连接
            });
        });
    });

});
//注册信息
//用户注册
app.post("/register",(req,res)=>{
    //1:为req对象绑定事件  data
    req.on("data",(data)=>{ //buffer值转字符串
        var obj=qs.parse(data.toString());
        //2:获取连接
        pool.getConnection((err,conn)=>{
            //3:创建SQL语句并且发送sql
            var sql = "insert into study_user values(null,?,?)";
            conn.query(sql,[obj.uname,obj.upwd],(err,result)=>{
                //5:判断??
                if(err)throw err;//如果err  就抛出错误
                var output={code:1,msg:"注册成功"};
                res.json(output);//把数据转化为json
                conn.release();  //释放连接
            });
        });
    });
});
//留言板功能
//处理动态内容 post /addque_msg添加
//5处理动态内容 post /addmsg
app.post("/addque_msg",(req,res)=>{
    //5.1 获取用户提交参数 uname content
    req.on("data",(data)=>{
        //5.2 处理函数 用户参数提交完成
        //Buffer->string->js Object
        //[00 0a 01 aa]=>'uname=tom&content=hello'
        //{uname:'tom',content:'hello'}
        //obj.uname   obj.content
        var obj = qs.parse(data.toString());
        //5.3:获取连接
        pool.getConnection((err,conn)=>{
            //5.4:创建sql
            var sql = "INSERT INTO msg VALUES(null,?,?,?,now())";
            //5.5:发送sql
            conn.query(sql,[obj.uname,obj.title,obj.content],(err,result)=>{
                //5.6 如果添加成功返回 json
                if(result.affectedRows > 0){
                    res.json({code:1,msg:"添加成功",mid:result.insertId});
                    conn.release();
                }
            });
            //5.6:如果成功 json obj
        });
    });
});
//猿问
app.get("/msg",(req,res)=>{
    //6.1 获取连接
    pool.getConnection((err,conn)=>{
        //6.2 创建sql语句并且发送sql
        var sql = "SELECT * FROM msg";
        //6:3 result
        conn.query(sql,(err,result)=>{
            res.json(result);
            conn.release();
        });
    });

});