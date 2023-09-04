import{f as I,h as x,c as r,ag as F,S as p,i as c,j as D,b as y,F as A,l as H,t as R,d as k,G as U,u as j,ah as L,af as G}from"./vendor-a04c6957.js";import{P as Y,m as M,n as C,i as O,o as b,L as B,B as E,j as z,p as W,h as Q,k as V,F as X,l as T}from"./index-e7808ea4.js";const q=e=>{const[n,t]=I(100),s=x(()=>e.proxyNames.slice(0,n()));return r(F,{get each(){return s()},get hasMore(){return s().length<e.proxyNames.length},next:()=>t(n()+30),children:l=>r(Y,{proxyName:l,get isSelected(){return e.now===l},onClick:()=>{var a;(a=e.onClick)==null||a.call(e,l)}})})},J=e=>{const n=()=>M()===C.OFF,t=x(()=>e.proxyNameList.length<=30),s=x(()=>{const a=M();return a===C.BAR||a===C.Auto&&!t()}),l=x(()=>{const a=M();return a===C.DOTS||a===C.Auto&&t()});return r(p,{get when(){return!n()},get children(){return[r(p,{get when(){return s()},get children(){return r(Z,{get proxyNameList(){return e.proxyNameList},get now(){return e.now}})}}),r(p,{get when(){return l()},get children(){return r(re,{get proxyNameList(){return e.proxyNameList},get now(){return e.now}})}})]}})},K=y('<div class="flex h-6 w-full items-center gap-2"><div class="flex flex-1 overflow-hidden rounded-2xl"><div class="h-2 bg-success"></div><div class="h-2 bg-warning"></div><div class="h-2 bg-error"></div><div class="h-2 bg-neutral">'),Z=e=>{const{latencyMap:n}=O(),t=x(()=>e.proxyNameList.map(i=>n()[i])),s=x(()=>t().length),l=x(()=>t().filter(i=>i>b().NOT_CONNECTED&&i<=b().MEDIUM).length),a=x(()=>t().filter(i=>i>b().MEDIUM&&i<=b().HIGH).length),g=x(()=>t().filter(i=>i>b().HIGH).length),S=x(()=>t().filter(i=>i===b().NOT_CONNECTED).length);return(()=>{const i=K(),N=i.firstChild,f=N.firstChild,u=f.nextSibling,h=u.nextSibling,d=h.nextSibling;return c(i,r(B,{get name(){return e.now}}),null),D(m=>{const _=`${l()*100/s()}%`,v=`${a()*100/s()}%`,o=`${g()*100/s()}%`,$=`${S()*100/s()}%`;return _!==m._v$&&((m._v$=_)!=null?f.style.setProperty("width",_):f.style.removeProperty("width")),v!==m._v$2&&((m._v$2=v)!=null?u.style.setProperty("width",v):u.style.removeProperty("width")),o!==m._v$3&&((m._v$3=o)!=null?h.style.setProperty("width",o):h.style.removeProperty("width")),$!==m._v$4&&((m._v$4=$)!=null?d.style.setProperty("width",$):d.style.removeProperty("width")),m},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),i})()},ee=y("<div>"),te=y('<div class="flex items-center gap-2"><div class="flex flex-1 flex-wrap items-center">'),ne=e=>{let n=e.selected?"bg-white border-4 border-success":"bg-success";return typeof e.latency!="number"||e.latency===b().NOT_CONNECTED?n=e.selected?"bg-white border-4 border-neutral":"bg-neutral":e.latency>b().HIGH?n=e.selected?"bg-white border-4 border-error":"bg-error":e.latency>b().MEDIUM&&(n=e.selected?"bg-white border-4 border-warning":"bg-warning"),(()=>{const t=ee();return D(()=>H(t,R("m-1 h-4 w-4 rounded-full",n))),t})()},re=e=>{const{latencyMap:n}=O();return(()=>{const t=te(),s=t.firstChild;return c(s,r(A,{get each(){return e.proxyNameList.map(l=>[l,n()[l]])},children:([l,a])=>{const g=e.now===l;return r(ne,{latency:a,selected:g})}})),c(t,r(B,{get name(){return e.now}}),null),t})()},le=y('<progress class="progress" max="100">'),se=y('<div class="text-sm text-slate-500"> / <!> ( <!>% )'),ie=y('<div class="text-sm text-slate-500">Expire: <!> '),ae=e=>{const n=k(e.Total,{units:"iec"}),t=k(e.Download+e.Upload,{units:"iec"}),s=((e.Download+e.Upload)/e.Total*100).toFixed(2);return{total:n,used:t,percentage:s,expireStr:()=>e.Expire===0?"Null":U(e.Expire*1e3).format("YYYY-MM-DD")}},oe=e=>{if(!e.subscriptionInfo)return;const n=ae(e.subscriptionInfo);return[(()=>{const t=le();return D(()=>t.value=n.percentage),t})(),(()=>{const t=se(),s=t.firstChild,l=s.nextSibling,a=l.nextSibling,g=a.nextSibling;return g.nextSibling,c(t,()=>`${n.used}`,s),c(t,()=>`${n.total}`,l),c(t,()=>n.percentage,g),t})(),(()=>{const t=ie(),s=t.firstChild,l=s.nextSibling;return l.nextSibling,c(t,()=>n.expireStr(),l),t})()]},ce=y('<div class="flex flex-col gap-2"><h1 class="flex h-8 items-center pb-2 text-lg font-semibold">'),de=y('<div class="mr-8 flex items-center justify-between"><span></span><div>'),ue=y('<div class="text-sm text-slate-500"> :: <!> '),me=()=>{const[e]=j(),{proxyProviders:n,updateProviderByProviderName:t,updateAllProvider:s,healthCheckByProviderName:l,latencyMap:a}=O(),[g,S]=I({}),i=(u,h)=>{T(u,l.bind(null,h),"animate-pulse")},N=(u,h)=>{T(u,t.bind(null,h))},f=u=>{T(u,s)};return(()=>{const u=ce(),h=u.firstChild;return c(h,()=>e("proxyProviders"),null),c(h,r(E,{class:"btn-circle btn-ghost btn-sm ml-2",onClick:d=>f(d),get children(){return r(L,{})}}),null),c(u,r(X,{get subChild(){return n().map(d=>{const m=z(d.proxies.map(o=>o.name)??[],a(),W()),_=[(()=>{const o=de(),$=o.firstChild,w=$.nextSibling;return c($,()=>d.name),c(w,r(E,{class:"btn btn-circle btn-sm mr-2",onClick:P=>N(P,d.name),get children(){return r(L,{})}}),null),c(w,r(E,{class:"btn btn-circle btn-sm",onClick:P=>i(P,d.name),get children(){return r(G,{})}}),null),o})(),r(oe,{get subscriptionInfo(){return d.subscriptionInfo}}),(()=>{const o=ue(),$=o.firstChild,w=$.nextSibling;return w.nextSibling,c(o,()=>d.vehicleType,$),c(o,()=>e("updated"),w),c(o,()=>Q(d.updatedAt),null),o})(),r(p,{get when(){return!g()[`provider-${d.name}`]},get children(){return r(J,{proxyNameList:m})}})],v=r(q,{proxyNames:m});return r(V,{get isOpen(){return g()[`provider-${d.name}`]},title:_,content:v,onCollapse:o=>S({...g(),[`provider-${d.name}`]:o})})})}}),null),u})()},xe=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"}));export{J as P,q as a,me as b,xe as c};
