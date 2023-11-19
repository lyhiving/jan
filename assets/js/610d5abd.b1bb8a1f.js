"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={title:"Jan (Assistant)"},o=void 0,i={unversionedId:"specs/jan",id:"specs/jan",title:"Jan (Assistant)",description:'Jan: a "global" assistant',source:"@site/docs/specs/jan.md",sourceDirName:"specs",slug:"/specs/jan",permalink:"/specs/jan",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/jan.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1700408569,formattedLastUpdatedAt:"Nov 19, 2023",frontMatter:{title:"Jan (Assistant)"},sidebar:"docsSidebar",previous:{title:"Files",permalink:"/specs/files"},next:{title:"Fine-tuning",permalink:"/specs/fine-tuning"}},l={},c=[{value:"Jan: a &quot;global&quot; assistant",id:"jan-a-global-assistant",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"jan-a-global-assistant"},'Jan: a "global" assistant'),(0,r.kt)("p",null,'Jan ships with a default assistant "Jan" that lets users chat with any open source model out-of-the-box.'),(0,r.kt)("p",null,"This assistant is defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"/jan"),". It is a generic assistant to illustrate power of Jan. In the future, it will support additional features e.g. multi-assistant conversations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Your Assistant "Jan" lets you pick any model that is in the root /models folder'),(0,r.kt)("li",{parentName:"ul"},"Right panel: pick LLM model and set model parameters"),(0,r.kt)("li",{parentName:"ul"},"Jan\u2019s threads will be at root level"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"model.json")," will reflect model chosen for that session"),(0,r.kt)("li",{parentName:"ul"},"Be able to \u201cadd\u201d other assistants in the future"),(0,r.kt)("li",{parentName:"ul"},"Jan\u2019s files will be at thread level"),(0,r.kt)("li",{parentName:"ul"},"Jan is not a persistent memory assistant")))}d.isMDXComponent=!0}}]);