import{u as _,c as b,i as n,f as a,a8 as x,S as h,n as i,d as v}from"./vendor-a821092a.js";import{P as S,a as k,C as N,F as L}from"./ProxyNodePreview-2e250ae4.js";import{c as y}from"./index-30506ad9.js";import"./index-d4e52c73.js";const B=i('<div class="flex flex-col gap-2"><h1 class="pb-2 text-lg font-semibold">'),G=i('<div class="mr-10 flex items-center justify-between"><span></span><button class="btn btn-circle btn-sm">'),T=i('<div class="text-sm text-slate-500"> :: '),E=()=>{const[u]=_(),{proxies:m,setProxyGroupByProxyName:p,delayTestByProxyGroupName:d}=y(),[r,g]=b({}),$=async(s,l)=>{p(s,l)},f=async(s,l)=>{const e=s.target;e.classList.add("animate-pulse"),s.stopPropagation(),await d(l),e.classList.remove("animate-pulse")};return(()=>{const s=B(),l=s.firstChild;return n(l,()=>u("proxies")),n(s,a(L,{get subChild(){return m().map(e=>{const C=[(()=>{const t=G(),o=t.firstChild,c=o.nextSibling;return n(o,()=>e.name),c.$$click=P=>f(P,e.name),n(c,a(x,{})),t})(),(()=>{const t=T(),o=t.firstChild;return n(t,()=>e.type,o),n(t,()=>e.now,null),t})(),a(h,{get when(){return!r()[`group-${e.name}`]},get children(){return a(S,{get proxyNameList(){return e.all??[]},get now(){return e.now}})}})],w=a(k,{get proxies(){return e.all},get now(){return e.now},onClick:t=>{$(e,t)}});return a(N,{get isOpen(){return r()[`group-${e.name}`]},title:C,content:w,onCollapse:t=>g({...r(),[`group-${e.name}`]:t})})})}}),null),s})()};v(["click"]);export{E as default};
