"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7160],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=c(n),g=a,v=s["".concat(u,".").concat(g)]||s[g]||f[g]||o;return n?r.createElement(v,l(l({ref:e},p),{},{components:n})):r.createElement(v,l({ref:e},p))}));function v(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[s]="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6546:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:0,slug:"toString()\u51fd\u6570\u4e0evalueOf()\u51fd\u6570",title:"toString()\u51fd\u6570\u4e0evalueOf()\u51fd\u6570",date:"2023-06-22 20:44",tags:["JavaScript"]},l=void 0,i={permalink:"/javaScript/toString()\u51fd\u6570\u4e0evalueOf()\u51fd\u6570",source:"@site/javascript/js202306222345.md",title:"toString()\u51fd\u6570\u4e0evalueOf()\u51fd\u6570",description:"tostring \u548c valueOf \u51fd\u6570\u662f\u89e3\u51b3\u503c\u7684\u663e\u793a\u548c\u8fd0\u7b97\u7684\u95ee\u9898\u3002\u6240\u6709\u7684 Object \u7c7b\u578b\u7684\u6570\u636e\u90fd\u81ea\u5e26 toString \u548c valueOf \u51fd\u6570\u3002",date:"2023-06-22T20:44:00.000Z",formattedDate:"2023\u5e746\u670822\u65e5",tags:[{label:"JavaScript",permalink:"/javaScript/tags/java-script"}],readingTime:3.065,hasTruncateMarker:!1,authors:[],frontMatter:{sidebar_position:0,slug:"toString()\u51fd\u6570\u4e0evalueOf()\u51fd\u6570",title:"toString()\u51fd\u6570\u4e0evalueOf()\u51fd\u6570",date:"2023-06-22 20:44",tags:["JavaScript"]},prevItem:{title:"NodeJS\uff1aI/O\u6d41\u64cd\u4f5c",permalink:"/javaScript/NodeJS\uff1aI/O\u6d41\u64cd\u4f5c"}},u={authorsImageUrls:[]},c=[{value:"toString()",id:"tostring",level:2},{value:"valueOf()",id:"valueof",level:2}],p={toc:c};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"tostring \u548c valueOf \u51fd\u6570\u662f\u89e3\u51b3\u503c\u7684\u663e\u793a\u548c\u8fd0\u7b97\u7684\u95ee\u9898\u3002\u6240\u6709\u7684 Object \u7c7b\u578b\u7684\u6570\u636e\u90fd\u81ea\u5e26 toString \u548c valueOf \u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u5b9a\u4e00\u4e2a Object \u7c7b\u578b\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {\n    name: \"duxin\"\n}\nconsole.log(obj.valueOf()); // { name: 'duxin' }\n")),(0,a.kt)("h2",{id:"tostring"},"toString()"),(0,a.kt)("p",null,'toString \u51fd\u6570\u7684\u4f5c\u7528\u662f\u628a\u4e00\u4e2a\u903b\u8f91\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\uff0c\u5e76\u4e14\u8fd4\u56de Object \u7c7b\u578b\u6570\u636e\u7684 toString()\u9ed8\u8ba4\u7684\u8fd4\u56de\u503c"',"[object Object]",'"\u3002'),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5728\u5b9a\u4e49\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u91cd\u5199 tosString \u51fd\u6570\uff0c\u8fd9\u6837 toString \u7684\u8fd4\u56de\u503c\u53ef\u8bfb\u6027\u4f1a\u66f4\u597d\u4e00\u4e9b\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {\n    name: \"duxin\",\n    toString:function(){\n        return this.name;\n    }\n}\nconsole.log(obj.valueOf()); // { name: 'duxin' }\nconsole.log(obj.toString()); // duxin\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u8fd9\u4e9b\u51fd\u6570\u90fd\u662f\u6709\u81ea\u5b9a\u4e49\u7684 toString \u51fd\u6570\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Array \u7684 toString \u51fd\u6570\u8fd4\u56de\u503c\u662f\u4ee5\u9017\u53f7\u5206\u9694\u7684\u5b57\u7b26\u4e32\uff1b"),(0,a.kt)("li",{parentName:"ol"},"Function \u7684 toString \u51fd\u6570\u8fd4\u56de\u503c\u662f\u51fd\u6570\u81ea\u8eab\u7684\u6587\u672c\u5b9a\u4e49\uff1b"),(0,a.kt)("li",{parentName:"ol"},"Date \u7684 toString \u51fd\u6570\u8fd4\u56de\u503c\u662f\u65f6\u95f4\u5b57\u7b26\u4e32\uff1b")),(0,a.kt)("h2",{id:"valueof"},"valueOf()"),(0,a.kt)("p",null,'valueOf \u51fd\u6570\u8fd4\u56de\u5f15\u7528\u7c7b\u578b\u7684\u539f\u59cb\u503c\uff0c\u5982\u679c\u6ca1\u6709\u539f\u59cb\u503c\uff0c\u5c31\u8fd4\u56de"{}"\uff0c\u5c31\u662f\u7a7a\u5bf9\u8c61\u7684\u5b57\u9762\u91cf\u3002'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Array\u7684valueOf\u51fd\u6570\u8fd4\u56de\u7684\u503c\u6570\u7ec4\u672c\u8eab\uff1b"),(0,a.kt)("li",{parentName:"ol"},"Function\u7684valueOf\u51fd\u6570\u8fd4\u56de\u7684\u662f\u51fd\u6570\u672c\u8eab\uff1b"),(0,a.kt)("li",{parentName:"ol"},"Date\u7684valueOf\u51fd\u6570\u8fd4\u56de\u7684\u503c\u65f6\u95f4\u6233\u3002")),(0,a.kt)("p",null,"\u5728\u53d1\u751f\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u7684\u65f6\u5019\uff0c\u6709liang\u4e24\u79cd\u573a\u666f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5f15\u7528\u6570\u636e\u7c7b\u578b\u8f6c\u4e3aString\uff0c\u5148\u662f\u8c03\u7528toString\u51fd\u6570\uff0c\u6709\u503c\u7684\u8bdd\uff0c\u5c31\u76f4\u63a5\u8fd4\u56de\u8be5\u5b57\u7b26\u4e32\uff1b\u5982\u679c\u5bf9\u8c61\u6ca1\u6709toString\uff0c\u90a3\u5c31\u8c03\u7528valueOf\u51fd\u6570\uff0c\u7136\u540e\u5c06\u539f\u59cb\u503c\u8f6c\u4e3a\u5b57\u7b26\u4e32\u5e76\u4e14\u8fd4\u56de\uff1b\u5982\u679ctoString\u6216\u8005valueOf\u90fd\u4e0d\u80fd\u83b7\u53d6\u539f\u59cb\u503c\uff0c\u90a3\u5c31\u629b\u51fa\u7c7b\u578b\u8f6c\u6362\u5f02\u5e38\uff1b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var arr = [];\n\narr.toString = function () {\n     console.log('\u8c03\u7528\u4e86toString()\u51fd\u6570');\n     return [];\n};\n\narr.valueOf = function () {\n     console.log('\u8c03\u7528\u4e86valueOf()\u51fd\u6570');\n     return [];\n};\n\nconsole.log(String(arr));\n\n")),(0,a.kt)("p",null,"\u5728\u6267\u884cString(arr)\u7684\u65f6\u5019\uff0c\u662f\u5148\u5c06\u6570\u7ec4\u8f6c\u4e3a\u5b57\u7b26\u4e32\uff0c\u8c03\u7528\u7684\u662ftoString\uff0c\u5b83\u7684\u7ed3\u679c\u4e0d\u80fd\u8f6c\u4e3astring\uff1b"),(0,a.kt)("p",null,"\u90a3\u5c31\u8c03\u7528valueOf\u51fd\u6570\uff0c\u5b83\u7684\u8fd4\u56de\u503c\u4e5f\u662f\u4e00\u4e2a\u7a7a\u6570\u7ec4\uff0c\u4e5f\u4e0d\u80fd\u8f6c\u4e3a\u5b57\u7b26\u4e32\uff0c\u90a3\u5c31\u53ea\u80fd\u629b\u51fa\u7c7b\u578b\u8f6c\u6362\u5f02\u5e38\u4e86\u3002"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5f15\u7528\u7c7b\u578b\u5728\u8f6c\u5316\u4e3anumber\u7684\u65f6\u5019\uff0c\u9996\u5148\u4f1a\u5224\u65ad\u5bf9\u8c61\u662f\u5426\u542b\u6709valueOf\u51fd\u6570\uff0c\u5982\u679c\u6709\uff0c\u90a3\u5c31\u8c03\u7528valueOf\u51fd\u6570\uff0c\u628a\u5b83\u7684\u8fd4\u56de\u503c\u8f6c\u4e3a\u6570\u5b57\uff0c\u7136\u540e\u8fd4\u56de\uff1b\u5982\u679c\u6ca1\u6709valueOf\u51fd\u6570\uff0c\u5c31\u8c03\u7528toString\u51fd\u6570\uff0c\u5c06\u8fd4\u56de\u503c\u8f6c\u4e3a\u6570\u5b57\u5e76\u8fd4\u56de\u3002\u5982\u679ctoString\u6216\u8005valueOf\u90fd\u4e0d\u80fd\u83b7\u53d6\u5230\u539f\u59cb\u503c\u7684\u8bdd\uff0c\u90a3\u5c31\u629b\u51fa\u7c7b\u578b\u8f6c\u6362\u5f02\u5e38\u3002")))}s.isMDXComponent=!0}}]);