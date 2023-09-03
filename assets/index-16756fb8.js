import{s as be,a as $e,m as Ce,t as L,i as u,c as o,S as I,b as v,d as _e,e as y,f as h,k as Pe,g as H,h as $,j as N,l as k,u as A,n as De,o as re,I as Le,A as se,F as z,p as Ne,q as ke,r as F,v as Ie,w as Se,x as Me,y as Be,z as Fe,B as Te,C as Oe,D as je,E as q,G as oe,H as Ge,R as x,N as Ue,J as ze,K as C,L as Re,M as He,O as Ae,P as qe,Q as Ze,T as Ve}from"./vendor-bcbfc1b2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const We="modulepreload",Je=function(e,t){return new URL(e,t).href},W={},_=function(t,n,l){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Je(r,l),r in W)return;W[r]=!0;const a=r.endsWith(".css"),p=a?'[rel="stylesheet"]':"";if(!!l)for(let m=s.length-1;m>=0;m--){const d=s[m];if(d.href===r&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${p}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":We,a||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),a)return new Promise((m,d)=>{i.addEventListener("load",m),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})},Ee=v('<span class="loading loading-spinner">'),Qe=v("<button>"),J=e=>{const[t,n]=be(e,["class","loading"]);return(()=>{const l=Qe();return $e(l,Ce({get class(){return L("btn",t.loading?"btn-disabled":t.class)}},n),!1,!0),u(l,o(I,{get when(){return t.loading},get children(){return Ee()}}),null),u(l,()=>e.children,null),l})()},Xe=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"];var f=(e=>(e.Overview="/overview",e.Proxies="/proxies",e.Proxyprovider="/proxyprovider",e.Rules="/rules",e.Conns="/conns",e.Log="/logs",e.Config="/config",e))(f||{});const Ke=10,qt={title:{align:"center",style:{color:"gray"}},chart:{toolbar:{show:!1},zoom:{enabled:!1},animations:{easing:"linear"}},noData:{text:"Loading..."},legend:{fontSize:"14px",labels:{colors:"gray"},itemMargin:{horizontal:64}},dataLabels:{enabled:!1},grid:{yaxis:{lines:{show:!1}}},stroke:{curve:"smooth"},tooltip:{enabled:!1},xaxis:{range:Ke,labels:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{colors:"gray"},formatter:e=>_e(e).toString()}}};var Z=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=200]="MEDIUM",e[e.HIGH=500]="HIGH",e))(Z||{}),ne=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=800]="MEDIUM",e[e.HIGH=1500]="HIGH",e))(ne||{}),ae=(e=>(e.OFF="off",e.DOTS="dots",e.BAR="bar",e.Auto="auto",e))(ae||{}),P=(e=>(e.NATURAL="orderNatural",e.LATENCY_ASC="orderLatency_asc",e.LATENCY_DESC="orderLatency_desc",e.NAME_ASC="orderName_asc",e.NAME_DESC="orderName_desc",e))(P||{}),D=(e=>(e.EN="en-US",e.ZH="zh-CN",e))(D||{}),le=(e=>(e.Close="close",e.ID="ID",e.Type="type",e.Process="process",e.Host="host",e.Rule="rules",e.Chains="chains",e.DlSpeed="dlSpeed",e.ULSpeed="ulSpeed",e.Download="dl",e.Upload="ul",e.Source="source",e.Destination="destination",e))(le||{});const Ye=Object.values(le),Zt={...Object.fromEntries(Ye.map(e=>[e,!0])),ID:!1},[Vt,Wt]=y(h(ae.Auto),{name:"proxiesPreviewType",storage:localStorage}),[Jt,Et]=y(h(P.NATURAL),{name:"proxiesOrderingType",storage:localStorage}),[ie,Qt]=y(h("https://www.gstatic.com/generate_204"),{name:"urlForLatencyTest",storage:localStorage}),[et,Xt]=y(h(!1),{name:"autoCloseConns",storage:localStorage}),[tt,Kt]=y(h(!1),{name:"autoSwitchTheme",storage:localStorage}),[rt,Yt]=y(h("light"),{name:"favDayTheme",storage:localStorage}),[st,er]=y(h("night"),{name:"favNightTheme",storage:localStorage}),[ce,tr]=y(h(!0),{name:"renderInTwoColumn",storage:localStorage}),ot=()=>ie().startsWith("https"),E=()=>ot()?ne:Z,de=e=>{tt()&&R(e?st():rt())},nt=()=>de(window.matchMedia("(prefers-color-scheme: dark)").matches),at=()=>{nt(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>de(e.matches))},[Q,X]=h([]),[K,lt]=h([]),[U,Y]=h({}),[ee,it]=h({}),T=()=>{const e=ue(),t=c=>{c.forEach(i=>{var d;const m=((d=i.history.at(-1))==null?void 0:d.delay)||-1;it({...ee(),[i.name]:{udp:i.udp,type:i.type,name:i.name}}),Y({...U(),[i.name]:m})})},n=async()=>{const{providers:c}=await e.get("providers/proxies").json();Object.values(c).forEach(g=>{t(g.proxies)}),lt(Object.values(c).filter(g=>g.name!=="default"&&g.vehicleType!=="Compatible"));const{proxies:i}=await e.get("proxies").json(),m=[...i.GLOBAL.all??[],"GLOBAL"],d=Object.values(i);t(d),X(d.filter(g=>{var w;return(w=g.all)==null?void 0:w.length}).sort((g,w)=>m.indexOf(g.name)-m.indexOf(w.name)))};return{proxies:Q,proxyProviders:K,latencyTestByProxyGroupName:async c=>{const i=await e.get(`group/${c}/delay`,{searchParams:{url:ie(),timeout:2e3}}).json();Y({...U(),...i})},latencyMap:U,proxyNodeMap:ee,updateProxies:n,setProxyGroupByProxyName:async(c,i)=>{const m=Q().slice(),d=m.find(g=>g.name===c.name);et()&&e.delete("connections"),await e.put(`proxies/${c.name}`,{body:JSON.stringify({name:i})}),d.now=i,X(m)},updateProviderByProviderName:async c=>{try{await e.put(`providers/proxies/${c}`)}catch{}await n()},updateAllProvider:async()=>{await Promise.all(K().map(c=>e.put(`providers/proxies/${c.name}`))),await n()},healthCheckByProviderName:async c=>{await e.get(`providers/proxies/${c}/healthcheck`,{timeout:30*1e3}),await n()}}},[B,ct]=y(h(""),{name:"selectedEndpoint",storage:localStorage}),[dt,rr]=y(h([]),{name:"endpointList",storage:localStorage}),ue=()=>{const e=O();return Pe.create({prefixUrl:e==null?void 0:e.url,headers:{Authorization:e!=null&&e.secret?`Bearer ${e.secret}`:""}})},O=()=>dt().find(({id:e})=>e===B()),sr=()=>{var e;return(e=O())==null?void 0:e.secret},or=()=>{var e;return(e=O())==null?void 0:e.url.replace("http","ws")},M=ue(),nr=()=>{const[e,t]=h([]),[n,l]=h([]),s=async()=>{const{rules:p}=await M.get("rules").json();t(Object.values(p));const{providers:c}=await M.get("providers/rules").json();l(Object.values(c))};return{rules:e,rulesProviders:n,updateRules:s,updateAllRuleProvider:async()=>{await Promise.all(n().map(p=>M.put(`providers/rules/${p.name}`))),await s()},updateRuleProviderByName:async p=>{await M.put(`providers/rules/${p}`),await s()}}},[ut,R]=y(h("halloween"),{name:"theme",storage:localStorage}),pt=v('<div><div class="collapse-title pr-4 text-xl font-medium after:!top-8"></div><div>'),ar=e=>{const{title:t,content:n,onCollapse:l}=e,s=()=>{const p="collapse-open",c="collapse-close";return e.isOpen?p:c},r=()=>{const p="opacity-100",c="opacity-0";return e.isOpen?p:c},a=$(()=>ce()?"lg:grid-cols-3 xl:grid-cols-4":"sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7");return(()=>{const p=pt(),c=p.firstChild,i=c.nextSibling;return c.$$click=()=>l(!e.isOpen),u(c,t),u(i,o(I,{get when(){return e.isOpen},children:n})),N(m=>{const d=L(s(),"collapse-arrow collapse mb-2 select-none overflow-visible border-secondary bg-base-200"),g=L(r(),a(),"collapse-content grid auto-rows-min grid-cols-2 gap-2 transition-opacity duration-1000");return d!==m._v$&&k(p,m._v$=d),g!==m._v$2&&k(i,m._v$2=g),m},{_v$:void 0,_v$2:void 0}),p})()};H(["click"]);const mt=v('<div class="ml-2 flex flex-1 flex-col">'),ht=v('<div class="flex"><div class="flex flex-1 flex-col">'),[gt,pe]=h(0);var te;pe((te=document==null?void 0:document.body)==null?void 0:te.clientWidth);window.addEventListener("resize",()=>{pe(document.body.clientWidth)});const lr=e=>{const t=$(()=>gt()>=640&&ce()),n=$(()=>e.subChild.filter((s,r)=>r%2===0||!t())),l=$(()=>e.subChild.filter((s,r)=>r%2===1));return(()=>{const s=ht(),r=s.firstChild;return u(r,n),u(s,o(I,{get when(){return t()},get children(){const a=mt();return u(a,l),a}}),null),s})()},ft=v('<li class="tooltip tooltip-bottom">'),vt=v('<div class="drawer drawer-end w-auto sm:ml-auto"><input id="themes" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="themes" class="btn btn-circle btn-primary drawer-button btn-sm"></label></div><div class="drawer-side"><label for="themes" class="drawer-overlay"></label><ul class="menu rounded-l-box gap-2 bg-base-300 p-2 shadow">'),yt=v('<li class="btn btn-xs">'),wt=v('<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal gap-2">'),xt=v('<ul class="navbar rounded-box sticky inset-x-0 top-2 z-10 mx-2 mt-2 flex w-auto items-center justify-center bg-base-300 px-4"><div class="navbar-start gap-4"><div><input id="navs" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="navs" class="btn btn-circle drawer-button btn-sm"></label></div><div class="drawer-side"><label for="navs" class="drawer-overlay"></label><ul class="menu rounded-r-box min-h-full w-2/5 gap-2 bg-base-300 pt-20 shadow"></ul></div></div><a class="whitespace-nowrap text-xl font-bold uppercase" href="https://github.com/metacubex/metacubexd" target="_blank">metacube, xd</a></div><div class="navbar-end"><div class="flex items-center gap-2">'),bt=v("<li>"),$t=({href:e,tooltip:t,children:n})=>(()=>{const l=ft();return F(l,"data-tip",t),u(l,o(se,{class:"rounded-box",href:e,children:n})),l})(),Ct=()=>(()=>{const e=vt(),t=e.firstChild,n=t.nextSibling,l=n.firstChild,s=n.nextSibling,r=s.firstChild,a=r.nextSibling;return u(l,o(Ie,{})),u(a,o(z,{each:Xe,children:p=>(()=>{const c=yt();return c.$$click=()=>R(p),F(c,"data-theme",p),u(c,p),c})()})),e})(),_t=()=>{const[e,{locale:t}]=A(),{proxyProviders:n}=T(),l=$(()=>{const i=[{href:f.Overview,name:e("overview"),icon:o(Se,{})},{href:f.Proxies,name:e("proxies"),icon:o(Me,{})},{href:f.Rules,name:e("rules"),icon:o(Be,{})},{href:f.Conns,name:e("connections"),icon:o(Fe,{})},{href:f.Log,name:e("logs"),icon:o(Te,{})},{href:f.Config,name:e("config"),icon:o(Oe,{})}];return n().length>0&&i.splice(2,0,{href:f.Proxyprovider,name:e("proxyProviders"),icon:o(je,{})}),i}),s=De(),r=re(),[a,p]=h(!1),c=()=>{ct(""),r("/setup")};return(()=>{const i=xt(),m=i.firstChild,d=m.firstChild,g=d.firstChild,w=g.nextSibling,ge=w.firstChild,fe=w.nextSibling,ve=fe.firstChild,ye=ve.nextSibling,V=m.nextSibling,j=V.firstChild;return g.addEventListener("change",b=>p(b.target.checked)),u(ge,o(Le,{})),u(ye,o(z,{get each(){return l()},children:({href:b,name:G})=>(()=>{const S=bt();return S.$$click=()=>p(!1),u(S,o(se,{href:b,children:G})),S})()})),u(i,o(I,{get when(){return s.pathname!=="/setup"},get children(){const b=wt(),G=b.firstChild;return u(G,o(z,{get each(){return l()},children:({href:S,name:we,icon:xe})=>o($t,{href:S,tooltip:we,children:xe})})),b}}),V),u(j,o(J,{class:"btn-circle btn-sm",onClick:()=>{const b=t();t(b===D.EN?D.ZH:D.EN)},get children(){return o(Ne,{})}}),null),u(j,o(Ct,{}),null),u(j,o(J,{class:"btn-circle btn-secondary btn-sm",onClick:c,get children(){return o(ke,{})}}),null),N(()=>k(d,L("drawer w-auto lg:hidden",""))),N(()=>g.checked=a()),i})()};H(["click"]);const Pt=v("<span>"),Dt=e=>{const[t]=A(),{latencyMap:n}=T(),[l,s]=h(""),r=$(()=>n()[e.name]);return q(()=>{s("text-success"),r()>E().HIGH?s("text-error"):r()>E().MEDIUM&&s("text-warning")}),o(I,{get when(){return $(()=>typeof r()=="number")()&&r()!==Z.NOT_CONNECTED},get children(){const a=Pt();return u(a,r,null),u(a,()=>t("ms"),null),N(()=>k(a,`whitespace-nowrap text-xs ${l()}`)),a}})},ir=e=>oe(e).fromNow(),cr=e=>{let t=e.target;for(;t&&!t.classList.contains("btn");)t=t.parentElement;return t},Lt=(e="")=>{const t=e.toLowerCase();return t.includes("shadowsocks")?t.replace("shadowsocks","ss"):t},dr=(e,t,n)=>n===P.NATURAL?e:e.sort((l,s)=>{const r=t[l],a=t[s];switch(n){case P.LATENCY_ASC:return r===-1?1:a===-1?-1:r-a;case P.LATENCY_DESC:return r===-1?1:a===-1?-1:a-r;case P.NAME_ASC:return l.localeCompare(s);case P.NAME_DESC:return s.localeCompare(l);default:return 0}}),Nt=v('<div><div class="truncate text-left"></div><div class="flex items-center justify-between gap-1"><div></div><div class="text-xs">'),ur=e=>{const{proxyName:t,isSelected:n,onClick:l}=e,{proxyNodeMap:s}=T(),r=$(()=>s()[t]);return(()=>{const a=Nt(),p=a.firstChild,c=p.nextSibling,i=c.firstChild,m=i.nextSibling;return a.$$click=()=>l==null?void 0:l(),F(a,"data-tip",t),u(p,t),u(i,()=>{var d;return Lt((d=r())==null?void 0:d.type)},null),u(i,()=>{var d;return((d=r())==null?void 0:d.udp)&&" :: udp"},null),u(m,o(Dt,{get name(){return e.proxyName}})),N(d=>{const g=L("card card-bordered tooltip-bottom card-compact flex gap-1 border-neutral-focus bg-neutral p-3 text-neutral-content sm:tooltip",n&&"border-primary bg-primary-content text-primary",l&&"cursor-pointer"),w=L("truncate text-xs text-slate-500",n&&"text-primary");return g!==d._v$&&k(a,d._v$=g),w!==d._v$2&&k(i,d._v$2=w),d},{_v$:void 0,_v$2:void 0}),a})()};H(["click"]);const kt=v('<div class="relative flex h-screen flex-col subpixel-antialiased"><div class="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-4">'),It=C(()=>_(()=>import("./Setup-fe5f61f6.js"),["./Setup-fe5f61f6.js","./vendor-bcbfc1b2.js","./index-f06daa74.js"],import.meta.url)),St=C(()=>_(()=>import("./Overview-ee9eb1f6.js"),["./Overview-ee9eb1f6.js","./vendor-bcbfc1b2.js","./index-8592a353.js"],import.meta.url)),Mt=C(()=>_(()=>import("./Connections-37b8cd79.js"),["./Connections-37b8cd79.js","./vendor-bcbfc1b2.js","./index-8592a353.js","./index-9f132d0e.js"],import.meta.url)),Bt=C(()=>_(()=>import("./Logs-91e0ce28.js"),["./Logs-91e0ce28.js","./vendor-bcbfc1b2.js","./index-8592a353.js","./index-9f132d0e.js"],import.meta.url)),Ft=C(()=>_(()=>import("./Proxies-1d2b750d.js"),["./Proxies-1d2b750d.js","./vendor-bcbfc1b2.js","./ProxyPreviewDots-665fe605.js"],import.meta.url)),Tt=C(()=>_(()=>import("./ProxyProvider-1fd44126.js"),["./ProxyProvider-1fd44126.js","./vendor-bcbfc1b2.js","./ProxyPreviewDots-665fe605.js"],import.meta.url)),Ot=C(()=>_(()=>import("./Rules-b9bbda9d.js"),["./Rules-b9bbda9d.js","./vendor-bcbfc1b2.js"],import.meta.url)),jt=C(()=>_(()=>import("./Config-30823c82.js"),["./Config-30823c82.js","./vendor-bcbfc1b2.js","./index-f06daa74.js"],import.meta.url)),Gt=()=>{const e=re();return at(),q(()=>{B()&&O()&&T().updateProxies()}),Ge(()=>{B()||e("/setup")}),(()=>{const t=kt(),n=t.firstChild;return u(t,o(_t,{}),n),u(n,o(ze,{get children(){return[o(I,{get when(){return B()},get children(){return[o(x,{get path(){return f.Overview},component:St}),o(x,{get path(){return f.Proxies},component:Ft}),o(x,{get path(){return f.Proxyprovider},component:Tt}),o(x,{get path(){return f.Rules},component:Ot}),o(x,{get path(){return f.Conns},component:Mt}),o(x,{get path(){return f.Log},component:Bt}),o(x,{get path(){return f.Config},component:jt}),o(x,{path:"*",get element(){return o(Ue,{get href(){return f.Overview}})}})]}}),o(x,{path:"/setup",component:It})]}})),N(()=>F(t,"data-theme",ut())),t})()},Ut={add:"Add",overview:"Overview",proxies:"Proxies",rules:"Rules",connections:"Connections",logs:"Logs",config:"Config",upload:"Upload",download:"Download",uploadTotal:"Upload Total",downloadTotal:"Download Total",activeConnections:"Active Connections",memoryUsage:"Memory Usage",traffic:"Traffic",memory:"Memory",down:"Down",up:"Up",proxyProviders:"Proxy Providers",ruleProviders:"Rule Providers",search:"Search",ID:"ID",type:"Type",name:"Name",process:"Process",host:"Host",chains:"Chains",dlSpeed:"DL Speed",ulSpeed:"UL Speed",dl:"DL",ul:"UL",source:"Source",destination:"Destination",close:"Close",reset:"Reset",dnsQuery:"DNS Query",dots:"Dots",bar:"Bar",auto:"Auto",off:"Off",proxiesPreviewType:"Proxies preview type",urlForLatencyTest:"Url for latency test",autoCloseConns:"Automatically close all connections",autoSwitchTheme:"Automatically switch theme",favDayTheme:"Favorite light theme",favNightTheme:"Favorite dark theme",renderInTwoColumns:"Render Proxies in two columns",updateGEODatabases:"Update GEO Databases",restartCore:"Restart Core",upgradeCore:"Upgrade Core",proxiesSorting:"Proxies Sorting",orderNatural:"Original order in config file",orderLatency_asc:"By latency from low to high",orderLatency_desc:"By latency from high to low",orderName_asc:"By name alphabetically (A-Z)",orderName_desc:"By name alphabetically (Z-A)",ms:"ms"},zt={add:"添加",overview:"概览",proxies:"代理",rules:"规则",connections:"连接",logs:"日志",config:"配置",upload:"上传",download:"下载",uploadTotal:"上传总量",downloadTotal:"下载总量",activeConnections:"活动连接",memoryUsage:"内存使用情况",traffic:"流量",memory:"内存",down:"下载",up:"上传",proxyProviders:"代理提供者",ruleProviders:"规则提供者",search:"搜索",ID:"ID",type:"类型",name:"名字",process:"进程",host:"主机",chains:"链路",dlSpeed:"下载速度",ulSpeed:"上传速度",dl:"下载量",ul:"上传量",source:"源地址",destination:"目标地址",close:"关闭",reset:"重置",dnsQuery:"DNS 查询",dots:"点阵",bar:"条形",auto:"自适应",off:"关闭",proxiesPreviewType:"节点组预览样式",urlForLatencyTest:"测速链接",autoCloseConns:"切换代理时自动断开全部连接",autoSwitchTheme:"自动切换主题",favDayTheme:"浅色主题偏好",favNightTheme:"深色主题偏好",renderInTwoColumns:"节点双列渲染",updateGEODatabases:"更新 GEO 数据库文件",restartCore:"重启核心",upgradeCore:"更新核心",proxiesSorting:"节点排序",orderNatural:"原配置文件中的排序",orderLatency_asc:"按延迟从低到高",orderLatency_desc:"按延迟从高到低",orderName_asc:"按名称字母排序 (A-Z)",orderName_desc:"按名称字母排序 (Z-A)",ms:"毫秒"},me={[D.EN]:Ut,[D.ZH]:zt},he=()=>{const[e,t]=y(h(Reflect.has(me,navigator.language)?navigator.language:D.EN),{name:"lang",storage:localStorage});return{lang:e,setLang:t}},Rt=e=>{const{setLang:t}=he(),[,{locale:n}]=A();return q(()=>{t(n())}),e.children},Ht=e=>{const{lang:t}=he(),n=Re(me,t());return o(He.Provider,{value:n,get children(){return o(Rt,{get children(){return e.children}})}})};oe.extend(Ae);qe(()=>o(Ht,{get children(){return o(Ze,{get source(){return Ve()},get children(){return o(Gt,{})}})}}),document.getElementById("root"));export{er as A,J as B,Ke as C,qt as D,st as E,lr as F,Wt as G,P as H,Et as I,Xt as J,Qt as K,Dt as L,ce as M,et as N,ie as O,ur as P,ct as a,sr as b,Ye as c,Zt as d,dt as e,le as f,T as g,dr as h,ar as i,cr as j,ir as k,Vt as l,ae as m,E as n,nr as o,Jt as p,tr as q,Kt as r,rr as s,nt as t,ue as u,tt as v,or as w,Yt as x,Xe as y,rt as z};
