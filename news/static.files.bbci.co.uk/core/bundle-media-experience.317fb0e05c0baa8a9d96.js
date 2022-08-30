(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[6],{240:function(e,t,r){"use strict";r.r(t);var a=r(574);r.d(t,"getOnwardJourneyTrackingData",(function(){return a.a})),r.d(t,"getShowMoreButtonTrackingData",(function(){return a.c})),r.d(t,"getPinnedPlayerCloseButtonTrackingData",(function(){return a.b})),r.d(t,"getSurveyBannerTrackingData",(function(){return a.d}))},241:function(e,t,r){"use strict";r.r(t),r.d(t,"ContainerWithBottomSpacing",(function(){return f})),r.d(t,"RelatedVideoGroup",(function(){return i.RelatedVideoGroup})),r.d(t,"MediaError",(function(){return u})),r.d(t,"SurveyBanner",(function(){return E}));var a=r(3),n=r(5),i=r(242),o=r(0),l=r.n(o),c=r(224),u=e=>{var{error:t,translations:r}=e;return l.a.createElement(c.a,((e,t)=>404===(null==e?void 0:e.statusCode)?{reason:t.ERROR_404_REASON,message:t.ERROR_404_MESSAGE}:{reason:t.ERROR_UNHANDLED_REASON,message:t.ERROR_UNHANDLED_MESSAGE})(t,r))},d=r(26),s=r(539),p=r(407),m=r(404),b=r(19),O=r(574),g=Object(a.a)("div",{target:"e1niwepk0",label:"SurveyWrapper"})("max-width:",p.b,";"),E=e=>{var{id:t,tracking:r,isMobileLayout:a}=e,n="Got a minute?",i="Take survey",o=a?"https://s.userzoom.com/m/NCBDMjg0UzMwMTgg":"https://s.userzoom.com/m/MSBDMjg0UzMwMTgg",c=Object(O.d)({title:n,linkText:i,linkUrl:o,attribution:r.attribution,isMobile:a});return l.a.createElement(g,{"data-testid":t},l.a.createElement(d.d,{theme:Object(s.a)()},l.a.createElement(b.a,{tracking:c,suppressNavigationOnClick:!0},(e=>{var{unsafeViewTrackRef:t,unsafeClickTrackRef:r}=e;return l.a.createElement(m.a,{title:n,subTitle:"We'd love your help to improve this page. It's quick and you can return here after.",linkText:i,linkUrl:o,openInNewTab:!0,unsafeViewTrackRef:t,unsafeClickTrackRef:r})}))))},f=Object(a.a)("div",{target:"e1p9sawz0",label:"ContainerWithBottomSpacing"})("padding-bottom:",n.SPACING_4,";")},242:function(e,t,r){"use strict";r.r(t),r.d(t,"RelatedVideoGroup",(function(){return w}));var a,n=r(0),i=r.n(n),o=r(3),l=r(565),c=r(560),u=r(407),d=r(55),s=r(87),p=r(19),m=r(241),b=r(240),O=r(12),g=r(5),E=r(6),f=r(7);var y=Object(o.a)("ul",{target:"e137mbpu0",label:"Grid"})(">*:not([hidden]){padding-bottom:",g.SPACING_8,";@media (min-width: ",Object(E.a)(f.g[f.c]),"){padding-bottom:",g.SPACING_6,";}}>*:not([hidden])+*:not([hidden]){",(e=>{var t,r,{theme:n}=e;return Object(O.b)(a||(t=["\n      @media (min-width: ",") {\n        padding-top: ",";\n        border-top: 1px solid ",";\n      }\n    "],r||(r=t.slice(0)),a=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))),Object(E.a)(f.g[f.c]),g.SPACING_6,n.colourPalette.border)}),";}@supports (display: grid){>*:not([hidden]){padding-bottom:0;}display:grid;grid-column-gap:",g.SPACING_2,";column-gap:",g.SPACING_2,";grid-row-gap:",g.SPACING_8,";row-gap:",g.SPACING_8,";grid-template-columns:repeat(2, 1fr);@media (min-width: ",Object(E.a)(f.g[f.c]),"){grid-row-gap:",g.SPACING_6,";row-gap:",g.SPACING_6,";grid-template-columns:repeat(1, 1fr);}}");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=Object(o.a)("div",{target:"eeld5y00",label:"RelatedContentWrapper"})("max-width:",u.b,";"),P=(e,t,r,a,n)=>{var i=t.indexOf(r),o=t[i+1];if((null==o?void 0:o.id)===e&&!n)return a.VIDEO_UP_NEXT},_=e=>{var{item:t,group:r,groupPosition:a,index:o,currentItem:c,translations:u,isToucanEnabled:d,allItems:s,promoSize:m,layoutsByBreakpoints:O,onPromoClick:g}=e,{promo:{headline:E,url:f,image:y,metadataStripItems:h,pageTypeIndicator:R}}=t,v=Object(n.useMemo)((()=>Object(b.getOnwardJourneyTrackingData)({tracking:t.tracking,groupId:r.id,groupPosition:a+1,promoPositionInGroup:o+1})),[r.id,a,o,t.tracking]);return i.a.createElement(p.a,{tracking:v,suppressNavigationOnClick:!0},(e=>{var{unsafeViewTrackRef:r,unsafeClickTrackRef:a}=e;return i.a.createElement(l.a,{headline:E,url:f,label:P(t.id,s,c,u,d),image:S(S({},y),{},{loading:"lazy"}),metadataStripItems:h,pageTypeIndicator:R,layoutsByBreakpoints:O,onClick:e=>{g(e,t)},size:m,unsafeViewTrackRef:r,unsafeClickTrackRef:a})}))},w=e=>{var{group:t,groupPosition:r,initialItem:a,currentItem:n,onPromoClick:o,promoSize:l,isToucanEnabled:u,allItems:p,translations:b,twoColumnOJLayoutEnabled:O}=e,g=0===r?[a,...t.items]:t.items,E={base:O?s.d:s.b,small:O?s.d:s.b,medium:s.b,large:s.b,xl:s.b,xxl:s.b},f=g.map(((e,a)=>{var c=e.id===n.id;return i.a.createElement("li",{key:a,"data-testid":"promo-".concat(t.id,"-").concat(a),hidden:c},i.a.createElement(_,{item:e,group:t,groupPosition:r,index:a,currentItem:n,translations:b,isToucanEnabled:u,allItems:p,promoSize:l,layoutsByBreakpoints:E,onPromoClick:o}))}));return i.a.createElement("aside",{"data-testid":"related-video-group--".concat(t.id),"aria-label":t.heading},i.a.createElement(m.ContainerWithBottomSpacing,null,i.a.createElement(c.a,{headingText:t.heading})),i.a.createElement(v,null,O?i.a.createElement(y,{role:"list"},f):i.a.createElement(d.a,{withRowDividers:!0,as:"ul"},f)))}},281:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return C}));var a=r(0),n=r.n(a),i=r(96),o=r(3),l=r(5),c=r(6),u=r(7),d=r(374),s=r(538),p=r(55),m=r(39),b=r(86),O=r(70),g=r(241),E=r(240),f={default:{PUBLISHED:"Published",PAGE_TYPE_VIDEO:"Video",PAGE_TYPE_AUDIO:"Audio",RELATED:"Related",RECOMMENDED:"Recommended",VIDEO_UP_NEXT:"Up Next",SHOW_MORE_SUMMARY:"Show more",SECTION:"Section",SUBSECTION:"Subsection",CLOSE:"Close",ERROR:"Error",ERROR_404_MESSAGE:"Sorry, we couldn't find that video",ERROR_404_REASON:"Page not found",ERROR_UNHANDLED_MESSAGE:"Sorry, this video is temporarily unavailable. Please try again later.",ERROR_UNHANDLED_REASON:"There was an error"},cy:{PUBLISHED:"Cyhoeddwyd",PAGE_TYPE_VIDEO:"Fideo",PAGE_TYPE_AUDIO:"Sain",RELATED:"Perthnasol",RECOMMENDED:"Argymhellwyd",VIDEO_UP_NEXT:"Nesaf",SHOW_MORE_SUMMARY:"Gweld Mwy",SECTION:"Adran",SUBSECTION:"Is-adran",CLOSE:"Cau",ERROR:"Gwall",ERROR_404_MESSAGE:"Dy'n ni ddim yn gallu dod o hyd i'r fideo yna",ERROR_404_REASON:"Methu dod o hyd i'r dudalen",ERROR_UNHANDLED_MESSAGE:"'Dyw'r fideo yma ddim ar gael ar hyn o bryd. Triwch eto nes ymlaen.",ERROR_UNHANDLED_REASON:"Mae yna broblem"},gd:{PUBLISHED:"Air fhoillseachadh",PAGE_TYPE_VIDEO:"Bhideo",PAGE_TYPE_AUDIO:"Clàr-fuaime",RELATED:"Ceangailte",RECOMMENDED:"Air a Mholadh",VIDEO_UP_NEXT:"Ri Thighinn",SHOW_MORE_SUMMARY:"Faic tuilleadh",SECTION:"Earrann",SUBSECTION:"Fo-earrann",CLOSE:"Dùin",ERROR:"Mearachd",ERROR_404_MESSAGE:"Duilich, cha robh sgeul air a' bhideo sin",ERROR_404_REASON:"Cha deach an duilleag a lorg",ERROR_UNHANDLED_MESSAGE:"Duilich, chan eil am bhideo seo ri fhaighinn an-dràsta. Feuch a-rithist.",ERROR_UNHANDLED_REASON:"Dh'èirich mearachd"}},y="BBC",h={news:{name:"BBC News",smpAppName:"news-sfv"},sport:{name:"BBC Sport",smpAppName:"sport-sfv"},cymrufyw:{name:"BBC Cymru Fyw",smpAppName:"cymrufyw-sfv"},naidheachdan:{name:"Naidheachdan a' BhBC",smpAppName:"naidheachdan-sfv"},programmes:{name:y,smpAppName:"programmes-sfv"},default:{name:y,smpAppName:void 0}},S=e=>h[e]||h.default;function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=(e,t)=>[...e,...t],D=Object(o.a)("div",{target:"eqbrg0n0",label:"VideoExperienceWrapper"})("padding-top:",l.SPACING_2,";padding-bottom:",l.SPACING_4,";@media (min-width: ",Object(c.a)(u.g[u.b]),"){padding-top:",l.SPACING_4,";padding-bottom:",l.SPACING_6,";}"),N=e=>{var{isSidebarEnabled:t,children:r}=e;return t?n.a.createElement(s.a,{width:"wide"},r):r},I=e=>{var{mediaItem:{media:t},id:r,analytics:a}=e,n=t.items.map((e=>w(w({},e),{},{holdingImageUrl:e.holdingImageUrl.replace("$recipe","400xn")})));return w(w({},t),{},{items:n,key:r,analytics:a})},C=e=>{var t,r,{data:{initialItem:o,groups:l=[]}={},error:s,service:y,language:h,setPageMetadata:R,useCustomPageUrl:P,setPageAnalytics:_,setAnalyticsTitle:j,currentPageAnalyticsName:C,isAdvertisingEnabled:k,isToucanEnabled:M,forcePinnedMedia:T=!1,isSidebarEnabled:U=!1,surveyBannerEnabled:G=!1,twoColumnOJLayoutEnabled:B,setSectionUri:L,setSectionName:x}=e,[H,V]=Object(a.useState)(!1),[z,W]=Object(a.useState)(!1),[Y,q]=Object(a.useState)(o),[F,J]=Object(a.useState)(!1),[X,K]=Object(a.useState)(!1),Z=Object(a.useRef)();((e,t,r,n,i)=>{var o=Object(a.useMemo)((()=>{var a=S(r);if(t||!e){var i=((e,t)=>404===(null==e?void 0:e.statusCode)?t.ERROR_404_REASON:t.ERROR)(t,f[n]||f.default);return{title:"".concat(i," - ").concat(a.name)}}if(!e.pageMetadata)return{title:a.name};var{title:o,description:l,twitterCard:c,openGraph:u,linkTags:d}=e.pageMetadata;return{title:o,description:l,twitterCard:c,openGraph:u,linkTags:d}}),[e,t,n,r]);O.a||i(o),Object(a.useEffect)((()=>{i(o)}),[o])})(Y,s,y,h,R);var $=e=>{q(e),L(e.sectionUri),x(e.sectionName),J(!0)},Q=f[h]||f.default,ee=null==Y||null===(t=Y.promo)||void 0===t?void 0:t.url,{previousUrl:te}=P(F||!O.a?ee:"".concat(window.location.pathname).concat(window.location.search).concat(window.location.hash));((e,t,r,n,i)=>{Object(a.useEffect)((()=>{var a,o;if((null==e||null===(a=e.analytics)||void 0===a||null===(o=a.page)||void 0===o?void 0:o.name)!==t){var l=document.referrer||"",c=window.location.origin+r,u=v(v({},e.analytics.page),{},{referrer:r?c:l});n(u),e.chartbeat&&i(e.chartbeat.title)}}),[e,r,t,i,n])})(Y,C,te,_,j);var re=Object(m.a)("(max-width: ".concat(Object(c.a)(u.g[u.d]),")")),ae=!U||re,ne=l.map((e=>e.items)).reduce(A,[]),ie=[o,...ne],oe=(e,t)=>{Object(b.b)(e)||(e.preventDefault(),X||Z.current.scrollIntoView({block:"start",inline:"center"}),V(!0),W(!0),$(t))};if(s||!o)return n.a.createElement(g.MediaError,{error:s,translations:Q});var le=w(w({},Y.mediaItem.media),{},{continuousPlay:!M&&{mediaList:ie.filter((e=>{var{mediaItem:t}=e;return t.media})).map(I)},analytics:Y.analytics,currentlyPlayingKey:Y.id,externalEmbedUrl:Y.externalEmbedUrl,isAdvertisingEnabled:k,isToucanEnabled:M});return n.a.createElement(D,{ref:Z},n.a.createElement(N,{isSidebarEnabled:U},n.a.createElement(g.ContainerWithBottomSpacing,null,n.a.createElement("script",{"data-testid":"structured-data-script",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(Y.structuredData)}}),n.a.createElement(d.a,{media:le,title:Y.mediaItem.title,summary:Y.mediaItem.summary,metadata:Y.mediaItem.metadata,onMediaChanged:e=>{var{index:t}=e;return Object(i.unstable_batchedUpdates)((()=>{V(!1),$(ie[t])}))},headingLevel:"1",shouldFocusHeading:H,shouldAutoplay:z,summaryShowMoreButtonText:Q.SHOW_MORE_SUMMARY,enablePinnableMedia:!0,forcePinnedMedia:T,onPinnableChange:e=>{var{isPinned:t}=e;K(t),t&&V(!1)},pinnableMediaCloseLabel:Q.CLOSE,errorReason:Q.ERROR_UNHANDLED_REASON,errorMessage:Q.ERROR_UNHANDLED_MESSAGE,pinnedPlayerTracking:Object(E.getPinnedPlayerCloseButtonTrackingData)(Y.mediaItem.title&&Y.mediaItem.title.content,Y.tracking&&Y.tracking.attribution),showMoreButtonTracking:Object(E.getShowMoreButtonTrackingData)(Q.SHOW_MORE_SUMMARY,null==o||null===(r=o.tracking)||void 0===r?void 0:r.sequenceId),activityData:Y.activityData,isSharingEnabled:Y.mediaItem.isSharingEnabled})),l&&l.length>0&&n.a.createElement(p.a,null,l.map(((e,t)=>n.a.createElement(g.RelatedVideoGroup,{group:e,key:e.id,groupPosition:t,initialItem:o,currentItem:Y,translations:Q,onPromoClick:oe,promoSize:"small",isToucanEnabled:M,allItems:ie,twoColumnOJLayoutEnabled:B}))),G&&n.a.createElement(g.SurveyBanner,{id:"survey",tracking:{attribution:Y.tracking.attribution},isMobileLayout:ae}))))}},574:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return p})),r.d(t,"d",(function(){return m}));var a=r(70),n=["link"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=e=>e?"list::mobile":"list::twocol",u=e=>a.a?e.map((e=>{var{link:t}=e,r=l(e,n);return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({link:window.location.origin+t},r)})):e,d=e=>{var{tracking:{title:t,url:r,attribution:a,durationMillis:n,engineId:i,engineType:o,mediaType:l,lastUpdatedZ:c,supplementary:d,sequenceId:s},groupId:p,groupPosition:m,promoPositionInGroup:b}=e;return{group:{name:p,position:m,engine_id:i,engine_type:o,type:"sfv-onward-journey"},item:{type:"promo",link:r,text:t,media_type:l,position:b,duration:n,timestamp:c,attribution:a,supplementary:d?u(d):[]},event:{sequence_id:s}}},s=(e,t)=>({item:{text:e,type:"reveal text"},group:{name:"summary",type:"rich text"},event:{sequence_id:t}}),p=(e,t)=>({container:"sfv-pinned-player-close",label:e,source:t}),m=e=>{var{attribution:t="This is the attribution",isMobile:r,title:a,linkText:n,linkUrl:i}=e;return{container:"sfv-survey",label:n,url:i,metadata:{VAR:c(r),MSG:a},source:t}}}}]);