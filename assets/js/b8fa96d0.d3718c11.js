"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[844],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),u=s,g=m["".concat(i,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:s,o[1]=p;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8154:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=a(7462),s=(a(7294),a(3905));const r={title:"Messages"},o=void 0,p={unversionedId:"specs/messages",id:"specs/messages",title:"Messages",description:"Draft Specification: functionality has not been implemented yet.",source:"@site/docs/specs/messages.md",sourceDirName:"specs",slug:"/specs/messages",permalink:"/specs/messages",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/messages.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1700408569,formattedLastUpdatedAt:"Nov 19, 2023",frontMatter:{title:"Messages"},sidebar:"docsSidebar",previous:{title:"Threads",permalink:"/specs/threads"},next:{title:"Assistants",permalink:"/specs/assistants"}},i={},l=[{value:"Message Object",id:"message-object",level:2},{value:"Create message",id:"create-message",level:3},{value:"Modify message",id:"modify-message",level:3}],c={toc:l},m="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Draft Specification: functionality has not been implemented yet. "),(0,s.kt)("p",{parentName:"admonition"},"Feedback: ",(0,s.kt)("a",{parentName:"p",href:"https://hackmd.io/BM_8o_OCQ-iLCYhunn2Aug"},"HackMD: Threads Spec"))),(0,s.kt)("p",null,"Messages are within ",(0,s.kt)("inlineCode",{parentName:"p"},"threads")," and capture additional metadata."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"OpenAI Equivalent: ",(0,s.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/messages"},"https://platform.openai.com/docs/api-reference/messages"))),(0,s.kt)("h2",{id:"message-object"},"Message Object"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"OpenAI Equivalent: ",(0,s.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/messages/object"},"https://platform.openai.com/docs/api-reference/messages/object")),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // Jan specific properties\n  "updatedAt": "...", // that\'s it I think\n'))),(0,s.kt)("p",null,"  // OpenAI compatible properties: ",(0,s.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/messages"},"https://platform.openai.com/docs/api-reference/messages"),')\n"id": "msg_dKYDWyQvtjDBi3tudL1yWKDa",\n"object": "thread.message",\n"created_at": 1698983503,\n"thread_id": "thread_RGUhOuO9b2nrktrmsQ2uSR6I",\n"role": "assistant",\n"content": [\n{\n"type": "text",\n"text": {\n"value": "Hi! How can I help you today?",\n"annotations": []\n}\n}\n],\n"file_ids": [],\n"assistant_id": "asst_ToSF7Gb04YMj8AMMm50ZLLtY",\n"run_id": "run_BjylUJgDqYK9bOhy4yjAiMrn",\n"metadata": {}\n}'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\n## Messages API\n> OpenAI Equivalent: https://platform.openai.com/docs/api-reference/messages\n\n### Get list message\n> OpenAI Equivalent: https://platform.openai.com/docs/api-reference/messages/getMessage\n- Example request\n```shell\n  curl {JAN_URL}/v1/threads/{thread_id}/messages/{message_id} \\\n    -H "Content-Type: application/json"\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Example response")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "msg_abc123",\n  "object": "thread.message",\n  "created_at": 1699017614,\n  "thread_id": "thread_abc123",\n  "role": "user",\n  "content": [\n    {\n      "type": "text",\n      "text": {\n        "value": "How does AI work? Explain it in simple terms.",\n        "annotations": []\n      }\n    }\n  ],\n  "file_ids": [],\n  "assistant_id": null,\n  "run_id": null,\n  "metadata": {}\n}\n')),(0,s.kt)("h3",{id:"create-message"},"Create message"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"OpenAI Equivalent: ",(0,s.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/messages/createMessage"},"https://platform.openai.com/docs/api-reference/messages/createMessage")),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"Example request")),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'  curl -X POST {JAN_URL}/v1/threads/{thread_id}/messages \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n      "role": "user",\n      "content": "How does AI work? Explain it in simple terms."\n    }\'\n')),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"Example response")),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "id": "msg_abc123",\n    "object": "thread.message",\n    "created_at": 1699017614,\n    "thread_id": "thread_abc123",\n    "role": "user",\n    "content": [\n      {\n        "type": "text",\n        "text": {\n          "value": "How does AI work? Explain it in simple terms.",\n          "annotations": []\n        }\n      }\n    ],\n    "file_ids": [],\n    "assistant_id": null,\n    "run_id": null,\n    "metadata": {}\n  }\n')),(0,s.kt)("h3",{parentName:"blockquote",id:"get-message"},"Get message"),(0,s.kt)("p",{parentName:"blockquote"},"OpenAI Equivalent: ",(0,s.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/assistants/listAssistants"},"https://platform.openai.com/docs/api-reference/assistants/listAssistants")),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"Example request")),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'  curl {JAN_URL}/v1/threads/{thread_id}/messages/{message_id} \\\n    -H "Content-Type: application/json"\n')),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"Example response")),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "id": "msg_abc123",\n    "object": "thread.message",\n    "created_at": 1699017614,\n    "thread_id": "thread_abc123",\n    "role": "user",\n    "content": [\n      {\n        "type": "text",\n        "text": {\n          "value": "How does AI work? Explain it in simple terms.",\n          "annotations": []\n        }\n      }\n    ],\n    "file_ids": [],\n    "assistant_id": null,\n    "run_id": null,\n    "metadata": {}\n  }\n'))),(0,s.kt)("h3",{id:"modify-message"},"Modify message"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Jan: TODO: Do we need to modify message? Or let user create new message?")),(0,s.kt)("h1",{id:"get-message-file"},"Get message file"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"OpenAI Equivalent: ",(0,s.kt)("a",{parentName:"p",href:"https://api.openai.com/v1/threads/%7Bthread_id%7D/messages/%7Bmessage_id%7D/files/%7Bfile_id%7D"},"https://api.openai.com/v1/threads/{thread_id}/messages/{message_id}/files/{file_id}")),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"Example request")),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'  curl {JAN_URL}/v1/threads/{thread_id}/messages/{message_id}/files/{file_id} \\\n    -H "Content-Type: application/json"\n')),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"Example response")),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "id": "file-abc123",\n    "object": "thread.message.file",\n    "created_at": 1699061776,\n    "message_id": "msg_abc123"\n  }\n')),(0,s.kt)("h1",{parentName:"blockquote",id:"list-message-files"},"List message files"),(0,s.kt)("p",{parentName:"blockquote"},"OpenAI Equivalent: ",(0,s.kt)("a",{parentName:"p",href:"https://api.openai.com/v1/threads/%7Bthread_id%7D/messages/%7Bmessage_id%7D/files"},"https://api.openai.com/v1/threads/{thread_id}/messages/{message_id}/files")),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre"},'- Example request\n```shell\n  curl {JAN_URL}/v1/threads/{thread_id}/messages/{message_id}/files/{file_id} \\\n    -H "Content-Type: application/json"\n')),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"Example response")),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "id": "file-abc123",\n    "object": "thread.message.file",\n    "created_at": 1699061776,\n    "message_id": "msg_abc123"\n  }\n'))))}d.isMDXComponent=!0}}]);