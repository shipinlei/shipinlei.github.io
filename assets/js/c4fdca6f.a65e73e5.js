"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7826],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(t),k=a,m=s["".concat(o,".").concat(k)]||s[k]||u[k]||l;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=k;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<l;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const l={},i=void 0,c={unversionedId:"kubernetes/01kubernetes\u5b89\u88c5/08containerd-cli",id:"kubernetes/01kubernetes\u5b89\u88c5/08containerd-cli",title:"08containerd-cli",description:"\u64cd\u4f5c\u8282\u70b9\uff1a\u6240\u6709\u8282\u70b9",source:"@site/docs/kubernetes/01kubernetes\u5b89\u88c5/08containerd-cli.md",sourceDirName:"kubernetes/01kubernetes\u5b89\u88c5",slug:"/kubernetes/01kubernetes\u5b89\u88c5/08containerd-cli",permalink:"/docs/kubernetes/01kubernetes\u5b89\u88c5/08containerd-cli",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/kubernetes/01kubernetes\u5b89\u88c5/08containerd-cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"07\u9a8c\u8bc1\u96c6\u7fa4",permalink:"/docs/kubernetes/01kubernetes\u5b89\u88c5/07\u9a8c\u8bc1\u96c6\u7fa4"},next:{title:"09dashboard",permalink:"/docs/kubernetes/01kubernetes\u5b89\u88c5/09dashboard"}},o={},d=[{value:"ctr",id:"ctr",level:6},{value:"crictl",id:"crictl",level:6},{value:"nerdctl",id:"nerdctl",level:6},{value:"\u4f7f\u7528\u5c0f\u7ecf\u9a8c",id:"\u4f7f\u7528\u5c0f\u7ecf\u9a8c",level:6}],p={toc:d},s="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u64cd\u4f5c\u8282\u70b9\uff1a\u6240\u6709\u8282\u70b9"),(0,a.kt)("p",null,"\u7531\u4e8e\u65b0\u7248\u672c\u7684k8s\u76f4\u63a5\u91c7\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"containerd"),"\u4f5c\u4e3a\u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u56e0\u6b64\uff0c\u540e\u7eed\u521b\u5efa\u7684\u670d\u52a1\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\u7684\u547d\u4ee4\u65e0\u6cd5\u67e5\u8be2\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u6709\u9700\u8981\u5bf9\u8282\u70b9\u4e2d\u7684\u5bb9\u5668\u8fdb\u884c\u64cd\u4f5c\u7684\u9700\u6c42\uff0c\u9700\u8981\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"containerd"),"\u7684\u547d\u4ee4\u884c\u5de5\u5177\u6765\u66ff\u6362\uff0c\u76ee\u524d\u603b\u5171\u6709\u4e09\u79cd\uff0c\u5305\u542b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ctr"),(0,a.kt)("li",{parentName:"ul"},"crictl"),(0,a.kt)("li",{parentName:"ul"},"nerctl")),(0,a.kt)("h6",{id:"ctr"},"ctr"),(0,a.kt)("p",null,"ctr\u4e3a\u6700\u57fa\u7840\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"containerd"),"\u7684\u64cd\u4f5c\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"containerd"),"\u65f6\u5df2\u9ed8\u8ba4\u5b89\u88c5\uff0c\u56e0\u6b64\u65e0\u9700\u518d\u5355\u72ec\u5b89\u88c5\u3002"),(0,a.kt)("p",null,"ctr\u7684\u53ef\u64cd\u4f5c\u7684\u547d\u4ee4\u5f88\u5c11\uff0c\u4e14\u5f88\u4e0d\u4eba\u6027\u5316\uff0c\u56e0\u6b64\u6781\u529b\u4e0d\u63a8\u8350\u4f7f\u7528"),(0,a.kt)("p",null," Containerd \u4e5f\u6709 namespaces \u7684\u6982\u5ff5\uff0c\u5bf9\u4e8e\u4e0a\u5c42\u7f16\u6392\u7cfb\u7edf\u7684\u652f\u6301\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ctr")," \u5ba2\u6237\u7aef \u4e3b\u8981\u533a\u5206\u4e86 3 \u4e2a\u547d\u540d\u7a7a\u95f4\u5206\u522b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.io"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"moby"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"default")," "),(0,a.kt)("p",null,"\u6bd4\u5982\u64cd\u4f5c\u5bb9\u5668\u548c\u955c\u50cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u67e5\u770bcontainerd\u7684\u547d\u540d\u7a7a\u95f4\nctr ns ls;\n\n# \u67e5\u770bcontainerd\u542f\u52a8\u7684\u5bb9\u5668\u5217\u8868\nctr -n k8s.io container ls\n\n# \u67e5\u770b\u955c\u50cf\u5217\u8868\nctrl -n k8s.io image ls\n\n# \u5bfc\u5165\u955c\u50cf\nctr -n=k8s.io image import dashboard.tar\n\n# \u4ece\u79c1\u6709\u4ed3\u5e93\u62c9\u53d6\u955c\u50cf\uff0c\u524d\u63d0\u662f/etc/containerd/certs.d\u4e0b\u5df2\u7ecf\u914d\u7f6e\u8fc7\u8be5\u79c1\u6709\u4ed3\u5e93\u7684\u975e\u5b89\u5168\u8ba4\u8bc1\nctr images pull --user admin:admin  --hosts-dir "/etc/containerd/certs.d"  172.21.65.226:5000/eladmin/eladmin-api:v1-rc1\n\n# ctr\u547d\u4ee4\u65e0\u6cd5\u67e5\u770b\u5bb9\u5668\u7684\u65e5\u5fd7\uff0c\u4e5f\u65e0\u6cd5\u6267\u884cexec\u7b49\u64cd\u4f5c\n')),(0,a.kt)("h6",{id:"crictl"},"crictl"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"crictl")," \u662f\u9075\u5faa CRI \u63a5\u53e3\u89c4\u8303\u7684\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u901a\u5e38\u7528\u5b83\u6765\u68c0\u67e5\u548c\u7ba1\u7406kubelet\u8282\u70b9\u4e0a\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u548c\u955c\u50cf\u3002"),(0,a.kt)("p",null," \u4e3b\u673a\u5b89\u88c5\u4e86 k8s \u540e\uff0c\u547d\u4ee4\u884c\u4f1a\u6709",(0,a.kt)("inlineCode",{parentName:"p"}," crictl")," \u547d\u4ee4\uff0c\u65e0\u9700\u5355\u72ec\u5b89\u88c5\u3002  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"crictl")," \u547d\u4ee4\u9ed8\u8ba4\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.io")," \u8fd9\u4e2a\u540d\u79f0\u7a7a\u95f4\uff0c\u56e0\u6b64\u65e0\u9700\u5355\u72ec\u6307\u5b9a\uff0c\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5148\u52a0\u4e00\u4e0b\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/crictl.yaml\nruntime-endpoint: unix:///run/containerd/containerd.sock\nimage-endpoint: unix:///run/containerd/containerd.sock\ntimeout: 10\ndebug: false\n")),(0,a.kt)("p",null,"\u5e38\u7528\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u5bb9\u5668\u5217\u8868\ncrictl ps\n\n# \u67e5\u770b\u955c\u50cf\u5217\u8868\ncrictl images \n\n# \u5220\u9664\u955c\u50cf\ncrictl rmi 172.21.65.226:5000/eladmin/eladmin-api:v1-rc1\n\n# \u62c9\u53d6\u955c\u50cf\uff0c \u82e5\u62c9\u53d6\u79c1\u6709\u955c\u50cf\uff0c\u9700\u8981\u4fee\u6539containerd\u914d\u7f6e\u6dfb\u52a0\u8ba4\u8bc1\u4fe1\u606f\uff0c\u6bd4\u8f83\u9ebb\u70e6\u4e14\u4e0d\u5b89\u5168\ncrictl pull nginx:alpine\n\n# \u6267\u884cexec\u64cd\u4f5c\ncrictl ps \nCONTAINER           IMAGE               CREATED             STATE               NAME                      ATTEMPT             POD ID              POD\nd23fe516d2eeb       8b0e63fd4fec6       5 hours ago         Running             eladmin-api               0                   5dbae572dcb6b       eladmin-api-5d979bb778-tc5kz\n\n# \u6ce8\u610f\u53ea\u80fd\u4f7f\u7528containerid\ncrictl exec -ti d23fe516d2eeb bash\n\n# \u67e5\u770b\u5bb9\u5668\u65e5\u5fd7\ncrictl logs -f d23fe516d2eeb\n\n# \u6e05\u7406\u955c\u50cf\ncrictl rmi --prune\n")),(0,a.kt)("h6",{id:"nerdctl"},"nerdctl"),(0,a.kt)("p",null," \u63a8\u8350\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl"),"\uff0c\u4f7f\u7528\u6548\u679c\u4e0e docker \u547d\u4ee4\u7684\u8bed\u6cd5\u57fa\u672c\u4e00\u81f4 , \u5b98\u7f51",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/containerd/nerdctl")),(0,a.kt)("p",null,"\u5b89\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e0b\u8f7d\u7cbe\u7b80\u7248\u5b89\u88c5\u5305\uff0c\u7cbe\u7b80\u7248\u7684\u5305\u65e0\u6cd5\u4f7f\u7528nerdctl\u8fdb\u884c\u6784\u5efa\u955c\u50cf\nwget https://github.com/containerd/nerdctl/releases/download/v0.23.0/nerdctl-0.23.0-linux-amd64.tar.gz\n\n#\u5982\u679c\u4e0b\u8f7d\u8d85\u65f6\u6216\u8005\u901f\u5ea6\u6162\uff0c\u4e5f\u53ef\u4ee5\u53bb\u7f51\u76d8\u81ea\u53d6\n\u94fe\u63a5: https://pan.baidu.com/s/14Q2tPbiNXdN-PLKk1hpKhA \u63d0\u53d6\u7801: 496v \n\n# \u89e3\u538b\u540e\uff0c\u5c06nerdctl \u547d\u4ee4\u62f7\u8d1d\u81f3$PATH\u4e0b\u5373\u53ef\ncp nerdctl /usr/bin/\n")),(0,a.kt)("p",null,"\u5e38\u7528\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u955c\u50cf\u5217\u8868\nnerdctl -n k8s.io ps -a\n\n# \u6267\u884cexec\nnerdctl -n k8s.io exec -ti e2cd02190005 sh\n\n# \u767b\u5f55\u955c\u50cf\u4ed3\u5e93\nnerdctl login 172.21.65.226:5000\n\n# \u62c9\u53d6\u955c\u50cf,\u5982\u679c\u662f\u60f3\u62c9\u53d6\u4e86\u8ba9k8s\u4f7f\u7528\uff0c\u4e00\u5b9a\u52a0\u4e0a-n k8s.io,\u5426\u5219\u4f1a\u62c9\u53d6\u5230default\u7a7a\u95f4\u4e2d\uff0c k8s\u9ed8\u8ba4\u53ea\u4f7f\u7528k8s.io\nnerdctl -n k8s.io pull 172.21.65.226:5000/eladmin/eladmin-api:v1-rc1\n\n\n# \u542f\u52a8\u5bb9\u5668\nnerdctl -n k8s.io run -d --name test nginx:alpine\n\n# exec\nnerdctl -n k8s.io  exec -ti test sh\n\n# \u67e5\u770b\u65e5\u5fd7, \u6ce8\u610f\uff0cnerdctl \u53ea\u80fd\u67e5\u770b\u4f7f\u7528nerdctl\u547d\u4ee4\u521b\u5efa\u4ece\u5bb9\u5668\u7684\u65e5\u5fd7\uff0ck8s\u4e2dkubelet\u521b\u5efa\u7684\u4ea7\u751f\u7684\u5bb9\u5668\u65e0\u6cd5\u67e5\u770b\nnerdctl -n k8s.io logs -f test\n\n# \u6784\u5efa\uff0c\u4f46\u662f\u9700\u8981\u989d\u5916\u5b89\u88c5buildkit\u7684\u5305\nnerdctl build . -t xxxx:tag -f Dockerfile\n")),(0,a.kt)("h6",{id:"\u4f7f\u7528\u5c0f\u7ecf\u9a8c"},"\u4f7f\u7528\u5c0f\u7ecf\u9a8c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e86k8s\u540e\uff0c\u5bf9\u4e8e\u4e1a\u52a1\u5e94\u7528\u7684\u57fa\u672c\u64cd\u4f5c\uff0c90%\u4ee5\u4e0a\u90fd\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl"),"\u547d\u4ee4\u884c\u5b8c\u6210"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u955c\u50cf\u7684\u6784\u5efa\uff0c\u4ecd\u7136\u63a8\u8350\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"docker build")," \u6765\u5b8c\u6210\uff0c\u63a8\u9001\u5230\u955c\u50cf\u4ed3\u5e93\u540e\uff0ccontainerd\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u67e5\u770bcontainerd\u4e2d\u5bb9\u5668\u7684\u65e5\u5fd7\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"crictl logs"),"\u5b8c\u6210\uff0c\u56e0\u4e3actr\u3001nerdctl\u5747\u4e0d\u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5176\u4ed6\u5e38\u89c4\u7684containerd\u5bb9\u5668\u64cd\u4f5c\uff0c\u5efa\u8bae\u4f7f\u7528nerdctl\u5b8c\u6210")),(0,a.kt)("p",null,"\u66f4\u591a\u547d\u4ee4\u53ef\u4ee5\u53c2\u8003\u4e0b\u6587\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.modb.pro/db/485911"},"https://www.modb.pro/db/485911")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containerd/nerdctl#container-management"},"https://github.com/containerd/nerdctl#container-management"))))}u.isMDXComponent=!0}}]);