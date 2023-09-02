import{c as R,u as N,b as E,B as U,i as e,g as d,a9 as A,F as q,S as z,o as f,d as O}from"./vendor-01afc7ba.js";import{I as T,f as D,g as B}from"./proxies-84eeffd0.js";import{u as G}from"./index-ccde4305.js";const h=G(),H=()=>{const[u,p]=R([]),[r,x]=R([]),o=async()=>{const{rules:a}=await h.get("rules").json();p(Object.values(a));const{providers:m}=await h.get("providers/rules").json();x(Object.values(m))};return{rules:u,rulesProviders:r,updateRules:o,updateAllRuleProvider:async()=>{await Promise.all(r().map(a=>h.put(`providers/rules/${a.name}`))),await o()},updateRuleProviderByName:async a=>{await h.put(`providers/rules/${a}`),await o()}}},J=f('<div class="flex-1"><h1 class="flex h-11 items-center pb-4 text-lg font-semibold"><button class="btn btn-circle btn-ghost btn-sm ml-2">'),K=f('<div class="flex w-full flex-row gap-4"><div class="flex-1"><h1 class="pb-4 text-lg font-semibold">'),Q=f('<div class="card card-bordered card-compact mb-2 bg-base-200 p-4"><div class="break-all"></div><div class="text-xs text-slate-500"> :: '),V=f('<div class="card card-bordered card-compact mb-2 bg-base-200 p-4"><div class="flex h-6 items-center justify-between"><span> (<!>)</span><div><button class="btn btn-circle btn-sm mr-2"></button></div></div><div class="text-xs text-slate-500"> / <!> / Updated '),Z=()=>{const[u]=N(),{rules:p,rulesProviders:r,updateRules:x,updateAllRuleProvider:o,updateRuleProviderByName:C}=H(),[_,a]=R(100),m=E(()=>p().slice(0,_()));U(async()=>{x()});const F=async(s,n)=>{const b=B(s);b.classList.add("animate-spin"),s.stopPropagation(),await C(n),b.classList.remove("animate-spin")},I=async s=>{const n=B(s);n.classList.add("animate-spin"),s.stopPropagation(),await o(),n.classList.remove("animate-spin")};return(()=>{const s=K(),n=s.firstChild,b=n.firstChild;return e(b,()=>u("rules")),e(n,d(T,{get each(){return m()},get hasMore(){return m().length<p().length},next:()=>a(_()+100),children:l=>(()=>{const c=Q(),i=c.firstChild,t=i.nextSibling,v=t.firstChild;return e(i,()=>l.payload,null),e(i,()=>l.size!==-1&&` (${l.size})`,null),e(t,()=>l.type,v),e(t,()=>l.proxy,null),c})()}),null),e(s,d(z,{get when(){return r().length>0},get children(){const l=J(),c=l.firstChild,i=c.firstChild;return e(c,()=>u("ruleProviders"),i),i.$$click=t=>I(t),e(i,d(A,{})),e(l,d(q,{get each(){return r()},children:t=>(()=>{const v=V(),w=v.firstChild,$=w.firstChild,y=$.firstChild,S=y.nextSibling;S.nextSibling;const L=$.nextSibling,P=L.firstChild,g=w.nextSibling,k=g.firstChild,j=k.nextSibling;return j.nextSibling,e($,()=>t.name,y),e($,()=>t.ruleCount,S),P.$$click=M=>F(M,t.name),e(P,d(A,{})),e(g,()=>t.vehicleType,k),e(g,()=>t.behavior,j),e(g,()=>D(t.updatedAt),null),v})()}),null),l}}),null),s})()};O(["click"]);export{Z as default};
