"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7534],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,k=p["".concat(u,".").concat(m)]||p[m]||b[m]||a;return r?n.createElement(k,s(s({ref:t},i),{},{components:r})):n.createElement(k,s({ref:t},i))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},s=void 0,l={unversionedId:"kubernetes/01kubernetes\u5b89\u88c5/06\u96c6\u7fa4\u8bbe\u7f6el",id:"kubernetes/01kubernetes\u5b89\u88c5/06\u96c6\u7fa4\u8bbe\u7f6el",title:"06\u96c6\u7fa4\u8bbe\u7f6el",description:"\u8bbe\u7f6emaster\u8282\u70b9\u662f\u5426\u53ef\u8c03\u5ea6\uff08\u53ef\u9009\uff09",source:"@site/docs/kubernetes/01kubernetes\u5b89\u88c5/06\u96c6\u7fa4\u8bbe\u7f6el.md",sourceDirName:"kubernetes/01kubernetes\u5b89\u88c5",slug:"/kubernetes/01kubernetes\u5b89\u88c5/06\u96c6\u7fa4\u8bbe\u7f6el",permalink:"/docs/kubernetes/01kubernetes\u5b89\u88c5/06\u96c6\u7fa4\u8bbe\u7f6el",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/kubernetes/01kubernetes\u5b89\u88c5/06\u96c6\u7fa4\u8bbe\u7f6el.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"05\u8c03\u6574\u8bc1\u4e66",permalink:"/docs/kubernetes/01kubernetes\u5b89\u88c5/05\u8c03\u6574\u8bc1\u4e66"},next:{title:"07\u9a8c\u8bc1\u96c6\u7fa4",permalink:"/docs/kubernetes/01kubernetes\u5b89\u88c5/07\u9a8c\u8bc1\u96c6\u7fa4"}},u={},c=[{value:"\u8bbe\u7f6emaster\u8282\u70b9\u662f\u5426\u53ef\u8c03\u5ea6\uff08\u53ef\u9009\uff09",id:"\u8bbe\u7f6emaster\u8282\u70b9\u662f\u5426\u53ef\u8c03\u5ea6\u53ef\u9009",level:3},{value:"\u8bbe\u7f6ekubectl\u81ea\u52a8\u8865\u5168",id:"\u8bbe\u7f6ekubectl\u81ea\u52a8\u8865\u5168",level:3}],i={toc:c},p="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u8bbe\u7f6emaster\u8282\u70b9\u662f\u5426\u53ef\u8c03\u5ea6\u53ef\u9009"},"\u8bbe\u7f6emaster\u8282\u70b9\u662f\u5426\u53ef\u8c03\u5ea6\uff08\u53ef\u9009\uff09"),(0,o.kt)("p",null,"\u64cd\u4f5c\u8282\u70b9\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"k8s-master")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u90e8\u7f72\u6210\u529f\u540e\uff0cmaster\u8282\u70b9\u65e0\u6cd5\u8c03\u5ea6\u4e1a\u52a1pod\uff0c\u5982\u9700\u8bbe\u7f6emaster\u8282\u70b9\u4e5f\u53ef\u4ee5\u53c2\u4e0epod\u7684\u8c03\u5ea6\uff0c\u9700\u6267\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl taint node k8s-master node-role.kubernetes.io/master:NoSchedule-\nkubectl taint node k8s-master node-role.kubernetes.io/control-plane:NoSchedule-\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bfe\u7a0b\u540e\u671f\u4f1a\u90e8\u7f72\u7cfb\u7edf\u7ec4\u4ef6\u5230master\u8282\u70b9\uff0c\u56e0\u6b64\uff0c\u6b64\u5904\u5efa\u8bae\u8bbe\u7f6ek8s-master\u8282\u70b9\u4e3a\u53ef\u8c03\u5ea6")),(0,o.kt)("h3",{id:"\u8bbe\u7f6ekubectl\u81ea\u52a8\u8865\u5168"},"\u8bbe\u7f6ekubectl\u81ea\u52a8\u8865\u5168"),(0,o.kt)("p",null,"\u64cd\u4f5c\u8282\u70b9\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"k8s-master")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ yum install bash-completion -y\n$ source /usr/share/bash-completion/bash_completion\n$ source <(kubectl completion bash)\n$ echo "source <(kubectl completion bash)" >> ~/.bashrc\n')))}b.isMDXComponent=!0}}]);