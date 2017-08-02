<?php
header('Content-Type: text/html;charset=UTF-8');
?>
<!-- weight:1200-->
    <div id="top-box">
        <div class="brand lf">
            <a href="#">
                <img src="images/logo/logo.png" class="lf"/>
            </a>
        </div>
        <ul class="lf nav">
            <li class="home"><a href="index.html">首页</a></li>
            <li class="curriculum"><a href="curriculum.html">课程<i></i></a></li>
            <li><a href="#">笔记</a></li>
            <li class="actual"><a href="actual.html">实战</a></li>
            <li class="pro-pro"><a href="que_msg.html">猿问</a></li>
        </ul>
        <!-- 注册登录-->
        <ul class="rt">
            <li>
                <a href="#" id="nav-register">注册</a>
            </li>
            <li>
                <a href="#" id="nav-login">登录</a>
            </li>
            <li class="shopping">
                <a href="#" class="go_shoopping">购物车</a>
                <!-- 弹出购物菜单-->
                <div id="shopping_cart">
                    <div class="my_shopping_cart">
                        <h4>我的购物车</h4>
                        <span>已加入<a>0</a>门课程</span>
                    </div>
                    <div class="inventory_iteme">
                        <ul class="inv_iteme1">
                            <li>
                                <img src="images/shopping_cart.jpg" alt=""/>
                            </li>
                            <li>购物车里空空如也</li>
                            <li></li>
                        </ul>
                        <!-- 横线-->
                        <p></p>
                        <ul class="inv_iteme2">
                            <li>快去这里选购你中意的课程</li>
                            <li>
                                <a href="#">实战课程</a>
                            </li>
                            <li>
                                <a href="#">职业路径</a>
                            </li>

                        </ul>
                    </div>
                    <div class="inventory">
                        <a href="#" class="lf">我的订单中心</a>
                        <button type="submit" class="rt">去购物车</button>
                    </div>
                </div>
            </li>
        </ul>
        <form action="" class="rt nav-form">
            <input type="text" placeholder=" 搜索.." class="lf form-control"/>
            <button type="submit" class="lf">搜索</button>
        </form>
    </div>
<!-- 登录  注册模态框-->
<div id="modal-overlay" style="display:none;">
    <div class="modal-data">
        <div class="landing clear">
            <a href="#" class="lf landing-al" id="btnAL">登录</a>
            <a href="#" class="lf landing-re" id="btnRe">注册</a>
            <span class="modal-items" id="btn-itmes"></span>
        </div>
        <!-- 登录-->
        <form class="form-landing">
            <div class="input">
                <input type="text" placeholder="请输入登录邮箱/手机号" class="useraccount" name="uname" id="uname">
                <div class="userp">
                    <p class="vali_info" style="display: none" id="errUname">请输入正确的邮箱或手机号</p>
                </div>
                <input type="password" placeholder="6~16位密码，区分大小写,不能用空格" class="userpwd" name="upwd" id="upwd">
                <div class="pwdp">
                    <p class="vali_info" style="display: none" id="errPwd">请输入正确的6~16位密码，区分大小写,不能用空格</p>
                </div>
            </div>
            <div class="che-landing clear">
                <div class="lf">
                    <input type="checkbox" id="self-landing" checked/><label for="self-landing"><span>下次自动登录</span></label>
                </div>
                <div class="rt">
                    <!--  <input type="checkbox" id="forget-pwd"/><label for="forget-pwd"> --><span>忘记密码</span></label>
                </div>
            </div>
            <button type="submit" id="btn-landing">登录</button>
        </form>
        <!-- 注册-->
        <form action="" class="form-register" style="display:none">
            <div class="input">
                <input type="text" placeholder="请输入注册邮箱/手机号" class="zc-useraccount" name="zcuname" id="zcuname">
                <div class="user-reg">
                    <!--<p class="vali_info userKong" style="display: none">用户名不能为空</p>-->
                    <p class="vali_info userPh" style="display: none">请输入注册的邮箱或手机号,且不能为空</p>
                </div>
                <input type="password" placeholder="6~16位密码，密码由大小写和数字组成" class="zcuserpwd" name="zcupwd" id="zcupwd">
                <div class="pwd-red">
                    <!--<p class="vali_info pwdKong" style="display: none">密码不能为空</p>-->
                    <p class="vali_info pwdPw" style="display: none">密码由6-16位大小写和数组组成，且不能为空</p>
                </div>
            </div>
            <button type="submit" id="btn-register">注册</button>
        </form>
        <div class="other-landing">
            <span>其他登录方式</span>
            <a href="#" class="landing-qq">
                <b class="fa fa-qq"></b>
            </a>
            <a href="#" class="landing-weixin">
                <b class="fa fa-weixin"></b>
            </a>
            <a href="#" class="landing-weibo">
                <b class="fa fa-weibo"></b>
            </a>
            <div class="qr-code"></div>
        </div>
    </div>
</div>
