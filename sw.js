if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const t=s=>i(s,r),u={module:{uri:r},exports:o,require:t};e[r]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(l(...s),o)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Button-2f123a88.js",revision:null},{url:"assets/Config-548e7ab8.js",revision:null},{url:"assets/Connections-60d6ece0.js",revision:null},{url:"assets/global-c5bd22bb.js",revision:null},{url:"assets/index-5044fb0a.js",revision:null},{url:"assets/index-52a582fc.js",revision:null},{url:"assets/index-df7e27d4.css",revision:null},{url:"assets/index-ea658198.js",revision:null},{url:"assets/lodash-213f5a5f.js",revision:null},{url:"assets/Logs-8d4044a6.js",revision:null},{url:"assets/Overview-37d6b29c.js",revision:null},{url:"assets/Proxies-7fe03971.js",revision:null},{url:"assets/Rules-ec71e06f.js",revision:null},{url:"assets/Setup-6d5134a6.js",revision:null},{url:"assets/vendor-9d884d62.js",revision:null},{url:"index.html",revision:"f8c8c954f4ba616ea02442b77b956354"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"511189c1ff286c5644d9d2a99ea12b1a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
