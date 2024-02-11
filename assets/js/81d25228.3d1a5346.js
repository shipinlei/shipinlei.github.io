"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="03v-for\u503c\u5f97\u6ce8\u610f\u7684\u5730\u65b9",l={unversionedId:"vue3\u77e5\u8bc6\u6574\u7406/03v-for\u503c\u5f97\u6ce8\u610f\u7684\u5730\u65b9",id:"vue3\u77e5\u8bc6\u6574\u7406/03v-for\u503c\u5f97\u6ce8\u610f\u7684\u5730\u65b9",title:"03v-for\u503c\u5f97\u6ce8\u610f\u7684\u5730\u65b9",description:"\u901a\u8fc7 key \u7ba1\u7406\u72b6\u6001",source:"@site/docs/vue3\u77e5\u8bc6\u6574\u7406/03v-for\u503c\u5f97\u6ce8\u610f\u7684\u5730\u65b9.md",sourceDirName:"vue3\u77e5\u8bc6\u6574\u7406",slug:"/vue3\u77e5\u8bc6\u6574\u7406/03v-for\u503c\u5f97\u6ce8\u610f\u7684\u5730\u65b9",permalink:"/docs/vue3\u77e5\u8bc6\u6574\u7406/03v-for\u503c\u5f97\u6ce8\u610f\u7684\u5730\u65b9",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/vue3\u77e5\u8bc6\u6574\u7406/03v-for\u503c\u5f97\u6ce8\u610f\u7684\u5730\u65b9.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"02\u52a8\u6001\u7ec4\u4ef6component",permalink:"/docs/vue3\u77e5\u8bc6\u6574\u7406/02\u52a8\u6001\u7ec4\u4ef6component"},next:{title:"04\u63d2\u69fd\u5185\u5bb9\u4e0e\u51fa\u53e3",permalink:"/docs/vue3\u77e5\u8bc6\u6574\u7406/04\u63d2\u69fd\u5185\u5bb9\u4e0e\u51fa\u53e3"}},p={},u=[{value:"\u901a\u8fc7 key \u7ba1\u7406\u72b6\u6001",id:"\u901a\u8fc7-key-\u7ba1\u7406\u72b6\u6001",level:2},{value:"\u7ec4\u4ef6\u4e0a\u4f7f\u7528 v-for",id:"\u7ec4\u4ef6\u4e0a\u4f7f\u7528-v-for",level:2}],c={toc:u},m="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"03v-for\u503c\u5f97\u6ce8\u610f\u7684\u5730\u65b9"},"03v-for\u503c\u5f97\u6ce8\u610f\u7684\u5730\u65b9"),(0,o.kt)("h2",{id:"\u901a\u8fc7-key-\u7ba1\u7406\u72b6\u6001"},"\u901a\u8fc7 key \u7ba1\u7406\u72b6\u6001"),(0,o.kt)("p",null,"Vue \u9ed8\u8ba4\u6309\u7167\u201c\u5c31\u5730\u66f4\u65b0\u201d\u7684\u7b56\u7565\u6765\u66f4\u65b0\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"v-for")," \u6e32\u67d3\u7684\u5143\u7d20\u5217\u8868\u3002\u5f53\u6570\u636e\u9879\u7684\u987a\u5e8f\u6539\u53d8\u65f6\uff0cVue \u4e0d\u4f1a\u968f\u4e4b\u79fb\u52a8 DOM \u5143\u7d20\u7684\u987a\u5e8f\uff0c\u800c\u662f\u5c31\u5730\u66f4\u65b0\u6bcf\u4e2a\u5143\u7d20\uff0c\u786e\u4fdd\u5b83\u4eec\u5728\u539f\u672c\u6307\u5b9a\u7684\u7d22\u5f15\u4f4d\u7f6e\u4e0a\u6e32\u67d3\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u6a21\u5f0f\u662f\u9ad8\u6548\u7684\uff0c\u4f46",(0,o.kt)("strong",{parentName:"p"},"\u53ea\u9002\u7528\u4e8e\u5217\u8868\u6e32\u67d3\u8f93\u51fa\u7684\u7ed3\u679c\u4e0d\u4f9d\u8d56\u5b50\u7ec4\u4ef6\u72b6\u6001\u6216\u8005\u4e34\u65f6 DOM \u72b6\u6001 (\u4f8b\u5982\u8868\u5355\u8f93\u5165\u503c) \u7684\u60c5\u51b5"),"\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u7ed9 Vue \u4e00\u4e2a\u63d0\u793a\uff0c\u4ee5\u4fbf\u5b83\u53ef\u4ee5\u8ddf\u8e2a\u6bcf\u4e2a\u8282\u70b9\u7684\u6807\u8bc6\uff0c\u4ece\u800c\u91cd\u7528\u548c\u91cd\u65b0\u6392\u5e8f\u73b0\u6709\u7684\u5143\u7d20\uff0c\u4f60\u9700\u8981\u4e3a\u6bcf\u4e2a\u5143\u7d20\u5bf9\u5e94\u7684\u5757\u63d0\u4f9b\u4e00\u4e2a\u552f\u4e00\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," attribute\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div v-for="item in items" :key="item.id">\n  \x3c!-- \u5185\u5bb9 --\x3e\n</div>\n')),(0,o.kt)("p",null," \u5f53\u4f60\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"}," \u65f6\uff0c"),"key",(0,o.kt)("inlineCode",{parentName:"p"},"\u5e94\u8be5\u88ab\u653e\u7f6e\u5728\u8fd9\u4e2a")," \u5bb9\u5668\u4e0a\uff1a "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template v-for="todo in todos" :key="todo.name">\n  <li>{{ todo.name }}</li>\n</template>\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cn.vuejs.org/style-guide/rules-essential.html#use-keyed-v-for"},"\u63a8\u8350"),"\u5728\u4efb\u4f55\u53ef\u884c\u7684\u65f6\u5019\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"v-for")," \u63d0\u4f9b\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," attribute\uff0c\u9664\u975e\u6240\u8fed\u4ee3\u7684 DOM \u5185\u5bb9\u975e\u5e38\u7b80\u5355 (\u4f8b\u5982\uff1a\u4e0d\u5305\u542b\u7ec4\u4ef6\u6216\u6709\u72b6\u6001\u7684 DOM \u5143\u7d20)\uff0c\u6216\u8005\u4f60\u60f3\u6709\u610f\u91c7\u7528\u9ed8\u8ba4\u884c\u4e3a\u6765\u63d0\u9ad8\u6027\u80fd\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"key")," \u7ed1\u5b9a\u7684\u503c\u671f\u671b\u662f\u4e00\u4e2a\u57fa\u7840\u7c7b\u578b\u7684\u503c\uff0c\u4f8b\u5982\u5b57\u7b26\u4e32\u6216 number \u7c7b\u578b\u3002\u4e0d\u8981\u7528\u5bf9\u8c61\u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"v-for")," \u7684 key\u3002"),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u4e0a\u4f7f\u7528-v-for"},"\u7ec4\u4ef6\u4e0a\u4f7f\u7528 v-for"),(0,o.kt)("p",null," \u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5728\u7ec4\u4ef6\u4e0a\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"v-for"),"\uff0c\u548c\u5728\u4e00\u822c\u7684\u5143\u7d20\u4e0a\u4f7f\u7528\u6ca1\u6709\u533a\u522b (\u522b\u5fd8\u8bb0\u63d0\u4f9b\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),")\uff1a "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<MyComponent v-for="item in items" :key="item.id" />\n')),(0,o.kt)("p",null," \u4f46\u662f\uff0c\u8fd9\u4e0d\u4f1a\u81ea\u52a8\u5c06\u4efb\u4f55\u6570\u636e\u4f20\u9012\u7ed9\u7ec4\u4ef6\uff0c\u56e0\u4e3a\u7ec4\u4ef6\u6709\u81ea\u5df1\u72ec\u7acb\u7684\u4f5c\u7528\u57df\u3002\u4e3a\u4e86\u5c06\u8fed\u4ee3\u540e\u7684\u6570\u636e\u4f20\u9012\u5230\u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u4f20\u9012 props\uff1a "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<MyComponent\n  v-for="(item, index) in items"\n  :item="item"\n  :index="index"\n  :key="item.id"\n/>\n')),(0,o.kt)("p",null," \u4e0d\u81ea\u52a8\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"item")," \u6ce8\u5165\u7ec4\u4ef6\u7684\u539f\u56e0\u662f\uff0c\u8fd9\u4f1a\u4f7f\u7ec4\u4ef6\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"v-for")," \u7684\u5de5\u4f5c\u65b9\u5f0f\u7d27\u5bc6\u8026\u5408\u3002\u660e\u786e\u5176\u6570\u636e\u7684\u6765\u6e90\u53ef\u4ee5\u4f7f\u7ec4\u4ef6\u5728\u5176\u4ed6\u60c5\u51b5\u4e0b\u91cd\u7528\u3002"))}s.isMDXComponent=!0}}]);