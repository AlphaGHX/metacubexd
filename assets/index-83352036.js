import{s as $e,a as Pe,m as Ce,t as k,i as c,c as a,S as L,b as y,d as _e,e as x,f as g,k as De,g as q,h as b,j as S,l as I,u as A,n as Le,o as re,I as Ne,A as se,F as O,p as ke,q as Se,r as B,v as Ie,w as Me,x as Te,y as Fe,z as Be,B as je,C as Ge,D as ze,E as Z,G as V,H as Ue,R as w,N as Oe,J as Re,K as P,L as He,M as qe,O as Ae,P as Ze,Q as Ve,T as We}from"./vendor-a04c6957.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const Je="modulepreload",Qe=function(e,t){return new URL(e,t).href},Q={},C=function(t,n,s){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Qe(r,s),r in Q)return;Q[r]=!0;const l=r.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!s)for(let f=o.length-1;f>=0;f--){const p=o[f];if(p.href===r&&(!l||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Je,l||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),l)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r})},Xe=y('<span class="loading loading-spinner">'),Ee=y("<button>"),X=e=>{const[t,n]=$e(e,["class","loading"]);return(()=>{const s=Ee();return Pe(s,Ce({get class(){return k("btn",t.loading?"btn-disabled":t.class)}},n),!1,!0),c(s,a(L,{get when(){return t.loading},get children(){return Xe()}}),null),c(s,()=>e.children,null),s})()},Ke=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"];var v=(e=>(e.Overview="/overview",e.Proxies="/proxies",e.ProxyProvider="/proxyprovider",e.Rules="/rules",e.Conns="/conns",e.Log="/logs",e.Config="/config",e.Setup="/setup",e))(v||{});const Ye=10,Qt={title:{align:"center",style:{color:"gray",fontSize:"8px"}},chart:{toolbar:{show:!1},zoom:{enabled:!1},animations:{easing:"linear"}},noData:{text:"Loading..."},legend:{showForSingleSeries:!0,fontSize:"8px",labels:{colors:"gray"},itemMargin:{horizontal:32}},dataLabels:{enabled:!1},grid:{yaxis:{lines:{show:!1}}},stroke:{curve:"smooth"},tooltip:{enabled:!1},xaxis:{range:Ye,labels:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{colors:"gray",fontSize:"8px"},formatter:e=>_e(e).toString()}}};var W=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=200]="MEDIUM",e[e.HIGH=500]="HIGH",e))(W||{}),oe=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=800]="MEDIUM",e[e.HIGH=1500]="HIGH",e))(oe||{}),ne=(e=>(e.OFF="off",e.DOTS="dots",e.BAR="bar",e.Auto="auto",e))(ne||{}),_=(e=>(e.NATURAL="orderNatural",e.LATENCY_ASC="orderLatency_asc",e.LATENCY_DESC="orderLatency_desc",e.NAME_ASC="orderName_asc",e.NAME_DESC="orderName_desc",e))(_||{}),D=(e=>(e.EN="en-US",e.ZH="zh-CN",e))(D||{}),ae=(e=>(e.Close="close",e.ID="ID",e.Type="type",e.Process="process",e.Host="host",e.Rule="rules",e.Chains="chains",e.DlSpeed="dlSpeed",e.ULSpeed="ulSpeed",e.Download="dl",e.Upload="ul",e.ConnectTime="connectTime",e.Source="source",e.Destination="destination",e))(ae||{});const et=Object.values(ae),Xt={...Object.fromEntries(et.map(e=>[e,!0])),ID:!1},[Et,Kt]=x(g(ne.Auto),{name:"proxiesPreviewType",storage:localStorage}),[Yt,er]=x(g(_.NATURAL),{name:"proxiesOrderingType",storage:localStorage}),[le,tr]=x(g("https://www.gstatic.com/generate_204"),{name:"urlForLatencyTest",storage:localStorage}),[tt,rr]=x(g(!1),{name:"autoCloseConns",storage:localStorage}),[rt,sr]=x(g(!1),{name:"autoSwitchTheme",storage:localStorage}),[st,or]=x(g("light"),{name:"favDayTheme",storage:localStorage}),[ot,nr]=x(g("night"),{name:"favNightTheme",storage:localStorage}),[ie,ar]=x(g(!0),{name:"renderInTwoColumn",storage:localStorage}),[ce,lr]=x(g(!1),{name:"renderProxiesInSamePage",storage:localStorage}),nt=()=>le().startsWith("https"),E=()=>nt()?oe:W,de=e=>{rt()&&H(e?ot():st())},at=()=>de(window.matchMedia("(prefers-color-scheme: dark)").matches),lt=()=>{at(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>de(e.matches))},[K,Y]=g([]),[ee,it]=g([]),[R,ue]=g({}),[pe,ct]=g({}),dt=e=>{const t={...pe()},n={...R()};e.forEach(s=>{var r;const o=((r=s.history.at(-1))==null?void 0:r.delay)||-1;t[s.name]={udp:s.udp,xudp:s.xudp,type:s.type,now:s.now,name:s.name},n[s.name]=o}),ct(t),ue(n)},j=()=>{const e=me(),t=async()=>{const[{providers:i},{proxies:d}]=await Promise.all([e.get("providers/proxies").json(),e.get("proxies").json()]),u=[...d.GLOBAL.all??[],"GLOBAL"],f=Object.values(d).filter(m=>{var N;return(N=m.all)==null?void 0:N.length}).sort((m,N)=>u.indexOf(m.name)-u.indexOf(N.name)),p=Object.values(i).filter(m=>m.name!=="default"&&m.vehicleType!=="Compatible"),h=[...Object.values(d),...p.flatMap(m=>m.proxies)];Y(f),it(p),dt(h)};return{proxies:K,proxyProviders:ee,latencyTestByProxyGroupName:async i=>{const d=await e.get(`group/${i}/delay`,{searchParams:{url:le(),timeout:2e3}}).json();ue({...R(),...d})},latencyMap:R,proxyNodeMap:pe,updateProxies:t,setProxyGroupByProxyName:async(i,d)=>{const u=K().slice(),f=u.find(p=>p.name===i.name);tt()&&e.delete("connections"),await e.put(`proxies/${i.name}`,{body:JSON.stringify({name:d})}),f.now=d,Y(u)},updateProviderByProviderName:async i=>{try{await e.put(`providers/proxies/${i}`)}catch{}await t()},updateAllProvider:async()=>{await Promise.all(ee().map(i=>e.put(`providers/proxies/${i.name}`))),await t()},healthCheckByProviderName:async i=>{await e.get(`providers/proxies/${i}/healthcheck`,{timeout:30*1e3}),await t()}}},[T,ut]=x(g(""),{name:"selectedEndpoint",storage:localStorage}),[pt,ir]=x(g([]),{name:"endpointList",storage:localStorage}),me=()=>{const e=G();return De.create({prefixUrl:e==null?void 0:e.url,headers:{Authorization:e!=null&&e.secret?`Bearer ${e.secret}`:""}})},G=()=>pt().find(({id:e})=>e===T()),cr=()=>{var e;return(e=G())==null?void 0:e.secret},dr=()=>{var e;return(e=G())==null?void 0:e.url.replace("http","ws")},F=me(),ur=()=>{const[e,t]=g([]),[n,s]=g([]),o=async()=>{const{rules:i}=await F.get("rules").json();t(Object.values(i));const{providers:d}=await F.get("providers/rules").json();s(Object.values(d))};return{rules:e,rulesProviders:n,updateRules:o,updateAllRuleProvider:async()=>{await Promise.all(n().map(i=>F.put(`providers/rules/${i.name}`))),await o()},updateRuleProviderByName:async i=>{await F.put(`providers/rules/${i}`),await o()}}},[mt,H]=x(g("halloween"),{name:"theme",storage:localStorage}),ht=y('<div><div class="collapse-title pr-4 text-xl font-medium after:!top-8"></div><div>'),pr=e=>{const{title:t,content:n,onCollapse:s}=e,o=()=>{const i="collapse-open",d="collapse-close";return e.isOpen?i:d},r=()=>{const i="opacity-100",d="opacity-0";return e.isOpen?i:d},l=b(()=>ie()?"lg:grid-cols-3 xl:grid-cols-4":"sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7");return(()=>{const i=ht(),d=i.firstChild,u=d.nextSibling;return d.$$click=()=>s(!e.isOpen),c(d,t),c(u,a(L,{get when(){return e.isOpen},children:n})),S(f=>{const p=k(o(),"collapse collapse-arrow mb-2 select-none border-secondary bg-base-200"),h=k(r(),l(),"collapse-content grid auto-rows-min grid-cols-2 gap-2 transition-opacity duration-1000");return p!==f._v$&&I(i,f._v$=p),h!==f._v$2&&I(u,f._v$2=h),f},{_v$:void 0,_v$2:void 0}),i})()};q(["click"]);const gt=y('<div class="ml-2 flex flex-1 flex-col">'),ft=y('<div class="flex"><div class="flex flex-1 flex-col">'),[vt,he]=g(0);var te;he((te=document==null?void 0:document.body)==null?void 0:te.clientWidth);window.addEventListener("resize",()=>{he(document.body.clientWidth)});const mr=e=>{const t=b(()=>vt()>=640&&ie()),n=b(()=>e.subChild.filter((o,r)=>r%2===0||!t())),s=b(()=>e.subChild.filter((o,r)=>r%2===1));return(()=>{const o=ft(),r=o.firstChild;return c(r,n),c(o,a(L,{get when(){return t()},get children(){const l=gt();return c(l,s),l}}),null),o})()},yt=y('<li class="tooltip tooltip-bottom">'),xt=y('<div class="drawer drawer-end w-auto sm:ml-auto"><input id="themes" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="themes" class="btn btn-circle btn-primary drawer-button btn-sm"></label></div><div class="drawer-side"><label for="themes" class="drawer-overlay"></label><ul class="menu rounded-l-box gap-2 bg-base-300 p-2 shadow">'),wt=y('<li class="btn btn-xs">'),bt=y('<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal gap-2">'),$t=y('<ul class="navbar rounded-box sticky inset-x-0 top-2 z-50 mx-2 mt-2 flex w-auto items-center justify-center bg-base-300 px-4"><div class="navbar-start gap-4"><div><input id="navs" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="navs" class="btn btn-circle drawer-button btn-sm"></label></div><div class="drawer-side"><label for="navs" class="drawer-overlay"></label><ul class="menu rounded-r-box min-h-full w-2/5 gap-2 bg-base-300 pt-20 shadow"></ul></div></div><a class="flex whitespace-nowrap text-xl font-bold uppercase" href="https://github.com/metacubex/metacubexd" target="_blank"><span class="mr-2">metacube, </span><div class="transition-transform hover:rotate-90 hover:scale-125">xd</div></a></div><div class="navbar-end"><div class="flex items-center gap-2">'),Pt=y("<li>"),Ct=({href:e,tooltip:t,children:n})=>(()=>{const s=yt();return B(s,"data-tip",t),c(s,a(se,{class:"rounded-box",href:e,children:n})),s})(),_t=()=>(()=>{const e=xt(),t=e.firstChild,n=t.nextSibling,s=n.firstChild,o=n.nextSibling,r=o.firstChild,l=r.nextSibling;return c(s,a(Ie,{})),c(l,a(O,{each:Ke,children:i=>(()=>{const d=wt();return d.$$click=()=>H(i),B(d,"data-theme",i),c(d,i),d})()})),e})(),Dt=()=>{const[e,{locale:t}]=A(),{proxyProviders:n}=j(),s=b(()=>{const u=[{href:v.Overview,name:e("overview"),icon:a(Me,{})},{href:v.Proxies,name:e("proxies"),icon:a(Te,{})},{href:v.Rules,name:e("rules"),icon:a(Fe,{})},{href:v.Conns,name:e("connections"),icon:a(Be,{})},{href:v.Log,name:e("logs"),icon:a(je,{})},{href:v.Config,name:e("config"),icon:a(Ge,{})}];return n().length>0&&!ce()&&u.splice(2,0,{href:v.ProxyProvider,name:e("proxyProviders"),icon:a(ze,{})}),u}),o=Le(),r=re(),[l,i]=g(!1),d=()=>{ut(""),r(v.Setup)};return(()=>{const u=$t(),f=u.firstChild,p=f.firstChild,h=p.firstChild,m=h.nextSibling,N=m.firstChild,ve=m.nextSibling,ye=ve.firstChild,xe=ye.nextSibling,J=f.nextSibling,z=J.firstChild;return h.addEventListener("change",$=>i($.target.checked)),c(N,a(Ne,{})),c(xe,a(O,{get each(){return s()},children:({href:$,name:U})=>(()=>{const M=Pt();return M.$$click=()=>i(!1),c(M,a(se,{href:$,children:U})),M})()})),c(u,a(L,{get when(){return o.pathname!==v.Setup},get children(){const $=bt(),U=$.firstChild;return c(U,a(O,{get each(){return s()},children:({href:M,name:we,icon:be})=>a(Ct,{href:M,tooltip:we,children:be})})),$}}),J),c(z,a(X,{class:"btn-circle btn-sm",onClick:()=>{const $=t();t($===D.EN?D.ZH:D.EN)},get children(){return a(ke,{})}}),null),c(z,a(_t,{}),null),c(z,a(X,{class:"btn-circle btn-secondary btn-sm",onClick:d,get children(){return a(Se,{})}}),null),S(()=>I(p,k("drawer w-auto lg:hidden",""))),S(()=>h.checked=l()),u})()};q(["click"]);const Lt=y("<span>"),Nt=e=>{const[t]=A(),{latencyMap:n}=j(),[s,o]=g(""),r=b(()=>n()[e.name]);return Z(()=>{o("text-success"),r()>E().HIGH?o("text-error"):r()>E().MEDIUM&&o("text-warning")}),a(L,{get when(){return b(()=>typeof r()=="number")()&&r()!==W.NOT_CONNECTED},get children(){const l=Lt();return c(l,r,null),c(l,()=>t("ms"),null),S(()=>I(l,`whitespace-nowrap text-xs ${s()}`)),l}})},hr=e=>V(e).fromNow(),gr=async(e,t,n="animate-spin")=>{let s=e.target;for(e.stopPropagation();s&&!s.classList.contains("btn");)s=s.parentElement;s.classList.add(n);try{await t()}catch{}s.classList.remove(n)},kt=(e="")=>{const t=e.toLowerCase();return t.includes("shadowsocks")?"ss":t},St=(e="")=>{const t=e.toLowerCase();return!["selector","direct","reject","urltest","loadbalance","fallback","relay"].includes(t)},fr=(e,t,n)=>n===_.NATURAL?e:e.sort((s,o)=>{const r=t[s],l=t[o];switch(n){case _.LATENCY_ASC:return r===-1?1:l===-1?-1:r-l;case _.LATENCY_DESC:return r===-1?1:l===-1?-1:l-r;case _.NAME_ASC:return s.localeCompare(o);case _.NAME_DESC:return o.localeCompare(s);default:return 0}}),It=y('<div><div class="truncate text-left"></div><div class="flex items-center justify-between gap-1"><div></div><div class="text-xs">'),Mt=y("<span> :: "),Tt=y("<span>"),vr=e=>{const{proxyName:t,isSelected:n,onClick:s}=e,{proxyNodeMap:o}=j(),r=b(()=>o()[t]);return(()=>{const l=It(),i=l.firstChild,d=i.nextSibling,u=d.firstChild,f=u.nextSibling;return l.$$click=()=>s==null?void 0:s(),B(l,"data-tip",t),c(i,t),c(u,()=>{var p;return kt((p=r())==null?void 0:p.type)},null),c(u,(()=>{const p=b(()=>{var h;return!!St((h=r())==null?void 0:h.type)});return()=>p()?(()=>{const h=Mt();return h.firstChild,c(h,()=>{var m;return((m=r())==null?void 0:m.xudp)&&"x"},null),c(h,()=>{var m;return((m=r())==null?void 0:m.udp)&&"udp"},null),h})():(()=>{const h=Tt();return c(h,()=>{var m;return(m=r())==null?void 0:m.now}),h})()})(),null),c(f,a(Nt,{get name(){return e.proxyName}})),S(p=>{const h=k("card card-bordered tooltip-bottom card-compact flex gap-1 border-neutral-focus bg-neutral p-3 text-neutral-content sm:tooltip",n&&"border-primary bg-primary-content text-primary",s&&"cursor-pointer"),m=k("truncate text-xs text-slate-500",n&&"text-primary");return h!==p._v$&&I(l,p._v$=h),m!==p._v$2&&I(u,p._v$2=m),p},{_v$:void 0,_v$2:void 0}),l})()};q(["click"]);const Ft=y('<div class="relative flex h-screen flex-col subpixel-antialiased p-safe"><div class="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-4">'),Bt=P(()=>C(()=>import("./Setup-986ea801.js"),["./Setup-986ea801.js","./vendor-a04c6957.js","./index-c360447f.js"],import.meta.url)),jt=P(()=>C(()=>import("./Overview-6f753106.js"),["./Overview-6f753106.js","./vendor-a04c6957.js","./index-4bbd83f8.js"],import.meta.url)),Gt=P(()=>C(()=>import("./Connections-651b4717.js"),["./Connections-651b4717.js","./vendor-a04c6957.js","./index-4bbd83f8.js","./index-c0adfbc5.js"],import.meta.url)),zt=P(()=>C(()=>import("./Logs-b3d46fbf.js"),["./Logs-b3d46fbf.js","./vendor-a04c6957.js","./index-4bbd83f8.js","./index-c0adfbc5.js"],import.meta.url)),Ut=P(()=>C(()=>import("./Proxies-564417f1.js"),["./Proxies-564417f1.js","./vendor-a04c6957.js","./ProxyProvider-4de02a24.js"],import.meta.url)),Ot=P(()=>C(()=>import("./ProxyProvider-4de02a24.js").then(e=>e.c),["./ProxyProvider-4de02a24.js","./vendor-a04c6957.js"],import.meta.url)),Rt=P(()=>C(()=>import("./Rules-7c1c2947.js"),["./Rules-7c1c2947.js","./vendor-a04c6957.js"],import.meta.url)),Ht=P(()=>C(()=>import("./Config-7ad5b95b.js"),["./Config-7ad5b95b.js","./vendor-a04c6957.js","./index-c360447f.js"],import.meta.url)),qt=()=>{const e=re();return lt(),Z(()=>{T()&&G()&&j().updateProxies()}),Ue(()=>{T()||e(v.Setup)}),(()=>{const t=Ft(),n=t.firstChild;return c(t,a(Dt,{}),n),c(n,a(Re,{get children(){return[a(L,{get when(){return T()},get children(){return[a(w,{get path(){return v.Overview},component:jt}),a(w,{get path(){return v.Proxies},component:Ut}),a(L,{get when(){return!ce()},get children(){return a(w,{get path(){return v.ProxyProvider},component:Ot})}}),a(w,{get path(){return v.Rules},component:Rt}),a(w,{get path(){return v.Conns},component:Gt}),a(w,{get path(){return v.Log},component:zt}),a(w,{get path(){return v.Config},component:Ht}),a(w,{path:"*",get element(){return a(Oe,{get href(){return v.Overview}})}})]}}),a(w,{get path(){return T()?v.Setup:"*"},component:Bt})]}})),S(()=>B(t,"data-theme",mt())),t})()},At={add:"Add",overview:"Overview",proxies:"Proxies",rules:"Rules",connections:"Connections",logs:"Logs",config:"Config",upload:"Upload",download:"Download",uploadTotal:"Upload Total",downloadTotal:"Download Total",activeConnections:"Active Connections",memoryUsage:"Memory Usage",traffic:"Traffic",memory:"Memory",down:"Down",up:"Up",proxyProviders:"Proxy Providers",ruleProviders:"Rule Providers",search:"Search",ID:"ID",type:"Type",name:"Name",process:"Process",host:"Host",chains:"Chains",connectTime:"Time",dlSpeed:"DL Speed",ulSpeed:"UL Speed",dl:"DL",ul:"UL",source:"Source",destination:"Destination",close:"Close",reset:"Reset",dnsQuery:"DNS Query",dots:"Dots",bar:"Bar",auto:"Auto",off:"Off",proxiesPreviewType:"Proxies preview type",urlForLatencyTest:"Url for latency test",autoCloseConns:"Automatically close all connections",autoSwitchTheme:"Automatically switch theme",favDayTheme:"Favorite light theme",favNightTheme:"Favorite dark theme",renderInTwoColumns:"Render Proxies in two columns",updateGEODatabases:"Update GEO Databases",restartCore:"Restart Core",upgradeCore:"Upgrade Core",proxiesSorting:"Proxies Sorting",orderNatural:"Original order in config file",orderLatency_asc:"By latency from low to high",orderLatency_desc:"By latency from high to low",orderName_asc:"By name alphabetically (A-Z)",orderName_desc:"By name alphabetically (Z-A)",ms:"ms",updated:"Updated",renderProxiesInSamePage:"Render proxies and proxy provider in same page"},Zt={add:"添加",overview:"概览",proxies:"代理",rules:"规则",connections:"连接",logs:"日志",config:"配置",upload:"上传",download:"下载",uploadTotal:"上传总量",downloadTotal:"下载总量",activeConnections:"活动连接",memoryUsage:"内存使用情况",traffic:"流量",memory:"内存",down:"下载",up:"上传",proxyProviders:"代理提供者",ruleProviders:"规则提供者",search:"搜索",ID:"ID",type:"类型",name:"名字",process:"进程",host:"主机",chains:"链路",connectTime:"连接时间",dlSpeed:"下载速度",ulSpeed:"上传速度",dl:"下载量",ul:"上传量",source:"源地址",destination:"目标地址",close:"关闭",reset:"重置",dnsQuery:"DNS 查询",dots:"点阵",bar:"条形",auto:"自适应",off:"关闭",proxiesPreviewType:"节点组预览样式",urlForLatencyTest:"测速链接",autoCloseConns:"切换代理时自动断开全部连接",autoSwitchTheme:"自动切换主题",favDayTheme:"浅色主题偏好",favNightTheme:"深色主题偏好",renderInTwoColumns:"节点双列渲染",updateGEODatabases:"更新 GEO 数据库文件",restartCore:"重启核心",upgradeCore:"更新核心",proxiesSorting:"节点排序",orderNatural:"原配置文件中的排序",orderLatency_asc:"按延迟从低到高",orderLatency_desc:"按延迟从高到低",orderName_asc:"按名称字母排序 (A-Z)",orderName_desc:"按名称字母排序 (Z-A)",ms:"毫秒",updated:"更新于",renderProxiesInSamePage:"将代理和代理提供者显示在同一页"},ge={[D.EN]:At,[D.ZH]:Zt},fe=()=>{const[e,t]=x(g(Reflect.has(ge,navigator.language)?navigator.language:D.EN),{name:"lang",storage:localStorage});return{lang:e,setLang:t}},Vt=e=>{const{setLang:t}=fe(),[,{locale:n}]=A();return Z(()=>{t(n()),V.locale(n())}),e.children},Wt=e=>{const{lang:t}=fe(),n=He(ge,t());return a(qe.Provider,{value:n,get children(){return a(Vt,{get children(){return e.children}})}})};V.extend(Ae);Ze(()=>a(Wt,{get children(){return a(Ve,{get source(){return We()},get children(){return a(qt,{})}})}}),document.getElementById("root"));export{or as A,X as B,Ye as C,Qt as D,Ke as E,mr as F,st as G,nr as H,ot as I,Kt as J,_ as K,Nt as L,er as M,rr as N,tr as O,vr as P,ie as Q,tt as R,le as S,T as a,ut as b,cr as c,et as d,pt as e,Xt as f,ae as g,hr as h,j as i,fr as j,pr as k,gr as l,Et as m,ne as n,E as o,Yt as p,ur as q,ce as r,ir as s,ar as t,me as u,lr as v,dr as w,sr as x,at as y,rt as z};
