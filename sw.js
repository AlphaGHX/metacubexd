if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const t=s=>i(s,l),u={module:{uri:l},exports:o,require:t};e[l]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(r(...s),o)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Config-eb34c34b.js",revision:null},{url:"assets/Connections-6192c521.js",revision:null},{url:"assets/index-075de500.css",revision:null},{url:"assets/index-29cbe793.js",revision:null},{url:"assets/index-8592a353.js",revision:null},{url:"assets/index-9f132d0e.js",revision:null},{url:"assets/index-f06daa74.js",revision:null},{url:"assets/Logs-1836985e.js",revision:null},{url:"assets/Overview-3e8fdb56.js",revision:null},{url:"assets/Proxies-a9dcfcfb.js",revision:null},{url:"assets/ProxyPreviewDots-7eb7fe8c.js",revision:null},{url:"assets/ProxyProvider-07172821.js",revision:null},{url:"assets/Rules-ee5a8bda.js",revision:null},{url:"assets/Setup-58c7040d.js",revision:null},{url:"assets/vendor-bcbfc1b2.js",revision:null},{url:"index.html",revision:"c6736758855fa452b554e63780697e8b"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"511189c1ff286c5644d9d2a99ea12b1a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
