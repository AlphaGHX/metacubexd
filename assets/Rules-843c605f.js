import{u as j,c as R,e as q,C as E,i as e,g as a,ae as W,af as S,t as p,F as D,S as G,h as H,j as J,l as d}from"./vendor-9d884d62.js";import{B as w}from"./Button-6af14258.js";import{q as K,h as L,v as O}from"./index-b920bc04.js";import{u as Q}from"./global-c5bd22bb.js";const V=d('<div class="flex-1"><h1 class="flex h-11 items-center pb-4 text-lg font-semibold">'),X=d('<div><div class="flex-1"><h1 class="pb-4 text-lg font-semibold">'),Y=d('<div class="card card-bordered card-compact mb-2 bg-base-200 p-4"><div class="break-all"></div><div class="text-xs text-slate-500"> :: '),Z=d('<div class="card card-bordered card-compact mb-2 bg-base-200 p-4"><div class="break-all pr-8"> (<!>)</div><div class="text-xs text-slate-500"> / <!> /<!> '),ne=()=>{const[u]=j(),{rules:m,rulesProviders:g,updateRules:y,updateAllRuleProvider:M,updateRuleProviderByName:k}=K(),[h,I]=R(100),b=q(()=>m().slice(0,h()));E(y);const{map:A,setWithCallback:P}=Q(),[U,f]=R(!1),B=(s,i)=>{s.stopPropagation(),P(i,()=>k(i))},z=async s=>{s.stopPropagation(),f(!0);try{await M()}catch{}f(!1)};return(()=>{const s=X(),i=s.firstChild,F=i.firstChild;return e(F,()=>u("rules")),e(i,a(W,{get each(){return b()},get hasMore(){return b().length<m().length},next:()=>I(h()+100),children:l=>(()=>{const c=Y(),t=c.firstChild,n=t.nextSibling,r=n.firstChild;return e(t,()=>l.payload,null),e(t,()=>typeof l.size=="number"&&l.size!==-1&&` (${l.size})`,null),e(n,()=>l.type,r),e(n,()=>l.proxy,null),c})()}),null),e(s,a(G,{get when(){return g().length>0},get children(){const l=V(),c=l.firstChild;return e(c,()=>u("ruleProviders"),null),e(c,a(w,{class:"btn-circle btn-ghost btn-sm ml-2",onClick:t=>z(t),get children(){return a(S,{get class(){return p(U()&&"animate-spin text-success")}})}}),null),e(l,a(D,{get each(){return g()},children:t=>(()=>{const n=Z(),r=n.firstChild,x=r.firstChild,$=x.nextSibling;$.nextSibling;const o=r.nextSibling,_=o.firstChild,v=_.nextSibling,N=v.nextSibling,C=N.nextSibling;return C.nextSibling,e(r,()=>t.name,x),e(r,()=>t.ruleCount,$),e(o,()=>t.vehicleType,_),e(o,()=>t.behavior,v),e(o,()=>u("updated"),C),e(o,()=>L(t.updatedAt),null),e(n,a(w,{class:"btn-circle btn-sm absolute right-2 top-2 mr-2 h-4",onClick:T=>B(T,t.name),get children(){return a(S,{get class(){return p(A()[t.name]&&"animate-spin text-success")}})}}),null),n})()}),null),l}}),null),H(()=>J(s,p("flex w-full flex-col gap-4",O()&&"flex-row"))),s})()};export{ne as default};