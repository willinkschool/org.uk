(()=>{"use strict";var e,t,r,n,a={35041:(e,t,r)=>{r.d(t,{Ok:()=>a,Ew:()=>i,q8:()=>s,of:()=>c,u_:()=>l});var n=r(90075),a={"iplayer:tv":"video","iplayer:tv-int":"video","iplayer:tv-test":"video","iplayer:tv-stage":"video","iplayer:radio":"audio",sounds:"audio"},o=["iplayer:tv","iplayer_cbeebies","iplayer_cbbc"],i=["cymru"].concat(o),s=["cymru"],c=o,l={isSearchPage:!1,searchScope:"",baseUrl:(0,n.Z)("",!1),isResponsive:!0,variant:"default"}},90075:(e,t,r)=>{r.d(t,{Z:()=>n});const n=function(e,t){return"cymru"===e&&t?"/chwilio":t?"/search":"https://search.bbc.co.uk/search"}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return a[e](r,r.exports,i),r.loaded=!0,r.exports}i.m=a,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+".old-search-suggest.js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="searchbox:",i.l=(r,n,a,o)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[n];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={179:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=i.p+i.u(t),s=new Error;i.l(o,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[o,s,c]=r,l=0;if(o.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);c&&c(i)}for(t&&t(r);l<o.length;l++)a=o[l],i.o(e,a)&&e[a]&&e[a][0](),e[o[l]]=0},r=self.webpackChunksearchbox=self.webpackChunksearchbox||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),r=i(35041),n={searchboxAppStaticPrefix:document.currentScript.getAttribute("data-static-prefix"),variant:document.currentScript.getAttribute("data-variant"),searchScope:document.currentScript.getAttribute("data-scope")},window.require(["orb/nav"],(function(e){(function(e){var t=["/aboutthebbc","/arts","/branding","/careers","/charityappeals","/commissioning","/culture","/diversity","/foi","/future","/helpandfeedback","/historyofthebbc","/mediaaction","/mediacentre","/mypension","/partnersandsuppliers","/performingartsfund","/privacy","/reception","/safety","/supplying","/terms","/travel","/writerslicence","/writersroom","genome.ch.bbc.co.uk"];function n(e){e.blur(),e.focus()}var a={app:null,conf:null,searchScope:null,loadedSearchbox:!1,loadingSearchbox:!1,drawerLoaded:!1,intervalId:0,resizeId:0,resizeThrottleMs:200,DRAWER_NAME:"drawer-search",run:function(e){var t=this;Promise.all([i.e(30),i.e(762),i.e(238),i.e(70)]).then(i.bind(i,23070)).then((function(n){var a;t.searchFormHtml=n.default(r.u_),a=function(){t.conf=e;var r=window.location.pathname;t.searchScope=e.searchScope,t.variant=e.variant,t.hideOnVariant(t.variant,t.searchScope)||!t.isInAllowList(t.searchScope,t.scopeAllowList)||t.isSuppressedPath(r)||(t.loadSearchboxCss(e,(function(){t.cssLoaded()})),t.setEventListeners(),t.applyScopeClasses(t.searchScope),t.applyTouchClasses())},"loading"!==document.readyState?a():document.addEventListener("DOMContentLoaded",a)}))},applyTouchClasses:function(){this.touchEnabled()?document.documentElement.className+=" se-touch":document.documentElement.className+=" se-no-touch"},applyScopeClasses:function(e){var t="";if("sounds"===e)return t+=" se-sounds-theme",void(document.documentElement.className+=t);var r=new RegExp("(iplayer):?(radio)?","ig").exec(e);r&&(r[2]?t=" se-iplayer-radio-theme":r[1]&&(t=" se-iplayer-theme"),document.documentElement.className+=t)},touchEnabled:function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch||window.hasOwnProperty&&(Object.prototype.hasOwnProperty.call(window,"ontouchstart")||window.DocumentTouch&&document instanceof window.DocumentTouch||navigator.msMaxTouchPoints))||"ontouchstart"in window},scopeAllowList:["",null,"all","all:learning","iplayer:tv","iplayer_cbbc","iplayer_cbeebies","iplayer:radio","sounds"],isInAllowList:function(e,t){return-1!==t.indexOf(e)},isSuppressedPath:function(e){for(var r=0;r<t.length;r++){var n="^".concat(t[r]);if(new RegExp(n,"i").test(e))return!0}return!1},hideOnVariant:function(e,t){return["cbeebies","cbbc"].join(" ").indexOf(e)>-1&&!this.isInAllowList(t,["iplayer:tv"])},viewAllResults:function(){function e(e,t){var r=document.createElement("input");return r.type="hidden",r.name=e,r.value=t,r}var t=document.getElementById("searchboxDrawerForm");t&&(t.appendChild(e("search_suggestion_type","serp")),t.appendChild(e("action_name","search")),t.appendChild(e("action_type","view-all-results")),t.submit())},isOrbSearchVisible:function(){var e=document.getElementById("orb-search-form");return"none"!==(e.currentStyle?e.currentStyle.display:getComputedStyle(e,null).display)},loadSearchboxCss:function(t,r){e.loadCss("".concat(t.searchboxAppStaticPrefix,"/css/drawer.css"),r)},cssLoaded:function(){e.addDrawer(this.DRAWER_NAME,document.createElement("div"),this.createContent()),this.drawerLoaded=!0;var t=document.getElementById("orb-search-q");t.value&&this.handleInput(t)},loadSearchboxDrawer:function(e){Promise.all([i.e(30),i.e(841),i.e(238),i.e(816)]).then(i.bind(i,64816)).then((function(t){return e(t.default)}))},createContent:function(){var e=document.createElement("div");return e.setAttribute("class","orb-panel se-searchbox-app"),e.setAttribute("id","se-searchbox-app"),e.innerHTML=this.searchFormHtml,e},watchInput:function(e){var t=this,r=function(){e.value&&t.handleInput(e)};e.addEventListener?e.addEventListener("input",r):e.attachEvent&&e.attachEvent("onpropertychange",(function(e){"value"===e.propertyName&&r()}))},orbSearchClick:function(e){e.preventDefault(),this.handleInput(document.getElementById("orb-search-q"))},handleWindowResize:function(e){var t=document.querySelector(".orb-nav-search");this.isOrbSearchVisible()?t.removeEventListener("click",e,!0):t.addEventListener("click",e,!0)},setEventListeners:function(){var e=this,t=document.getElementById("orb-search-q"),r=document.getElementById("orb-panels");if(this.watchInput(t),document.addEventListener){var n=this.orbSearchClick.bind(this);window.addEventListener("resize",(function(){clearTimeout(e.resizeId),e.resizeId=setTimeout((function(){e.handleWindowResize(n)}),e.resizeThrottleMs)})),this.handleWindowResize(n),r.addEventListener("scroll",(function(){r.scrollTop=0}))}},ageBandRace:function(){return new Promise((function(e){setTimeout(e,500,void 0)}))},handleInput:function(t){var r=this;if(this.drawerLoaded){var a=t,o=document.getElementById("se-searchbox-input-field");if("hidden"===e.getDrawerState(this.DRAWER_NAME)&&(document.getElementById("orb-header").navMode="mouse",this.addDrawerStyles(),e.getMastheadDrawer().showPanel(this.DRAWER_NAME)),o.focus(),o.value=a.value,a.value="",this.loadingSearchbox||this.loadedSearchbox)this.loadedSearchbox&&(this.app.setQuery(o.value),n(o));else{var i=window.bbcuser.getAgeBand().catch((function(){}));Promise.race([this.ageBandRace(),i]).then((function(t){r.loadSearchboxDrawer((function(a){var i=e.updateDrawerHeight.bind(r,r.DRAWER_NAME),s=r.closeSearchboxDrawer.bind(r),c=r.viewAllResults.bind(r),l=o.value,d={changeHandler:i,closeHandler:s,viewResults:c,searchScope:r.searchScope,ageBand:t,variant:r.variant};r.app=new a(d),r.app.setQuery(l),r.loadedSearchbox=!0,n(o)}))}))}}},closeSearchboxDrawer:function(){var t=document.getElementById("orb-search-q");e.getMastheadDrawer().hidePanel(),this.removeDrawerStyles(),t.focus()},addDrawerStyles:function(){var e=document.getElementById("orb-panels");this.cssUtils.addClass(e,"se-panel-active")},removeDrawerStyles:function(){var e=document.getElementById("orb-panels");this.cssUtils.removeClass(e,"se-panel-active")}};return a.cssUtils={addClass:function(e,t){this.hasClass(e,t)||(e.className+=" ".concat(t))},removeClass:function(e,t){this.hasClass(e,t)&&(e.className=e.className.replace(this.classRegex(t),""))},hasClass:function(e,t){return!!e.className.match(this.classRegex(t))},classRegex:function(e){return new RegExp("(\\s|^)".concat(e,"(\\s|$)"))}},a})(e).run(n)}))})();