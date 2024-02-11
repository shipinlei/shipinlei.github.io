"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4693],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=c(n),m=r,d=k["".concat(i,".").concat(m)]||k[m]||u[m]||l;return n?a.createElement(d,p(p({ref:t},s),{},{components:n})):a.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[k]="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:8},p=void 0,o={unversionedId:"docker\u8be6\u89e3/network",id:"docker\u8be6\u89e3/network",title:"network",description:"Docker\u7f51\u7edc",source:"@site/docs/docker\u8be6\u89e3/8.network.md",sourceDirName:"docker\u8be6\u89e3",slug:"/docker\u8be6\u89e3/network",permalink:"/docs/docker\u8be6\u89e3/network",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docker\u8be6\u89e3/8.network.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"implementation",permalink:"/docs/docker\u8be6\u89e3/implementation"},next:{title:"containerd",permalink:"/docs/docker\u8be6\u89e3/containerd"}},i={},c=[{value:"Docker\u7f51\u7edc",id:"docker\u7f51\u7edc",level:4},{value:"\u7f51\u7edc\u6a21\u5f0f",id:"\u7f51\u7edc\u6a21\u5f0f",level:5},{value:"bridge\u6a21\u5f0f",id:"bridge\u6a21\u5f0f",level:5},{value:"\u6293\u5305\u6f14\u793a",id:"\u6293\u5305\u6f14\u793a",level:6},{value:"Host\u6a21\u5f0f",id:"host\u6a21\u5f0f",level:5},{value:"Conatiner\u6a21\u5f0f",id:"conatiner\u6a21\u5f0f",level:5},{value:"None\u6a21\u5f0f",id:"none\u6a21\u5f0f",level:5}],s={toc:c},k="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"docker\u7f51\u7edc"},"Docker\u7f51\u7edc"),(0,r.kt)("p",null,"docker\u5bb9\u5668\u662f\u4e00\u5757\u5177\u6709\u9694\u79bb\u6027\u7684\u865a\u62df\u7cfb\u7edf\uff0c\u5bb9\u5668\u5185\u53ef\u4ee5\u6709\u81ea\u5df1\u72ec\u7acb\u7684\u7f51\u7edc\u7a7a\u95f4\uff0c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u5bb9\u5668\u4e4b\u95f4\u662f\u5982\u4f55\u5b9e\u73b0\u901a\u4fe1\u7684\u5462\uff1f"),(0,r.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u548c\u5bbf\u4e3b\u673a\u4e4b\u95f4\u53c8\u662f\u5982\u4f55\u5b9e\u73b0\u7684\u901a\u4fe1\u5462\uff1f"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528-p\u53c2\u6570\u662f\u600e\u4e48\u5b9e\u73b0\u7684\u7aef\u53e3\u6620\u5c04?")),(0,r.kt)("p",null,"\u5e26\u7740\u8fd9\u4e9b\u95ee\u9898\uff0c\u6211\u4eec\u6765\u5b66\u4e60\u4e00\u4e0bdocker\u7684\u7f51\u7edc\u6a21\u578b\uff0c\u6700\u540e\u6211\u4f1a\u901a\u8fc7\u6293\u5305\u7684\u65b9\u5f0f\uff0c\u7ed9\u5927\u5bb6\u6f14\u793a\u4e00\u4e0b\u6570\u636e\u5305\u5728\u5bb9\u5668\u548c\u5bbf\u4e3b\u673a\u4e4b\u95f4\u7684\u8f6c\u6362\u8fc7\u7a0b\u3002"),(0,r.kt)("h5",{id:"\u7f51\u7edc\u6a21\u5f0f"},"\u7f51\u7edc\u6a21\u5f0f"),(0,r.kt)("p",null,"\u6211\u4eec\u5728\u4f7f\u7528docker run\u521b\u5efaDocker\u5bb9\u5668\u65f6\uff0c\u53ef\u4ee5\u7528--net\u9009\u9879\u6307\u5b9a\u5bb9\u5668\u7684\u7f51\u7edc\u6a21\u5f0f\uff0cDocker\u6709\u4ee5\u4e0b4\u79cd\u7f51\u7edc\u6a21\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"bridge\u6a21\u5f0f\uff0c\u4f7f\u7528--net=bridge\u6307\u5b9a\uff0c\u9ed8\u8ba4\u8bbe\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"host\u6a21\u5f0f\uff0c\u4f7f\u7528--net=host\u6307\u5b9a\uff0c\u5bb9\u5668\u5185\u90e8\u7f51\u7edc\u7a7a\u95f4\u5171\u4eab\u5bbf\u4e3b\u673a\u7684\u7a7a\u95f4\uff0c\u6548\u679c\u7c7b\u4f3c\u76f4\u63a5\u5728\u5bbf\u4e3b\u673a\u4e0a\u542f\u52a8\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u7aef\u53e3\u4fe1\u606f\u548c\u5bbf\u4e3b\u673a\u5171\u7528")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"container\u6a21\u5f0f\uff0c\u4f7f\u7528--net=container:NAME_or_ID\u6307\u5b9a"),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u5bb9\u5668\u4e0e\u7279\u5b9a\u5bb9\u5668\u5171\u4eab\u7f51\u7edc\u547d\u540d\u7a7a\u95f4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"none\u6a21\u5f0f\uff0c\u4f7f\u7528--net=none\u6307\u5b9a"),(0,r.kt)("p",{parentName:"li"},"\u7f51\u7edc\u6a21\u5f0f\u4e3a\u7a7a\uff0c\u5373\u4ec5\u4fdd\u7559\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\uff0c\u4f46\u662f\u4e0d\u505a\u4efb\u4f55\u7f51\u7edc\u76f8\u5173\u7684\u914d\u7f6e(\u7f51\u5361\u3001IP\u3001\u8def\u7531\u7b49)"))),(0,r.kt)("h5",{id:"bridge\u6a21\u5f0f"},"bridge\u6a21\u5f0f"),(0,r.kt)("p",null,"\u90a3\u6211\u4eec\u4e4b\u524d\u5728\u6f14\u793a\u521b\u5efadocker\u5bb9\u5668\u7684\u65f6\u5019\u5176\u5b9e\u662f\u6ca1\u6709\u6307\u5b9a\u7684\u7f51\u7edc\u6a21\u5f0f\u7684\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u7684\u8bdd\u9ed8\u8ba4\u5c31\u4f1a\u4f7f\u7528bridge\u6a21\u5f0f\uff0cbridge\u672c\u610f\u662f\u6865\u7684\u610f\u601d\uff0c\u5176\u5b9e\u5c31\u662f\u7f51\u6865\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"\u90a3\u6211\u4eec\u600e\u4e48\u7406\u89e3\u7f51\u6865\uff0c\u5982\u679c\u9700\u8981\u505a\u7c7b\u6bd4\u7684\u8bdd\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u7f51\u6865\u770b\u6210\u4e00\u4e2a\u4e8c\u5c42\u7684\u4ea4\u6362\u673a\u8bbe\u5907\uff0c\u6211\u4eec\u6765\u770b\u4e0b\u8fd9\u5f20\u56fe\uff1a"),(0,r.kt)("p",null,"\u4ea4\u6362\u673a\u901a\u4fe1\u7b80\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/exchange1.bmp",alt:null})),(0,r.kt)("p",null,"\u4ea4\u6362\u673a\u7f51\u7edc\u901a\u4fe1\u6d41\u7a0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/exchange2.png",alt:null})),(0,r.kt)("p",null,"\u7f51\u6865\u6a21\u5f0f\u793a\u610f\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/docker-bridge.jpeg",alt:null})),(0,r.kt)("p",null,"Linux \u4e2d\uff0c\u80fd\u591f\u8d77\u5230",(0,r.kt)("strong",{parentName:"p"},"\u865a\u62df\u4ea4\u6362\u673a\u4f5c\u7528"),"\u7684\u7f51\u7edc\u8bbe\u5907\uff0c\u662f\u7f51\u6865\uff08Bridge\uff09\u3002\u5b83\u662f\u4e00\u4e2a\u5de5\u4f5c\u5728",(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u94fe\u8def\u5c42"),"\uff08Data Link\uff09\u7684\u8bbe\u5907\uff0c\u4e3b\u8981\u529f\u80fd\u662f",(0,r.kt)("strong",{parentName:"p"},"\u6839\u636e MAC \u5730\u5740\u5c06\u6570\u636e\u5305\u8f6c\u53d1\u5230\u7f51\u6865\u7684\u4e0d\u540c\u7aef\u53e3\u4e0a"),"\u3002 \u7f51\u6865\u5728\u54ea\uff0c\u67e5\u770b\u7f51\u6865"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ yum install -y bridge-utils\n$ brctl show\nbridge name     bridge id               STP enabled     interfaces\ndocker0         8000.0242b5fbe57b       no              veth3a496ed\n\n")),(0,r.kt)("p",null,"\u6709\u4e86\u7f51\u6865\u4e4b\u540e\uff0c\u90a3\u6211\u4eec\u770b\u4e0bdocker\u5728\u542f\u52a8\u4e00\u4e2a\u5bb9\u5668\u7684\u65f6\u5019\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5\u624d\u80fd\u5b9e\u73b0\u5bb9\u5668\u95f4\u7684\u4e92\u8054\u4e92\u901a"),(0,r.kt)("p",null,"Docker \u521b\u5efa\u4e00\u4e2a\u5bb9\u5668\u7684\u65f6\u5019\uff0c\u4f1a\u6267\u884c\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u5bf9\u865a\u62df\u63a5\u53e3/\u7f51\u5361\uff0c\u4e5f\u5c31\u662fveth pair\uff1b"),(0,r.kt)("li",{parentName:"ul"},"veth pair\u7684\u4e00\u7aef\u6865\u63a5 \u5230\u9ed8\u8ba4\u7684 docker0 \u6216\u6307\u5b9a\u7f51\u6865\u4e0a\uff0c\u5e76\u5177\u6709\u4e00\u4e2a\u552f\u4e00\u7684\u540d\u5b57\uff0c\u5982 vethxxxxxx\uff1b"),(0,r.kt)("li",{parentName:"ul"},"veth paid\u7684\u53e6\u4e00\u7aef\u653e\u5230\u65b0\u542f\u52a8\u7684\u5bb9\u5668\u5185\u90e8\uff0c\u5e76\u4fee\u6539\u540d\u5b57\u4f5c\u4e3a eth0\uff0c\u8fd9\u4e2a\u7f51\u5361/\u63a5\u53e3\u53ea\u5728\u5bb9\u5668\u7684\u547d\u540d\u7a7a\u95f4\u53ef\u89c1\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4ece\u7f51\u6865\u53ef\u7528\u5730\u5740\u6bb5\u4e2d\uff08\u4e5f\u5c31\u662f\u4e0e\u8be5bridge\u5bf9\u5e94\u7684network\uff09\u83b7\u53d6\u4e00\u4e2a\u7a7a\u95f2\u5730\u5740\u5206\u914d\u7ed9\u5bb9\u5668\u7684 eth0"),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5bb9\u5668\u7684\u9ed8\u8ba4\u8def\u7531")),(0,r.kt)("p",null,"\u90a3\u6574\u4e2a\u8fc7\u7a0b\u5176\u5b9e\u662fdocker\u81ea\u52a8\u5e2e\u6211\u4eec\u5b8c\u6210\u7684\uff0c\u6e05\u7406\u6389\u6240\u6709\u5bb9\u5668\uff0c\u6765\u9a8c\u8bc1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## \u6e05\u6389\u6240\u6709\u5bb9\u5668\n$ docker rm -f `docker ps -aq`\n$ docker ps\n$ brctl show # \u67e5\u770b\u7f51\u6865\u4e2d\u7684\u63a5\u53e3\uff0c\u76ee\u524d\u6ca1\u6709\n\n## \u521b\u5efa\u6d4b\u8bd5\u5bb9\u5668test1\n$ docker run -d --name test1 nginx:alpine\n$ brctl show # \u67e5\u770b\u7f51\u6865\u4e2d\u7684\u63a5\u53e3\uff0c\u5df2\u7ecf\u628atest1\u7684veth\u7aef\u63a5\u5165\u5230\u7f51\u6865\u4e2d\n$ ip a |grep veth # \u5df2\u5728\u5bbf\u4e3b\u673a\u4e2d\u53ef\u4ee5\u67e5\u770b\u5230\n$ docker exec -ti test1 sh \n/ # ifconfig  # \u67e5\u770b\u5bb9\u5668\u7684eth0\u7f51\u5361\u53ca\u5206\u914d\u7684\u5bb9\u5668ip\n\n# \u518d\u6765\u542f\u52a8\u4e00\u4e2a\u6d4b\u8bd5\u5bb9\u5668\uff0c\u6d4b\u8bd5\u5bb9\u5668\u95f4\u7684\u901a\u4fe1\n$ docker run -d --name test2 nginx:alpine\n$ docker exec -ti test2 sh\n/ # sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories\n/ # apk add curl\n/ # curl 172.17.0.8:80\n\n## \u4e3a\u5565\u53ef\u4ee5\u901a\u4fe1\uff1f\n/ # route -n  # \nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n0.0.0.0         172.17.0.1      0.0.0.0         UG    0      0        0 eth0\n172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 eth0\n\n# eth0 \u7f51\u5361\u662f\u8fd9\u4e2a\u5bb9\u5668\u91cc\u7684\u9ed8\u8ba4\u8def\u7531\u8bbe\u5907\uff1b\u6240\u6709\u5bf9 172.17.0.0/16 \u7f51\u6bb5\u7684\u8bf7\u6c42\uff0c\u4e5f\u4f1a\u88ab\u4ea4\u7ed9 eth0 \u6765\u5904\u7406\uff08\u7b2c\u4e8c\u6761 172.17.0.0 \u8def\u7531\u89c4\u5219\uff09\uff0c\u8fd9\u6761\u8def\u7531\u89c4\u5219\u7684\u7f51\u5173\uff08Gateway\uff09\u662f 0.0.0.0\uff0c\u8fd9\u5c31\u610f\u5473\u7740\u8fd9\u662f\u4e00\u6761\u76f4\u8fde\u89c4\u5219\uff0c\u5373\uff1a\u51e1\u662f\u5339\u914d\u5230\u8fd9\u6761\u89c4\u5219\u7684 IP \u5305\uff0c\u5e94\u8be5\u7ecf\u8fc7\u672c\u673a\u7684 eth0 \u7f51\u5361\uff0c\u901a\u8fc7\u4e8c\u5c42\u7f51\u7edc(\u6570\u636e\u94fe\u8def\u5c42)\u76f4\u63a5\u53d1\u5f80\u76ee\u7684\u4e3b\u673a\u3002\n\n# \u800c\u8981\u901a\u8fc7\u4e8c\u5c42\u7f51\u7edc\u5230\u8fbe test1 \u5bb9\u5668\uff0c\u5c31\u9700\u8981\u6709 172.17.0.8 \u8fd9\u4e2a IP \u5730\u5740\u5bf9\u5e94\u7684 MAC \u5730\u5740\u3002\u6240\u4ee5test2\u5bb9\u5668\u7684\u7f51\u7edc\u534f\u8bae\u6808\uff0c\u5c31\u9700\u8981\u901a\u8fc7 eth0 \u7f51\u5361\u53d1\u9001\u4e00\u4e2a ARP \u5e7f\u64ad\uff0c\u6765\u901a\u8fc7 IP \u5730\u5740\u67e5\u627e\u5bf9\u5e94\u7684 MAC \u5730\u5740\u3002\n\n#\u8fd9\u4e2a eth0 \u7f51\u5361\uff0c\u662f\u4e00\u4e2a Veth Pair\uff0c\u5b83\u7684\u4e00\u7aef\u5728\u8fd9\u4e2a test2 \u5bb9\u5668\u7684 Network Namespace \u91cc\uff0c\u800c\u53e6\u4e00\u7aef\u5219\u4f4d\u4e8e\u5bbf\u4e3b\u673a\u4e0a\uff08Host Namespace\uff09\uff0c\u5e76\u4e14\u88ab\u201c\u63d2\u201d\u5728\u4e86\u5bbf\u4e3b\u673a\u7684 docker0 \u7f51\u6865\u4e0a\u3002\u7f51\u6865\u8bbe\u5907\u7684\u4e00\u4e2a\u7279\u70b9\u662f\u63d2\u5728\u6865\u4e0a\u7684\u7f51\u5361\u90fd\u4f1a\u88ab\u5f53\u6210\u6865\u4e0a\u7684\u4e00\u4e2a\u7aef\u53e3\u6765\u5904\u7406\uff0c\u800c\u7aef\u53e3\u7684\u552f\u4e00\u4f5c\u7528\u5c31\u662f\u63a5\u6536\u6d41\u5165\u7684\u6570\u636e\u5305\uff0c\u7136\u540e\u628a\u8fd9\u4e9b\u6570\u636e\u5305\u7684\u201c\u751f\u6740\u5927\u6743\u201d\uff08\u6bd4\u5982\u8f6c\u53d1\u6216\u8005\u4e22\u5f03\uff09\uff0c\u5168\u90e8\u4ea4\u7ed9\u5bf9\u5e94\u7684\u7f51\u6865\u8bbe\u5907\u5904\u7406\u3002\n\n# \u56e0\u6b64ARP\u7684\u5e7f\u64ad\u8bf7\u6c42\u4e5f\u4f1a\u7531docker0\u6765\u8d1f\u8d23\u8f6c\u53d1\uff0c\u8fd9\u6837\u7f51\u6865\u5c31\u7ef4\u62a4\u4e86\u4e00\u4efd\u7aef\u53e3\u4e0emac\u7684\u4fe1\u606f\u8868\uff0c\u56e0\u6b64\u9488\u5bf9test2\u7684eth0\u62ff\u5230mac\u5730\u5740\u540e\u53d1\u51fa\u7684\u5404\u7c7b\u8bf7\u6c42\uff0c\u540c\u6837\u8d70\u5230docker0\u7f51\u6865\u4e2d\u7531\u7f51\u6865\u8d1f\u8d23\u8f6c\u53d1\u5230\u5bf9\u5e94\u7684\u5bb9\u5668\u4e2d\u3002\n\n# \u7f51\u6865\u4f1a\u7ef4\u62a4\u4e00\u4efdmac\u6620\u5c04\u8868\uff0c\u6211\u4eec\u53ef\u4ee5\u5927\u6982\u901a\u8fc7\u547d\u4ee4\u6765\u770b\u4e00\u4e0b\uff0c\n$ brctl showmacs docker0\n## \u8fd9\u4e9bmac\u5730\u5740\u662f\u4e3b\u673a\u7aef\u7684veth\u7f51\u5361\u5bf9\u5e94\u7684mac\uff0c\u53ef\u4ee5\u67e5\u770b\u4e00\u4e0b\n$ ip a \n\n\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/bridge-network.png",alt:null})),(0,r.kt)("p",null,"\u6211\u4eec\u5982\u4f55\u77e5\u9053\u7f51\u6865\u4e0a\u7684\u8fd9\u4e9b\u865a\u62df\u7f51\u5361\u4e0e\u5bb9\u5668\u7aef\u662f\u5982\u4f55\u5bf9\u5e94\uff1f"),(0,r.kt)("p",null,"\u901a\u8fc7ifindex\uff0c\u7f51\u5361\u7d22\u5f15\u53f7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## \u67e5\u770btest1\u5bb9\u5668\u7684\u7f51\u5361\u7d22\u5f15\n$ docker exec -ti test1 cat /sys/class/net/eth0/ifindex\n\n## \u4e3b\u673a\u4e2d\u627e\u5230\u865a\u62df\u7f51\u5361\u540e\u9762\u8fd9\u4e2a@ifxx\u7684\u503c\uff0c\u5982\u679c\u662f\u540c\u4e00\u4e2a\u503c\uff0c\u8bf4\u660e\u8fd9\u4e2a\u865a\u62df\u7f51\u5361\u548c\u8fd9\u4e2a\u5bb9\u5668\u7684eth0\u7f51\u5361\u662f\u914d\u5bf9\u7684\u3002\n$ ip a |grep @if\n\n")),(0,r.kt)("p",null,"\u6574\u7406\u811a\u672c\uff0c\u5feb\u901f\u67e5\u770b\u5bf9\u5e94\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"for container in $(docker ps -q); do\n    iflink=`docker exec -it $container sh -c 'cat /sys/class/net/eth0/iflink'`\n    iflink=`echo $iflink|tr -d '\\r'`\n    veth=`grep -l $iflink /sys/class/net/veth*/ifindex`\n    veth=`echo $veth|sed -e 's;^.*net/\\(.*\\)/ifindex$;\\1;'`\n    echo $container:$veth\ndone\n\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u6211\u4eec\u8bb2\u89e3\u4e86\u5bb9\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u90a3\u4e48\u5bb9\u5668\u4e0e\u5bbf\u4e3b\u673a\u7684\u901a\u4fe1\u662f\u5982\u4f55\u505a\u7684\uff1f"),(0,r.kt)("p",null,"\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## \u542f\u52a8\u5bb9\u5668\u7684\u65f6\u5019\u901a\u8fc7-p\u53c2\u6570\u6dfb\u52a0\u5bbf\u4e3b\u673a\u7aef\u53e3\u4e0e\u5bb9\u5668\u5185\u90e8\u670d\u52a1\u7aef\u53e3\u7684\u6620\u5c04\n$ docker run --name test -d -p 8088:80 nginx:alpine\n$ curl localhost:8088\n\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/20240206205713.png",alt:null})),(0,r.kt)("p",null,"\u7aef\u53e3\u6620\u5c04\u5982\u4f55\u5b9e\u73b0\u7684\uff1f\u5148\u6765\u56de\u987eiptables\u94fe\u8868\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/iptables.png",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.zsythink.net/archives/category/%e8%bf%90%e7%bb%b4%e7%9b%b8%e5%85%b3/iptables"},"https://www.zsythink.net/archives/category/%e8%bf%90%e7%bb%b4%e7%9b%b8%e5%85%b3/iptables"))),(0,r.kt)("p",null,"\u8bbf\u95ee\u672c\u673a\u76848088\u7aef\u53e3\uff0c\u6570\u636e\u5305\u4f1a\u4ece\u6d41\u5165\u65b9\u5411\u8fdb\u5165\u672c\u673a\uff0c\u56e0\u6b64\u6d89\u53ca\u5230PREROUTING\u548cINPUT\u94fe\uff0c\u6211\u4eec\u662f\u901a\u8fc7\u505a\u5bbf\u4e3b\u673a\u4e0e\u5bb9\u5668\u4e4b\u95f4\u52a0\u7684\u7aef\u53e3\u6620\u5c04\uff0c\u6240\u4ee5\u80af\u5b9a\u4f1a\u6d89\u53ca\u5230\u7aef\u53e3\u8f6c\u6362\uff0c\u90a3\u54ea\u4e2a\u8868\u662f\u8d1f\u8d23\u5b58\u50a8\u7aef\u53e3\u8f6c\u6362\u4fe1\u606f\u7684\u5462\uff0c\u5c31\u662fnat\u8868\uff0c\u8d1f\u8d23\u7ef4\u62a4\u7f51\u7edc\u5730\u5740\u8f6c\u6362\u4fe1\u606f\u7684\u3002\u56e0\u6b64\u6211\u4eec\u6765\u67e5\u770b\u4e00\u4e0bPREROUTING\u94fe\u7684nat\u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ iptables -t nat -nvL PREROUTING\nChain PREROUTING (policy ACCEPT 159 packets, 20790 bytes)\n pkts bytes target     prot opt in     out     source               destination\n    3   156 DOCKER     all  --  *      *       0.0.0.0/0            0.0.0.0/0            ADDRTYPE match dst-type LOCAL\n\n")),(0,r.kt)("p",null,"\u89c4\u5219\u5229\u7528\u4e86iptables\u7684addrtype\u62d3\u5c55\uff0c\u5339\u914d\u7f51\u7edc\u7c7b\u578b\u4e3a\u672c\u5730\u7684\u5305\uff0c\u5982\u4f55\u786e\u5b9a\u54ea\u4e9b\u662f\u5339\u914d\u672c\u5730\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ip route show table local type local\n127.0.0.0/8 dev lo proto kernel scope host src 127.0.0.1\n127.0.0.1 dev lo proto kernel scope host src 127.0.0.1\n172.17.0.1 dev docker0 proto kernel scope host src 172.17.0.1\n172.21.51.143 dev eth0 proto kernel scope host src 172.21.51.143\n\n")),(0,r.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\u76ee\u6807\u5730\u5740\u7c7b\u578b\u5339\u914d\u5230\u8fd9\u4e9b\u7684\uff0c\u4f1a\u8f6c\u53d1\u5230\u6211\u4eec\u7684TARGET\u4e2d\uff0cTARGET\u662f\u52a8\u4f5c\uff0c\u610f\u5473\u7740\u5bf9\u7b26\u5408\u8981\u6c42\u7684\u6570\u636e\u5305\u6267\u884c\u4ec0\u4e48\u6837\u7684\u64cd\u4f5c\uff0c\u6700\u5e38\u89c1\u7684\u4e3aACCEPT\u6216\u8005DROP\uff0c\u6b64\u5904\u7684TARGET\u4e3aDOCKER\uff0c\u5f88\u660e\u663eDOCKER\u4e0d\u662f\u6807\u51c6\u7684\u52a8\u4f5c\uff0c\u90a3DOCKER\u662f\u4ec0\u4e48\u5462\uff1f\u6211\u4eec\u901a\u5e38\u4f1a\u5b9a\u4e49\u81ea\u5b9a\u4e49\u7684\u94fe\uff0c\u8fd9\u6837\u628a\u67d0\u7c7b\u5bf9\u5e94\u7684\u89c4\u5219\u653e\u5728\u81ea\u5b9a\u4e49\u94fe\u4e2d\uff0c\u7136\u540e\u628a\u81ea\u5b9a\u4e49\u7684\u94fe\u7ed1\u5b9a\u5230\u6807\u51c6\u7684\u94fe\u8def\u4e2d\uff0c\u56e0\u6b64\u6b64\u5904DOCKER \u662f\u81ea\u5b9a\u4e49\u7684\u94fe\u3002\u90a3\u6211\u4eec\u73b0\u5728\u5c31\u6765\u770b\u4e00\u4e0bDOCKER\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u94fe\u4e0a\u7684\u89c4\u5219\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ iptables -t nat -nvL DOCKER\nChain DOCKER (2 references)                                                                                                \n pkts bytes target     prot opt in     out     source               destination                                            \n    0     0 RETURN     all  --  docker0 *       0.0.0.0/0            0.0.0.0/0                                             \n    0     0 DNAT       tcp  --  !docker0 *       0.0.0.0/0            0.0.0.0/0            tcp dpt:8088 to:172.17.0.2:80 \n\n\n")),(0,r.kt)("p",null,"\u6b64\u6761\u89c4\u5219\u5c31\u662f\u5bf9\u4e3b\u673a\u6536\u5230\u7684\u76ee\u7684\u7aef\u53e3\u4e3a8088\u7684tcp\u6d41\u91cf\u8fdb\u884cDNAT\u8f6c\u6362\uff0c\u5c06\u6d41\u91cf\u53d1\u5f80172.17.0.2:80\uff0c172.17.0.2\u5730\u5740\u662f\u4e0d\u662f\u5c31\u662f\u6211\u4eec\u4e0a\u9762\u521b\u5efa\u7684Docker\u5bb9\u5668\u7684ip\u5730\u5740\uff0c\u6d41\u91cf\u8d70\u5230\u7f51\u6865\u4e0a\u4e86\uff0c\u540e\u9762\u5c31\u8d70\u7f51\u6865\u7684\u8f6c\u53d1\u5c31ok\u4e86\u3002\n\u6240\u4ee5\uff0c\u5916\u754c\u53ea\u9700\u8bbf\u95ee172.21.51.143:8088\u5c31\u53ef\u4ee5\u8bbf\u95ee\u5230\u5bb9\u5668\u4e2d\u7684\u670d\u52a1\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/021217_0051_1.png",alt:null})),(0,r.kt)("p",null," \u6570\u636e\u5305\u5728\u51fa\u53e3\u65b9\u5411\u8d70POSTROUTING\u94fe\uff0c\u6211\u4eec\u67e5\u770b\u4e00\u4e0b\u89c4\u5219\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ iptables -t nat -nvL POSTROUTING\nChain POSTROUTING (policy ACCEPT 1099 packets, 67268 bytes)\n pkts bytes target     prot opt in     out     source               destination\n   86  5438 MASQUERADE  all  --  *      !docker0  172.17.0.0/16        0.0.0.0/0\n    0     0 MASQUERADE  tcp  --  *      *       172.17.0.4           172.17.0.4           tcp dpt:80\n\n")),(0,r.kt)("p",null,"\u5927\u5bb6\u6ce8\u610fMASQUERADE\u8fd9\u4e2a\u52a8\u4f5c\u662f\u4ec0\u4e48\u610f\u601d\uff0c\u5176\u5b9e\u662f\u4e00\u79cd\u66f4\u7075\u6d3b\u7684SNAT\uff0c\u628a\u6e90\u5730\u5740\u8f6c\u6362\u6210\u4e3b\u673a\u7684\u51fa\u53e3ip\u5730\u5740\uff0c\u90a3\u89e3\u91ca\u4e00\u4e0b\u8fd9\u6761\u89c4\u5219\u7684\u610f\u601d:"),(0,r.kt)("p",null,"\u8fd9\u6761\u89c4\u5219\u4f1a\u5c06\u6e90\u5730\u5740\u4e3a172.17.0.0/16\u7684\u5305\uff08\u4e5f\u5c31\u662f\u4eceDocker\u5bb9\u5668\u4ea7\u751f\u7684\u5305\uff09\uff0c\u5e76\u4e14\u4e0d\u662f\u4ecedocker0\u7f51\u5361\u53d1\u51fa\u7684\uff0c\u8fdb\u884c\u6e90\u5730\u5740\u8f6c\u6362\uff0c\u8f6c\u6362\u6210\u4e3b\u673a\u7f51\u5361\u7684\u5730\u5740\u3002\u5927\u6982\u7684\u8fc7\u7a0b\u5c31\u662fACK\u7684\u5305\u5728\u5bb9\u5668\u91cc\u9762\u53d1\u51fa\u6765\uff0c\u4f1a\u8def\u7531\u5230\u7f51\u6865docker0\uff0c\u7f51\u6865\u6839\u636e\u5bbf\u4e3b\u673a\u7684\u8def\u7531\u89c4\u5219\u4f1a\u8f6c\u7ed9\u5bbf\u4e3b\u673a\u7f51\u5361eth0\uff0c\u8fd9\u65f6\u5019\u5305\u5c31\u4ecedocker0\u7f51\u5361\u8f6c\u5230eth0\u7f51\u5361\u4e86\uff0c\u5e76\u4eceeth0\u7f51\u5361\u53d1\u51fa\u53bb\uff0c\u8fd9\u65f6\u5019\u8fd9\u6761\u89c4\u5219\u5c31\u4f1a\u751f\u6548\u4e86\uff0c\u628a\u6e90\u5730\u5740\u6362\u6210\u4e86eth0\u7684ip\u5730\u5740\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u4e00\u4e0b\uff0c\u521a\u624d\u8fd9\u4e2a\u8fc7\u7a0b\u6d89\u53ca\u5230\u4e86\u7f51\u5361\u95f4\u5305\u7684\u4f20\u9012\uff0c\u90a3\u4e00\u5b9a\u8981\u6253\u5f00\u4e3b\u673a\u7684ip_forward\u8f6c\u53d1\u670d\u52a1\uff0c\u8981\u4e0d\u7136\u5305\u8f6c\u4e0d\u4e86\uff0c\u670d\u52a1\u80af\u5b9a\u8bbf\u95ee\u4e0d\u5230\u3002\n")),(0,r.kt)("h6",{id:"\u6293\u5305\u6f14\u793a"},"\u6293\u5305\u6f14\u793a"),(0,r.kt)("p",null,"\u6211\u4eec\u5148\u60f3\u4e00\u4e0b\uff0c\u6211\u4eec\u8981\u6293\u54ea\u4e2a\u7f51\u5361\u7684\u5305"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u8bbf\u95ee\u5bbf\u4e3b\u673a\u76848088\u7aef\u53e3\uff0c\u6211\u4eec\u6293\u4e00\u4e0b\u5bbf\u4e3b\u673a\u7684eth0"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ tcpdump -i eth0 port 8088 -w host.cap\n\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7136\u540e\u6700\u7ec8\u5305\u4f1a\u6d41\u5165\u5bb9\u5668\u5185\uff0c\u90a3\u6211\u4eec\u6293\u4e00\u4e0b\u5bb9\u5668\u5185\u7684eth0\u7f51\u5361"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5bb9\u5668\u5185\u5b89\u88c5\u4e00\u4e0btcpdump\n$ sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories\n$ apk add tcpdump\n$ tcpdump -i eth0 port 80 -w container.cap\n\n")))),(0,r.kt)("p",null,"\u5230\u53e6\u4e00\u53f0\u673a\u5668\u8bbf\u95ee\u4e00\u4e0b\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl 172.21.51.143:8088/\n\n")),(0,r.kt)("p",null,"\u505c\u6b62\u6293\u5305\uff0c\u62f7\u8d1d\u5bb9\u5668\u5185\u7684\u5305\u5230\u5bbf\u4e3b\u673a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker cp test:/root/container.cap /root/\n\n")),(0,r.kt)("p",null,"\u628a\u6293\u5230\u7684\u5185\u5bb9\u62f7\u8d1d\u5230\u672c\u5730\uff0c\u4f7f\u7528wireshark\u8fdb\u884c\u5206\u6790\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ scp root@172.21.51.143:/root/*.cap /d/packages\n\n")),(0,r.kt)("p",null,"\uff08wireshark\u5408\u5e76\u5305\u8fdb\u884c\u5206\u6790\uff09"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/docker-dnat.jpeg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/docker-snat.jpeg",alt:null})),(0,r.kt)("p",null,"\u8fdb\u5230\u5bb9\u5668\u5185\u7684\u5305\u505aDNAT\uff0c\u51fa\u53bb\u7684\u5305\u505aSNAT\uff0c\u8fd9\u6837\u5bf9\u5916\u9762\u6765\u8bb2\uff0c\u6839\u672c\u5c31\u4e0d\u77e5\u9053\u673a\u5668\u5185\u90e8\u662f\u8c01\u63d0\u4f9b\u670d\u52a1\uff0c\u5176\u5b9e\u8fd9\u5c31\u548c\u4e00\u4e2a\u5185\u7f51\u591a\u4e2a\u673a\u5668\u516c\u7528\u4e00\u4e2a\u5916\u7f51IP\u5730\u5740\u4e0a\u7f51\u7684\u6548\u679c\u662f\u4e00\u6837\u7684\uff0c\u90a3\u8fd9\u4e5f\u5c5e\u4e8eNAT\u529f\u80fd\u7684\u4e00\u4e2a\u5e38\u89c1\u7684\u5e94\u7528\u573a\u666f\u3002"),(0,r.kt)("h5",{id:"host\u6a21\u5f0f"},"Host\u6a21\u5f0f"),(0,r.kt)("p",null,"\u5bb9\u5668\u5185\u90e8\u4e0d\u4f1a\u521b\u5efa\u7f51\u7edc\u7a7a\u95f4\uff0c\u5171\u4eab\u5bbf\u4e3b\u673a\u7684\u7f51\u7edc\u7a7a\u95f4\u3002\u6bd4\u5982\u76f4\u63a5\u901a\u8fc7host\u6a21\u5f0f\u521b\u5efamysql\u5bb9\u5668\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run --net host -d --name mysql -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7\n\n")),(0,r.kt)("p",null,"\u5bb9\u5668\u542f\u52a8\u540e\uff0c\u4f1a\u9ed8\u8ba4\u76d1\u542c3306\u7aef\u53e3\uff0c\u7531\u4e8e\u7f51\u7edc\u6a21\u5f0f\u662fhost\uff0c\u56e0\u4e3a\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u5bbf\u4e3b\u673a\u76843306\u7aef\u53e3\u8fdb\u884c\u8bbf\u95ee\u670d\u52a1\uff0c\u6548\u679c\u7b49\u540c\u4e8e\u5728\u5bbf\u4e3b\u673a\u4e2d\u76f4\u63a5\u542f\u52a8mysqld\u7684\u8fdb\u7a0b\u3002"),(0,r.kt)("h5",{id:"conatiner\u6a21\u5f0f"},"Conatiner\u6a21\u5f0f"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u6a21\u5f0f\u6307\u5b9a\u65b0\u521b\u5efa\u7684\u5bb9\u5668\u548c\u5df2\u7ecf\u5b58\u5728\u7684\u4e00\u4e2a\u5bb9\u5668\u5171\u4eab\u4e00\u4e2a Network Namespace\uff0c\u800c\u4e0d\u662f\u548c\u5bbf\u4e3b\u673a\u5171\u4eab\u3002\u65b0\u521b\u5efa\u7684\u5bb9\u5668\u4e0d\u4f1a\u521b\u5efa\u81ea\u5df1\u7684\u7f51\u5361\uff0c\u914d\u7f6e\u81ea\u5df1\u7684 IP\uff0c\u800c\u662f\u548c\u4e00\u4e2a\u6307\u5b9a\u7684\u5bb9\u5668\u5171\u4eab IP\u3001\u7aef\u53e3\u8303\u56f4\u7b49\u3002\u540c\u6837\uff0c\u4e24\u4e2a\u5bb9\u5668\u9664\u4e86\u7f51\u7edc\u65b9\u9762\uff0c\u5176\u4ed6\u7684\u5982\u6587\u4ef6\u7cfb\u7edf\u3001\u8fdb\u7a0b\u5217\u8868\u7b49\u8fd8\u662f\u9694\u79bb\u7684\u3002\u4e24\u4e2a\u5bb9\u5668\u7684\u8fdb\u7a0b\u53ef\u4ee5\u901a\u8fc7 lo \u7f51\u5361\u8bbe\u5907\u901a\u4fe1\u3002 "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/shipinlei/picgo/raw/master/img/docker-network-container.jpeg",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## \u542f\u52a8\u6d4b\u8bd5\u5bb9\u5668\uff0c\u5171\u4eabmysql\u7684\u7f51\u7edc\u7a7a\u95f4\n$ docker run -ti --rm --net=container:mysql busybox sh\n/ # ip a\n/ # netstat -tlp|grep 3306\n/ # telnet localhost 3306\n\n")),(0,r.kt)("p",null,"\u5728\u4e00\u4e9b\u7279\u6b8a\u7684\u573a\u666f\u4e2d\u975e\u5e38\u6709\u7528\uff0c\u4f8b\u5982\uff0ckubernetes\u7684pod\uff0ckubernetes\u4e3apod\u521b\u5efa\u4e00\u4e2a\u57fa\u7840\u8bbe\u65bd\u5bb9\u5668\uff0c\u540c\u4e00pod\u4e0b\u7684\u5176\u4ed6\u5bb9\u5668\u90fd\u4ee5container\u6a21\u5f0f\u5171\u4eab\u8fd9\u4e2a\u57fa\u7840\u8bbe\u65bd\u5bb9\u5668\u7684\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\uff0c\u76f8\u4e92\u4e4b\u95f4\u4ee5localhost\u8bbf\u95ee\uff0c\u6784\u6210\u4e00\u4e2a\u7edf\u4e00\u7684\u6574\u4f53\u3002"),(0,r.kt)("h5",{id:"none\u6a21\u5f0f"},"None\u6a21\u5f0f"),(0,r.kt)("p",null,"\u53ea\u4f1a\u521b\u5efa\u5bf9\u5e94\u7684\u7f51\u7edc\u7a7a\u95f4\uff0c\u4e0d\u4f1a\u914d\u7f6e\u7f51\u7edc\u5806\u6808\uff08\u7f51\u5361\u3001\u8def\u7531\u7b49\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efanone\u7684\u5bb9\u5668\n$ docker run -it  --name=network-none --net=none nginx:alpine sh\n# ifconfig\n")),(0,r.kt)("p",null,"\u5728\u5bbf\u4e3b\u673a\u4e2d\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u865a\u62df\u7f51\u5361\u5bf9\n$ ip link add A type veth peer name B\n# A\u7aef\u63d2\u5165\u5230docker0\u7f51\u6865\n$ brctl addif docker0 A\n$ ip link set A up\n\n# B\u7aef\u63d2\u5165\u5230network-none\u5bb9\u5668\u4e2d\uff0c\u9700\u8981\u501f\u52a9ip netns,\u56e0\u6b64\u9700\u8981\u663e\u793a\u7684\u521b\u5efa\u547d\u540dnetwork namespace\n$ PID=$(docker inspect -f '{{.State.Pid}}' network-none)\n$ mkdir -p /var/run/netns\n$ ln -s /proc/$PID/ns/net /var/run/netns/$PID\n\n# B\u7aef\u653e\u5230\u5bb9\u5668\u7684\u547d\u540d\u7a7a\u95f4\n$ ip link set B netns $PID\n$ ip netns exec $PID ip link set dev B name eth0  # \u4fee\u6539\u8bbe\u5907\u540d\u79f0\u4e3aeth0\uff0c\u548cdocker\u9ed8\u8ba4\u884c\u4e3a\u4e00\u81f4\n$ ip netns exec $PID ip link set eth0 up\n\n# \u8bbe\u7f6eip\n$ ip netns exec $PID ip addr add 172.17.0.100/16 dev eth0\n# \u6dfb\u52a0\u9ed8\u8ba4\u8def\u7531\uff0c\u6307\u5b9a\u7ed9docker0\u7f51\u6865\n$ ip netns exec $PID ip route add default via 172.17.0.1\n\n# \u6d4b\u8bd5\u5bb9\u5668\u95f4\u901a\u4fe1\n")),(0,r.kt)("p",null,"\u524d\u7f6e\u77e5\u8bc6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ip netns \u547d\u4ee4\u7528\u6765\u7ba1\u7406 network namespace\u3002\u5b83\u53ef\u4ee5\u521b\u5efa\u547d\u540d\u7684 network namespace\uff0c\u7136\u540e\u901a\u8fc7\u540d\u5b57\u6765\u5f15\u7528 network namespace "),(0,r.kt)("li",{parentName:"ul"},"network namespace \u5728\u903b\u8f91\u4e0a\u662f\u7f51\u7edc\u5806\u6808\u7684\u4e00\u4e2a\u526f\u672c\uff0c\u5b83\u6709\u81ea\u5df1\u7684\u8def\u7531\u3001\u9632\u706b\u5899\u89c4\u5219\u548c\u7f51\u7edc\u8bbe\u5907\u3002\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b50\u8fdb\u7a0b\u7ee7\u627f\u5176\u7236\u8fdb\u7a0b\u7684 network namespace\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u4e0d\u663e\u5f0f\u521b\u5efa\u65b0\u7684 network namespace\uff0c\u6240\u6709\u8fdb\u7a0b\u90fd\u4ece init \u8fdb\u7a0b\u7ee7\u627f\u76f8\u540c\u7684\u9ed8\u8ba4 network namespace\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6839\u636e\u7ea6\u5b9a\uff0c\u547d\u540d\u7684 network namespace \u662f\u53ef\u4ee5\u6253\u5f00\u7684 ",(0,r.kt)("strong",{parentName:"li"},"/var/run/netns/")," \u76ee\u5f55\u4e0b\u7684\u4e00\u4e2a\u5bf9\u8c61\u3002\u6bd4\u5982\u6709\u4e00\u4e2a\u540d\u79f0\u4e3a net1 \u7684 network namespace \u5bf9\u8c61\uff0c\u5219\u53ef\u4ee5\u7531\u6253\u5f00 /var/run/netns/net1 \u5bf9\u8c61\u4ea7\u751f\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u5f15\u7528 network namespace net1\u3002\u901a\u8fc7\u5f15\u7528\u8be5\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u53ef\u4ee5\u4fee\u6539\u8fdb\u7a0b\u7684 network namespace\u3002")),(0,r.kt)("h4",{id:""}))}u.isMDXComponent=!0}}]);