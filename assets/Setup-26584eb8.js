import{u as k,B as R,C as D,O as B,i as m,g,P as L,F as V,l as _,f as j,k as F}from"./vendor-9d884d62.js";import{c as P,v as z,z as v}from"./index-ea658198.js";import{B as $}from"./Button-6af14258.js";import{e as a,s as b,a as A,b as S}from"./index-b920bc04.js";let h;const q=new Uint8Array(16);function H(){if(!h&&(h=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(q)}const o=[];for(let t=0;t<256;++t)o.push((t+256).toString(16).slice(1));function M(t,e=0){return(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase()}const N=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),U={randomUUID:N};function O(t,e,l){if(U.randomUUID&&!e&&!t)return U.randomUUID();t=t||{};const r=t.random||(t.rng||H)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){l=l||0;for(let c=0;c<16;++c)e[l+c]=r[c];return e}return M(r)}const T=_('<div class="mx-auto flex flex-col items-center gap-4 py-10 sm:w-2/3"><form class="contents"><div class="flex w-full flex-col gap-4"><input name="url" type="url" class="input input-bordered" placeholder="host url" list="defaultEndpoints"><datalist id="defaultEndpoints"><option value="http://127.0.0.1:9090"></option></datalist><input name="secret" type="password" class="input input-bordered" placeholder="secret"></div></form><div class="flex w-full flex-col gap-4">'),X=_('<div class="badge badge-info flex w-full cursor-pointer items-center gap-4 py-4">'),G=v.object({url:v.string().url().nonempty(),secret:v.string()}),Y=()=>{const[t]=k(),e=R(),l=n=>{S(n),e("/overview")},r=(n,i)=>F.get(n,{headers:i?{Authorization:`Bearer ${i}`}:{}}).then(({ok:s})=>s).catch(()=>!1),c=async n=>{const i=a().find(s=>s.id===n);i&&await r(i.url,i.secret)&&l(n)},y=async({url:n,secret:i})=>{if(!await r(n,i))return;const s=O(),d=a().slice(),u=d.find(x=>x.url===n);if(!u){b([{id:s,url:n,secret:i},...d]),l(s);return}u.secret=i,u.id=s,b(d),l(s)},{form:f}=P({extend:z({schema:G}),onSubmit:y}),E=n=>{A()===n&&S(""),b(a().filter(i=>i.id!==n))};return D(()=>{const n=new URLSearchParams(window.location.search);n.has("hostname")?y({url:`http://${n.get("hostname")}${n.get("port")&&":"+n.get("port")}`,secret:n.get("secret")??""}):a().length===0&&y({url:"http://127.0.0.1:9090",secret:""})}),(()=>{const n=T(),i=n.firstChild,s=i.firstChild;s.firstChild.nextSibling.nextSibling;const x=i.nextSibling;return B(f,i,()=>f),m(s,g($,{type:"submit",class:"btn-primary join-item uppercase",get children(){return t("add")}}),null),m(x,g(V,{get each(){return a()},children:({id:w,url:C})=>(()=>{const p=X();return p.$$click=()=>c(w),m(p,C,null),m(p,g($,{class:"btn-circle btn-ghost btn-xs text-white",onClick:I=>{I.stopPropagation(),E(w)},get children(){return g(L,{})}}),null),p})()})),n})()};j(["click"]);export{Y as default};