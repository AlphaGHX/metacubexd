import{m as $,c as x,k as j,d as A,u as O,a as J,b as U,i,e as t,I as W,A as H,F as E,S as M,f as X,g as Y,h as I,j as K,t as ee,l as v,s as L,n as te,o as ne,p as re,q as oe,r as se,v as ae,w as le,x as ie,R as h,N as ce,y as de,z as b,B as ue,C as pe,D as me,E as he,G as fe,H as ge}from"./vendor-f843f104.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const ve="modulepreload",be=function(e,r){return new URL(e,r).href},R={},_=function(r,s,l){if(!s||s.length===0)return r();const o=document.getElementsByTagName("link");return Promise.all(s.map(n=>{if(n=be(n,l),n in R)return;R[n]=!0;const a=n.endsWith(".css"),f=a?'[rel="stylesheet"]':"";if(!!l)for(let u=o.length-1;u>=0;u--){const p=o[u];if(p.href===n&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${f}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":ve,a||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),a)return new Promise((u,p)=>{c.addEventListener("load",u),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>r()).catch(n=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n})};var _e=(e=>(e.Close="close",e.ID="ID",e.Type="type",e.Process="process",e.Host="host",e.Rule="rules",e.Chains="chains",e.DlSpeed="dlSpeed",e.ULSpeed="ulSpeed",e.Download="dl",e.Upload="ul",e.Source="source",e.Destination="destination",e))(_e||{}),we=(e=>(e[e.NOT_CONNECTED=0]="NOT_CONNECTED",e[e.MEDIUM=200]="MEDIUM",e[e.HIGH=500]="HIGH",e))(we||{}),xe=(e=>(e.DOTS="dots",e.BAR="bar",e.Auto="auto",e))(xe||{}),g=(e=>(e.EN="en-US",e.ZH="zh-CN",e))(g||{});const $e=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"],[D,ye]=$(x(""),{name:"selectedEndpoint",storage:localStorage}),[Se,Xe]=$(x([]),{name:"endpointList",storage:localStorage}),[Ce,Ee]=$(x("halloween"),{name:"theme",storage:localStorage}),P=()=>Se().find(({id:e})=>e===D()),Ye=()=>{var e;return(e=P())==null?void 0:e.secret},Ke=()=>{var e;return(e=P())==null?void 0:e.url.replace("http","ws")},et=()=>{const e=P();return j.create({prefixUrl:e==null?void 0:e.url,headers:{Authorization:e!=null&&e.secret?`Bearer ${e.secret}`:""}})},Ie=v('<li class="tooltip tooltip-bottom">'),De=v('<div class="drawer drawer-end w-auto sm:ml-auto"><input id="themes" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="themes" class="btn btn-circle btn-primary drawer-button btn-sm"></label></div><div class="drawer-side"><label for="themes" class="drawer-overlay"></label><ul class="menu rounded-box gap-2 bg-base-300 p-2 shadow">'),Le=v('<li class="btn btn-xs">'),Pe=v('<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal gap-2">'),Te=v('<ul class="navbar rounded-box sticky inset-x-0 top-2 z-10 mx-2 mt-2 flex w-auto items-center justify-center bg-base-300 px-4"><div class="navbar-start gap-4"><div><input id="navs" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="navs" class="btn btn-circle drawer-button btn-sm"></label></div><div class="drawer-side"><label for="navs" class="drawer-overlay"></label><ul class="menu rounded-box min-h-full w-2/5 gap-2 bg-base-300 pt-20 shadow"></ul></div></div><a class="text-xl font-bold normal-case" href="https://github.com/metacubex/metacubexd" target="_blank">metacubexd</a></div><div class="navbar-end"><div class="flex items-center gap-2"><button class="btn btn-circle btn-sm"></button><button class="btn btn-circle btn-secondary btn-sm">'),Ne=v("<li>"),ke=({href:e,tooltip:r,children:s})=>(()=>{const l=Ie();return L(l,"data-tip",r),i(l,t(H,{class:"rounded-box",href:e,children:s})),l})(),Re=()=>(()=>{const e=De(),r=e.firstChild,s=r.nextSibling,l=s.firstChild,o=s.nextSibling,n=o.firstChild,a=n.nextSibling;return i(l,t(te,{})),i(a,t(E,{each:$e,children:f=>(()=>{const d=Le();return d.$$click=()=>Ee(f),L(d,"data-theme",f),i(d,f),d})()})),e})(),Oe=()=>{const[e,{locale:r}]=O(),s=()=>[{href:"/overview",name:e("overview"),icon:t(ne,{})},{href:"/proxies",name:e("proxies"),icon:t(re,{})},{href:"/rules",name:e("rules"),icon:t(oe,{})},{href:"/conns",name:e("connections"),icon:t(se,{})},{href:"/logs",name:e("logs"),icon:t(ae,{})},{href:"/config",name:e("config"),icon:t(le,{})}],l=J(),o=U(),[n,a]=x(!1),f=()=>{ye(""),o("/setup")};return(()=>{const d=Te(),c=d.firstChild,u=c.firstChild,p=u.firstChild,T=p.nextSibling,q=T.firstChild,V=T.nextSibling,F=V.firstChild,G=F.nextSibling,N=c.nextSibling,k=N.firstChild,y=k.firstChild,S=y.nextSibling;return p.addEventListener("change",m=>a(m.target.checked)),i(q,t(W,{})),i(G,t(E,{get each(){return s()},children:({href:m,name:C})=>(()=>{const w=Ne();return w.$$click=()=>a(!1),i(w,t(H,{href:m,children:C})),w})()})),i(d,t(M,{get when(){return l.pathname!=="/setup"},get children(){const m=Pe(),C=m.firstChild;return i(C,t(E,{get each(){return s()},children:({href:w,name:Q,icon:Z})=>t(ke,{href:w,tooltip:Q,children:Z})})),m}}),N),y.$$click=()=>{const m=r();r(m===g.EN?g.ZH:g.EN)},i(y,t(X,{})),i(k,t(Re,{}),S),S.$$click=f,i(S,t(Y,{})),I(()=>K(u,ee("drawer w-auto lg:hidden",""))),I(()=>p.checked=n()),d})()};A(["click"]);const Ue=v('<div class="relative flex h-screen flex-col subpixel-antialiased"><div class="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-4">'),He=b(()=>_(()=>import("./Setup-ef0c3de1.js"),["./Setup-ef0c3de1.js","./vendor-f843f104.js","./index-60009942.js"],import.meta.url)),Me=b(()=>_(()=>import("./Overview-9631a900.js"),["./Overview-9631a900.js","./vendor-f843f104.js","./index-51ca559d.js","./index-ac54fc13.js"],import.meta.url)),Be=b(()=>_(()=>import("./Connections-6341a330.js"),["./Connections-6341a330.js","./vendor-f843f104.js","./index-51ca559d.js","./index-947514a4.js","./index-ac54fc13.js"],import.meta.url)),ze=b(()=>_(()=>import("./Logs-dc2477ff.js"),["./Logs-dc2477ff.js","./vendor-f843f104.js","./index-51ca559d.js","./index-947514a4.js"],import.meta.url)),qe=b(()=>_(()=>import("./Proxies-163e62aa.js"),["./Proxies-163e62aa.js","./vendor-f843f104.js","./index-f14bd485.js","./Config-aa9f507a.js","./index-60009942.js","./index-ac54fc13.js"],import.meta.url)),Ve=b(()=>_(()=>import("./Rules-698924d0.js"),["./Rules-698924d0.js","./vendor-f843f104.js","./index-f14bd485.js"],import.meta.url)),Fe=b(()=>_(()=>import("./Config-aa9f507a.js"),["./Config-aa9f507a.js","./vendor-f843f104.js","./index-60009942.js"],import.meta.url)),Ge=()=>{const e=U();return ie(()=>{D()||e("/setup")}),(()=>{const r=Ue(),s=r.firstChild;return i(r,t(Oe,{}),s),i(s,t(de,{get children(){return[t(M,{get when(){return D()},get children(){return[t(h,{path:"/overview",component:Me}),t(h,{path:"/proxies",component:qe}),t(h,{path:"/rules",component:Ve}),t(h,{path:"/conns",component:Be}),t(h,{path:"/logs",component:ze}),t(h,{path:"/config",component:Fe}),t(h,{path:"*",get element(){return t(ce,{href:"/overview"})}})]}}),t(h,{path:"/setup",component:He})]}})),I(()=>L(r,"data-theme",Ce())),r})()},Qe={add:"Add",overview:"Overview",proxies:"Proxies",rules:"Rules",connections:"Connections",logs:"Logs",config:"Config",upload:"Upload",download:"Download",uploadTotal:"Upload Total",downloadTotal:"Download Total",activeConnections:"Active Connections",memoryUsage:"Memory Usage",traffic:"Traffic",memory:"Memory",down:"Down",up:"Up",proxyProviders:"Proxy Providers",ruleProviders:"Rule Providers",search:"Search",ID:"ID",type:"Type",name:"Name",process:"Process",host:"Host",chains:"Chains",dlSpeed:"DL Speed",ulSpeed:"UL Speed",dl:"DL",ul:"UL",source:"Source",destination:"Destination",close:"Close",reset:"Reset",dnsQuery:"DNS Query",dots:"Dots",bar:"Bar",auto:"Auto",proxiesPreviewType:"Proxies preview type"},Ze={add:"添加",overview:"概览",proxies:"代理",rules:"规则",connections:"连接",logs:"日志",config:"配置",upload:"上传",download:"下载",uploadTotal:"上传总量",downloadTotal:"下载总量",activeConnections:"活动连接",memoryUsage:"内存使用情况",traffic:"流量",memory:"内存",down:"下载",up:"上传",proxyProviders:"代理提供者",ruleProviders:"规则提供者",search:"搜索",ID:"ID",type:"类型",name:"名字",process:"进程",host:"主机",chains:"链路",dlSpeed:"下载速度",ulSpeed:"上传速度",dl:"下载量",ul:"上传量",source:"源地址",destination:"目标地址",close:"关闭",reset:"重置",dnsQuery:"DNS 查询",dots:"点阵",bar:"条形",auto:"自适应",proxiesPreviewType:"节点组预览样式"},B={[g.EN]:Qe,[g.ZH]:Ze},z=()=>{const[e,r]=$(x(Reflect.has(B,navigator.language)?navigator.language:g.EN),{name:"lang",storage:localStorage});return{lang:e,setLang:r}},je=e=>{const{setLang:r}=z(),[s,{locale:l}]=O();return me(()=>{r(l())}),e.children},Ae=e=>{const{lang:r}=z(),s=ue(B,r());return t(pe.Provider,{value:s,get children(){return t(je,{get children(){return e.children}})}})},Je=document.getElementById("root");he(()=>t(Ae,{get children(){return t(fe,{get source(){return ge()},get children(){return t(Ge,{})}})}}),Je);export{_e as A,we as D,xe as P,ye as a,Ye as b,Se as e,Xe as s,et as u,Ke as w};