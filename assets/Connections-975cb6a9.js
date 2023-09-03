import{u as G,f as E,i as r,c as a,$ as te,a0 as ne,a1 as ae,F,a2 as se,S as oe,a3 as re,b as g,a4 as ce,a5 as le,U as ie,j as A,e as z,E as de,a6 as H,d as k,C as ue,a7 as ge,h as $e,a8 as me,a9 as pe,l as be,t as fe,r as he,g as ve}from"./vendor-bcbfc1b2.js";import{c as Ce,a as Se}from"./index-8592a353.js";import{c as xe,f as W,g as _e,a as ye}from"./index-9f132d0e.js";import{c as X,d as Z,B as V,u as we,w as Ie,b as Ee,f as l}from"./index-614d0540.js";const Re=g('<div class="sortable"><div class="m-1 flex cursor-grab justify-between p-1"><span class="select-none"></span><input type="checkbox" class="toggle">'),Oe=g('<input type="checkbox" id="connection-modal" class="modal-toggle">'),De=g('<div class="column self-stretch">'),Fe=g('<div class="sortable">'),Pe=g('<div class="modal"><div class="modal-box w-80"></div><label class="modal-backdrop" for="connection-modal">'),Le=t=>{const[o]=G(),[m,f]=E(null),C=({draggable:c})=>f(c.id),P=({draggable:c,droppable:p})=>{if(c&&p){const i=t.order,d=i.indexOf(c.id),y=i.indexOf(p.id);if(d!==y){const S=i.slice();S.splice(y,0,...S.splice(d,1)),t.onOrderChange(S)}}},L=({key:c})=>{const p=ce(c),[i]=le();return(()=>{const d=Re(),y=d.firstChild,S=y.firstChild,T=S.nextSibling;return ie(p,d,()=>!0),r(S,()=>o(c)),T.addEventListener("change",h=>{t.onVisibleChange({...t.visible,[c]:h.target.checked})}),A(h=>{const K=!!p.isActiveDraggable,R=!!i.active.draggable;return K!==h._v$&&d.classList.toggle("opacity-25",h._v$=K),R!==h._v$2&&d.classList.toggle("transition-transform",h._v$2=R),h},{_v$:void 0,_v$2:void 0}),A(()=>T.checked=t.visible[c]),d})()};return[Oe(),(()=>{const c=Pe(),p=c.firstChild;return r(p,a(re,{onDragStart:C,onDragEnd:P,collisionDetector:te,get children(){return[a(ne,{}),(()=>{const i=De();return r(i,a(ae,{get ids(){return t.order},get children(){return a(F,{get each(){return t.order},children:d=>a(L,{key:d})})}})),i})(),a(se,{get children(){return a(oe,{get when(){return m()},get children(){const i=Fe();return r(i,()=>o(m())),i}})}})]}}),null),r(p,a(V,{class:"btn-neutral btn-sm ml-auto mt-4 block",onClick:()=>{t.onOrderChange(X),t.onVisibleChange(Z)},get children(){return o("reset")}}),null),c})()]};var Te=async t=>{typeof t=="string"?await navigator.clipboard.writeText(t):await navigator.clipboard.write(t)};const q="[a-fA-F\\d:]",_=t=>t&&t.includeBoundaries?`(?:(?<=\\s|^)(?=${q})|(?<=${q})(?=\\s|$))`:"",$="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",M=`
(?:
(?:${n}:){7}(?:${n}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${n}:){6}(?:${$}|:${n}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${n}:){5}(?::${$}|(?::${n}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${n}:){4}(?:(?::${n}){0,1}:${$}|(?::${n}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${n}:){3}(?:(?::${n}){0,2}:${$}|(?::${n}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${n}:){2}(?:(?::${n}){0,3}:${$}|(?::${n}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${n}:){1}(?:(?::${n}){0,4}:${$}|(?::${n}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${n}){0,5}:${$}|(?::${n}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),Ke=new RegExp(`(?:^${$}$)|(?:^${M}$)`),Ne=new RegExp(`^${$}$`),ke=new RegExp(`^${M}$`),j=t=>t&&t.exact?Ke:new RegExp(`(?:${_(t)}${$}${_(t)})|(?:${_(t)}${M}${_(t)})`,"g");j.v4=t=>t&&t.exact?Ne:new RegExp(`${_(t)}${$}${_(t)}`,"g");j.v6=t=>t&&t.exact?ke:new RegExp(`${_(t)}${M}${_(t)}`,"g");function Ae(t){const o=(...m)=>t(...m);return Object.defineProperty(o,"name",{value:`functionTimeout(${t.name||"<anonymous>"})`,configurable:!0}),o}const{toString:Me}=Object.prototype;function Ve(t){return Me.call(t)==="[object RegExp]"}const J={global:"g",ignoreCase:"i",multiline:"m",dotAll:"s",sticky:"y",unicode:"u"};function je(t,o={}){if(!Ve(t))throw new TypeError("Expected a RegExp instance");const m=Object.keys(J).map(C=>(typeof o[C]=="boolean"?o[C]:t[C])?J[C]:"").join(""),f=new RegExp(o.source||t.source,m);return f.lastIndex=typeof o.lastIndex=="number"?o.lastIndex:t.lastIndex,f}function Be(t,o,{timeout:m}={}){try{return Ae(()=>je(t).test(o),{timeout:m})()}catch(f){throw f}}const Ue=45,ze={timeout:400};function He(t){return t.length>Ue?!1:Be(j.v6({exact:!0}),t,ze)}const Y=g('<div class="flex h-full items-center">'),We=g('<div class="flex flex-col gap-4"><div class="flex w-full"><input class="input input-primary mr-4 w-40 flex-1"><label for="connection-modal" class="btn btn-circle"></label></div><div class="overflow-x-auto whitespace-nowrap rounded-md"><table class="table table-xs rounded-none bg-base-200"><thead></thead><tbody>'),qe=g("<tr>"),Je=g('<th class="bg-base-300"><div>'),Ye=g("<span>"),Ge=g('<tr class="hover">'),Xe=g("<td>"),nt=()=>{const[t]=G(),[o,m]=z(E(Z),{name:"columnVisibility",storage:localStorage}),[f,C]=z(E(X),{name:"columnOrder",storage:localStorage}),P=we(),[L,c]=E(""),p=Ce(`${Ie()}/connections?token=${Ee()}`),i=Se(p,"message"),[d,y]=E([]);de(()=>{var s;const e=(s=i())==null?void 0:s.data;e&&y(O=>{const N=new Map;return O.forEach(b=>N.set(b.id,b)),JSON.parse(e).connections.map(b=>{const x=N.get(b.id);return x?{...b,downloadSpeed:x.download?b.download-x.download:0,uploadSpeed:x.upload?b.upload-x.upload:0}:{...b,downloadSpeed:0,uploadSpeed:0}}).slice(-100)})});const S=e=>P.delete(`connections/${e}`),T=[{accessorKey:l.Close,enableSorting:!1,header:()=>(()=>{const e=Y();return r(e,a(V,{class:"btn-circle btn-xs",onClick:()=>P.delete("connections"),get children(){return a(H,{size:"18"})}})),e})(),cell:({row:e})=>(()=>{const s=Y();return r(s,a(V,{class:"btn-circle btn-xs",onClick:()=>S(e.id),get children(){return a(H,{size:"18"})}})),s})()},{accessorKey:l.ID,accessorFn:e=>e.id},{accessorKey:l.Type,accessorFn:e=>`${e.metadata.type}(${e.metadata.network})`},{accessorKey:l.Process,accessorFn:e=>e.metadata.process||e.metadata.processPath.replace(/^.*[/\\](.*)$/,"$1")||"-"},{accessorKey:l.Host,accessorFn:e=>`${e.metadata.host?e.metadata.host:e.metadata.destinationIP}:${e.metadata.destinationPort}`},{accessorKey:l.Rule,accessorFn:e=>e.rulePayload?`${e.rule} :: ${e.rulePayload}`:e.rule},{accessorKey:l.Chains,accessorFn:e=>e.chains.slice().reverse().join(" :: ")},{accessorKey:l.DlSpeed,accessorFn:e=>`${k(e.downloadSpeed)}/s`,sortingFn:(e,s)=>e.original.downloadSpeed-s.original.downloadSpeed},{accessorKey:l.ULSpeed,accessorFn:e=>`${k(e.uploadSpeed)}/s`,sortingFn:(e,s)=>e.original.uploadSpeed-s.original.uploadSpeed},{accessorKey:l.Download,accessorFn:e=>k(e.download),sortingFn:(e,s)=>e.original.download-s.original.download},{accessorKey:l.Upload,accessorFn:e=>k(e.upload),sortingFn:(e,s)=>e.original.upload-s.original.upload},{accessorKey:l.Source,accessorFn:e=>He(e.metadata.sourceIP)?`[${e.metadata.sourceIP}]:${e.metadata.sourcePort}`:`${e.metadata.sourceIP}:${e.metadata.sourcePort}`},{accessorKey:l.Destination,accessorFn:e=>e.metadata.remoteDestination||e.metadata.destinationIP||e.metadata.host}],[h,K]=E([{id:"ID",desc:!0}]),R=xe({state:{get columnOrder(){return f()},get sorting(){return h()},get columnVisibility(){return o()}},get data(){return L()?d().filter(e=>Object.values(e).some(s=>JSON.stringify(s).toLowerCase().includes(L().toLowerCase()))):d()},enableHiding:!0,columns:T,onSortingChange:K,getSortedRowModel:_e(),getCoreRowModel:ye()});return(()=>{const e=We(),s=e.firstChild,O=s.firstChild,N=O.nextSibling,B=s.nextSibling,b=B.firstChild,x=b.firstChild,Q=x.nextSibling;return O.$$input=v=>c(v.target.value),r(N,a(ue,{})),r(s,a(Le,{get order(){return f()},get visible(){return o()},onOrderChange:v=>{C([...v])},onVisibleChange:v=>m({...v})}),null),r(x,a(F,{get each(){return R.getHeaderGroups()},children:v=>(()=>{const D=qe();return r(D,a(F,{get each(){return v.headers},children:u=>(()=>{const w=Je(),I=w.firstChild;return ge(I,"click",u.column.getToggleSortingHandler(),!0),r(I,(()=>{const ee=$e(()=>u.column.id===l.Close);return()=>ee()?W(u.column.columnDef.header,u.getContext()):(()=>{const U=Ye();return r(U,()=>t(u.column.id)),U})()})(),null),r(I,()=>({asc:a(me,{}),desc:a(pe,{})})[u.column.getIsSorted()]??null,null),A(()=>be(I,fe("flex items-center justify-between",u.column.getCanSort()&&"cursor-pointer select-none"))),w})()})),D})()})),r(Q,a(F,{get each(){return R.getRowModel().rows},children:v=>(()=>{const D=Ge();return r(D,a(F,{get each(){return v.getVisibleCells()},children:u=>(()=>{const w=Xe();return w.$$contextmenu=I=>{I.preventDefault(),typeof u.renderValue()=="string"&&Te(u.renderValue())},r(w,()=>W(u.column.columnDef.cell,u.getContext())),w})()})),D})()})),A(()=>he(O,"placeholder",t("search"))),e})()};ve(["input","click","contextmenu"]);export{nt as default};
