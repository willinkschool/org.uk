(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[26],{307:function(n,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return p}));var e=i(0),a=i.n(e),o=i(50),c=i(42),r=i(157),s=i(219),l=i(393),u=i(432);i(434);function d(n,t,i,e,a,o,c){try{var r=n[o](c),s=r.value}catch(l){return void i(l)}r.done?t(s):Promise.resolve(s).then(e,a)}var p=n=>{var{data:{homepageLink:t,notificationsLink:i,accountLabel:p,signInLabel:b,accessibilityLinks:g,searchLink:h,menuLabel:m,moreLabel:L,closeButtonLabel:f,navigationLinks:v},showChameleonLogo:_}=n,y="https://account.bbc.com/account",k=Object(c.f)(),{host:I,language:w}=Object(s.b)(),O=!w||"cy"!==w&&"gd"!==w&&"en"!==w||w.endsWith("-GB")?w:"".concat(w,"-GB"),D="https://".concat(I).concat(k.pathname),[E,N]=Object(e.useState)({signedIn:!1,prompt:p,url:y}),j="ckns_id",A=I&&!I.endsWith(".com")?"https://idcta.api.bbc.co.uk/idcta/config":"https://idcta.api.bbc.com/idcta/config";return Object(e.useEffect)((()=>{var n=Object(r.b)(j).ckns_id,t=new AbortController,{signal:i}=t,e=function(){var t,e=(t=function*(){try{var t=yield Object(o.a)(A,{signal:i}),e=yield t.json();if("GREEN"===e["id-availability"])if(n)try{var a=JSON.parse(window.atob(n));N({signedIn:!0,prompt:a.dn?a.dn:p,url:y,hasDisplayName:!!a.dn})}catch(c){N({signedIn:!1,prompt:b,url:e.signin_url})}else N({signedIn:!1,prompt:b,url:e.signin_url})}catch(r){N({signedIn:!1,prompt:p,url:y})}},function(){var n=this,i=arguments;return new Promise((function(e,a){var o=t.apply(n,i);function c(n){d(o,e,a,c,r,"next",n)}function r(n){d(o,e,a,c,r,"throw",n)}c(void 0)}))});return function(){return e.apply(this,arguments)}}();return e(),()=>{t.abort()}}),[p,A,b]),a.a.createElement(l.a,{signedIn:E.signedIn,signInPrompt:E.prompt,signInUrl:E.url,hasDisplayName:E.hasDisplayName,signInPtrt:D,language:O,homepageLink:t,notificationsLink:i,accessibilityLinks:g,searchLink:h,menuLabel:m,moreLabel:L,closeButtonLabel:f,footerNavigationId:u.a,items:v,showChameleonLogo:_})}}}]);