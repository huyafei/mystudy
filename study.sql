SET NAMES UTF8;
DROP DATABASE study;
CREATE DATABASE study CHARSET=UTF8;
USE study;
CREATE TABLE study_user( 
id INT PRIMARY KEY AUTO_INCREMENT,
uname varchar(32),
upwd varchar(32)
);
set names gbk;
insert into study_user values(null,'879649442@qq.com','hyf1223');
insert into study_user values(null,'15190106827','hyf1223');
insert into study_user values(null,'13812312345','hyf1223');
CREATE TABLE study_msg(

)
set names gbk;
CREATE TABLE msg(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(64),
  title VARCHAR(500),
  content VARCHAR(9999),
  pubtime DATETIME
);
set names gbk;
INSERT INTO msg VALUES (NULL, '879649442@qq.com', 'Node.js怎么自学好？', '我不会node.js我该怎么学，有什么技巧？',now());
INSERT INTO msg VALUES (NULL, '15190106827', '如何自学一门语言？', '我也想学习node.js该从哪开始',now());
INSERT INTO msg VALUES (NULL, '879649442@qq.com', '如何让div浮动元素居中', '如何让div浮动元素居中',now());
INSERT INTO msg VALUES (NULL, '879649442@qq.com', '怎么解决浏览器兼容问题？', '怎么解决浏览器兼容问题？',now());