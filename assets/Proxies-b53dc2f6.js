import{i as _,e as C,S as q,h as ne,t as R,j as F,d as ae,l as j,c as X,Q as te,s as Ce,F as Se,u as Ne,x as De,a7 as ce,a8 as Oe}from"./vendor-f843f104.js";import{I as Pe}from"./index-f14bd485.js";import{D as A,P as ue}from"./enum-a4780acc.js";import{u as Te}from"./index-99f35ae8.js";import{proxiesPreviewType as de}from"./Config-ec15db9f.js";import{b as fe}from"./index-ac54fc13.js";import"./index-60009942.js";const ke=j('<div><div class="collapse-title pr-4 text-xl font-medium after:!top-8"></div><div>'),Le=e=>{const{title:u,content:s,onCollapse:o}=e,$=()=>{const v="collapse-open",c="collapse-close";return e.isOpen?v:c},g=()=>{const v="opacity-100",c="opacity-0";return e.isOpen?v:c};return(()=>{const v=ke(),c=v.firstChild,i=c.nextSibling;return c.$$click=()=>o(!e.isOpen),_(c,u),_(i,C(q,{get when(){return e.isOpen},children:s})),ne(l=>{const m=R($(),"collapse collapse-arrow mb-2 overflow-visible border-secondary bg-base-200"),p=R(g(),"collapse-content grid auto-rows-min grid-cols-2 gap-2 transition-opacity duration-1000 lg:grid-cols-3 xl:grid-cols-4");return m!==l._v$&&F(v,l._v$=m),p!==l._v$2&&F(i,l._v$2=p),l},{_v$:void 0,_v$2:void 0}),v})()},he=Le;ae(["click"]);const Ee=j('<div class="ml-2 flex flex-1 flex-col">'),Ie=j('<div class="flex"><div class="flex flex-1 flex-col">'),[je,ye]=X(0);var ve;ye((ve=document==null?void 0:document.body)==null?void 0:ve.clientWidth);window.addEventListener("resize",()=>{ye(document.body.clientWidth)});const Be=e=>{const u=te(()=>je()>=640),s=te(()=>e.subChild.filter(($,g)=>g%2===0||!u())),o=te(()=>e.subChild.filter(($,g)=>g%2===1));return(()=>{const $=Ie(),g=$.firstChild;return _(g,s),_($,C(q,{get when(){return u()},get children(){const v=Ee();return _(v,o),v}}),null),$})()},me=Be,He=j("<span>ms"),Ye=e=>{const u=e.delay;if(typeof u!="number"||u===A.NOT_CONNECTED)return"";let s="text-success";return u>A.HIGH?s="text-error":u>A.MEDIUM&&(s="text-warning"),(()=>{const o=He(),$=o.firstChild;return F(o,s),_(o,u,$),o})()},xe=Ye,[We,Ge]=X([]),[Ae,Ue]=X([]),[se,$e]=X({});function ie(){const e=Te(),u=c=>{c.forEach(i=>{var l;$e({...se(),[i.name]:{udp:i.udp,type:i.type,delay:((l=i.history.at(-1))==null?void 0:l.delay)??0,name:i.name}})})},s=async()=>{const{providers:c}=await e.get("providers/proxies").json();Object.values(c).forEach(m=>{u(m.proxies)}),Ue(Object.values(c).filter(m=>m.name!=="default"&&m.vehicleType!=="Compatible"));const{proxies:i}=await e.get("proxies").json(),l=[...i.GLOBAL.all??[],"GLOBAL"];u(Object.values(i)),Ge(Object.values(i).filter(m=>{var p;return(p=m.all)==null?void 0:p.length}).sort((m,p)=>l.indexOf(m.name)-l.indexOf(p.name)))};return{proxies:We,proxyProviders:Ae,delayTestByProxyGroupName:async c=>{const i=await e.get(`group/${c}/delay`,{searchParams:{url:"https://www.gstatic.com/generate_204",timeout:2e3}}).json();Object.entries(i).forEach(([l,m])=>{$e({...se(),[l]:{...se()[l],delay:m}})})},proxyNodeMap:se,updateProxy:s,setProxyGroupByProxyName:async(c,i)=>{await e.put(`proxies/${c.name}`,{body:JSON.stringify({name:i})}),await s()},updateProviderByProviderName:async c=>{await e.put(`providers/proxies/${c}`),await s()},healthCheckByProviderName:async c=>{await e.get(`providers/proxies/${c}/healthcheck`,{timeout:30*1e3}),await s()}}}const Fe=j('<div><div class="truncate text-left"></div><div class="flex items-center justify-between gap-1"><div></div><div class="text-xs">'),Re=e=>{const{proxyName:u,isSelected:s,onClick:o}=e,{proxyNodeMap:$}=ie(),g=te(()=>$()[u]),v=(c="")=>{const i=c.toLowerCase();return i.includes("shadowsocks")?i.replace("shadowsocks","ss"):i};return(()=>{const c=Fe(),i=c.firstChild,l=i.nextSibling,m=l.firstChild,p=m.nextSibling;return c.$$click=()=>o==null?void 0:o(),Ce(c,"data-tip",u),_(i,u),_(m,()=>{var M;return v((M=g())==null?void 0:M.type)},null),_(m,()=>{var M;return((M=g())==null?void 0:M.udp)&&" :: udp"},null),_(p,C(xe,{get delay(){var M;return(M=g())==null?void 0:M.delay}})),ne(M=>{const L=R("card card-bordered tooltip tooltip-bottom card-compact flex gap-1 border-neutral-focus bg-neutral p-3 text-neutral-content",s&&"border-primary bg-primary-content text-primary",o&&"cursor-pointer"),b=R("truncate text-xs text-slate-500",s&&"text-primary");return L!==M._v$&&F(c,M._v$=L),b!==M._v$2&&F(m,M._v$2=b),M},{_v$:void 0,_v$2:void 0}),c})()};ae(["click"]);const ge=e=>{const[u,s]=X(30),o=te(()=>e.proxies.slice(0,u()));return C(Pe,{get each(){return o()},get hasMore(){return o().length<e.proxies.length},next:()=>s(u()+30),children:$=>C(Re,{proxyName:$,get isSelected(){return e.now===$},onClick:()=>{var g;(g=e.onClick)==null||g.call(e,$)}})})},ze=j('<div class="flex w-full items-center"><div class="flex flex-1 overflow-hidden rounded-2xl"><div></div><div></div><div></div><div></div></div><div class="ml-4 text-xs">'),Je=e=>{const{proxyNodeMap:u}=ie(),s=e.proxyNameList.map(i=>u()[i].delay),o=s.length,$=s.filter(i=>i>A.NOT_CONNECTED&&i<=A.MEDIUM).length,g=s.filter(i=>i>A.MEDIUM&&i<=A.HIGH).length,v=s.filter(i=>i>A.HIGH).length,c=s.filter(i=>i===A.NOT_CONNECTED||typeof i!="number").length;return(()=>{const i=ze(),l=i.firstChild,m=l.firstChild,p=m.nextSibling,M=p.nextSibling,L=M.nextSibling,b=l.nextSibling;return`${$*100/o}%`!=null?m.style.setProperty("width",`${$*100/o}%`):m.style.removeProperty("width"),`${g*100/o}%`!=null?p.style.setProperty("width",`${g*100/o}%`):p.style.removeProperty("width"),`${v*100/o}%`!=null?M.style.setProperty("width",`${v*100/o}%`):M.style.removeProperty("width"),`${c*100/o}%`!=null?L.style.setProperty("width",`${c*100/o}%`):L.style.removeProperty("width"),_(b,C(xe,{get delay(){var y;return(y=u()[e.now])==null?void 0:y.delay}})),ne(y=>{const E=R("h-2 bg-success"),N=R("h-2 bg-warning"),W=R("h-2 bg-error"),D=R("h-2 bg-neutral");return E!==y._v$&&F(m,y._v$=E),N!==y._v$2&&F(p,y._v$2=N),W!==y._v$3&&F(M,y._v$3=W),D!==y._v$4&&F(L,y._v$4=D),y},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),i})()},Ve=j("<div>"),Ze=j('<div class="flex w-full flex-wrap items-center">'),qe=e=>{let u=e.selected?"bg-white border-4 border-success":"bg-success";return typeof e.delay!="number"||e.delay===A.NOT_CONNECTED?u=e.selected?"bg-white border-4 border-neutral":"bg-neutral":e.delay>A.HIGH?u=e.selected?"bg-white border-4 border-error":"bg-error":e.delay>A.MEDIUM&&(u=e.selected?"bg-white border-4 border-warning":"bg-warning"),(()=>{const s=Ve();return ne(()=>F(s,R("m-1 h-4 w-4 rounded-full",u))),s})()},Qe=e=>{const{proxyNodeMap:u}=ie();return(()=>{const s=Ze();return _(s,C(Se,{get each(){return e.proxyNameList.map(o=>u()[o])},children:o=>{const $=o==null?void 0:o.delay,g=e.now===o.name;return C(qe,{delay:$,selected:g})}})),s})()},pe=e=>[C(q,{get when(){return de()===ue.BAR},get children(){return C(Je,{get proxyNameList(){return e.proxyNameList},get now(){return e.now}})}}),C(q,{get when(){return de()===ue.DOTS},get children(){return C(Qe,{get proxyNameList(){return e.proxyNameList},get now(){return e.now}})}})];var we=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function be(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _e={exports:{}};(function(e,u){(function(s,o){e.exports=o()})(we,function(){var s=1e3,o=6e4,$=36e5,g="millisecond",v="second",c="minute",i="hour",l="day",m="week",p="month",M="quarter",L="year",b="date",y="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,N=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,W={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(d){var r=["th","st","nd","rd"],t=d%100;return"["+d+(r[(t-20)%10]||r[t]||r[0])+"]"}},D=function(d,r,t){var a=String(d);return!a||a.length>=r?d:""+Array(r+1-a.length).join(t)+d},P={s:D,z:function(d){var r=-d.utcOffset(),t=Math.abs(r),a=Math.floor(t/60),n=t%60;return(r<=0?"+":"-")+D(a,2,"0")+":"+D(n,2,"0")},m:function d(r,t){if(r.date()<t.date())return-d(t,r);var a=12*(t.year()-r.year())+(t.month()-r.month()),n=r.clone().add(a,p),f=t-n<0,h=r.clone().add(a+(f?-1:1),p);return+(-(a+(t-n)/(f?n-h:h-n))||0)},a:function(d){return d<0?Math.ceil(d)||0:Math.floor(d)},p:function(d){return{M:p,y:L,w:m,d:l,D:b,h:i,m:c,s:v,ms:g,Q:M}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(d){return d===void 0}},T="en",x={};x[T]=W;var H=function(d){return d instanceof z},U=function d(r,t,a){var n;if(!r)return T;if(typeof r=="string"){var f=r.toLowerCase();x[f]&&(n=f),t&&(x[f]=t,n=f);var h=r.split("-");if(!n&&h.length>1)return d(h[0])}else{var S=r.name;x[S]=r,n=S}return!a&&n&&(T=n),n||!a&&T},O=function(d,r){if(H(d))return d.clone();var t=typeof r=="object"?r:{};return t.date=d,t.args=arguments,new z(t)},w=P;w.l=U,w.i=H,w.w=function(d,r){return O(d,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var z=function(){function d(t){this.$L=U(t.locale,null,!0),this.parse(t)}var r=d.prototype;return r.parse=function(t){this.$d=function(a){var n=a.date,f=a.utc;if(n===null)return new Date(NaN);if(w.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var h=n.match(E);if(h){var S=h[2]-1||0,k=(h[7]||"0").substring(0,3);return f?new Date(Date.UTC(h[1],S,h[3]||1,h[4]||0,h[5]||0,h[6]||0,k)):new Date(h[1],S,h[3]||1,h[4]||0,h[5]||0,h[6]||0,k)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return w},r.isValid=function(){return this.$d.toString()!==y},r.isSame=function(t,a){var n=O(t);return this.startOf(a)<=n&&n<=this.endOf(a)},r.isAfter=function(t,a){return O(t)<this.startOf(a)},r.isBefore=function(t,a){return this.endOf(a)<O(t)},r.$g=function(t,a,n){return w.u(t)?this[a]:this.set(n,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,a){var n=this,f=!!w.u(a)||a,h=w.p(t),S=function(Z,Y){var J=w.w(n.$u?Date.UTC(n.$y,Y,Z):new Date(n.$y,Y,Z),n);return f?J:J.endOf(l)},k=function(Z,Y){return w.w(n.toDate()[Z].apply(n.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(Y)),n)},I=this.$W,B=this.$M,G=this.$D,Q="set"+(this.$u?"UTC":"");switch(h){case L:return f?S(1,0):S(31,11);case p:return f?S(1,B):S(0,B+1);case m:var V=this.$locale().weekStart||0,K=(I<V?I+7:I)-V;return S(f?G-K:G+(6-K),B);case l:case b:return k(Q+"Hours",0);case i:return k(Q+"Minutes",1);case c:return k(Q+"Seconds",2);case v:return k(Q+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,a){var n,f=w.p(t),h="set"+(this.$u?"UTC":""),S=(n={},n[l]=h+"Date",n[b]=h+"Date",n[p]=h+"Month",n[L]=h+"FullYear",n[i]=h+"Hours",n[c]=h+"Minutes",n[v]=h+"Seconds",n[g]=h+"Milliseconds",n)[f],k=f===l?this.$D+(a-this.$W):a;if(f===p||f===L){var I=this.clone().set(b,1);I.$d[S](k),I.init(),this.$d=I.set(b,Math.min(this.$D,I.daysInMonth())).$d}else S&&this.$d[S](k);return this.init(),this},r.set=function(t,a){return this.clone().$set(t,a)},r.get=function(t){return this[w.p(t)]()},r.add=function(t,a){var n,f=this;t=Number(t);var h=w.p(a),S=function(B){var G=O(f);return w.w(G.date(G.date()+Math.round(B*t)),f)};if(h===p)return this.set(p,this.$M+t);if(h===L)return this.set(L,this.$y+t);if(h===l)return S(1);if(h===m)return S(7);var k=(n={},n[c]=o,n[i]=$,n[v]=s,n)[h]||1,I=this.$d.getTime()+t*k;return w.w(I,this)},r.subtract=function(t,a){return this.add(-1*t,a)},r.format=function(t){var a=this,n=this.$locale();if(!this.isValid())return n.invalidDate||y;var f=t||"YYYY-MM-DDTHH:mm:ssZ",h=w.z(this),S=this.$H,k=this.$m,I=this.$M,B=n.weekdays,G=n.months,Q=n.meridiem,V=function(Y,J,ee,re){return Y&&(Y[J]||Y(a,f))||ee[J].slice(0,re)},K=function(Y){return w.s(S%12||12,Y,"0")},Z=Q||function(Y,J,ee){var re=Y<12?"AM":"PM";return ee?re.toLowerCase():re};return f.replace(N,function(Y,J){return J||function(ee){switch(ee){case"YY":return String(a.$y).slice(-2);case"YYYY":return w.s(a.$y,4,"0");case"M":return I+1;case"MM":return w.s(I+1,2,"0");case"MMM":return V(n.monthsShort,I,G,3);case"MMMM":return V(G,I);case"D":return a.$D;case"DD":return w.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return V(n.weekdaysMin,a.$W,B,2);case"ddd":return V(n.weekdaysShort,a.$W,B,3);case"dddd":return B[a.$W];case"H":return String(S);case"HH":return w.s(S,2,"0");case"h":return K(1);case"hh":return K(2);case"a":return Z(S,k,!0);case"A":return Z(S,k,!1);case"m":return String(k);case"mm":return w.s(k,2,"0");case"s":return String(a.$s);case"ss":return w.s(a.$s,2,"0");case"SSS":return w.s(a.$ms,3,"0");case"Z":return h}return null}(Y)||h.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,a,n){var f,h=this,S=w.p(a),k=O(t),I=(k.utcOffset()-this.utcOffset())*o,B=this-k,G=function(){return w.m(h,k)};switch(S){case L:f=G()/12;break;case p:f=G();break;case M:f=G()/3;break;case m:f=(B-I)/6048e5;break;case l:f=(B-I)/864e5;break;case i:f=B/$;break;case c:f=B/o;break;case v:f=B/s;break;default:f=B}return n?f:w.a(f)},r.daysInMonth=function(){return this.endOf(p).$D},r.$locale=function(){return x[this.$L]},r.locale=function(t,a){if(!t)return this.$L;var n=this.clone(),f=U(t,a,!0);return f&&(n.$L=f),n},r.clone=function(){return w.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},d}(),le=z.prototype;return O.prototype=le,[["$ms",g],["$s",v],["$m",c],["$H",i],["$W",l],["$M",p],["$y",L],["$D",b]].forEach(function(d){le[d[1]]=function(r){return this.$g(r,d[0],d[1])}}),O.extend=function(d,r){return d.$i||(d(r,z,O),d.$i=!0),O},O.locale=U,O.isDayjs=H,O.unix=function(d){return O(1e3*d)},O.en=x[T],O.Ls=x,O.p={},O})})(_e);var Xe=_e.exports;const oe=be(Xe),Ke=j('<progress class="progress" max="100">'),et=j('<div class="text-sm text-slate-500"> / <!> ( <!>% )'),tt=j('<div class="text-sm text-slate-500">Expire: <!> '),nt=e=>{const u=fe(e.Total,{units:"iec"}),s=fe(e.Download+e.Upload,{units:"iec"}),o=((e.Download+e.Upload)/e.Total*100).toFixed(2);return{total:u,used:s,percentage:o,expireStr:()=>e.Expire===0?"Null":oe(e.Expire*1e3).format("YYYY-MM-DD")}},rt=e=>{if(!e.subscriptionInfo)return;const u=nt(e.subscriptionInfo);return[(()=>{const s=Ke();return ne(()=>s.value=u.percentage),s})(),(()=>{const s=et(),o=s.firstChild,$=o.nextSibling,g=$.nextSibling,v=g.nextSibling;return v.nextSibling,_(s,()=>`${u.used}`,o),_(s,()=>`${u.total}`,$),_(s,()=>u.percentage,v),s})(),(()=>{const s=tt(),o=s.firstChild,$=o.nextSibling;return $.nextSibling,_(s,()=>u.expireStr(),$),s})()]};var Me={exports:{}};(function(e,u){(function(s,o){e.exports=o()})(we,function(){return function(s,o,$){s=s||{};var g=o.prototype,v={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function c(l,m,p,M){return g.fromToBase(l,m,p,M)}$.en.relativeTime=v,g.fromToBase=function(l,m,p,M,L){for(var b,y,E,N=p.$locale().relativeTime||v,W=s.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],D=W.length,P=0;P<D;P+=1){var T=W[P];T.d&&(b=M?$(l).diff(p,T.d,!0):p.diff(l,T.d,!0));var x=(s.rounding||Math.round)(Math.abs(b));if(E=b>0,x<=T.r||!T.r){x<=1&&P>0&&(T=W[P-1]);var H=N[T.l];L&&(x=L(""+x)),y=typeof H=="string"?H.replace("%d",x):H(x,m,T.l,E);break}}if(m)return y;var U=E?N.future:N.past;return typeof U=="function"?U(y):U.replace("%s",y)},g.to=function(l,m){return c(l,m,this,!0)},g.from=function(l,m){return c(l,m,this)};var i=function(l){return l.$u?$.utc():$()};g.toNow=function(l){return this.to(i(this),l)},g.fromNow=function(l){return this.from(i(this),l)}}})})(Me);var st=Me.exports;const it=be(st);oe.extend(it);function at(e){return oe(e).fromNow()}const ot=j('<div><h1 class="pb-4 text-lg font-semibold">'),lt=j('<div class="flex flex-col gap-2"><div><h1 class="pb-4 text-lg font-semibold">'),ct=j('<div class="mr-10 flex items-center justify-between"><span></span><button class="btn btn-circle btn-sm">'),ut=j('<div class="text-sm text-slate-500"> :: '),dt=j('<div class="mr-10 flex items-center justify-between"><span></span><div><button class="btn btn-circle btn-sm mr-2"></button><button class="btn btn-circle btn-sm">'),ft=j('<div class="text-sm text-slate-500"> :: Updated '),xt=()=>{const[e]=Ne(),{proxies:u,proxyProviders:s,updateProxy:o,setProxyGroupByProxyName:$,delayTestByProxyGroupName:g,updateProviderByProviderName:v,healthCheckByProviderName:c}=ie(),[i,l]=X({});De(async()=>{await o()});const m=async(b,y)=>{$(b,y)},p=async(b,y)=>{const E=b.target;E.classList.add("animate-pulse"),b.stopPropagation(),await g(y),E.classList.remove("animate-pulse")},M=async(b,y)=>{const E=b.target;E.classList.add("animate-pulse"),b.stopPropagation(),await c(y),E.classList.remove("animate-pulse")},L=async(b,y)=>{const E=b.target;E.classList.add("animate-spin"),b.stopPropagation(),await v(y),E.classList.remove("animate-spin")};return(()=>{const b=lt(),y=b.firstChild,E=y.firstChild;return _(E,()=>e("proxies")),_(y,C(me,{get subChild(){return u().map(N=>{const W=[(()=>{const P=ct(),T=P.firstChild,x=T.nextSibling;return _(T,()=>N.name),x.$$click=H=>p(H,N.name),_(x,C(ce,{})),P})(),(()=>{const P=ut(),T=P.firstChild;return _(P,()=>N.type,T),_(P,()=>N.now,null),P})(),C(q,{get when(){return!i()[`group-${N.name}`]},get children(){return C(pe,{get proxyNameList(){return N.all??[]},get now(){return N.now}})}})],D=C(ge,{get proxies(){return N.all},get now(){return N.now},onClick:P=>{m(N,P)}});return C(he,{get isOpen(){return i()[`group-${N.name}`]},title:W,content:D,onCollapse:P=>l({...i(),[`group-${N.name}`]:P})})})}}),null),_(b,C(q,{get when(){return s().length>0},get children(){const N=ot(),W=N.firstChild;return _(W,()=>e("proxyProviders")),_(N,C(me,{get subChild(){return s().map(D=>{const P=[(()=>{const x=dt(),H=x.firstChild,U=H.nextSibling,O=U.firstChild,w=O.nextSibling;return _(H,()=>D.name),O.$$click=z=>L(z,D.name),_(O,C(Oe,{})),w.$$click=z=>M(z,D.name),_(w,C(ce,{})),x})(),C(rt,{get subscriptionInfo(){return D.subscriptionInfo}}),(()=>{const x=ft(),H=x.firstChild;return _(x,()=>D.vehicleType,H),_(x,()=>at(D.updatedAt),null),x})(),C(q,{get when(){return!i()[`provider-${D.name}`]},get children(){return C(pe,{get proxyNameList(){return D.proxies.map(x=>x.name)??[]}})}})],T=C(ge,{get proxies(){return D.proxies.map(x=>x.name)}});return C(he,{get isOpen(){return i()[`provider-${D.name}`]},title:P,content:T,onCollapse:x=>l({...i(),[`provider-${D.name}`]:x})})})}}),null),N}}),null),b})()};ae(["click"]);export{xt as default};
