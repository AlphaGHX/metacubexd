if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const u=s=>i(s,r),t={module:{uri:r},exports:o,require:u};e[r]=Promise.all(n.map((s=>t[s]||u(s)))).then((s=>(l(...s),o)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Button-f3342b78.js",revision:null},{url:"assets/Config-e0e91cdc.js",revision:null},{url:"assets/Connections-cd8b1191.js",revision:null},{url:"assets/global-228b6594.js",revision:null},{url:"assets/index-0f2c0f33.js",revision:null},{url:"assets/index-aa3b0e27.js",revision:null},{url:"assets/index-c26e4b8e.js",revision:null},{url:"assets/index-c603c5fd.css",revision:null},{url:"assets/index-ce0d7588.js",revision:null},{url:"assets/lodash-ded917b8.js",revision:null},{url:"assets/Logs-1f20f813.js",revision:null},{url:"assets/Overview-89004ef3.js",revision:null},{url:"assets/Proxies-25398afe.js",revision:null},{url:"assets/ProxyProvider-2804355b.js",revision:null},{url:"assets/Rules-8dfe2e6f.js",revision:null},{url:"assets/Setup-d561731e.js",revision:null},{url:"assets/vendor-bb973e4f.js",revision:null},{url:"index.html",revision:"ec54a23aa9fceab901b7dcba0aeefdc1"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"511189c1ff286c5644d9d2a99ea12b1a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
