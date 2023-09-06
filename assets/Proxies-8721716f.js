import{ad as ue,e as x,i as r,g as n,S as y,l as g,c as j,ae as ge,h as F,F as te,j as ne,t as M,b as z,z as me,u as he,af as Q,ag as V,f as xe}from"./vendor-9d884d62.js";import{B as H}from"./Button-6af14258.js";import{r as $e,P as pe,p as R,j as B,k as W,l as w,L as le,m as X,n as q,h as fe,o as J}from"./index-b920bc04.js";import{u as A}from"./global-c5bd22bb.js";const _e=g('<div class="ml-2 flex flex-1 flex-col">'),ve=g('<div class="flex"><div class="flex flex-1 flex-col">'),K=e=>{const s=ue(),t=x(()=>s.width>=640&&$e()),c=x(()=>e.subChild.filter((o,m)=>m%2===0||!t())),i=x(()=>e.subChild.filter((o,m)=>m%2===1));return(()=>{const o=ve(),m=o.firstChild;return r(m,c),r(o,n(y,{get when(){return t()},get children(){const b=_e();return r(b,i),b}}),null),o})()},Z=e=>{const[s,t]=j(100),c=x(()=>e.proxyNames.slice(0,s()));return n(ge,{get each(){return c()},get hasMore(){return c().length<e.proxyNames.length},next:()=>t(s()+30),children:i=>n(pe,{proxyName:i,get isSelected(){return e.now===i},onClick:()=>{var o;(o=e.onClick)==null||o.call(e,i)}})})},ee=e=>{const s=()=>R()===B.OFF,t=x(()=>e.proxyNameList.length<=30),c=x(()=>{const o=R();return o===B.BAR||o===B.Auto&&!t()}),i=x(()=>{const o=R();return o===B.DOTS||o===B.Auto&&t()});return n(y,{get when(){return!s()},get children(){return[n(y,{get when(){return c()},get children(){return n(ye,{get proxyNameList(){return e.proxyNameList},get now(){return e.now}})}}),n(y,{get when(){return i()},get children(){return n(Pe,{get proxyNameList(){return e.proxyNameList},get now(){return e.now}})}})]}})},we=g('<div class="flex h-6 w-full items-center gap-2"><div class="flex flex-1 overflow-hidden rounded-2xl"><div class="h-2 bg-success"></div><div class="h-2 bg-warning"></div><div class="h-2 bg-error"></div><div class="h-2 bg-neutral">'),ye=e=>{const{latencyMap:s}=W(),t=x(()=>e.proxyNameList.map(d=>s()[d])),c=x(()=>t().length),i=x(()=>t().filter(d=>d>w().NOT_CONNECTED&&d<=w().MEDIUM).length),o=x(()=>t().filter(d=>d>w().MEDIUM&&d<=w().HIGH).length),m=x(()=>t().filter(d=>d>w().HIGH).length),b=x(()=>t().filter(d=>d===w().NOT_CONNECTED).length);return(()=>{const d=we(),C=d.firstChild,N=C.firstChild,k=N.nextSibling,T=k.nextSibling,U=T.nextSibling;return r(d,n(le,{get name(){return e.now}}),null),F($=>{const E=`${i()*100/c()}%`,L=`${o()*100/c()}%`,D=`${m()*100/c()}%`,I=`${b()*100/c()}%`;return E!==$._v$&&(($._v$=E)!=null?N.style.setProperty("width",E):N.style.removeProperty("width")),L!==$._v$2&&(($._v$2=L)!=null?k.style.setProperty("width",L):k.style.removeProperty("width")),D!==$._v$3&&(($._v$3=D)!=null?T.style.setProperty("width",D):T.style.removeProperty("width")),I!==$._v$4&&(($._v$4=I)!=null?U.style.setProperty("width",I):U.style.removeProperty("width")),$},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),d})()},be=g("<div>"),Ce=g('<div class="flex items-center gap-2"><div class="flex flex-1 flex-wrap items-center">'),Ne=e=>{let s=e.selected?"bg-white border-4 border-success":"bg-success";return typeof e.latency!="number"||e.latency===w().NOT_CONNECTED?s=e.selected?"bg-white border-4 border-neutral":"bg-neutral":e.latency>w().HIGH?s=e.selected?"bg-white border-4 border-error":"bg-error":e.latency>w().MEDIUM&&(s=e.selected?"bg-white border-4 border-warning":"bg-warning"),(()=>{const t=be();return F(()=>ne(t,M("m-1 h-4 w-4 rounded-full",s))),t})()},Pe=e=>{const{latencyMap:s}=W();return(()=>{const t=Ce(),c=t.firstChild;return r(c,n(te,{get each(){return e.proxyNameList.map(i=>[i,s()[i]])},children:([i,o])=>{const m=e.now===i;return n(Ne,{latency:o,selected:m})}})),r(t,n(le,{get name(){return e.now}}),null),t})()},Se=g('<progress class="progress" max="100">'),Me=g('<div class="text-sm text-slate-500"> / <!> ( <!>% )'),ke=g('<div class="text-sm text-slate-500">Expire: <!> '),Te=e=>{const s=z(e.Total,{units:"iec"}),t=z(e.Download+e.Upload,{units:"iec"}),c=((e.Download+e.Upload)/e.Total*100).toFixed(2);return{total:s,used:t,percentage:c,expireStr:()=>e.Expire===0?"Null":me(e.Expire*1e3).format("YYYY-MM-DD")}},Ee=e=>{if(!e.subscriptionInfo)return;const s=Te(e.subscriptionInfo);return[(()=>{const t=Se();return F(()=>t.value=s.percentage),t})(),(()=>{const t=Me(),c=t.firstChild,i=c.nextSibling,o=i.nextSibling,m=o.nextSibling;return m.nextSibling,r(t,()=>`${s.used}`,c),r(t,()=>`${s.total}`,i),r(t,()=>s.percentage,m),t})(),(()=>{const t=ke(),c=t.firstChild,i=c.nextSibling;return i.nextSibling,r(t,()=>s.expireStr(),i),t})()]},Le=g('<div class="divider">'),De=g('<div class="flex flex-col gap-2"><div class="flex items-center justify-between gap-2"><div class="tabs-boxed tabs gap-2">'),Ie=g('<button><span></span><div class="badge badge-sm">'),Oe=g('<div class="mr-8 flex items-center justify-between"><span></span><div>'),Be=g('<div class="text-sm text-slate-500"> :: <!> '),Ue=g('<div class="mr-8 flex items-center justify-between"><span>'),He=g('<div class="text-sm text-slate-500"> ');var _=function(e){return e.all="all",e.proxyProviders="proxyProviders",e.proxies="proxies",e}(_||{});const je=()=>{const[e]=he(),{proxies:s,setProxyGroupByProxyName:t,latencyTestByProxyGroupName:c,latencyMap:i,proxyProviders:o,updateProviderByProviderName:m,updateAllProvider:b,healthCheckByProviderName:d}=W(),{map:C,set:N}=A(),{map:k,setWithCallback:T}=A(),U=async(u,h)=>{t(u,h)},$=async(u,h)=>{u.stopPropagation(),T(h,()=>c(h))},{map:E,setWithCallback:L}=A(),{map:D,setWithCallback:I}=A(),[se,Y]=j(!1),re=(u,h)=>{u.stopPropagation(),L(h,()=>d(h))},ae=(u,h)=>{u.stopPropagation(),I(h,()=>m(h))},ie=async u=>{u.stopPropagation(),Y(!0);try{await b()}catch{}Y(!1)},[P,oe]=j(_.all),ce=()=>[{type:_.all,name:e("all"),count:o().length+s().length},{type:_.proxyProviders,name:e("proxyProviders"),count:o().length},{type:_.proxies,name:e("proxies"),count:s().length}];return(()=>{const u=De(),h=u.firstChild,de=h.firstChild;return r(de,n(te,{get each(){return ce()},children:l=>(()=>{const p=Ie(),S=p.firstChild,O=S.nextSibling;return p.$$click=()=>oe(l.type),r(S,()=>l.name),r(O,()=>l.count),F(()=>ne(p,M(P()===l.type&&"tab-active","tab gap-2"))),p})()})),r(h,n(H,{class:"btn btn-circle",onClick:l=>ie(l),get children(){return n(Q,{get class(){return M(se()&&"animate-spin text-success")}})}}),null),r(u,n(y,{get when(){return P()===_.all||P()===_.proxyProviders},get children(){return n(K,{get subChild(){return o().map(l=>{const p=X(l.proxies.map(a=>a.name)??[],i(),q()),S=[(()=>{const a=Oe(),v=a.firstChild,f=v.nextSibling;return r(v,()=>l.name),r(f,n(H,{class:"btn btn-circle btn-sm mr-2",onClick:G=>ae(G,l.name),get children(){return n(Q,{get class(){return M(D()[l.name]&&"animate-spin text-success")}})}}),null),r(f,n(H,{class:"btn btn-circle btn-sm",onClick:G=>re(G,l.name),get children(){return n(V,{get class(){return M(E()[l.name]&&"animate-pulse text-success")}})}}),null),a})(),n(Ee,{get subscriptionInfo(){return l.subscriptionInfo}}),(()=>{const a=Be(),v=a.firstChild,f=v.nextSibling;return f.nextSibling,r(a,()=>l.vehicleType,v),r(a,()=>e("updated"),f),r(a,()=>fe(l.updatedAt),null),a})(),n(y,{get when(){return!C()[l.name]},get children(){return n(ee,{proxyNameList:p})}})],O=n(Z,{proxyNames:p});return n(J,{get isOpen(){return C()[l.name]},title:S,content:O,onCollapse:a=>N(l.name,a)})})}})}}),null),r(u,n(y,{get when(){return P()===_.all},get children(){return Le()}}),null),r(u,n(y,{get when(){return P()===_.all||P()===_.proxies},get children(){return n(K,{get subChild(){return s().map(l=>{const p=X(l.all??[],i(),q()),S=[(()=>{const a=Ue(),v=a.firstChild;return r(v,()=>l.name),r(a,n(H,{class:"btn-circle btn-sm",onClick:f=>$(f,l.name),get children(){return n(V,{get class(){return M(k()[l.name]&&"animate-pulse text-success")}})}}),null),a})(),(()=>{const a=He(),v=a.firstChild;return r(a,()=>l.type,v),r(a,()=>{var f;return((f=l.now)==null?void 0:f.length)>0&&` :: ${l.now}`},null),a})(),n(y,{get when(){return!C()[l.name]},get children(){return n(ee,{proxyNameList:p,get now(){return l.now}})}})],O=n(Z,{proxyNames:p,get now(){return l.now},onClick:a=>{U(l,a)}});return n(J,{get isOpen(){return C()[l.name]},title:S,content:O,onCollapse:a=>N(l.name,a)})})}})}}),null),u})()};xe(["click"]);export{je as default};