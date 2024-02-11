"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3880],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},k=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,s=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(s,a(a({ref:t},k),{},{components:r})):n.createElement(s,a({ref:t},k))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a=void 0,l={unversionedId:"docker\u8be6\u89e3/introduction",id:"docker\u8be6\u89e3/introduction",title:"introduction",description:"\u4ecb\u7ecddocker\u7684\u524d\u4e16\u4eca\u751f\uff0c\u4e86\u89e3docker\u7684\u5b9e\u73b0\u539f\u7406\uff0c\u4ee5\u5305\u542bJava\u3001Django\u3001\u524d\u7aef\u7b49\u591a\u4e2a\u9879\u76ee\u4e3a\u4f8b\uff0c\u5e26\u5927\u5bb6\u5982\u4f55\u7f16\u5199\u6700\u4f73\u7684Dockerfile\u6784\u5efa\u955c\u50cf\u3002\u901a\u8fc7\u672c\u7ae0\u7684\u5b66\u4e60\uff0c\u5927\u5bb6\u4f1a\u77e5\u9053docker\u7684\u6982\u5ff5\u53ca\u57fa\u672c\u64cd\u4f5c\uff0c\u5e76\u5b66\u4f1a\u6784\u5efa\u81ea\u5df1\u7684\u4e1a\u52a1\u955c\u50cf\uff0c\u5e76\u901a\u8fc7\u6293\u5305\u7684\u65b9\u5f0f\u638c\u63e1Docker\u6700\u5e38\u7528\u7684bridge\u7f51\u7edc\u6a21\u5f0f\u7684\u901a\u4fe1\u3002",source:"@site/docs/docker\u8be6\u89e3/1.introduction.md",sourceDirName:"docker\u8be6\u89e3",slug:"/docker\u8be6\u89e3/introduction",permalink:"/docs/docker\u8be6\u89e3/introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docker\u8be6\u89e3/1.introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/docs/category/docker"},next:{title:"install",permalink:"/docs/docker\u8be6\u89e3/install"}},c={},p=[{value:"\u8ba4\u8bc6docker",id:"\u8ba4\u8bc6docker",level:4},{value:"\u4e3a\u4ec0\u4e48\u51fa\u73b0docker",id:"\u4e3a\u4ec0\u4e48\u51fa\u73b0docker",level:6},{value:"docker\u80fd\u505a\u4ec0\u4e48",id:"docker\u80fd\u505a\u4ec0\u4e48",level:6},{value:"\u4ec0\u4e48\u662fdocker",id:"\u4ec0\u4e48\u662fdocker",level:6},{value:"\u7248\u672c\u7ba1\u7406",id:"\u7248\u672c\u7ba1\u7406",level:6},{value:"\u53d1\u5c55\u53f2",id:"\u53d1\u5c55\u53f2",level:6},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:6}],k={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ecb\u7ecddocker\u7684\u524d\u4e16\u4eca\u751f\uff0c\u4e86\u89e3docker\u7684\u5b9e\u73b0\u539f\u7406\uff0c\u4ee5\u5305\u542bJava\u3001Django\u3001\u524d\u7aef\u7b49\u591a\u4e2a\u9879\u76ee\u4e3a\u4f8b\uff0c\u5e26\u5927\u5bb6\u5982\u4f55\u7f16\u5199\u6700\u4f73\u7684Dockerfile\u6784\u5efa\u955c\u50cf\u3002\u901a\u8fc7\u672c\u7ae0\u7684\u5b66\u4e60\uff0c\u5927\u5bb6\u4f1a\u77e5\u9053docker\u7684\u6982\u5ff5\u53ca\u57fa\u672c\u64cd\u4f5c\uff0c\u5e76\u5b66\u4f1a\u6784\u5efa\u81ea\u5df1\u7684\u4e1a\u52a1\u955c\u50cf\uff0c\u5e76\u901a\u8fc7\u6293\u5305\u7684\u65b9\u5f0f\u638c\u63e1Docker\u6700\u5e38\u7528\u7684bridge\u7f51\u7edc\u6a21\u5f0f\u7684\u901a\u4fe1\u3002"),(0,o.kt)("h4",{id:"\u8ba4\u8bc6docker"},"\u8ba4\u8bc6docker"),(0,o.kt)("h6",{id:"\u4e3a\u4ec0\u4e48\u51fa\u73b0docker"},"\u4e3a\u4ec0\u4e48\u51fa\u73b0docker"),(0,o.kt)("p",null,"\u9700\u8981\u4e00\u79cd\u8f7b\u91cf\u3001\u9ad8\u6548\u7684\u865a\u62df\u5316\u80fd\u529b"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/1666340642482.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/docker-differents.svg",alt:null})),(0,o.kt)("p",null,"Docker \u516c\u53f8\u4f4d\u4e8e\u65e7\u91d1\u5c71,\u539f\u540ddotCloud\uff0c\u5e95\u5c42\u5229\u7528\u4e86Linux\u5bb9\u5668\u6280\u672f\uff08LXC\uff09\uff08\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u5b9e\u73b0\u8d44\u6e90\u9694\u79bb\u4e0e\u9650\u5236\uff09\u3002\u4e3a\u4e86\u65b9\u4fbf\u521b\u5efa\u548c\u7ba1\u7406\u8fd9\u4e9b\u5bb9\u5668\uff0cdotCloud \u5f00\u53d1\u4e86\u4e00\u5957\u5185\u90e8\u5de5\u5177\uff0c\u4e4b\u540e\u88ab\u547d\u540d\u4e3a\u201cDocker\u201d\u3002Docker\u5c31\u662f\u8fd9\u6837\u8bde\u751f\u7684\u3002"),(0,o.kt)("p",null,"Hypervisor\uff1a \u4e00\u79cd\u8fd0\u884c\u5728\u57fa\u7840\u7269\u7406\u670d\u52a1\u5668\u548c\u64cd\u4f5c\u7cfb\u7edf\u4e4b\u95f4\u7684\u4e2d\u95f4\u8f6f\u4ef6\u5c42\uff0c\u53ef\u5141\u8bb8\u591a\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u548c\u5e94\u7528\u5171\u4eab\u786c\u4ef6 \u3002\u5e38\u89c1\u7684VMware\u7684 Workstation \u3001ESXi\u3001\u5fae\u8f6f\u7684Hyper-V\u6216\u8005\u601d\u6770\u7684XenServer\u3002"),(0,o.kt)("p",null,"Container Runtime\uff1a\u901a\u8fc7Linux\u5185\u6838\u865a\u62df\u5316\u80fd\u529b\u7ba1\u7406\u591a\u4e2a\u5bb9\u5668\uff0c\u591a\u4e2a\u5bb9\u5668\u5171\u4eab\u4e00\u5957\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u3002\u56e0\u6b64\u6458\u6389\u4e86\u5185\u6838\u5360\u7528\u7684\u7a7a\u95f4\u53ca\u8fd0\u884c\u6240\u9700\u8981\u7684\u8017\u65f6\uff0c\u4f7f\u5f97\u5bb9\u5668\u6781\u5176\u8f7b\u91cf\u4e0e\u5feb\u901f\u3002Docker\u662f\u5176\u4e2d\u6700\u77e5\u540d\u7684\u4e00\u79cd\u5bb9\u5668Container Runtime\uff0c\u5176\u4ed6\u7684\u8fd8\u6709 CoreOS\u5bb9\u5668Rkt \uff0cPodman\u3002"),(0,o.kt)("h6",{id:"docker\u80fd\u505a\u4ec0\u4e48"},"docker\u80fd\u505a\u4ec0\u4e48"),(0,o.kt)("p",null,"\u57fa\u4e8e\u8f7b\u91cf\u7684\u7279\u6027\uff0c\u89e3\u51b3\u8f6f\u4ef6\u4ea4\u4ed8\u8fc7\u7a0b\u4e2d\u7684\u73af\u5883\u4f9d\u8d56"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/why1.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u601d\u8003\uff1a \u57fa\u4e8edocker\u5bb9\u5668\u90e8\u7f72\u5e94\u7528\u548c\u865a\u62df\u673a\u90e8\u7f72\u5e94\u7528\u6700\u5927\u7684\u533a\u522b\uff1f")),(0,o.kt)("p",null,"\u7b80\u5355\u603b\u7ed3\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u628a\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u53ca\u8fd0\u884c\u4f9d\u8d56\u73af\u5883\u6253\u5305\u6210\u955c\u50cf\uff0c\u4f5c\u4e3a\u4ea4\u4ed8\u4ecb\u8d28\uff0c\u5728\u5404\u73af\u5883\u90e8\u7f72")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5c06\u955c\u50cf\uff08image\uff09\u542f\u52a8\u6210\u4e3a\u5bb9\u5668(container)\uff0c\u5e76\u4e14\u63d0\u4f9b\u591a\u5bb9\u5668\u7684\u751f\u547d\u5468\u671f\u8fdb\u884c\u7ba1\u7406\uff08\u542f\u3001\u505c\u3001\u5220\uff09")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"container\u5bb9\u5668\u4e4b\u95f4\u76f8\u4e92\u9694\u79bb\uff0c\u4e14\u6bcf\u4e2a\u5bb9\u5668\u53ef\u4ee5\u8bbe\u7f6e\u8d44\u6e90\u9650\u989d")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u63d0\u4f9b\u8f7b\u91cf\u7ea7\u865a\u62df\u5316\u529f\u80fd\uff0c\u5bb9\u5668\u5c31\u662f\u5728\u5bbf\u4e3b\u673a\u4e2d\u7684\u4e00\u4e2a\u4e2a\u7684\u865a\u62df\u7684\u7a7a\u95f4\uff0c\u5f7c\u6b64\u76f8\u4e92\u9694\u79bb\uff0c\u5b8c\u5168\u72ec\u7acb"))),(0,o.kt)("h6",{id:"\u4ec0\u4e48\u662fdocker"},"\u4ec0\u4e48\u662fdocker"),(0,o.kt)("p",null,"\u57fa\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\uff0c\u63d0\u4f9b\u8f7b\u91cf\u7ea7\u865a\u62df\u5316\u529f\u80fd\u7684CS\u67b6\u6784\u7684\u8f6f\u4ef6\u4ea7\u54c1\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/docker-engine.png",alt:null})),(0,o.kt)("h6",{id:"\u7248\u672c\u7ba1\u7406"},"\u7248\u672c\u7ba1\u7406"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker \u5f15\u64ce\u4e3b\u8981\u6709\u4e24\u4e2a\u7248\u672c\uff1a\u4f01\u4e1a\u7248\uff08EE\uff09\u548c\u793e\u533a\u7248\uff08CE\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5b63\u5ea6(1-3,4-6,7-9,10-12)\uff0c\u4f01\u4e1a\u7248\u548c\u793e\u533a\u7248\u90fd\u4f1a\u53d1\u5e03\u4e00\u4e2a\u7a33\u5b9a\u7248\u672c(Stable)\u3002\u793e\u533a\u7248\u672c\u4f1a\u63d0\u4f9b 4 \u4e2a\u6708\u7684\u652f\u6301\uff0c\u800c\u4f01\u4e1a\u7248\u672c\u4f1a\u63d0\u4f9b 12 \u4e2a\u6708\u7684\u652f\u6301"),(0,o.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6708\u793e\u533a\u7248\u8fd8\u4f1a\u901a\u8fc7 Edge \u65b9\u5f0f\u53d1\u5e03\u6708\u5ea6\u7248"),(0,o.kt)("li",{parentName:"ul"},"\u4ece 2017 \u5e74\u7b2c\u4e00\u5b63\u5ea6\u5f00\u59cb\uff0cDocker \u7248\u672c\u53f7\u9075\u5faa YY.MM-xx \u683c\u5f0f\uff0c\u7c7b\u4f3c\u4e8e Ubuntu \u7b49\u9879\u76ee\u3002\u4f8b\u5982\uff0c2018 \u5e74 6 \u6708\u7b2c\u4e00\u6b21\u53d1\u5e03\u7684\u793e\u533a\u7248\u672c\u4e3a 18.06.0-ce")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/docker-version.png",alt:null})),(0,o.kt)("h6",{id:"\u53d1\u5c55\u53f2"},"\u53d1\u5c55\u53f2"),(0,o.kt)("p",null,"13\u5e74\u6210\u7acb\uff0c15\u5e74\u5f00\u59cb\uff0c\u8fce\u6765\u4e86\u98de\u901f\u53d1\u5c55\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/deplpment.png",alt:null})),(0,o.kt)("p",null,"Docker 1.8\u4e4b\u524d\uff0c\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://linuxcontainers.org/lxc/introduction/"},"LXC"),"\uff0cDocker\u5728\u4e0a\u5c42\u505a\u4e86\u5c01\u88c5\uff0c \u628aLXC\u590d\u6742\u7684\u5bb9\u5668\u521b\u5efa\u4e0e\u4f7f\u7528\u65b9\u5f0f\u7b80\u5316\u4e3a\u81ea\u5df1\u7684\u4e00\u5957\u547d\u4ee4\u4f53\u7cfb\u3002 "),(0,o.kt)("p",null,"\u4e4b\u540e\uff0c\u4e3a\u4e86\u5b9e\u73b0\u8de8\u5e73\u53f0\u7b49\u590d\u6742\u7684\u573a\u666f\uff0cDocker\u62bd\u51fa\u4e86libcontainer\u9879\u76ee\uff0c\u628a\u5bf9namespace\u3001cgroup\u7684\u64cd\u4f5c\u5c01\u88c5\u5728libcontainer\u9879\u76ee\u91cc\uff0c\u652f\u6301\u4e0d\u540c\u7684\u5e73\u53f0\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"2015\u5e746\u6708\uff0cDocker\u7275\u5934\u6210\u7acb\u4e86 OCI\uff08Open Container Initiative\u5f00\u653e\u5bb9\u5668\u8ba1\u5212\uff09\u7ec4\u7ec7\uff0c\u8fd9\u4e2a\u7ec4\u7ec7\u7684\u76ee\u7684\u662f\u5efa\u7acb\u8d77\u4e00\u4e2a\u56f4\u7ed5\u5bb9\u5668\u7684\u901a\u7528\u6807\u51c6 \u3002 \u5bb9\u5668\u683c\u5f0f\u6807\u51c6\u662f\u4e00\u79cd\u4e0d\u53d7\u4e0a\u5c42\u7ed3\u6784\u7ed1\u5b9a\u7684\u534f\u8bae\uff0c\u5373\u4e0d\u9650\u4e8e\u67d0\u79cd\u7279\u5b9a\u64cd\u4f5c\u7cfb\u7edf\u3001\u786c\u4ef6\u3001CPU\u67b6\u6784\u3001\u516c\u6709\u4e91\u7b49 \uff0c \u5141\u8bb8\u4efb\u4f55\u4eba\u5728\u9075\u5faa\u8be5\u6807\u51c6\u7684\u60c5\u51b5\u4e0b\u5f00\u53d1\u5e94\u7528\u5bb9\u5668\u6280\u672f\uff0c\u8fd9\u4f7f\u5f97\u5bb9\u5668\u6280\u672f\u6709\u4e86\u4e00\u4e2a\u66f4\u5e7f\u9614\u7684\u53d1\u5c55\u7a7a\u95f4\u3002"),(0,o.kt)("p",null,"OCI\u6210\u7acb\u540e\uff0clibcontainer \u4ea4\u7ed9OCI\u7ec4\u7ec7\u6765\u7ef4\u62a4\uff0c\u4f46\u662flibcontainer\u4e2d\u53ea\u5305\u542b\u4e86\u4e0ekernel\u4ea4\u4e92\u7684\u5e93\uff0c\u56e0\u6b64\u57fa\u4e8elibcontainer\u9879\u76ee\uff0c\u540e\u9762\u53c8\u52a0\u5165\u4e86\u4e00\u4e2aCLI\u5de5\u5177\uff0c\u5e76\u4e14\u9879\u76ee\u6539\u540d\u4e3arunC (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opencontainers/runc"},"https://github.com/opencontainers/runc")," )\uff0c \u76ee\u524drunC\u5df2\u7ecf\u6210\u4e3a\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u7684runtime\u5de5\u5177\u3002"),(0,o.kt)("p",null,"Docker\u4e5f\u505a\u4e86\u67b6\u6784\u8c03\u6574\u3002\u5c06\u5bb9\u5668\u8fd0\u884c\u65f6\u76f8\u5173\u7684\u7a0b\u5e8f\u4ecedocker daemon\u5265\u79bb\u51fa\u6765\uff0c\u5f62\u6210\u4e86",(0,o.kt)("strong",{parentName:"p"},"containerd"),"\u3002containerd\u5411\u4e0a\u4e3aDocker Daemon\u63d0\u4f9b\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"gRPC\u63a5\u53e3"),"\uff0c\u4f7f\u5f97Docker Daemon\u5c4f\u853d\u4e0b\u9762\u7684\u7ed3\u6784\u53d8\u5316\uff0c\u786e\u4fdd\u539f\u6709\u63a5\u53e3\u5411\u4e0b\u517c\u5bb9\u3002\u5411\u4e0b\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"containerd-shim"),"\u7ed3\u5408",(0,o.kt)("inlineCode",{parentName:"p"},"runC"),"\uff0c\u4f7f\u5f97\u5f15\u64ce\u53ef\u4ee5\u72ec\u7acb\u5347\u7ea7\uff0c\u907f\u514d\u4e4b\u524dDocker Daemon\u5347\u7ea7\u4f1a\u5bfc\u81f4\u6240\u6709\u5bb9\u5668\u4e0d\u53ef\u7528\u7684\u95ee\u9898\u3002"),(0,o.kt)("p",null," ",(0,o.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/containerd.png",alt:null})),(0,o.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"runC\uff08libcontainer\uff09\u662f\u7b26\u5408OCI\u6807\u51c6\u7684\u4e00\u4e2a\u5b9e\u73b0\uff0c\u4e0e\u5e95\u5c42\u7cfb\u7edf\u4ea4\u4e92"),(0,o.kt)("li",{parentName:"ul"},"containerd\u662f\u5b9e\u73b0\u4e86OCI\u4e4b\u4e0a\u7684\u5bb9\u5668\u7684\u9ad8\u7ea7\u529f\u80fd\uff0c\u6bd4\u5982\u955c\u50cf\u7ba1\u7406\u3001\u5bb9\u5668\u6267\u884c\u7684\u8c03\u7528\u7b49"),(0,o.kt)("li",{parentName:"ul"},"Dockerd\u76ee\u524d\u662f\u6700\u4e0a\u5c42\u4e0eCLI\u4ea4\u4e92\u7684\u8fdb\u7a0b\uff0c\u63a5\u6536cli\u7684\u8bf7\u6c42\u5e76\u4e0econtainerd\u534f\u4f5c")),(0,o.kt)("h6",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u63d0\u4f9b\u4e00\u79cd\u66f4\u52a0\u8f7b\u91cf\u7684\u865a\u62df\u5316\u6280\u672f\uff0cdocker\u51fa\u73b0\u4e86"),(0,o.kt)("li",{parentName:"ol"},"\u501f\u52a9\u4e8edocker\u5bb9\u5668\u7684\u8f7b\u3001\u5feb\u7b49\u7279\u6027\uff0c\u89e3\u51b3\u4e86\u8f6f\u4ef6\u4ea4\u4ed8\u8fc7\u7a0b\u4e2d\u7684\u73af\u5883\u4f9d\u8d56\u95ee\u9898\uff0c\u4f7f\u5f97docker\u5f97\u4ee5\u5feb\u901f\u53d1\u5c55"),(0,o.kt)("li",{parentName:"ol"},"Docker\u662f\u4e00\u79cdCS\u67b6\u6784\u7684\u8f6f\u4ef6\u4ea7\u54c1\uff0c\u53ef\u4ee5\u628a\u4ee3\u7801\u53ca\u4f9d\u8d56\u6253\u5305\u6210\u955c\u50cf\uff0c\u4f5c\u4e3a\u4ea4\u4ed8\u4ecb\u8d28\uff0c\u5e76\u4e14\u628a\u955c\u50cf\u542f\u52a8\u6210\u4e3a\u5bb9\u5668\uff0c\u63d0\u4f9b\u5bb9\u5668\u751f\u547d\u5468\u671f\u7684\u7ba1\u7406"),(0,o.kt)("li",{parentName:"ol"},"docker-ce\uff0c\u6bcf\u5b63\u5ea6\u53d1\u5e03stable\u7248\u672c\u300218.06\uff0c18.09\uff0c19.03"),(0,o.kt)("li",{parentName:"ol"},"\u53d1\u5c55\u81f3\u4eca\uff0cdocker\u5df2\u7ecf\u901a\u8fc7\u5236\u5b9aOCI\u6807\u51c6\u5bf9\u6700\u521d\u7684\u9879\u76ee\u505a\u4e86\u62c6\u5206\uff0c\u5176\u4e2drunC\u548ccontainerd\u662fdocker\u7684\u6838\u5fc3\u9879\u76ee\uff0c\u7406\u89e3docker\u6574\u4e2a\u8bf7\u6c42\u7684\u6d41\u7a0b\uff0c\u5bf9\u6211\u4eec\u6df1\u5165\u7406\u89e3docker\u6709\u5f88\u5927\u7684\u5e2e\u52a9")))}d.isMDXComponent=!0}}]);