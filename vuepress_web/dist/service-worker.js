if(!self.define){let s,e={};const a=(a,d)=>(a=new URL(a+".js",d).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(d,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let c={};const o=s=>a(s,r),b={module:{uri:r},exports:c,require:o};e[r]=Promise.all(d.map((s=>b[s]||o(s)))).then((s=>(i(...s),c)))}}define(["./workbox-af1f1dfc"],(function(s){"use strict";s.setCacheNameDetails({prefix:"LucasBlog"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/0.styles.a9db6349.css",revision:"e6b8acca5eba550a04073826400e9d9d"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/17.b9066ae3.js",revision:"390cc3569ef4c760343e368e1447e907"},{url:"assets/js/18.465900ab.js",revision:"47383719a53d7b532d7b7ffd343168c8"},{url:"assets/js/app.0bb1c8a2.js",revision:"42a11db992eabe6c2e74d5f292c4e913"},{url:"assets/js/layout-Blog.d3fdf7f5.js",revision:"6e4a3eb9d566fb3f5a2b09eaaf551b5b"},{url:"assets/js/layout-Layout.f1fa664e.js",revision:"705fe36c8e6c6cdd4228d02890c04b9f"},{url:"assets/js/layout-NotFound.96dc4ba7.js",revision:"0c870fc1d874334279e7d81256e201ab"},{url:"assets/js/layout-Slide.916c7373.js",revision:"46850d3d6de76803d10a9e5597d1bae1"},{url:"assets/js/page-BlogHome.8dab8823.js",revision:"2328ed87df02285f8942487a9cd613c8"},{url:"assets/js/page-Guides.85b36ba0.js",revision:"4a7cad3ea12df81c54656678ac9adc3d"},{url:"assets/js/page-Infojuegos.1d21b2d6.js",revision:"16602991abb604f713a14bbb5f3349da"},{url:"assets/js/page-InfoPokemon.20659db0.js",revision:"24fb86c3eb3b1c2247c9330990b682e4"},{url:"assets/js/page-Introducciónalapágina.b07bbfe6.js",revision:"3d3081ccd99afa32f033ba9bb6eddb73"},{url:"assets/js/page-Prueba.0d6ea741.js",revision:"5639b0621f9c8122daf7b1c7504798b1"},{url:"assets/js/page-SistemasOperativos.e5649cf9.js",revision:"c2e40b505d22874822035dc1bde8b674"},{url:"assets/js/vendors~layout-Blog~layout-Layout.4d25f7d5.js",revision:"31d7b47f8bfe97a434fffc92adc9d9a4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.de9ec14d.js",revision:"b6f076bd71636e42b1f16fddf24c8b80"},{url:"assets/js/vendors~layout-Layout.8d954343.js",revision:"8b20b16801f6fd9de2874b5a0666cae7"},{url:"assets/js/vendors~photo-swipe.cd1157ce.js",revision:"6e897b72f31242d53fc3c46cae6b992b"},{url:"index.html",revision:"3ed3a768354d5fc452881cef8fd5227e"},{url:"404.html",revision:"01fa542e5e3ac220102834526f5387a0"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
