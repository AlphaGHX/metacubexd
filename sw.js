if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>i(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(n.map((s=>o[s]||t(s)))).then((s=>(l(...s),u)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Config-aa9f507a.js",revision:null},{url:"assets/Connections-6341a330.js",revision:null},{url:"assets/index-51ca559d.js",revision:null},{url:"assets/index-54d38cb8.js",revision:null},{url:"assets/index-60009942.js",revision:null},{url:"assets/index-947514a4.js",revision:null},{url:"assets/index-ac54fc13.js",revision:null},{url:"assets/index-ed14f162.css",revision:null},{url:"assets/index-f14bd485.js",revision:null},{url:"assets/Logs-dc2477ff.js",revision:null},{url:"assets/Overview-9631a900.js",revision:null},{url:"assets/Proxies-163e62aa.js",revision:null},{url:"assets/Rules-698924d0.js",revision:null},{url:"assets/Setup-ef0c3de1.js",revision:null},{url:"assets/vendor-f843f104.js",revision:null},{url:"index.html",revision:"798e7213a7f64fed58d24e51da6de298"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"511189c1ff286c5644d9d2a99ea12b1a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
