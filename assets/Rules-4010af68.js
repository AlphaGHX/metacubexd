import{u as E,e as I,g as P,E as U,i as e,c as a,af as z,ae as C,F as N,S as T,b as p}from"./vendor-1926fad9.js";import{m as j,B as R}from"./index-732f3e54.js";import{f as q,g as S}from"./proxies-575a9e23.js";const D=p('<div class="flex-1"><h1 class="flex h-11 items-center pb-4 text-lg font-semibold">'),G=p('<div class="flex w-full flex-row gap-4"><div class="flex-1"><h1 class="pb-4 text-lg font-semibold">'),H=p('<div class="card card-bordered card-compact mb-2 bg-base-200 p-4"><div class="break-all"></div><div class="text-xs text-slate-500"> :: '),J=p('<div class="card card-bordered card-compact mb-2 bg-base-200 p-4"><div class="flex h-6 items-center justify-between"><span> (<!>)</span><div></div></div><div class="text-xs text-slate-500"> / <!> / Updated '),V=()=>{const[u]=E(),{rules:g,rulesProviders:h,updateRules:y,updateAllRuleProvider:w,updateRuleProviderByName:k}=j(),[b,B]=I(100),f=P(()=>g().slice(0,b()));U(async()=>{y()});const F=async(l,n)=>{const c=S(l);c.classList.add("animate-spin"),l.stopPropagation(),await k(n),c.classList.remove("animate-spin")},L=async l=>{const n=S(l);n.classList.add("animate-spin"),l.stopPropagation(),await w(),n.classList.remove("animate-spin")};return(()=>{const l=G(),n=l.firstChild,c=n.firstChild;return e(c,()=>u("rules")),e(n,a(z,{get each(){return f()},get hasMore(){return f().length<g().length},next:()=>B(b()+100),children:s=>(()=>{const r=H(),t=r.firstChild,i=t.nextSibling,o=i.firstChild;return e(t,()=>s.payload,null),e(t,()=>s.size!==-1&&` (${s.size})`,null),e(i,()=>s.type,o),e(i,()=>s.proxy,null),r})()}),null),e(l,a(T,{get when(){return h().length>0},get children(){const s=D(),r=s.firstChild;return e(r,()=>u("ruleProviders"),null),e(r,a(R,{class:"btn-circle btn-ghost btn-sm ml-2",onClick:t=>L(t),get children(){return a(C,{})}}),null),e(s,a(N,{get each(){return h()},children:t=>(()=>{const i=J(),o=i.firstChild,d=o.firstChild,x=d.firstChild,$=x.nextSibling;$.nextSibling;const M=d.nextSibling,m=o.nextSibling,_=m.firstChild,v=_.nextSibling;return v.nextSibling,e(d,()=>t.name,x),e(d,()=>t.ruleCount,$),e(M,a(R,{class:"btn-circle btn-sm mr-2",onClick:A=>F(A,t.name),get children(){return a(C,{})}})),e(m,()=>t.vehicleType,_),e(m,()=>t.behavior,v),e(m,()=>q(t.updatedAt),null),i})()}),null),s}}),null),l})()};export{V as default};
