var ke=Object.defineProperty;var Me=(e,r,t)=>r in e?ke(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var Q=(e,r,t)=>(Me(e,typeof r!="symbol"?r+"":r,t),t);import{H as Pe,Q as Ie,b as S,O as ue,S as Ae,i as M,f as ae,g as De,T as Re,U as je,J as V,V as j,h as K,W as Se,X as we,v as ne,L as te,E as Ce,c as X,Y as U,F as ee,m as pe,Z as me,r as Fe,_ as Te,$ as Ke,a0 as Le,t as qe,d as Ve}from"./vendor-9ef7e570.js";import{c as Ne,a as We}from"./index-872321fd.js";import{c as He,f as ye,g as Ue,a as Xe}from"./index-3016665b.js";import{b as re}from"./index-ac54fc13.js";import{A}from"./enum-cbdb10ae.js";import{u as ze,w as Be,b as Ye}from"./index-c727de2c.js";const he="[a-fA-F\\d:]",z=e=>e&&e.includeBoundaries?`(?:(?<=\\s|^)(?=${he})|(?<=${he})(?=\\s|$))`:"",q="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",D="[a-fA-F\\d]{1,4}",oe=`
(?:
(?:${D}:){7}(?:${D}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${D}:){6}(?:${q}|:${D}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${D}:){5}(?::${q}|(?::${D}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${D}:){4}(?:(?::${D}){0,1}:${q}|(?::${D}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${D}:){3}(?:(?::${D}){0,2}:${q}|(?::${D}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${D}:){2}(?:(?::${D}){0,3}:${q}|(?::${D}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${D}:){1}(?:(?::${D}){0,4}:${q}|(?::${D}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${D}){0,5}:${q}|(?::${D}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),Je=new RegExp(`(?:^${q}$)|(?:^${oe}$)`),Ze=new RegExp(`^${q}$`),Ge=new RegExp(`^${oe}$`),ge=e=>e&&e.exact?Je:new RegExp(`(?:${z(e)}${q}${z(e)})|(?:${z(e)}${oe}${z(e)})`,"g");ge.v4=e=>e&&e.exact?Ze:new RegExp(`${z(e)}${q}${z(e)}`,"g");ge.v6=e=>e&&e.exact?Ge:new RegExp(`${z(e)}${oe}${z(e)}`,"g");function Qe(e){const r=(...t)=>e(...t);return Object.defineProperty(r,"name",{value:`functionTimeout(${e.name||"<anonymous>"})`,configurable:!0}),r}const{toString:et}=Object.prototype;function tt(e){return et.call(e)==="[object RegExp]"}const xe={global:"g",ignoreCase:"i",multiline:"m",dotAll:"s",sticky:"y",unicode:"u"};function rt(e,r={}){if(!tt(e))throw new TypeError("Expected a RegExp instance");const t=Object.keys(xe).map(s=>(typeof r[s]=="boolean"?r[s]:e[s])?xe[s]:"").join(""),o=new RegExp(r.source||e.source,t);return o.lastIndex=typeof r.lastIndex=="number"?r.lastIndex:e.lastIndex,o}function at(e,r,{timeout:t}={}){try{return Qe(()=>rt(e).test(r),{timeout:t})()}catch(o){throw o}}const nt=45,ot={timeout:400};function st(e){return e.length>nt?!1:at(ge.v6({exact:!0}),e,ot)}const lt=K("<div>");var se=class{constructor(e){Q(this,"x");Q(this,"y");Q(this,"width");Q(this,"height");this.x=Math.floor(e.x),this.y=Math.floor(e.y),this.width=Math.floor(e.width),this.height=Math.floor(e.height)}get rect(){return{x:this.x,y:this.y,width:this.width,height:this.height}}get left(){return this.x}get top(){return this.y}get right(){return this.x+this.width}get bottom(){return this.y+this.height}get center(){return{x:this.x+this.width*.5,y:this.y+this.height*.5}}get corners(){return{topLeft:{x:this.left,y:this.top},topRight:{x:this.right,y:this.top},bottomRight:{x:this.left,y:this.bottom},bottomLeft:{x:this.right,y:this.bottom}}}},Z=e=>{let r=new se(e.getBoundingClientRect());const{transform:t}=getComputedStyle(e);return t&&(r=ct(r,t)),r},ct=(e,r)=>{let t,o;if(r.startsWith("matrix3d(")){const s=r.slice(9,-1).split(/, /);t=+s[12],o=+s[13]}else if(r.startsWith("matrix(")){const s=r.slice(7,-1).split(/, /);t=+s[4],o=+s[5]}else t=0,o=0;return new se({...e,x:e.x-t,y:e.y-o})},N=()=>({x:0,y:0}),ve=(e,r)=>e.x===r.x&&e.y===r.y,ie=(e,r)=>new se({...e,x:e.x+r.x,y:e.y+r.y}),it=(e,r)=>Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2)),dt=(e,r)=>{const t=Math.max(e.top,r.top),o=Math.max(e.left,r.left),s=Math.min(e.right,r.right),p=Math.min(e.bottom,r.bottom),i=s-o,m=p-t;if(o<s&&t<p){const c=e.width*e.height,v=r.width*r.height,d=i*m;return d/(c+v-d)}return 0},de=(e,r)=>e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height,ut=(e,r,t)=>{const o=e.transformed.center,s={distance:1/0,droppable:null};for(const p of r){const i=it(o,p.layout.center);i<s.distance?(s.distance=i,s.droppable=p):i===s.distance&&p.id===t.activeDroppableId&&(s.droppable=p)}return s.droppable},gt=(e,r,t)=>{const o=e.transformed,s={ratio:0,droppable:null};for(const p of r){const i=dt(o,p.layout);i>s.ratio?(s.ratio=i,s.droppable=p):i>0&&i===s.ratio&&p.id===t.activeDroppableId&&(s.droppable=p)}return s.droppable},_e=Se(),vt=e=>{const r=Pe({collisionDetector:gt},e),[t,o]=Ie({draggables:{},droppables:{},sensors:{},active:{draggableId:null,get draggable(){return t.active.draggableId!==null?t.draggables[t.active.draggableId]:null},droppableId:null,get droppable(){return t.active.droppableId!==null?t.droppables[t.active.droppableId]:null},sensorId:null,get sensor(){return t.active.sensorId!==null?t.sensors[t.active.sensorId]:null},overlay:null}}),s=(n,l,u)=>{n.substring(0,n.length-1),j(()=>t[n][l])&&o(n,l,"transformers",u.id,u)},p=(n,l,u)=>{n.substring(0,n.length-1),j(()=>t[n][l])&&j(()=>t[n][l].transformers[u])&&o(n,l,"transformers",u,void 0)},i=({id:n,node:l,layout:u,data:P})=>{const b=t.draggables[n],f={id:n,node:l,layout:u,data:P,_pendingCleanup:!1};let $;if(!b)Object.defineProperties(f,{transformers:{enumerable:!0,configurable:!0,writable:!0,value:{}},transform:{enumerable:!0,configurable:!0,get:()=>{if(t.active.overlay)return N();const O=Object.values(t.draggables[n].transformers);return O.sort((L,J)=>L.order-J.order),O.reduce((L,J)=>J.callback(L),N())}},transformed:{enumerable:!0,configurable:!0,get:()=>ie(t.draggables[n].layout,t.draggables[n].transform)}});else if(t.active.draggableId===n&&!t.active.overlay){const O={x:b.layout.x-u.x,y:b.layout.y-u.y},L="addDraggable-existing-offset",J=b.transformers[L],be=J?J.callback(O):O;$={id:L,order:100,callback:fe=>({x:fe.x+be.x,y:fe.y+be.y})},H(()=>p("draggables",n,L))}U(()=>{o("draggables",n,f),$&&s("draggables",n,$)}),t.active.draggable&&E()},m=n=>{j(()=>t.draggables[n])&&(o("draggables",n,"_pendingCleanup",!0),queueMicrotask(()=>c(n)))},c=n=>{var l;if((l=t.draggables[n])!=null&&l._pendingCleanup){const u=t.active.draggableId===n;U(()=>{u&&o("active","draggableId",null),o("draggables",n,void 0)})}},v=({id:n,node:l,layout:u,data:P})=>{const b=t.droppables[n],f={id:n,node:l,layout:u,data:P,_pendingCleanup:!1};b||Object.defineProperties(f,{transformers:{enumerable:!0,configurable:!0,writable:!0,value:{}},transform:{enumerable:!0,configurable:!0,get:()=>{const $=Object.values(t.droppables[n].transformers);return $.sort((O,L)=>O.order-L.order),$.reduce((O,L)=>L.callback(O),N())}},transformed:{enumerable:!0,configurable:!0,get:()=>ie(t.droppables[n].layout,t.droppables[n].transform)}}),o("droppables",n,f),t.active.draggable&&E()},d=n=>{j(()=>t.droppables[n])&&(o("droppables",n,"_pendingCleanup",!0),queueMicrotask(()=>y(n)))},y=n=>{var l;if((l=t.droppables[n])!=null&&l._pendingCleanup){const u=t.active.droppableId===n;U(()=>{u&&o("active","droppableId",null),o("droppables",n,void 0)})}},I=({id:n,activators:l})=>{o("sensors",n,{id:n,activators:l,coordinates:{origin:{x:0,y:0},current:{x:0,y:0},get delta(){return{x:t.sensors[n].coordinates.current.x-t.sensors[n].coordinates.origin.x,y:t.sensors[n].coordinates.current.y-t.sensors[n].coordinates.origin.y}}}})},w=n=>{if(!j(()=>t.sensors[n]))return;const l=t.active.sensorId===n;U(()=>{l&&o("active","sensorId",null),o("sensors",n,void 0)})},h=({node:n,layout:l})=>{const u=t.active.overlay,P={node:n,layout:l};u||Object.defineProperties(P,{id:{enumerable:!0,configurable:!0,get:()=>{var b;return(b=t.active.draggable)==null?void 0:b.id}},data:{enumerable:!0,configurable:!0,get:()=>{var b;return(b=t.active.draggable)==null?void 0:b.data}},transformers:{enumerable:!0,configurable:!0,get:()=>Object.fromEntries(Object.entries(t.active.draggable?t.active.draggable.transformers:{}).filter(([b])=>b!=="addDraggable-existing-offset"))},transform:{enumerable:!0,configurable:!0,get:()=>{const b=Object.values(t.active.overlay?t.active.overlay.transformers:[]);return b.sort((f,$)=>f.order-$.order),b.reduce((f,$)=>$.callback(f),N())}},transformed:{enumerable:!0,configurable:!0,get:()=>t.active.overlay?ie(t.active.overlay.layout,t.active.overlay.transform):new se({x:0,y:0,width:0,height:0})}}),o("active","overlay",P)},C=()=>o("active","overlay",null),a=(n,l)=>{U(()=>{o("sensors",n,"coordinates",{origin:{...l},current:{...l}}),o("active","sensorId",n)})},g=n=>{const l=t.active.sensorId;l&&o("sensors",l,"coordinates","current",{...n})},_=()=>o("active","sensorId",null),R=(n,l)=>{const u={};for(const b of Object.values(t.sensors))if(b)for(const[f,$]of Object.entries(b.activators))u[f]??(u[f]=[]),u[f].push({sensor:b,activator:$});const P={};for(const b in u){let f=b;l&&(f=`on${b}`),P[f]=$=>{for(const{activator:O}of u[b]){if(t.active.sensor)break;O($,n)}}}return P},E=()=>{let n=!1;const l=Object.values(t.draggables),u=Object.values(t.droppables),P=t.active.overlay;return U(()=>{const b=new WeakMap;for(const f of l)if(f){const $=f.layout;b.has(f.node)||b.set(f.node,Z(f.node));const O=b.get(f.node);de($,O)||(o("draggables",f.id,"layout",O),n=!0)}for(const f of u)if(f){const $=f.layout;b.has(f.node)||b.set(f.node,Z(f.node));const O=b.get(f.node);de($,O)||(o("droppables",f.id,"layout",O),n=!0)}if(P){const f=P.layout,$=Z(P.node);de(f,$)||(o("active","overlay","layout",$),n=!0)}}),n},x=()=>{const n=t.active.overlay??t.active.draggable;if(n){const l=r.collisionDetector(n,Object.values(t.droppables),{activeDroppableId:t.active.droppableId}),u=l?l.id:null;t.active.droppableId!==u&&o("active","droppableId",u)}},k=n=>{const l={id:"sensorMove",order:0,callback:u=>t.active.sensor?{x:u.x+t.active.sensor.coordinates.delta.x,y:u.y+t.active.sensor.coordinates.delta.y}:u};E(),U(()=>{o("active","draggableId",n),s("draggables",n,l)}),x()},Y=()=>{const n=j(()=>t.active.draggableId);U(()=>{n!==null&&p("draggables",n,"sensorMove"),o("active",["draggableId","droppableId"],null)}),E()},F=n=>{V(()=>{const l=t.active.draggable;l&&j(()=>n({draggable:l}))})},W=n=>{V(()=>{const l=t.active.draggable;if(l){const u=j(()=>t.active.overlay);Object.values(u?u.transform:l.transform),j(()=>n({draggable:l,overlay:u}))}})},T=n=>{V(()=>{const l=t.active.draggable,u=t.active.droppable;l&&j(()=>n({draggable:l,droppable:u,overlay:t.active.overlay}))})},H=n=>{V(({previousDraggable:l,previousDroppable:u,previousOverlay:P})=>{const b=t.active.draggable,f=b?t.active.droppable:null,$=b?t.active.overlay:null;return!b&&l&&j(()=>n({draggable:l,droppable:u,overlay:P})),{previousDraggable:b,previousDroppable:f,previousOverlay:$}},{previousDraggable:null,previousDroppable:null,previousOverlay:null})};W(()=>x()),r.onDragStart&&F(r.onDragStart),r.onDragMove&&W(r.onDragMove),r.onDragOver&&T(r.onDragOver),r.onDragEnd&&H(r.onDragEnd);const ce=[t,{addTransformer:s,removeTransformer:p,addDraggable:i,removeDraggable:m,addDroppable:v,removeDroppable:d,addSensor:I,removeSensor:w,setOverlay:h,clearOverlay:C,recomputeLayouts:E,detectCollisions:x,draggableActivators:R,sensorStart:a,sensorMove:g,sensorEnd:_,dragStart:k,dragEnd:Y,onDragStart:F,onDragMove:W,onDragOver:T,onDragEnd:H}];return S(_e.Provider,{value:ce,get children(){return r.children}})},B=()=>we(_e)||null,bt=(e="pointer-sensor")=>{const[r,{addSensor:t,removeSensor:o,sensorStart:s,sensorMove:p,sensorEnd:i,dragStart:m,dragEnd:c}]=B(),v=250,d=10;ne(()=>{t({id:e,activators:{pointerdown:C}})}),te(()=>{o(e)});const y=()=>r.active.sensorId===e,I={x:0,y:0};let w=null,h=null;const C=(x,k)=>{x.button===0&&(document.addEventListener("pointermove",_),document.addEventListener("pointerup",R),h=k,I.x=x.clientX,I.y=x.clientY,w=window.setTimeout(g,v))},a=()=>{w&&(clearTimeout(w),w=null),document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",R),document.removeEventListener("selectionchange",E)},g=()=>{r.active.sensor?y()||a():(s(e,I),m(h),E(),document.addEventListener("selectionchange",E))},_=x=>{const k={x:x.clientX,y:x.clientY};if(!r.active.sensor){const Y={x:k.x-I.x,y:k.y-I.y};Math.sqrt(Y.x**2+Y.y**2)>d&&g()}y()&&(x.preventDefault(),p(k))},R=x=>{a(),y()&&(x.preventDefault(),c(),i())},E=()=>{var x;(x=window.getSelection())==null||x.removeAllRanges()}},ft=e=>(bt(),ue(()=>e.children)),le=e=>({transform:`translate3d(${e.x}px, ${e.y}px, 0)`}),pt=(e,r={})=>{const[t,{addDraggable:o,removeDraggable:s,draggableActivators:p}]=B(),[i,m]=X(null);ne(()=>{const y=i();y&&o({id:e,node:y,layout:Z(y),data:r})}),te(()=>s(e));const c=()=>t.active.draggableId===e,v=()=>{var y;return((y=t.draggables[e])==null?void 0:y.transform)||N()};return Object.defineProperties((y,I)=>{const w=I?I():{};V(()=>{const h=i(),C=p(e);if(h)for(const a in C)h.addEventListener(a,C[a]);te(()=>{if(h)for(const a in C)h.removeEventListener(a,C[a])})}),m(y),w.skipTransform||V(()=>{const h=v();if(ve(h,N()))y.style.removeProperty("transform");else{const C=le(v());y.style.setProperty("transform",C.transform??null)}})},{ref:{enumerable:!0,value:m},isActiveDraggable:{enumerable:!0,get:c},dragActivators:{enumerable:!0,get:()=>p(e,!0)},transform:{enumerable:!0,get:v}})},mt=(e,r={})=>{const[t,{addDroppable:o,removeDroppable:s}]=B(),[p,i]=X(null);ne(()=>{const d=p();d&&o({id:e,node:d,layout:Z(d),data:r})}),te(()=>s(e));const m=()=>t.active.droppableId===e,c=()=>{var d;return((d=t.droppables[e])==null?void 0:d.transform)||N()};return Object.defineProperties((d,y)=>{const I=y?y():{};i(d),I.skipTransform||V(()=>{const w=c();if(ve(w,N()))d.style.removeProperty("transform");else{const h=le(c());d.style.setProperty("transform",h.transform??null)}})},{ref:{enumerable:!0,value:i},isActiveDroppable:{enumerable:!0,get:m},transform:{enumerable:!0,get:c}})},yt=e=>{const[r,{onDragStart:t,onDragEnd:o,setOverlay:s,clearOverlay:p}]=B();let i;t(({draggable:c})=>{s({node:c.node,layout:c.layout}),queueMicrotask(()=>{if(i){const v=Z(i),d={x:(c.layout.width-v.width)/2,y:(c.layout.height-v.height)/2};v.x+=d.x,v.y+=d.y,s({node:i,layout:v})}})}),o(()=>queueMicrotask(p));const m=()=>{const c=r.active.overlay,v=r.active.draggable;return!c||!v?{}:{position:"fixed",transition:"transform 0s",top:`${c.layout.top}px`,left:`${c.layout.left}px`,"min-width":`${v.layout.width}px`,"min-height":`${v.layout.height}px`,...le(c.transform),...e.style}};return S(je,{get mount(){return document.body},get children(){return S(Ae,{get when(){return r.active.draggable},get children(){const c=lt(),v=i;return typeof v=="function"?Ce(v,c):i=c,M(c,(()=>{const d=ue(()=>typeof e.children=="function");return()=>d()?e.children(r.active.draggable):e.children})()),ae(d=>{const y=e.class,I=m();return y!==d._v$&&De(c,d._v$=y),d._v$2=Re(c,I,d._v$2),d},{_v$:void 0,_v$2:void 0}),c}})}})},ht=(e,r,t)=>{const o=e.slice();return o.splice(t,0,...o.splice(r,1)),o},Oe=Se(),xt=e=>{const[r]=B(),[t,o]=Ie({initialIds:[],sortedIds:[]}),s=m=>m>=0&&m<t.initialIds.length;V(()=>{o("initialIds",[...e.ids]),o("sortedIds",[...e.ids])}),V(()=>{r.active.draggableId&&r.active.droppableId?j(()=>{const m=t.sortedIds.indexOf(r.active.draggableId),c=t.initialIds.indexOf(r.active.droppableId);if(!s(m)||!s(c))o("sortedIds",[...e.ids]);else if(m!==c){const v=ht(t.sortedIds,m,c);o("sortedIds",v)}}):o("sortedIds",[...e.ids])});const i=[t,{}];return S(Oe.Provider,{value:i,get children(){return e.children}})},$t=()=>we(Oe)||null,It=(e,r)=>t=>{e(t),r(t)},Dt=(e,r={})=>{const[t,{addTransformer:o,removeTransformer:s}]=B(),[p]=$t(),i=pt(e,r),m=mt(e,r),c=It(i.ref,m.ref),v=()=>p.initialIds.indexOf(e),d=()=>p.sortedIds.indexOf(e),y=a=>{var g;return((g=t.droppables[a])==null?void 0:g.layout)||null},I=()=>{const a=N(),g=v(),_=d();if(_!==g){const R=y(e),E=y(p.initialIds[_]);R&&E&&(a.x=E.x-R.x,a.y=E.y-R.y)}return a},w={id:"sortableOffset",order:100,callback:a=>{const g=I();return{x:a.x+g.x,y:a.y+g.y}}};ne(()=>o("droppables",e,w)),te(()=>s("droppables",e,w.id));const h=()=>{var a,g;return(e===t.active.draggableId&&!t.active.overlay?(a=t.draggables[e])==null?void 0:a.transform:(g=t.droppables[e])==null?void 0:g.transform)||N()};return Object.defineProperties(a=>{i(a,()=>({skipTransform:!0})),m(a,()=>({skipTransform:!0})),V(()=>{const g=h();if(ve(g,N()))a.style.removeProperty("transform");else{const _=le(h());a.style.setProperty("transform",_.transform??null)}})},{ref:{enumerable:!0,value:c},transform:{enumerable:!0,get:h},isActiveDraggable:{enumerable:!0,get:()=>i.isActiveDraggable},dragActivators:{enumerable:!0,get:()=>i.dragActivators},isActiveDroppable:{enumerable:!0,get:()=>m.isActiveDroppable}})};const St=K('<div class="sortable"><div class="m-1 flex cursor-grab justify-between p-1"><span class="select-none"></span><input type="checkbox" class="toggle">'),wt=K('<input type="checkbox" id="connection-modal" class="modal-toggle">'),Ct=K('<div class="column self-stretch">'),_t=K('<div class="sortable">'),Ot=K('<div class="modal"><div class="modal-box w-80"></div><label class="modal-backdrop" for="connection-modal">'),Et=e=>{const[r,t]=X(null),o=({draggable:i})=>t(i.id),s=({draggable:i,droppable:m})=>{if(i&&m){const c=e.order,v=c.indexOf(i.id),d=c.indexOf(m.id);if(v!==d){const y=c.slice();y.splice(d,0,...y.splice(v,1)),e.onOrderChange(y)}}},p=i=>{const m=i.key,c=Dt(m),[v]=B();return(()=>{const d=St(),y=d.firstChild,I=y.firstChild,w=I.nextSibling;return Ce(c,d,()=>!0),M(I,m),w.addEventListener("change",h=>{e.onVisibleChange({...e.visible,[m]:h.target.checked})}),ae(h=>{const C=!!c.isActiveDraggable,a=!!v.active.draggable;return C!==h._v$&&d.classList.toggle("opacity-25",h._v$=C),a!==h._v$2&&d.classList.toggle("transition-transform",h._v$2=a),h},{_v$:void 0,_v$2:void 0}),ae(()=>w.checked=e.visible[m]),d})()};return[wt(),(()=>{const i=Ot(),m=i.firstChild;return M(m,S(vt,{onDragStart:o,onDragEnd:s,collisionDetector:ut,get children(){return[S(ft,{}),(()=>{const c=Ct();return M(c,S(xt,{get ids(){return e.order},get children(){return S(ee,{get each(){return e.order},children:v=>S(p,{key:v})})}})),c})(),S(yt,{get children(){const c=_t();return M(c,r),c}})]}})),i})()]},$e=K('<div class="flex h-full items-center"><button class="btn btn-circle btn-xs">'),kt=K('<div class="flex flex-col gap-4"><div class="flex w-full"><input class="input input-primary mr-4 w-40 flex-1" placeholder="Search"><label for="connection-modal" class="btn btn-circle"></label></div><div class="overflow-x-auto whitespace-nowrap"><table class="table table-xs bg-base-200"><thead></thead><tbody>'),Mt=K("<tr>"),Pt=K('<th class="bg-base-300"><div>'),At=K('<tr class="hover">'),Rt=K("<td>"),Ee=Object.values(A),jt={...Object.fromEntries(Ee.map(e=>[e,!0])),[A.ID]:!1},Wt=()=>{const[e,r]=pe(X(jt),{name:"columnVisibility",storage:localStorage}),[t,o]=pe(X(Ee),{name:"columnOrder",storage:localStorage}),s=ze(),[p,i]=X(""),m=Ne(`${Be()}/connections?token=${Ye()}`),c=We(m,"message"),[v,d]=X([]);V(()=>{var g;const a=(g=c())==null?void 0:g.data;a&&d(_=>{const R=new Map;return _.forEach(x=>R.set(x.id,x)),JSON.parse(a).connections.map(x=>{const k=R.get(x.id);return k?{...x,downloadSpeed:k.download?x.download-k.download:0,uploadSpeed:k.upload?x.upload-k.upload:0}:{...x,downloadSpeed:0,uploadSpeed:0}}).slice(-100)})});const y=a=>s.delete(`connections/${a}`),I=[{accessorKey:A.Close,header:()=>(()=>{const a=$e(),g=a.firstChild;return g.$$click=()=>s.delete("connections"),M(g,S(me,{size:"18"})),a})(),cell:({row:a})=>(()=>{const g=$e(),_=g.firstChild;return _.$$click=()=>y(a.id),M(_,S(me,{size:"18"})),g})()},{accessorKey:A.ID,accessorFn:a=>a.id},{accessorKey:A.Type,accessorFn:a=>`${a.metadata.type}(${a.metadata.network})`},{accessorKey:A.Process,accessorFn:a=>a.metadata.process||a.metadata.processPath.replace(/^.*[/\\](.*)$/,"$1")||"-"},{accessorKey:A.Host,accessorFn:a=>`${a.metadata.host?a.metadata.host:a.metadata.destinationIP}:${a.metadata.destinationPort}`},{accessorKey:A.Rule,accessorFn:a=>a.rulePayload?`${a.rule} :: ${a.rulePayload}`:a.rule},{accessorKey:A.Chains,accessorFn:a=>a.chains.slice().reverse().join(" :: ")},{accessorKey:A.DlSpeed,accessorFn:a=>`${re(a.downloadSpeed)}/s`,sortingFn:(a,g)=>a.original.downloadSpeed-g.original.downloadSpeed},{accessorKey:A.ULSpeed,accessorFn:a=>`${re(a.uploadSpeed)}/s`,sortingFn:(a,g)=>a.original.uploadSpeed-g.original.uploadSpeed},{accessorKey:A.Download,accessorFn:a=>re(a.download),sortingFn:(a,g)=>a.original.download-g.original.download},{accessorKey:A.Upload,accessorFn:a=>re(a.upload),sortingFn:(a,g)=>a.original.upload-g.original.upload},{accessorKey:A.Source,accessorFn:a=>st(a.metadata.sourceIP)?`[${a.metadata.sourceIP}]:${a.metadata.sourcePort}`:`${a.metadata.sourceIP}:${a.metadata.sourcePort}`},{accessorKey:A.Destination,accessorFn:a=>a.metadata.remoteDestination||a.metadata.destinationIP||a.metadata.host}],[w,h]=X([{id:"ID",desc:!0}]),C=He({state:{get columnOrder(){return t()},get sorting(){return w()},get columnVisibility(){return e()}},get data(){return p()?v().filter(a=>Object.values(a).some(g=>JSON.stringify(g).toLowerCase().includes(p().toLowerCase()))):v()},enableHiding:!0,columns:I,onSortingChange:h,getSortedRowModel:Ue(),getCoreRowModel:Xe()});return(()=>{const a=kt(),g=a.firstChild,_=g.firstChild,R=_.nextSibling,E=g.nextSibling,x=E.firstChild,k=x.firstChild,Y=k.nextSibling;return _.$$input=F=>i(F.target.value),M(R,S(Fe,{})),M(g,S(Et,{get order(){return t()},get visible(){return e()},onOrderChange:F=>{o([...F])},onVisibleChange:F=>r({...F})}),null),M(k,S(ee,{get each(){return C.getHeaderGroups()},children:F=>(()=>{const W=Mt();return M(W,S(ee,{get each(){return F.headers},children:T=>(()=>{const H=Pt(),G=H.firstChild;return Te(G,"click",T.column.getToggleSortingHandler(),!0),M(G,(()=>{const ce=ue(()=>!!T.isPlaceholder);return()=>ce()?null:ye(T.column.columnDef.header,T.getContext())})(),null),M(G,()=>({asc:S(Ke,{}),desc:S(Le,{})})[T.column.getIsSorted()]??null,null),ae(()=>De(G,qe("flex items-center justify-between",T.column.getCanSort()&&"cursor-pointer select-none"))),H})()})),W})()})),M(Y,S(ee,{get each(){return C.getRowModel().rows},children:F=>(()=>{const W=At();return M(W,S(ee,{get each(){return F.getVisibleCells()},children:T=>(()=>{const H=Rt();return M(H,()=>ye(T.column.columnDef.cell,T.getContext())),H})()})),W})()})),a})()};Ve(["click","input"]);export{Wt as default};
