import{u as C,o as R,H as D,U as V,i as p,c as m,V as L,F as j,b as _,g as B,k as F}from"./vendor-bcbfc1b2.js";import{c as z,v as A,z as x}from"./index-f06daa74.js";import{B as f,e as g,s as v,a as H,b as S}from"./index-6640ac5e.js";let h;const P=new Uint8Array(16);function q(){if(!h&&(h=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(P)}const o=[];for(let t=0;t<256;++t)o.push((t+256).toString(16).slice(1));function M(t,e=0){return(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase()}const N=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),U={randomUUID:N};function T(t,e,c){if(U.randomUUID&&!e&&!t)return U.randomUUID();t=t||{};const r=t.random||(t.rng||q)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){c=c||0;for(let l=0;l<16;++l)e[c+l]=r[l];return e}return M(r)}const X=_('<div class="mx-auto flex flex-col items-center gap-4 py-10 sm:w-2/3"><form class="contents"><div class="flex w-full flex-col gap-4"><input name="url" type="url" class="input input-bordered" placeholder="host url" list="defaultEndpoints"><datalist id="defaultEndpoints"><option value="http://127.0.0.1:9090"></option></datalist><input name="secret" type="password" class="input input-bordered" placeholder="secret"></div></form><div class="flex w-full flex-col gap-4">'),G=_('<div class="badge badge-info flex w-full cursor-pointer items-center gap-4 py-4">'),J=x.object({url:x.string().url().nonempty(),secret:x.string()}),W=()=>{const[t]=C(),e=R(),c=n=>{S(n),e("/overview")},r=(n,i)=>F.get(n,{headers:i?{Authorization:`Bearer ${i}`}:{}}).then(({ok:s})=>s).catch(()=>!1),l=async n=>{const i=g().find(s=>s.id===n);i&&await r(i.url,i.secret)&&c(n)},b=async({url:n,secret:i})=>{if(!await r(n,i))return;const s=T(),a=g().slice(),d=a.find(y=>y.url===n);if(!d){v([{id:s,url:n,secret:i},...a]),c(s);return}d.secret=i,d.id=s,v(a),c(s)},{form:w}=z({extend:A({schema:J}),onSubmit:b}),E=n=>{H()===n&&S(""),v(g().filter(i=>i.id!==n))};return D(()=>{const n=new URLSearchParams(window.location.search);n.has("hostname")&&b({url:`http://${n.get("hostname")}${n.get("port")&&":"+n.get("port")}`,secret:n.get("secret")??""})}),(()=>{const n=X(),i=n.firstChild,s=i.firstChild;s.firstChild.nextSibling.nextSibling;const y=i.nextSibling;return V(w,i,()=>w),p(s,m(f,{type:"submit",class:"btn-primary join-item uppercase",get children(){return t("add")}}),null),p(y,m(j,{get each(){return g()},children:({id:$,url:I})=>(()=>{const u=G();return u.$$click=()=>l($),p(u,I,null),p(u,m(f,{class:"btn-circle btn-ghost btn-xs text-white",onClick:k=>{k.stopPropagation(),E($)},get children(){return m(L,{})}}),null),u})()})),n})()};B(["click"]);export{W as default};