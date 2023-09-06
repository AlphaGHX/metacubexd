import{u as se,c as b,i as a,g as n,X as $e,Y as ve,Z as be,F as E,_ as Ce,S as _e,$ as fe,l as u,a0 as Se,a1 as xe,O as ye,h as P,y as Ie,m as J,e as w,a2 as Q,z as ee,b as V,j as K,t as M,a3 as we,a4 as Fe,x as De,a5 as j,a6 as te,a7 as ne,a8 as Oe,a9 as Ee,s as Pe,f as Re}from"./vendor-9d884d62.js";import{c as Te,g as Ke,a as Me,b as ke,d as Ne,e as Le,f as B}from"./index-6bfd2c4a.js";import{l as Ae}from"./lodash-213f5a5f.js";import{B as H}from"./Button-6af14258.js";import{c as oe,d as ae,f as Ge,u as ze,g as c,h as Ve,t as Be,i as He}from"./index-b920bc04.js";const We=u('<div class="sortable"><div class="m-1 flex cursor-grab justify-between p-1"><span class="select-none"></span><input type="checkbox" class="toggle">'),qe=u('<input type="checkbox" id="connection-modal" class="modal-toggle">'),je=u('<div class="column self-stretch">'),Ue=u('<div class="sortable">'),Ye=u('<div class="modal"><div class="modal-box w-80"></div><label class="modal-backdrop" for="connection-modal">'),Ze=t=>{const[D]=se(),[N,L]=b(null),A=({draggable:i})=>L(i.id),W=({draggable:i,droppable:v})=>{if(i&&v){const d=t.order,m=d.indexOf(i.id),f=d.indexOf(v.id);if(m!==f){const S=d.slice();S.splice(f,0,...S.splice(m,1)),t.onOrderChange(S)}}},q=({key:i})=>{const v=Se(i),[d]=xe();return(()=>{const m=We(),f=m.firstChild,S=f.firstChild,G=S.nextSibling;return ye(v,m,()=>!0),a(S,()=>D(i)),G.addEventListener("change",C=>{t.onVisibleChange({...t.visible,[i]:C.target.checked})}),P(C=>{const R=!!v.isActiveDraggable,z=!!d.active.draggable;return R!==C._v$&&m.classList.toggle("opacity-25",C._v$=R),z!==C._v$2&&m.classList.toggle("transition-transform",C._v$2=z),C},{_v$:void 0,_v$2:void 0}),P(()=>G.checked=t.visible[i]),m})()};return[qe(),(()=>{const i=Ye(),v=i.firstChild;return a(v,n(fe,{onDragStart:A,onDragEnd:W,collisionDetector:$e,get children(){return[n(ve,{}),(()=>{const d=je();return a(d,n(be,{get ids(){return t.order},get children(){return n(E,{get each(){return t.order},children:m=>n(q,{key:m})})}})),d})(),n(Ce,{get children(){return n(_e,{get when(){return N()},get children(){const d=Ue();return a(d,()=>D(N())),d}})}})]}}),null),a(v,n(H,{class:"btn-neutral btn-sm ml-auto mt-4 block",onClick:()=>{t.onOrderChange(oe),t.onVisibleChange(ae)},get children(){return D("reset")}}),null),i})()]};var Xe=async t=>{typeof t=="string"?await navigator.clipboard.writeText(t):await navigator.clipboard.write(t)};const Je=u('<div class="flex h-4 items-center">'),Qe=u('<div class="flex h-full flex-col gap-4 overflow-y-auto p-1"><div class="tabs-boxed tabs gap-2"></div><div class="flex w-full flex-wrap items-center gap-2"><input class="input input-primary flex-1"><label for="connection-modal" class="btn btn-circle"></label></div><div class="overflow-x-auto whitespace-nowrap rounded-md bg-base-300"><table><thead class="sticky top-0 z-10 h-8"></thead><tbody>'),et=u('<button><span></span><div class="badge badge-sm">'),tt=u("<tr>"),nt=u('<th class="bg-base-200"><div><div>'),st=u('<button class="cursor-pointer">'),ot=u('<tr class="h-8 hover:!bg-primary hover:text-primary-content">'),at=u("<td>"),rt=u("<button><div></div><div></div><div>(<!>)");var k=function(t){return t.activeConnections="activeConnections",t.closedConnections="closedConnections",t}(k||{});const gt=()=>{const[t]=se(),D=Ge(),[N,L]=b(""),[A,W]=b(k.activeConnections),q=ze("connections"),[i,v]=b([],{equals:()=>f()}),[d,m]=b([],{equals:()=>f()}),[f,S]=b(!1),G=e=>r=>{const h=new Map;r.forEach(l=>h.set(l.id,l));const O=e.map(l=>{const x=h.get(l.id);return x?{...l,downloadSpeed:l.download-(x.download??l.download),uploadSpeed:l.upload-(x.upload??l.upload)}:{...l,downloadSpeed:0,uploadSpeed:0}}),T=Ae.differenceWith(r,O,(l,x)=>l.id===x.id);return v(l=>[...l,...T].slice(-1e3)),O.slice(-200)};Ie(()=>{var h;const e=(h=q())==null?void 0:h.connections;if(!e)return;const r=G(e);m(r)});const C=e=>D.delete(`connections/${e}`),[R,z]=J(b(ae),{name:"columnVisibility",storage:localStorage}),[U,re]=J(b(oe),{name:"columnOrder",storage:localStorage}),le=w(()=>[{header:()=>t("close"),enableGrouping:!1,enableSorting:!1,accessorKey:c.Close,cell:({row:e})=>(()=>{const r=Je();return a(r,n(H,{class:"btn-circle btn-xs",onClick:()=>C(e.id),get children(){return n(Q,{size:"16"})}})),r})()},{header:()=>t("ID"),enableGrouping:!1,accessorKey:c.ID,accessorFn:e=>e.id},{header:()=>t("type"),accessorKey:c.Type,accessorFn:e=>`${e.metadata.type}(${e.metadata.network})`},{header:()=>t("process"),accessorKey:c.Process,accessorFn:e=>e.metadata.process||e.metadata.processPath.replace(/^.*[/\\](.*)$/,"$1")||"-"},{header:()=>t("host"),accessorKey:c.Host,accessorFn:e=>`${e.metadata.host?e.metadata.host:e.metadata.destinationIP}:${e.metadata.destinationPort}`},{header:()=>t("rules"),accessorKey:c.Rule,accessorFn:e=>e.rulePayload?`${e.rule} :: ${e.rulePayload}`:e.rule},{header:()=>t("chains"),accessorKey:c.Chains,accessorFn:e=>e.chains.slice().reverse().join(" :: ")},{header:()=>t("connectTime"),accessorKey:c.ConnectTime,accessorFn:e=>Ve(e.start),sortingFn:(e,r)=>ee(e.original.start).valueOf()-ee(r.original.start).valueOf()},{header:()=>t("dlSpeed"),accessorKey:c.DlSpeed,accessorFn:e=>`${V(e.downloadSpeed)}/s`,sortingFn:(e,r)=>e.original.downloadSpeed-r.original.downloadSpeed},{header:()=>t("ulSpeed"),accessorKey:c.ULSpeed,accessorFn:e=>`${V(e.uploadSpeed)}/s`,sortingFn:(e,r)=>e.original.uploadSpeed-r.original.uploadSpeed},{header:()=>t("dl"),accessorKey:c.Download,accessorFn:e=>V(e.download),sortingFn:(e,r)=>e.original.download-r.original.download},{header:()=>t("ul"),accessorKey:c.Upload,accessorFn:e=>V(e.upload),sortingFn:(e,r)=>e.original.upload-r.original.upload},{header:()=>t("sourceIP"),accessorKey:c.SourceIP,accessorFn:e=>e.metadata.sourceIP},{header:()=>t("sourcePort"),accessorKey:c.SourcePort,accessorFn:e=>e.metadata.sourcePort},{header:()=>t("destination"),accessorKey:c.Destination,accessorFn:e=>e.metadata.remoteDestination||e.metadata.destinationIP||e.metadata.host}]),[ce,ie]=b([]),[de,ue]=b([{id:c.ConnectTime,desc:!0}]),Y=Te({state:{get columnOrder(){return U()},get grouping(){return ce()},get sorting(){return de()},get columnVisibility(){return R()},get globalFilter(){return N()}},get data(){return A()===k.activeConnections?d():i()},sortDescFirst:!0,enableHiding:!0,columns:le(),onGlobalFilterChange:L,onGroupingChange:ie,onSortingChange:ue,getFilteredRowModel:Ke(),getSortedRowModel:Me(),getExpandedRowModel:ke(),getGroupedRowModel:Ne(),getCoreRowModel:Le()}),ge=()=>[{type:k.activeConnections,name:t("activeConnections"),count:d().length},{type:k.closedConnections,name:t("closedConnections"),count:i().length}];return(()=>{const e=Qe(),r=e.firstChild,h=r.nextSibling,O=h.firstChild,T=O.nextSibling,l=h.nextSibling,x=l.firstChild,Z=x.firstChild,me=Z.nextSibling;return a(r,n(E,{get each(){return ge()},children:o=>(()=>{const g=et(),s=g.firstChild,y=s.nextSibling;return g.$$click=()=>W(o.type),a(s,()=>o.name),a(y,()=>o.count),P(()=>K(g,M(A()===o.type&&"tab-active","tab gap-2"))),g})()})),O.$$input=o=>L(o.target.value),a(h,n(H,{class:"btn-circle",onClick:()=>S(o=>!o),get children(){return w(()=>!!f())()?n(we,{}):n(Fe,{})}}),T),a(h,n(H,{class:"btn-circle",onClick:()=>D.delete("connections"),get children(){return n(Q,{})}}),T),a(T,n(De,{})),a(h,n(Ze,{get order(){return U()},get visible(){return R()},onOrderChange:o=>{re([...o])},onVisibleChange:o=>z({...o})}),null),a(Z,n(E,{get each(){return Y.getHeaderGroups()},children:o=>(()=>{const g=tt();return a(g,n(E,{get each(){return o.headers},children:s=>(()=>{const y=nt(),I=y.firstChild,$=I.firstChild;return a(I,(()=>{const p=w(()=>!!s.column.getCanGroup());return()=>p()?(()=>{const _=st();return j(_,"click",s.column.getToggleGroupingHandler(),!0),a(_,(()=>{const F=w(()=>!!s.column.getIsGrouped());return()=>F()?n(te,{size:18}):n(ne,{size:18})})()),_})():null})(),$),j($,"click",s.column.getToggleSortingHandler(),!0),a($,()=>B(s.column.columnDef.header,s.getContext())),a(I,()=>({asc:n(Oe,{}),desc:n(Ee,{})})[s.column.getIsSorted()]??null,null),P(p=>{const _=M("flex items-center gap-2"),F=M(s.column.getCanSort()&&"cursor-pointer select-none","flex-1");return _!==p._v$3&&K(I,p._v$3=_),F!==p._v$4&&K($,p._v$4=F),p},{_v$3:void 0,_v$4:void 0}),y})()})),g})()})),a(me,n(E,{get each(){return Y.getRowModel().rows},children:o=>(()=>{const g=ot();return a(g,n(E,{get each(){return o.getVisibleCells()},children:s=>(()=>{const y=at();return y.$$contextmenu=I=>{I.preventDefault(),typeof s.renderValue()=="string"&&Xe(s.renderValue())},a(y,(()=>{const I=w(()=>!!s.getIsGrouped());return()=>I()?(()=>{const $=rt(),p=$.firstChild,_=p.nextSibling,F=_.nextSibling,pe=F.firstChild,X=pe.nextSibling;return X.nextSibling,j($,"click",o.getToggleExpandedHandler(),!0),a(p,(()=>{const he=w(()=>!!o.getIsExpanded());return()=>he()?n(te,{size:18}):n(ne,{size:18})})()),a(_,()=>B(s.column.columnDef.cell,s.getContext())),a(F,()=>o.subRows.length,X),P(()=>K($,M(o.getCanExpand()?"cursor-pointer":"cursor-normal","flex items-center gap-2"))),$})():(()=>{const $=w(()=>!!s.getIsAggregated());return()=>$()?B(s.column.columnDef.aggregatedCell??s.column.columnDef.cell,s.getContext()):(()=>{const p=w(()=>!!s.getIsPlaceholder());return()=>p()?null:B(s.column.columnDef.cell,s.getContext())})()})()})()),y})()})),g})()})),P(o=>{const g=t("search"),s=M(Be(He()),"table table-zebra relative rounded-none");return g!==o._v$&&Pe(O,"placeholder",o._v$=g),s!==o._v$2&&K(x,o._v$2=s),o},{_v$:void 0,_v$2:void 0}),e})()};Re(["input","click","contextmenu"]);export{gt as default};