import{i as s,e as m,l as c,u as y,c as F,J as C,F as v,S as E,x as T,h as g,s as h}from"./vendor-f843f104.js";import{z as i,c as S,v as P}from"./index-60009942.js";import{u as k,P as R}from"./index-0ed84884.js";import{s as D,p as j,b as w,c as Q,a as q,u as I}from"./config-d899ca11.js";const L=c('<div class="flex flex-col p-4">'),A=c('<div class="flex flex-col"><form class="flex items-center gap-2"><input name="name" class="input input-bordered flex-1"><select name="type" class="select select-bordered"><option>A</option><option>AAAA</option><option>MX</option></select><button type="submit" class="btn btn-primary">'),M=c('<div class="py-2">'),N=c('<div><form class="contents">'),X=c('<div class="form-control w-64 max-w-xs"><label class="label"><span class="label-text"></span></label><input type="number" class="input input-bordered">'),O=c('<div class="flex flex-col gap-4"><div><div class="pb-4"></div><div class="flex items-center gap-4"></div></div><div><div class="pb-4"></div><input class="toggle" type="checkbox"></div><div><div class="pb-4"></div><input class="input input-bordered w-96">'),V=c('<label class="flex items-center gap-2"><span></span><input class="radio" type="radio">'),z=c('<div class="flex flex-col gap-4">'),H=i.object({name:i.string(),type:i.string()}),J=()=>{const[l]=y(),b=k(),{form:a}=S({extend:P({schema:H}),onSubmit:async e=>{b.get("dns/query",{searchParams:{name:e.name,type:e.type}}).json().then(({Answer:r})=>$((r==null?void 0:r.map(({data:o})=>o))||[]))}}),[p,$]=F([]);return(()=>{const e=A(),r=e.firstChild,o=r.firstChild,f=o.nextSibling,d=f.nextSibling;return C(a,r,()=>a),s(d,()=>l("dnsQuery")),s(e,m(E,{get when(){return p().length>0},get children(){const u=L();return s(u,m(v,{get each(){return p()},children:n=>(()=>{const t=M();return s(t,n),t})()})),u}}),null),e})()},U=i.object({port:i.number(),"socks-port":i.number(),"redir-port":i.number(),"tproxy-port":i.number(),"mixed-port":i.number()}),W=()=>{const l=k(),b=[{label:"Http Port",key:"port"},{label:"Socks Port",key:"socks-port"},{label:"Redir Port",key:"redir-port"},{label:"Tproxy Port",key:"tproxy-port"},{label:"Mixed Port",key:"mixed-port"}],{form:a,setInitialValues:p,reset:$}=S({extend:P({schema:U})});return T(async()=>{const e=await l.get("configs").json();p(e),$()}),(()=>{const e=N(),r=e.firstChild;return C(a,r,()=>a),s(r,m(v,{each:b,children:o=>(()=>{const f=X(),d=f.firstChild,u=d.firstChild,n=d.nextSibling;return s(u,()=>o.label),g(t=>{const x=o.key,_=o.label;return x!==t._v$&&h(n,"name",t._v$=x),_!==t._v$2&&h(n,"placeholder",t._v$2=_),t},{_v$:void 0,_v$2:void 0}),f})()})),e})()},Y=()=>{const[l]=y();return(()=>{const b=O(),a=b.firstChild,p=a.firstChild,$=p.nextSibling,e=a.nextSibling,r=e.firstChild,o=r.nextSibling,f=e.nextSibling,d=f.firstChild,u=d.nextSibling;return s(p,()=>l("proxiesPreviewType")),s($,m(v,{get each(){return Object.values(R)},children:n=>(()=>{const t=V(),x=t.firstChild,_=x.nextSibling;return s(x,()=>l(n)),_.addEventListener("change",()=>D(n)),h(_,"aria-label",n),g(()=>_.checked=n===j()),t})()})),s(r,()=>l("autoCloseConns")),o.addEventListener("change",n=>w(n.target.checked)),s(d,()=>l("urlForDelayTest")),u.addEventListener("change",n=>{var t;return Q((t=n.target)==null?void 0:t.value)}),g(()=>o.checked=q()),g(()=>u.value=I()),b})()},ee=()=>(()=>{const l=z();return s(l,m(J,{}),null),s(l,m(W,{}),null),s(l,m(Y,{}),null),l})();export{ee as default};
