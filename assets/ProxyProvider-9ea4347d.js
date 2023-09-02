import{j as it,i as k,n as Z,u as at,c as ot,f as U,a9 as X,a8 as ut,S as ct,d as lt}from"./vendor-a821092a.js";import{P as dt,a as ft,C as ht,F as mt}from"./ProxyNodePreview-2e250ae4.js";import{b as tt}from"./index-ac54fc13.js";import{c as $t}from"./index-30506ad9.js";import"./index-d4e52c73.js";var et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nt(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var rt={exports:{}};(function(f,L){(function(c,g){f.exports=g()})(et,function(){var c=1e3,g=6e4,b=36e5,S="millisecond",x="second",Y="minute",N="hour",h="day",l="week",u="month",w="quarter",m="year",O="date",A="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,H=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,W={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},P=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},j={s:P,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+P(r,2,"0")+":"+P(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,u),i=t-e<0,a=n.clone().add(r+(i?-1:1),u);return+(-(r+(t-e)/(i?e-a:a-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:u,y:m,w:l,d:h,D:O,h:N,m:Y,s:x,ms:S,Q:w}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},v="en",D={};D[v]=W;var I=function(s){return s instanceof R},E=function s(n,t,r){var e;if(!n)return v;if(typeof n=="string"){var i=n.toLowerCase();D[i]&&(e=i),t&&(D[i]=t,e=i);var a=n.split("-");if(!e&&a.length>1)return s(a[0])}else{var d=n.name;D[d]=n,e=d}return!r&&e&&(v=e),e||!r&&v},M=function(s,n){if(I(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new R(t)},o=j;o.l=E,o.i=I,o.w=function(s,n){return M(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var R=function(){function s(t){this.$L=E(t.locale,null,!0),this.parse(t)}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(o.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(p);if(a){var d=a[2]-1||0,$=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],d,a[3]||1,a[4]||0,a[5]||0,a[6]||0,$)):new Date(a[1],d,a[3]||1,a[4]||0,a[5]||0,a[6]||0,$)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return o},n.isValid=function(){return this.$d.toString()!==A},n.isSame=function(t,r){var e=M(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return M(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<M(t)},n.$g=function(t,r,e){return o.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!o.u(r)||r,a=o.p(t),d=function(z,C){var F=o.w(e.$u?Date.UTC(e.$y,C,z):new Date(e.$y,C,z),e);return i?F:F.endOf(h)},$=function(z,C){return o.w(e.toDate()[z].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(C)),e)},y=this.$W,_=this.$M,T=this.$D,J="set"+(this.$u?"UTC":"");switch(a){case m:return i?d(1,0):d(31,11);case u:return i?d(1,_):d(0,_+1);case l:var B=this.$locale().weekStart||0,V=(y<B?y+7:y)-B;return d(i?T-V:T+(6-V),_);case h:case O:return $(J+"Hours",0);case N:return $(J+"Minutes",1);case Y:return $(J+"Seconds",2);case x:return $(J+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=o.p(t),a="set"+(this.$u?"UTC":""),d=(e={},e[h]=a+"Date",e[O]=a+"Date",e[u]=a+"Month",e[m]=a+"FullYear",e[N]=a+"Hours",e[Y]=a+"Minutes",e[x]=a+"Seconds",e[S]=a+"Milliseconds",e)[i],$=i===h?this.$D+(r-this.$W):r;if(i===u||i===m){var y=this.clone().set(O,1);y.$d[d]($),y.init(),this.$d=y.set(O,Math.min(this.$D,y.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[o.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var a=o.p(r),d=function(_){var T=M(i);return o.w(T.date(T.date()+Math.round(_*t)),i)};if(a===u)return this.set(u,this.$M+t);if(a===m)return this.set(m,this.$y+t);if(a===h)return d(1);if(a===l)return d(7);var $=(e={},e[Y]=g,e[N]=b,e[x]=c,e)[a]||1,y=this.$d.getTime()+t*$;return o.w(y,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||A;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=o.z(this),d=this.$H,$=this.$m,y=this.$M,_=e.weekdays,T=e.months,J=e.meridiem,B=function(C,F,G,q){return C&&(C[F]||C(r,i))||G[F].slice(0,q)},V=function(C){return o.s(d%12||12,C,"0")},z=J||function(C,F,G){var q=C<12?"AM":"PM";return G?q.toLowerCase():q};return i.replace(H,function(C,F){return F||function(G){switch(G){case"YY":return String(r.$y).slice(-2);case"YYYY":return o.s(r.$y,4,"0");case"M":return y+1;case"MM":return o.s(y+1,2,"0");case"MMM":return B(e.monthsShort,y,T,3);case"MMMM":return B(T,y);case"D":return r.$D;case"DD":return o.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return B(e.weekdaysMin,r.$W,_,2);case"ddd":return B(e.weekdaysShort,r.$W,_,3);case"dddd":return _[r.$W];case"H":return String(d);case"HH":return o.s(d,2,"0");case"h":return V(1);case"hh":return V(2);case"a":return z(d,$,!0);case"A":return z(d,$,!1);case"m":return String($);case"mm":return o.s($,2,"0");case"s":return String(r.$s);case"ss":return o.s(r.$s,2,"0");case"SSS":return o.s(r.$ms,3,"0");case"Z":return a}return null}(C)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,a=this,d=o.p(r),$=M(t),y=($.utcOffset()-this.utcOffset())*g,_=this-$,T=function(){return o.m(a,$)};switch(d){case m:i=T()/12;break;case u:i=T();break;case w:i=T()/3;break;case l:i=(_-y)/6048e5;break;case h:i=(_-y)/864e5;break;case N:i=_/b;break;case Y:i=_/g;break;case x:i=_/c;break;default:i=_}return e?i:o.a(i)},n.daysInMonth=function(){return this.endOf(u).$D},n.$locale=function(){return D[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=E(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return o.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),K=R.prototype;return M.prototype=K,[["$ms",S],["$s",x],["$m",Y],["$H",N],["$W",h],["$M",u],["$y",m],["$D",O]].forEach(function(s){K[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),M.extend=function(s,n){return s.$i||(s(n,R,M),s.$i=!0),M},M.locale=E,M.isDayjs=I,M.unix=function(s){return M(1e3*s)},M.en=D[v],M.Ls=D,M.p={},M})})(rt);var pt=rt.exports;const Q=nt(pt),gt=Z('<progress class="progress" max="100">'),vt=Z('<div class="text-sm text-slate-500"> / <!> ( <!>% )'),Mt=Z('<div class="text-sm text-slate-500">Expire: <!> '),yt=f=>{const L=tt(f.Total,{units:"iec"}),c=tt(f.Download+f.Upload,{units:"iec"}),g=((f.Download+f.Upload)/f.Total*100).toFixed(2);return{total:L,used:c,percentage:g,expireStr:()=>f.Expire===0?"Null":Q(f.Expire*1e3).format("YYYY-MM-DD")}},bt=f=>{if(!f.subscriptionInfo)return;const L=yt(f.subscriptionInfo);return[(()=>{const c=gt();return it(()=>c.value=L.percentage),c})(),(()=>{const c=vt(),g=c.firstChild,b=g.nextSibling,S=b.nextSibling,x=S.nextSibling;return x.nextSibling,k(c,()=>`${L.used}`,g),k(c,()=>`${L.total}`,b),k(c,()=>L.percentage,x),c})(),(()=>{const c=Mt(),g=c.firstChild,b=g.nextSibling;return b.nextSibling,k(c,()=>L.expireStr(),b),c})()]};var st={exports:{}};(function(f,L){(function(c,g){f.exports=g()})(et,function(){return function(c,g,b){c=c||{};var S=g.prototype,x={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Y(h,l,u,w){return S.fromToBase(h,l,u,w)}b.en.relativeTime=x,S.fromToBase=function(h,l,u,w,m){for(var O,A,p,H=u.$locale().relativeTime||x,W=c.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],P=W.length,j=0;j<P;j+=1){var v=W[j];v.d&&(O=w?b(h).diff(u,v.d,!0):u.diff(h,v.d,!0));var D=(c.rounding||Math.round)(Math.abs(O));if(p=O>0,D<=v.r||!v.r){D<=1&&j>0&&(v=W[j-1]);var I=H[v.l];m&&(D=m(""+D)),A=typeof I=="string"?I.replace("%d",D):I(D,l,v.l,p);break}}if(l)return A;var E=p?H.future:H.past;return typeof E=="function"?E(A):E.replace("%s",A)},S.to=function(h,l){return Y(h,l,this,!0)},S.from=function(h,l){return Y(h,l,this)};var N=function(h){return h.$u?b.utc():b()};S.toNow=function(h){return this.to(N(this),h)},S.fromNow=function(h){return this.from(N(this),h)}}})})(st);var St=st.exports;const wt=nt(St);Q.extend(wt);function _t(f){return Q(f).fromNow()}const xt=Z('<div class="flex flex-col gap-2"><h1 class="pm-4 flex items-center text-lg font-semibold"><button class="btn btn-circle btn-ghost btn-sm ml-2">'),Dt=Z('<div class="mr-10 flex items-center justify-between"><span></span><div><button class="btn btn-circle btn-sm mr-2"></button><button class="btn btn-circle btn-sm">'),Ct=Z('<div class="text-sm text-slate-500"> :: Updated '),Nt=()=>{const[f]=at(),{proxyProviders:L,updateProviderByProviderName:c,updateAllProvider:g,healthCheckByProviderName:b}=$t(),[S,x]=ot({}),Y=async(l,u)=>{const w=l.target;w.classList.add("animate-pulse"),l.stopPropagation(),await b(u),w.classList.remove("animate-pulse")},N=async(l,u)=>{const w=l.target;w.classList.add("animate-spin"),l.stopPropagation(),await c(u),w.classList.remove("animate-spin")},h=async l=>{const u=l.target;u.classList.add("animate-spin"),l.stopPropagation(),await g(),u.classList.remove("animate-spin")};return(()=>{const l=xt(),u=l.firstChild,w=u.firstChild;return k(u,()=>f("proxyProviders"),w),w.$$click=m=>h(m),k(w,U(X,{})),k(l,U(mt,{get subChild(){return L().map(m=>{const O=[(()=>{const p=Dt(),H=p.firstChild,W=H.nextSibling,P=W.firstChild,j=P.nextSibling;return k(H,()=>m.name),P.$$click=v=>N(v,m.name),k(P,U(X,{})),j.$$click=v=>Y(v,m.name),k(j,U(ut,{})),p})(),U(bt,{get subscriptionInfo(){return m.subscriptionInfo}}),(()=>{const p=Ct(),H=p.firstChild;return k(p,()=>m.vehicleType,H),k(p,()=>_t(m.updatedAt),null),p})(),U(ct,{get when(){return!S()[`provider-${m.name}`]},get children(){return U(dt,{get proxyNameList(){return m.proxies.map(p=>p.name)??[]}})}})],A=U(ft,{get proxies(){return m.proxies.map(p=>p.name)}});return U(ht,{get isOpen(){return S()[`provider-${m.name}`]},title:O,content:A,onCollapse:p=>x({...S(),[`provider-${m.name}`]:p})})})}}),null),l})()};lt(["click"]);export{Nt as default};
