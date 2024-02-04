"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=o(n),v=r,m=s["".concat(c,".").concat(v)]||s[v]||d[v]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=v;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},5014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:11,slug:"JavaScript\uff1aDOM\u64cd\u4f5c\u7684\u6027\u80fd\u4f18\u5316",title:"JavaScript\uff1aDOM\u64cd\u4f5c\u7684\u6027\u80fd\u4f18\u5316",tags:["JavaScript"]},i=void 0,p={permalink:"/javaScript/JavaScript\uff1aDOM\u64cd\u4f5c\u7684\u6027\u80fd\u4f18\u5316",source:"@site/javascript/JavaScript202208.md",title:"JavaScript\uff1aDOM\u64cd\u4f5c\u7684\u6027\u80fd\u4f18\u5316",description:"\u6d4f\u89c8\u5668\u7684\u91cd\u6392\u548c\u91cd\u7ed8\u662f\u6bd4\u8f83\u6d88\u8017\u6027\u80fd\u7684\u64cd\u4f5c\uff0c\u6240\u4ee5\u7f51\u9875\u6027\u80fd\u4f18\u5316\u7684\u624b\u6bb5\u5c31\u662f\u51cf\u5c11\u91cd\u6392\u548c\u91cd\u7ed8\u7684\u64cd\u4f5c\u3002\u6bd4\u5982\uff1a",date:"2024-01-31T02:49:10.000Z",formattedDate:"2024\u5e741\u670831\u65e5",tags:[{label:"JavaScript",permalink:"/javaScript/tags/java-script"}],readingTime:4.195,hasTruncateMarker:!1,authors:[],frontMatter:{sidebar_position:11,slug:"JavaScript\uff1aDOM\u64cd\u4f5c\u7684\u6027\u80fd\u4f18\u5316",title:"JavaScript\uff1aDOM\u64cd\u4f5c\u7684\u6027\u80fd\u4f18\u5316",tags:["JavaScript"]},prevItem:{title:"JavaScript\uff1aEncoding\u548c\u539f\u751f\u62d6\u653e\u4e8b\u4ef6",permalink:"/javaScript/JavaScript\uff1aEncoding\u548c\u539f\u751f\u62d6\u653e\u4e8b\u4ef6"},nextItem:{title:"JavaScript\uff1a\u6587\u6863\u52a0\u8f7d\u4e8b\u4ef6\u548c\u6d4f\u89c8\u5668\u7684\u91cd\u6392\u3001\u91cd\u7ed8",permalink:"/javaScript/JavaScript\uff1a\u52a0\u8f7d\u6587\u6863\u4e8b\u4ef6\u548c\u6d4f\u89c8\u5668\u91cd\u6392\u3001\u91cd\u7ed8"}},c={authorsImageUrls:[]},o=[{value:"\u591a\u6b21\u66f4\u6539\u6837\u5f0f\u7684\u64cd\u4f5c\u5408\u5e76\u4e3a\u4e00\u6b21\u64cd\u4f5c",id:"\u591a\u6b21\u66f4\u6539\u6837\u5f0f\u7684\u64cd\u4f5c\u5408\u5e76\u4e3a\u4e00\u6b21\u64cd\u4f5c",level:2},{value:"\u628a\u591a\u6b21\u53d1\u751f\u91cd\u6392\u7684\u5143\u7d20\u8bbe\u7f6e\u4e3a\u7edd\u5bf9\u5b9a\u4f4d",id:"\u628a\u591a\u6b21\u53d1\u751f\u91cd\u6392\u7684\u5143\u7d20\u8bbe\u7f6e\u4e3a\u7edd\u5bf9\u5b9a\u4f4d",level:2},{value:"\u5728\u5185\u5b58\u4e2d\u591a\u6b21\u64cd\u4f5c\u8282\u70b9\u3001\u5b8c\u6210\u540e\u518d\u6dfb\u52a0\u5230\u6587\u6863\u6811\u4e2d",id:"\u5728\u5185\u5b58\u4e2d\u591a\u6b21\u64cd\u4f5c\u8282\u70b9\u5b8c\u6210\u540e\u518d\u6dfb\u52a0\u5230\u6587\u6863\u6811\u4e2d",level:2},{value:"\u5728\u5904\u7406\u590d\u6742\u4ea4\u4e92\u7684\u5143\u7d20\u65f6\u5019\uff0c\u5c06\u8bbe\u7f6e\u5b83\u7684display\u5c5e\u6027\u503c\u4e3anone\uff0c\u51fa\u6765\u5b8c\u4ea4\u4e92\u540e\u5728\u663e\u793a",id:"\u5728\u5904\u7406\u590d\u6742\u4ea4\u4e92\u7684\u5143\u7d20\u65f6\u5019\u5c06\u8bbe\u7f6e\u5b83\u7684display\u5c5e\u6027\u503c\u4e3anone\u51fa\u6765\u5b8c\u4ea4\u4e92\u540e\u5728\u663e\u793a",level:2},{value:"\u5c3d\u91cf\u4f7f\u7528table\u5e03\u5c40",id:"\u5c3d\u91cf\u4f7f\u7528table\u5e03\u5c40",level:2},{value:"\u4f7f\u7528\u4e8b\u4ef6\u59d4\u6258",id:"\u4f7f\u7528\u4e8b\u4ef6\u59d4\u6258",level:2},{value:"\u5229\u7528DocumentFragment\u64cd\u4f5cDOM\u8282\u70b9",id:"\u5229\u7528documentfragment\u64cd\u4f5cdom\u8282\u70b9",level:2}],u={toc:o};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u7684\u91cd\u6392\u548c\u91cd\u7ed8\u662f\u6bd4\u8f83\u6d88\u8017\u6027\u80fd\u7684\u64cd\u4f5c\uff0c\u6240\u4ee5\u7f51\u9875\u6027\u80fd\u4f18\u5316\u7684\u624b\u6bb5\u5c31\u662f\u51cf\u5c11\u91cd\u6392\u548c\u91cd\u7ed8\u7684\u64cd\u4f5c\u3002\u6bd4\u5982\uff1a"),(0,r.kt)("h2",{id:"\u591a\u6b21\u66f4\u6539\u6837\u5f0f\u7684\u64cd\u4f5c\u5408\u5e76\u4e3a\u4e00\u6b21\u64cd\u4f5c"},"\u591a\u6b21\u66f4\u6539\u6837\u5f0f\u7684\u64cd\u4f5c\u5408\u5e76\u4e3a\u4e00\u6b21\u64cd\u4f5c"),(0,r.kt)("p",null,"\u6211\u4eec\u5728JavaScript\u4e2d\u4fee\u6539\u6837\u5f0f\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const changeDiv = document.querySelect(\"#div\");\nchangeDiv.style.width = '190px';\nchangeDiv.style.height = '190px';\nchangeDiv.style.background = 'red';\nchangeDiv.style.marginLeft = '20px';\n")),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u4fee\u6539\u6837\u5f0f\uff0c\u5b9e\u9645\u4e0a\u662f\u591a\u6b21\u64cd\u4f5c\u4fee\u6539style\u5c5e\u6027\uff0c\u5f15\u8d77\u591a\u6b21\u91cd\u7ed8\u6216\u8005\u662f\u91cd\u6392\u3002\u5176\u5b9e\u8fd9\u79cd\u64cd\u4f5c\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5408\u5e76\u4e3a\u4e00\u6b21\u64cd\u4f5c\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".changDiv{\n width:'190px';\n height:'190px';\n background:'red';\n margin-left:'20px';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const changDiv = document.querySelect('.div');\nchangeDiv.className = 'div';\n")),(0,r.kt)("p",null,"\u8fd9\u6837\u5c31\u662f\u5728\u6700\u540e\u4fee\u6539div\u7684className\u7684\u65f6\u5019\u624d\u53d1\u751f\u91cd\u6392\u6216\u8005\u91cd\u7ed8\u3002"),(0,r.kt)("h2",{id:"\u628a\u591a\u6b21\u53d1\u751f\u91cd\u6392\u7684\u5143\u7d20\u8bbe\u7f6e\u4e3a\u7edd\u5bf9\u5b9a\u4f4d"},"\u628a\u591a\u6b21\u53d1\u751f\u91cd\u6392\u7684\u5143\u7d20\u8bbe\u7f6e\u4e3a\u7edd\u5bf9\u5b9a\u4f4d"),(0,r.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u5143\u7d20\u662f\u5904\u5728\u6b63\u5e38\u7684\u6587\u6863\u6d41\u4e2d\uff0c\u5982\u679c\u8fd9\u4e2a\u5143\u7d20\u53d1\u751f\u91cd\u6392\u5c31\u4f1a\u5f71\u54cd\u5230\u5176\u4ed6\u5468\u8fb9\u5143\u7d20\u3002\u8981\u662f\u8fd9\u4e2a\u5143\u7d20\u8131\u79bb\u6587\u6863\u6d41\uff0c\u90a3\u4e48\u5b83\u7684\u53d8\u5316\u5c31\u4e0d\u4f1a\u5f71\u54cd\u5230\u5176\u4ed6\u5143\u7d20\u7684\u53d8\u5316\uff0c\u4ece\u800c\u4e0d\u4f1a\u5f15\u8d77\u91cd\u6392\u7684\u64cd\u4f5c\u3002\u9700\u8981\u8bbe\u7f6eposition\u5c5e\u6027\u4e3aabsolute\u6216\u8005\u662ffixed\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u6709\u4e00\u4e2a\u52a8\u753b\u5143\u7d20\uff0c\u5b83\u9891\u7e41\u6539\u52a8\u4f4d\u7f6e\u3001\u5bbd\u9ad8\u8fd9\u4e9b\u5c5e\u6027\uff0c\u8fd9\u6837\u7684\u5143\u7d20\u53ef\u4ee5\u8003\u8651\u5c06\u5b83\u8bbe\u7f6e\u4e3a\u7edd\u5bf9\u5b9a\u4f4d\u6216\u8005\u56fa\u5b9a\u5b9a\u4f4d\u3002"),(0,r.kt)("h2",{id:"\u5728\u5185\u5b58\u4e2d\u591a\u6b21\u64cd\u4f5c\u8282\u70b9\u5b8c\u6210\u540e\u518d\u6dfb\u52a0\u5230\u6587\u6863\u6811\u4e2d"},"\u5728\u5185\u5b58\u4e2d\u591a\u6b21\u64cd\u4f5c\u8282\u70b9\u3001\u5b8c\u6210\u540e\u518d\u6dfb\u52a0\u5230\u6587\u6863\u6811\u4e2d"),(0,r.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u901a\u8fc7\u5f02\u6b65\u8bf7\u6c42\u62ff\u5230\u4e00\u4e2a\u8868\u683c\u6570\u636e\uff0c\u7136\u540e\u6e32\u67d3\u5230\u9875\u9762\u4e0a\u3002\u73b0\u5728\u5728\u6e32\u67d3\u7684\u65f6\u5019\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u6784\u9020\u4e00\u884c\u6570\u636e\u5c31\u6dfb\u52a0\u4e00\u6b21\uff0c\u4e5f\u5c31\u662fappend\u5230\u8868\u683c\u4e2d"),(0,r.kt)("li",{parentName:"ol"},"\u4e00\u6b21\u6027\u6784\u9020\u6570\u636e\uff0c\u6700\u540e\u53ea\u9700\u8981\u6dfbappend\u4e00\u6b21 \u5c31\u597d\u4e86\u3002")),(0,r.kt)("p",null,"\u65b9\u6cd5\u4e00\u5c31\u662f\u6bcf\u6dfb\u52a0\u4e00\u6b21\u5c31\u5f15\u8d77\u6d4f\u89c8\u5668\u91cd\u6392\u548c\u91cd\u7ed8\u7684\u64cd\u4f5c\uff0c\u5982\u679c\u6570\u636e\u5f88\u5927\u7684\u8bdd\uff0c\u6e32\u67d3\u65f6\u53ef\u80fd\u53d1\u751f\u5361\u987f\u3002"),(0,r.kt)("p",null,"\u65b9\u6cd5\u4e8c\u53ea\u4f1a\u5f15\u8d77\u4e00\u6b21\u91cd\u6392\u548c\u91cd\u7ed8\uff0c\u5728\u6027\u80fd\u4e0a\u6709\u5f88\u5927\u7684\u63d0\u5347\u3002"),(0,r.kt)("h2",{id:"\u5728\u5904\u7406\u590d\u6742\u4ea4\u4e92\u7684\u5143\u7d20\u65f6\u5019\u5c06\u8bbe\u7f6e\u5b83\u7684display\u5c5e\u6027\u503c\u4e3anone\u51fa\u6765\u5b8c\u4ea4\u4e92\u540e\u5728\u663e\u793a"},"\u5728\u5904\u7406\u590d\u6742\u4ea4\u4e92\u7684\u5143\u7d20\u65f6\u5019\uff0c\u5c06\u8bbe\u7f6e\u5b83\u7684display\u5c5e\u6027\u503c\u4e3anone\uff0c\u51fa\u6765\u5b8c\u4ea4\u4e92\u540e\u5728\u663e\u793a"),(0,r.kt)("p",null,"\u56e0\u4e3adisplay\u5c5e\u6027\u8bbe\u7f6e\u4e3anone\u7684\u65f6\u5019\uff0c\u5c31\u4e0d\u4f1a\u51fa\u73b0\u5728\u6e32\u67d3\u6811\u4e0a\uff0c\u6240\u4ee5\u5728\u5bf9\u5b83\u8fdb\u884c\u5904\u7406\u65f6\u4e0d\u4f1a\u5f15\u8d77\u5176\u4ed6\u5143\u7d20\u7684\u91cd\u6392\uff0c\u7b49\u5f85\u5904\u7406\u5b8c\u6210\u540e\u5728\u663e\u793a\u51fa\u6765\uff0c\u8fd9\u6837\u524d\u540e\u53ea\u53d1\u751f\u4e24\u6b21\u91cd\u6392\u6216\u8005\u91cd\u7ed8\u7684\u64cd\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u5c3d\u91cf\u4f7f\u7528table\u5e03\u5c40"},"\u5c3d\u91cf\u4f7f\u7528table\u5e03\u5c40"),(0,r.kt)("p",null,"\u56e0\u4e3atable\u5e03\u5c40\u7684\u4e2d\u4efb\u4f55\u4e00\u4e2a\u5143\u7d20\u53d1\u751f\u53d8\u5316\uff0c\u90fd\u4f1a\u5bfc\u81f4\u6574\u4e2atable\u53d1\u751f\u91cd\u6392\u3002\u5c24\u5176\u662f\u5728table\u5185\u5bb9\u6bd4\u8f83\u5e9e\u5927\u7684\u65f6\u5019\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u4e8b\u4ef6\u59d4\u6258"},"\u4f7f\u7528\u4e8b\u4ef6\u59d4\u6258"),(0,r.kt)("p",null,"\u5728\u5bf9\u591a\u4e2a\u540c\u4e00\u4e2a\u5c42\u7ea7\u5143\u7d20\u505a\u4e8b\u4ef6\u7ed1\u5b9a\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u4e8b\u4ef6\u59d4\u6258\u673a\u5236\u6765\u5904\u7406\uff0c\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u7684\u6570\u91cf\uff0c\u4ece\u800c\u63d0\u9ad8\u6027\u80fd"),(0,r.kt)("h2",{id:"\u5229\u7528documentfragment\u64cd\u4f5cdom\u8282\u70b9"},"\u5229\u7528DocumentFragment\u64cd\u4f5cDOM\u8282\u70b9"),(0,r.kt)("p",null,"DocumentFragment\u662f\u4e00\u4e2a\u6ca1\u6709\u7236\u7ea7\u8282\u70b9\u7684\u6700\u5c0f\u6587\u6863\u5bf9\u8c61\uff0c\u5b83\u53ef\u4ee5\u7528\u4e8e\u5b58\u50a8\u5df2\u7ecf\u6392\u597d\u7248\u6216\u8005\u5c1a\u672a\u786e\u5b9a\u683c\u5f0f\u7684HTML\u7247\u6bb5\u3002DocumentFragment\u6700\u6838\u5fc3\u7684\u77e5\u8bc6\u70b9\u5728\u4e8e\u5b83\u4e0d\u662f\u771f\u5b9eDOM\u6811\u7684\u4e00\u90e8\u5206\uff0c\u5b83\u7684\u53d8\u5316\u4e0d\u4f1a\u5f15\u8d77DOM\u6811\u91cd\u65b0\u6e32\u67d3\u7684\u64cd\u4f5c\uff0c\u4e5f\u5c31\u4e0d\u4f1a\u5f15\u8d77\u6d4f\u89c8\u5668\u91cd\u6392\u548c\u91cd\u7ed8\u7684\u64cd\u4f5c\uff0c\u4ece\u800c\u5e26\u6765\u6027\u80fd\u4e0a\u7684\u63d0\u5347\u3002"),(0,r.kt)("p",null,"\u8fd9\u5c31DOM\u64cd\u4f5c\u7684\u51e0\u70b9\u4f18\u5316"))}s.isMDXComponent=!0}}]);