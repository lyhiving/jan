"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={title:"About Jan"},i=void 0,l={unversionedId:"about/about",id:"about/about",title:"About Jan",description:"Jan is a tool to run LLMs privately on your personal computer.",source:"@site/docs/about/about.md",sourceDirName:"about",slug:"/about/",permalink:"/about/",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/about/about.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1699333432,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{title:"About Jan"},sidebar:"aboutSidebar",next:{title:"Nov 23: Nvidia GenAI Day",permalink:"/events/nvidia-llm-day-nov-23"}},s={},u=[{value:"Why does Jan Exist?",id:"why-does-jan-exist",level:2},{value:"Mission",id:"mission",level:3},{value:"Ideal Customer",id:"ideal-customer",level:3},{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3},{value:"How Jan Works",id:"how-jan-works",level:2},{value:"Open Source",id:"open-source",level:3},{value:"Build in Public",id:"build-in-public",level:3},{value:"Bootstrapped",id:"bootstrapped",level:3},{value:"Remote Team",id:"remote-team",level:3},{value:"Contact",id:"contact",level:2},{value:"General Enquiries",id:"general-enquiries",level:3},{value:"Careers",id:"careers",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jan is a tool to run LLMs privately on your personal computer. "),(0,o.kt)("p",null,"Jan's roadmap is to build a framework for Personal AIs that can be customized and extended by anyone. "),(0,o.kt)("h2",{id:"why-does-jan-exist"},"Why does Jan Exist?"),(0,o.kt)("h3",{id:"mission"},"Mission"),(0,o.kt)("p",null,"To enable high-productivity individuals to use AI to scale themselves. "),(0,o.kt)("h3",{id:"ideal-customer"},"Ideal Customer"),(0,o.kt)("p",null,"Our ideal customer is an AI Enthusiast who wants to experiment with solving problems using AI, and is ok with experimental software. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Semi-technical (i.e. can code simple Javascript/Python scripts), i.e. not able to build the whole thing themselves"),(0,o.kt)("li",{parentName:"ul"},"Will file bugs"),(0,o.kt)("li",{parentName:"ul"},"[Plus]"," Wants to share their solution with others ")),(0,o.kt)("p",null,"Our goal in 2023 is to find 500 of these ideal customers. "),(0,o.kt)("h3",{id:"problem"},"Problem"),(0,o.kt)("p",null,"Our ideal customer has clear ideas for how to solve his/her problems using AI, but has not done so because:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lack full skillset across UI, Backend and MLOps to build their own custom Personal AI"),(0,o.kt)("li",{parentName:"ul"},"Doesn't have 10 hours/week to build and maintain a Personal AI"),(0,o.kt)("li",{parentName:"ul"},"Uncomfortable with giving personal info to ChatGPT")),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Jan is a Personal AI that you can customize, and runs privately on your own computer."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tinker and customize in <10 lines of code"),(0,o.kt)("li",{parentName:"ul"},"Pre-built plugins (e.g. RAG, Langchain, LlamaIndex)"),(0,o.kt)("li",{parentName:"ul"},"Mobile support (including helpful widgets)")),(0,o.kt)("p",null,"Jan has a very modular architecture that allows you to swap out or customize components, without having to rebuild everything. "),(0,o.kt)("h2",{id:"how-jan-works"},"How Jan Works"),(0,o.kt)("h3",{id:"open-source"},"Open Source"),(0,o.kt)("p",null,"Jan is a startup with an open source business model. We believe in the need for an open source AI ecosystem, and are committed to building it. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/janhq/jan"},"Jan: a Personal AI")," (AGPLv3)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/janhq/nitro"},"Nitro: run Local AI")," (AGPLv3)")),(0,o.kt)("h3",{id:"build-in-public"},"Build in Public"),(0,o.kt)("p",null,"We use Github to build in public, and welcome anyone to join in.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/janhq/projects/5"},"Jan's Kanban")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/janhq/projects/5/views/2"},"Jan's Roadmap"))),(0,o.kt)("h3",{id:"bootstrapped"},"Bootstrapped"),(0,o.kt)("p",null,"Jan is currently a bootstrapped startup. We balance technical invention with the search for a sustainable business model. "),(0,o.kt)("p",null,"We appreciate any business that can balance growth with cashflow/profitability. "),(0,o.kt)("h3",{id:"remote-team"},"Remote Team"),(0,o.kt)("p",null,"Jan has a fully-remote team. We are mainly based in the Asia timezone. We use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/janhq"},"Github")," and ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/af6SaTdzpx"},"Discord")," to work. "),(0,o.kt)("h2",{id:"contact"},"Contact"),(0,o.kt)("h3",{id:"general-enquiries"},"General Enquiries"),(0,o.kt)("p",null,"Drop us a message in our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/af6SaTdzpx"},"Discord")," and we'll get back to you."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#general"),": for general discussion"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#jan-dev"),": for Jan-related questions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#nitro-dev"),": for Nitro-related questions")),(0,o.kt)("h3",{id:"careers"},"Careers"),(0,o.kt)("p",null,"Jan has a culture of ownership, independent thinking, and lightning fast execution. If you'd like to join us, we have open positions on our ",(0,o.kt)("a",{parentName:"p",href:"https://janai.bamboohr.com/careers"},"careers page"),"."))}d.isMDXComponent=!0}}]);