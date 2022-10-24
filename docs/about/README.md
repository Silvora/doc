---
title: 基本介绍
---

## [www](http://www.757909.xyz)
* 以qiankun为架构系统
* react为基座
* vue后台管理基本模版
* 大文件上传视频网站

## [tim](http://tim.757909.xyz)
* 使用react框架进行开发
* 使用WebSocket进行信息通讯
## [next](http://next.757909.xyz)
* 使用nextjs进行ssr进行开发
* 基本后台管理系统
## [pwa](http://pwa.757909.xyz)
* 使用nuxtjs进行ssr进行开发
* 使用Service Worker把网站变为PWA应用



## 其它
### [qiankun](https://qiankun.umijs.org/zh)
#### 基本介绍
qiankun 是一个基于 single-spa 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。
::: tip
微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。
:::

#### 微前端架构具备以下几个核心价值：
* 技术栈无关
    
    主框架不限制接入应用的技术栈，微应用具备完全自主权
* 独立开发、独立部署
    
    微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新
* 增量升级
    
    在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略
* 独立运行时
    
    每个微应用之间状态隔离，运行时状态不共享



#### 核心设计理念:
* 🥄 简单

由于主应用微应用都能做到技术栈无关，qiankun 对于用户而言只是一个类似 jQuery 的库，你需要调用几个 qiankun 的 API 即可完成应用的微前端改造。同时由于 qiankun 的 HTML entry 及沙箱的设计，使得微应用的接入像使用 iframe 一样简单。

* 🍡 解耦/技术栈无关

微前端的核心目标是将巨石应用拆解成若干可以自治的松耦合微应用，而 qiankun 的诸多设计均是秉持这一原则，如 HTML entry、沙箱、应用间通信等。这样才能确保微应用真正具备 独立开发、独立运行 的能力。



#### 特性
* 📦 基于 single-spa 封装，提供了更加开箱即用的 API。
* 📱 技术栈无关，任意技术栈的应用均可 使用/接入，不论是 React/Vue/Angular/JQuery 还是其他等框架。
* 💪 HTML Entry 接入方式，让你接入微应用像使用 iframe 一样简单。
* 🛡​ 样式隔离，确保微应用之间样式互相不干扰。
* 🧳 JS 沙箱，确保微应用之间 全局变量/事件 不冲突。
* ⚡️ 资源预加载，在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度。
* 🔌 umi 插件，提供了 @umijs/plugin-qiankun 供 umi 应用一键切换成微前端架构系统。



### [nginx](https://nginx.org/)
#### 基本介绍
Nginx是一个高性能的 HTTP 和反向代理服务器，特点是占有内存少，并发能力强，事实上 Nginx 的并发能力确实在同类型的网页服务器中表现较好。

Nginx 可以作为静态页面的 web 服务器，同时还支持 CGI 协议的动态语言，比如 perl、php 等，使用Nginx可以继续做反向代理、负载均衡、动静分离等服务。

::: details 基本server
```conf
server {
    listen       80;
    # 配置你的域名
    server_name  www.xxx.com;
    # 默认路由到 /usr/share/nginx/html 下的 index.html
    location / {
      root   /usr/share/nginx/html;
      index  index.html index.htm;  
    }

    # 请求 /back 开头的接口时会代理到后台服务
    location /back/ {
                # 后台服务器，一般配成内网域名，或者 ip:端口
                proxy_pass   http://backend.website.com;
    }
}
```
:::

::: details proxy_pass使用
```conf
# proxy_pass， 使用语法：proxy_pass URL;
# 如果proxy_pass加了 URI, location 中的URI，会被完全替代
# http://xxxxxx/name/hello =>  http://127.0.0.1/hello;
location /name/ {
    proxy_pass http://127.0.0.1:8080/;
}

#  如果proxy_pass没有 URI, location 中的URI，会被追加
# http://xxxxxx/name/path/hello =>  http://127.0.0.1/name/path/hello
location /some/path/ {
    proxy_pass http://127.0.0.1:8080;
}

#  如果proxy_pass 主机名后加了$request_uri, location 中的URI，会被追加
# http://xxxxxx/name/path1/hello1 =>  http://127.0.0.1/name/path1/hello1
location /name/ {
    proxy_pass http://127.0.0.1:8080$request_uri;
}

# 使用 rewrite 指令时，proxy_pass 后的uri(如果有的话）会被 rewrite后的新uri 直接替换
# http://xxxxxx/name/path2/hello2 =>  http://127.0.0.1/name/path2/hello2
location /name/ {
    rewrite    /name/([^/]+)  /users?name=$1 break;
    proxy_pass http://127.0.0.1:8080;
    # 下面的写法，uri /会被替换，所以也能正常跳转
    # proxy_pass http://127.0.0.1/;
}
```
:::


### [pm2](https://pm2.keymetrics.io/)

#### 基本介绍
* PM2是常用的node进程管理工具，它可以提供node.js应用管理，如自动重载、性能监控、负载均衡等。同类工具有Supervisor、Forever等。

* pm2是一个进程管理工具,可以用它来管理你的node进程，并查看node进程的状态，当然也支持性能监控，进程守护，负载均衡等功能。pm2基本是Nodejs应用程序不二的守护进程选择，事实上它并不仅仅可以启动Nodejs的程序，只要是一般的脚本的程序它同样可以胜任。 

#### 主要特性
* ```内建负载均衡```（使用node cluster集群模块，可以使用服务器上的所有cpu）

* ```后台运行```（node app.js 这种命令是直接在前台运行的，不稳定，很容易断）

* ```0秒停机重载```（应该是上线升级的时候 不需要停机）

* ```停止不稳定的进程```（避免无限循环）

* ```控制台检测```



