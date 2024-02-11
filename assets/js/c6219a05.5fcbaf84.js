"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4707],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},i=void 0,s={unversionedId:"kubernetes/01kubernetes\u5b89\u88c5/03\u521d\u59cb\u5316\u96c6\u7fa4",id:"kubernetes/01kubernetes\u5b89\u88c5/03\u521d\u59cb\u5316\u96c6\u7fa4",title:"03\u521d\u59cb\u5316\u96c6\u7fa4",description:"\u5b89\u88c5 kubeadm, kubelet \u548c kubectl",source:"@site/docs/kubernetes/01kubernetes\u5b89\u88c5/03\u521d\u59cb\u5316\u96c6\u7fa4.md",sourceDirName:"kubernetes/01kubernetes\u5b89\u88c5",slug:"/kubernetes/01kubernetes\u5b89\u88c5/03\u521d\u59cb\u5316\u96c6\u7fa4",permalink:"/docs/kubernetes/01kubernetes\u5b89\u88c5/03\u521d\u59cb\u5316\u96c6\u7fa4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/kubernetes/01kubernetes\u5b89\u88c5/03\u521d\u59cb\u5316\u96c6\u7fa4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"02\u5b89\u88c5\u51c6\u5907",permalink:"/docs/kubernetes/01kubernetes\u5b89\u88c5/02\u5b89\u88c5\u51c6\u5907"},next:{title:"04\u7f51\u7edc\u63d2\u4ef6",permalink:"/docs/kubernetes/01kubernetes\u5b89\u88c5/04\u7f51\u7edc\u63d2\u4ef6"}},l={},c=[{value:"\u5b89\u88c5 kubeadm, kubelet \u548c kubectl",id:"\u5b89\u88c5-kubeadm-kubelet-\u548c-kubectl",level:3},{value:"\u914d\u7f6econtainerd",id:"\u914d\u7f6econtainerd",level:3},{value:"\u521d\u59cb\u5316\u914d\u7f6e\u6587\u4ef6",id:"\u521d\u59cb\u5316\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u63d0\u524d\u4e0b\u8f7d\u955c\u50cf",id:"\u63d0\u524d\u4e0b\u8f7d\u955c\u50cf",level:3},{value:"\u521d\u59cb\u5316master\u8282\u70b9",id:"\u521d\u59cb\u5316master\u8282\u70b9",level:3},{value:"\u6dfb\u52a0slave\u8282\u70b9\u5230\u96c6\u7fa4\u4e2d",id:"\u6dfb\u52a0slave\u8282\u70b9\u5230\u96c6\u7fa4\u4e2d",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u5b89\u88c5-kubeadm-kubelet-\u548c-kubectl"},"\u5b89\u88c5 kubeadm, kubelet \u548c kubectl"),(0,a.kt)("p",null,"\u64cd\u4f5c\u8282\u70b9\uff1a \u6240\u6709\u7684master\u548cslave\u8282\u70b9(",(0,a.kt)("inlineCode",{parentName:"p"},"k8s-master,k8s-slave"),") \u9700\u8981\u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ yum install -y kubelet-1.24.4 kubeadm-1.24.4 kubectl-1.24.4 --disableexcludes=kubernetes\n## \u67e5\u770bkubeadm \u7248\u672c\n$ kubeadm version\n## \u8bbe\u7f6ekubelet\u5f00\u673a\u542f\u52a8\n$ systemctl enable kubelet \n")),(0,a.kt)("h3",{id:"\u914d\u7f6econtainerd"},"\u914d\u7f6econtainerd"),(0,a.kt)("p",null,"\u64cd\u4f5c\u8282\u70b9\uff1a\u6240\u6709\u7684master\u548cslave\u8282\u70b9(",(0,a.kt)("inlineCode",{parentName:"p"},"k8s-master,k8s-slave"),") \u9700\u8981\u6267\u884c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"sandbox_image")," \u955c\u50cf\u6e90\u8bbe\u7f6e\u4e3a\u963f\u91cc\u4e91",(0,a.kt)("inlineCode",{parentName:"p"},"google_containers"),"\u955c\u50cf\u6e90\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5bfc\u51fa\u9ed8\u8ba4\u914d\u7f6e\uff0cconfig.toml\u8fd9\u4e2a\u6587\u4ef6\u9ed8\u8ba4\u662f\u4e0d\u5b58\u5728\u7684\ncontainerd config default > /etc/containerd/config.toml\ngrep sandbox_image  /etc/containerd/config.toml\nsed -i "s#k8s.gcr.io/pause#registry.aliyuncs.com/google_containers/pause#g"       /etc/containerd/config.toml\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6econtainerd cgroup \u9a71\u52a8\u7a0b\u5e8fsystemd\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i 's#SystemdCgroup = false#SystemdCgroup = true#g' /etc/containerd/config.toml\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"docker hub"),"\u955c\u50cf\u52a0\u901f\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4fee\u6539\u914d\u7f6e\u6587\u4ef6/etc/containerd/config.toml, 145\u884c\u6dfb\u52a0config_path\n...\n    144     [plugins."io.containerd.grpc.v1.cri".registry]\n    145       config_path = "/etc/containerd/certs.d"\n    146\n    147       [plugins."io.containerd.grpc.v1.cri".registry.auths]\n    148\n    149       [plugins."io.containerd.grpc.v1.cri".registry.configs]\n    150\n    151       [plugins."io.containerd.grpc.v1.cri".registry.headers]\n    152\n    153       [plugins."io.containerd.grpc.v1.cri".registry.mirrors]\n...\n\n# \u521b\u5efa\u5bf9\u5e94\u7684\u76ee\u5f55\nmkdir -p /etc/containerd/certs.d/docker.io\n\n# \u914d\u7f6e\u52a0\u901f\ncat >/etc/containerd/certs.d/docker.io/hosts.toml <<EOF\nserver = "https://docker.io"\n[host."https://8xpk5wnt.mirror.aliyuncs.com"]\n  capabilities = ["pull","resolve"]\n[host."https://docker.mirrors.ustc.edu.cn"]\n  capabilities = ["pull","resolve"]\n[host."https://registry-1.docker.io"]\n  capabilities = ["pull","resolve","push"]\nEOF\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e\u975e\u5b89\u5168\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u6b64\u5904\u76ee\u5f55\u5fc5\u987b\u548c\u4e2a\u4eba\u73af\u5883\u4e2d\u5b9e\u9645\u7684\u4ed3\u5e93\u5730\u5740\u4fdd\u6301\u4e00\u81f4\nmkdir -p /etc/containerd/certs.d/172.21.65.226:5000\ncat >/etc/containerd/certs.d/172.21.65.226:5000/hosts.toml <<EOF\nserver = "http://172.21.65.226:5000"\n[host."http://172.21.65.226:5000"]\n  capabilities = ["pull", "resolve", "push"]\n  skip_verify = true\nEOF\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5e94\u7528\u6240\u6709\u66f4\u6539\u540e,\u91cd\u65b0\u542f\u52a8containerd\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart containerd\n")))),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316\u914d\u7f6e\u6587\u4ef6"},"\u521d\u59cb\u5316\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u64cd\u4f5c\u8282\u70b9\uff1a \u53ea\u5728master\u8282\u70b9\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"k8s-master"),"\uff09\u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kubeadm config print init-defaults > kubeadm.yaml\n$ cat kubeadm.yaml\napiVersion: kubeadm.k8s.io/v1beta3\nbootstrapTokens:\n- groups:\n  - system:bootstrappers:kubeadm:default-node-token\n  token: abcdef.0123456789abcdef\n  ttl: 24h0m0s\n  usages:\n  - signing\n  - authentication\nkind: InitConfiguration\nlocalAPIEndpoint:\n  advertiseAddress: 172.21.65.226   # \u6b64\u5904\u66ff\u6362\u4e3ak8s-master\u7684ip\u5730\u5740\n  bindPort: 6443\nnodeRegistration:\n  criSocket: unix:///var/run/containerd/containerd.sock\n  imagePullPolicy: IfNotPresent\n  name: k8s-master                  # \u6b64\u5904\u66ff\u6362\u4e3ak8s-master\u7684hostname\n  taints: null\n---\napiServer:\n  timeoutForControlPlane: 4m0s\napiVersion: kubeadm.k8s.io/v1beta3\ncertificatesDir: /etc/kubernetes/pki\nclusterName: kubernetes\ncontrollerManager: {}\ndns: {}\netcd:\n  local:\n    dataDir: /var/lib/etcd\nimageRepository: registry.aliyuncs.com/google_containers   # \u66ff\u6362\u4e3a\u56fd\u5185\u955c\u50cf\u6e90\nkind: ClusterConfiguration\nkubernetesVersion: 1.24.4             # \u66ff\u6362\u4e3a1.24.4\nnetworking:\n  dnsDomain: cluster.local\n  podSubnet: 10.244.0.0/16            # \u6dfb\u52a0\u6b64\u884c\uff0c\u7528\u6765\u5206\u914dk8s\u8282\u70b9\u7684pod ip\n  serviceSubnet: 10.96.0.0/12\nscheduler: {}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," \u5bf9\u4e8e\u4e0a\u9762\u7684\u8d44\u6e90\u6e05\u5355\u7684\u6587\u6863\u6bd4\u8f83\u6742\uff0c\u8981\u60f3\u5b8c\u6574\u4e86\u89e3\u4e0a\u9762\u7684\u8d44\u6e90\u5bf9\u8c61\u5bf9\u5e94\u7684\u5c5e\u6027\uff0c\u53ef\u4ee5\u67e5\u770b\u5bf9\u5e94\u7684 godoc \u6587\u6863\uff0c\u5730\u5740: ",(0,a.kt)("a",{parentName:"p",href:"https://godoc.org/k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/v1beta3%E3%80%82"},"https://godoc.org/k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/v1beta3\u3002")," ")),(0,a.kt)("h3",{id:"\u63d0\u524d\u4e0b\u8f7d\u955c\u50cf"},"\u63d0\u524d\u4e0b\u8f7d\u955c\u50cf"),(0,a.kt)("p",null,"\u64cd\u4f5c\u8282\u70b9\uff1a\u53ea\u5728master\u8282\u70b9\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"k8s-master"),"\uff09\u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"  # \u67e5\u770b\u9700\u8981\u4f7f\u7528\u7684\u955c\u50cf\u5217\u8868,\u82e5\u65e0\u95ee\u9898\uff0c\u5c06\u5f97\u5230\u5982\u4e0b\u5217\u8868\n$ kubeadm config images list --config kubeadm.yaml\nregistry.aliyuncs.com/google_containers/kube-apiserver:v1.24.4\nregistry.aliyuncs.com/google_containers/kube-controller-manager:v1.24.4\nregistry.aliyuncs.com/google_containers/kube-scheduler:v1.24.4\nregistry.aliyuncs.com/google_containers/kube-proxy:v1.24.4\nregistry.aliyuncs.com/google_containers/pause:3.7\nregistry.aliyuncs.com/google_containers/etcd:3.5.3-0\nregistry.aliyuncs.com/google_containers/coredns:v1.8.6\n  # \u63d0\u524d\u4e0b\u8f7d\u955c\u50cf\u5230\u672c\u5730\n$ kubeadm config images pull --config kubeadm.yaml\n[config/images] Pulled registry.aliyuncs.com/google_containers/kube-apiserver:v1.24.4\n[config/images] Pulled registry.aliyuncs.com/google_containers/kube-controller-manager:v1.24.4\n[config/images] Pulled registry.aliyuncs.com/google_containers/kube-scheduler:v1.24.4\n[config/images] Pulled registry.aliyuncs.com/google_containers/kube-proxy:v1.24.4\n[config/images] Pulled registry.aliyuncs.com/google_containers/pause:3.7\n[config/images] Pulled registry.aliyuncs.com/google_containers/etcd:3.5.3-0\n[config/images] Pulled registry.aliyuncs.com/google_containers/coredns:v1.8.6\n")),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316master\u8282\u70b9"},"\u521d\u59cb\u5316master\u8282\u70b9"),(0,a.kt)("p",null,"\u64cd\u4f5c\u8282\u70b9\uff1a\u53ea\u5728master\u8282\u70b9\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"k8s-master"),"\uff09\u6267\u884c\uff0c\u6ce8\u610f\u53ea\u5728master\u8282\u70b9\u6267\u884c\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"$ kubeadm init --config kubeadm.yaml\n")),(0,a.kt)("p",null,"\u82e5\u521d\u59cb\u5316\u6210\u529f\u540e\uff0c\u6700\u540e\u4f1a\u63d0\u793a\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'...\nYour Kubernetes master has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n\nYou should now deploy a pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nThen you can join any number of worker nodes by running the following on each as root:\n\nkubeadm join 172.21.65.226:6443 --token abcdef.0123456789abcdef \\\n    --discovery-token-ca-cert-hash sha256:1c4305f032f4bf534f628c32f5039084f4b103c922ff71b12a5f0f98d1ca9a4f\n')),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6309\u7167\u4e0a\u8ff0\u63d0\u793a\u4fe1\u606f\u64cd\u4f5c\uff0c\u914d\u7f6ekubectl\u5ba2\u6237\u7aef\u7684\u8ba4\u8bc1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"  mkdir -p $HOME/.kube\n  cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  chown $(id -u):$(id -g) $HOME/.kube/config\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u26a0\ufe0f\u6ce8\u610f\uff1a"),"\u6b64\u65f6\u4f7f\u7528 kubectl get nodes\u67e5\u770b\u8282\u70b9\u5e94\u8be5\u5904\u4e8enotReady\u72b6\u6001\uff0c\u56e0\u4e3a\u8fd8\u672a\u914d\u7f6e\u7f51\u7edc\u63d2\u4ef6"),(0,a.kt)("p",{parentName:"blockquote"},"\u82e5\u6267\u884c\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u51fa\u9519\uff0c\u6839\u636e\u9519\u8bef\u4fe1\u606f\u8c03\u6574\u540e\uff0c\u6267\u884ckubeadm reset\u540e\u518d\u6b21\u6267\u884cinit\u64cd\u4f5c\u5373\u53ef")),(0,a.kt)("h3",{id:"\u6dfb\u52a0slave\u8282\u70b9\u5230\u96c6\u7fa4\u4e2d"},"\u6dfb\u52a0slave\u8282\u70b9\u5230\u96c6\u7fa4\u4e2d"),(0,a.kt)("p",null,"\u64cd\u4f5c\u8282\u70b9\uff1a\u6240\u6709\u7684slave\u8282\u70b9\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"k8s-slave"),"\uff09\u9700\u8981\u6267\u884c\n\u5728\u6bcf\u53f0slave\u8282\u70b9\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u8be5\u547d\u4ee4\u662f\u5728kubeadm init\u6210\u529f\u540e\u63d0\u793a\u4fe1\u606f\u4e2d\u6253\u5370\u51fa\u6765\u7684\uff0c\u9700\u8981\u66ff\u6362\u6210\u5b9e\u9645init\u540e\u6253\u5370\u51fa\u7684\u547d\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"kubeadm join 172.21.65.226:6443 --token abcdef.0123456789abcdef \\\n    --discovery-token-ca-cert-hash sha256:1c4305f032f4bf534f628c32f5039084f4b103c922ff71b12a5f0f98d1ca9a4f\n")),(0,a.kt)("p",null,"\u5982\u679c\u5fd8\u8bb0\u6dfb\u52a0\u547d\u4ee4\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u751f\u6210\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubeadm token create --print-join-command\n")))}d.isMDXComponent=!0}}]);