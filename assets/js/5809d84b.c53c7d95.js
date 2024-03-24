"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<s;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:1,slug:"class\u7684\u7528\u6cd5",title:"class\u7684\u7528\u6cd5",tags:["JavaScript"]},l=void 0,c={permalink:"/javaScript/class\u7684\u7528\u6cd5",source:"@site/javascript/es6202303050001.md",title:"class\u7684\u7528\u6cd5",description:"\x3c!--",date:"2024-01-31T02:49:10.000Z",formattedDate:"2024\u5e741\u670831\u65e5",tags:[{label:"JavaScript",permalink:"/javaScript/tags/java-script"}],readingTime:2.66,hasTruncateMarker:!1,authors:[],frontMatter:{sidebar_position:1,slug:"class\u7684\u7528\u6cd5",title:"class\u7684\u7528\u6cd5",tags:["JavaScript"]},prevItem:{title:"ES6\uff1aProxy\u4ee3\u7406",permalink:"/javaScript/es6"},nextItem:{title:"JavaScript\uff1a\u9632\u6296\u548c\u8282\u6d41",permalink:"/javaScript/JavaScript\uff1a\u9632\u6296\u548c\u8282\u6d41"}},o={authorsImageUrls:[]},i=[{value:"Class\u57fa\u672c\u7528\u6cd5",id:"class\u57fa\u672c\u7528\u6cd5",level:2},{value:"constructor\u6784\u9020\u51fd\u6570",id:"constructor\u6784\u9020\u51fd\u6570",level:3},{value:"\u9759\u6001\u5c5e\u6027\u548c\u51fd\u6570",id:"\u9759\u6001\u5c5e\u6027\u548c\u51fd\u6570",level:3},{value:"Class\u7ee7\u627f",id:"class\u7ee7\u627f",level:2}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"class\u57fa\u672c\u7528\u6cd5"},"Class\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("p",null,"ES6\u5f15\u5165\u7684class\u7c7b\uff0c\u8ba9JavaScript\u5177\u6709\u66f4\u52a0\u63a5\u8fd1\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u7684\u5199\u6cd5\u3002"),(0,a.kt)("p",null,"ES6\u4e4b\u524d\uff0c\u60f3\u8981\u751f\u6210\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u53ea\u80fd\u901a\u8fc7new\u5173\u952e\u5b57\u6765\u8c03\u7528\u6784\u9020\u51fd\u6570\u6765\u5b8c\u6210\u3002"),(0,a.kt)("p",null,"ES6 \u4f7f\u7528class\u6765\u5b9a\u4e49\u7c7b\uff0c\u5728\u7c7b\u7684constructor\u6784\u9020\u51fd\u6570\u4e2d\u5b9a\u4e49\u5b9e\u4f8b\u7684\u5c5e\u6027\u3002\u539f\u578b\u5c5e\u6027\u76f4\u63a5\u5728class\u5185\u90e8\u5b9a\u4e49\u5e76\u4e14\u8d4b\u503c\uff0c\u7c7b\u7684\u539f\u578b\u51fd\u6570\u7684\u58f0\u660e\uff0c\u662f\u548cconstructor\u6784\u9020\u51fd\u6570\u5c5e\u4e8e\u540c\u4e00\u4e2a\u5c42\u7ea7\uff0c\u5e76\u4e14\u7701\u7565\u4e86function\u5173\u952e\u5b57\u3002\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'class Person{\n  // \u539f\u578b\u5c5e\u6027\n  publicName = "duxin";\n  constructor(name,age){\n    //\u5b9e\u4f8b\u5c5e\u6027\n    this.name = name;\n    this.age = age;\n  }\n  //\u539f\u578b\u51fd\u6570\n  getName(){\n    return this.name;\n  }\n}\n\n// \u901a\u8fc7class\u521b\u5efa\u5b9e\u4f8b\nconst child = new Person("duxinyues",18);\nconsole.log(child.getName()); // duxinyues\n')),(0,a.kt)("p",null,"\u5728ES5\u4e2d\u7684\u5199\u6cd5\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u6784\u9020\u51fd\u6570\nfunction Person(name,age){\n  //\u5b9e\u4f8b\u5c5e\u6027\n  this.name = name;\n  this.age = age;\n}\n\nPerson.prototype.publicName = "duxin";\nPerson.prototype.getName = function(){\n  return this.name\n}\n')),(0,a.kt)("p",null,"class\u4e2d\u6709\u6784\u9020\u51fd\u6570\u3001\u9759\u6001\u5c5e\u6027\u548c\u51fd\u6570\uff1a"),(0,a.kt)("h3",{id:"constructor\u6784\u9020\u51fd\u6570"},"constructor\u6784\u9020\u51fd\u6570"),(0,a.kt)("p",null,"constructor\u6784\u9020\u51fd\u6570\uff0c\u662fclass\u7c7b\u4e2d\u5fc5\u987b\u6709\u7684\u4e00\u4e2a\u51fd\u6570\uff0c\u5982\u679c\u6ca1\u6709\u624b\u52a8\u6dfb\u52a0\uff0cclass\u4e5f\u4f1a\u81ea\u52a8\u52a0\u4e0a\u4e00\u4e2a\u7a7a\u7684\u6784\u9020\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u6784\u9020\u51fd\u6570\u9ed8\u8ba4\u8fd4\u56de\u5bf9\u8c61\u7684\u5b9e\u4f8b\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u4e86this\u7684\u6307\u5411\u3002\u4e5f\u53ef\u4ee5\u624b\u52a8\u4fee\u6539\u6784\u9020\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002"),(0,a.kt)("h3",{id:"\u9759\u6001\u5c5e\u6027\u548c\u51fd\u6570"},"\u9759\u6001\u5c5e\u6027\u548c\u51fd\u6570"),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528static\u5173\u952e\u5b57\u6765\u4fee\u9970\u9759\u6001\u5c5e\u6027\u7684\u8bdd\uff0c\u90a3\u4e48\u5b9e\u4f8b\u5c31\u4e0d\u80fd\u8bbf\u95ee\u8be5\u5c5e\u6027\uff0c\u8fd9\u4e2a\u5c5e\u6027\u53ea\u80fd\u901a\u8fc7\u7c7b\u81ea\u8eab\u6765\u8bbf\u95ee\u3002\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'class Foo {\n    static name = "duxin";\n    static getName() {\n        return this.name\n    }\n}\n\nconsole.log(Foo.getName()); //duxin\n')),(0,a.kt)("p",null,"\u9759\u6001\u51fd\u6570\u4e2d\u7684this\u6307\u5411\u662f\u7c7b\u672c\u8eab"),(0,a.kt)("h2",{id:"class\u7ee7\u627f"},"Class\u7ee7\u627f"),(0,a.kt)("p",null,"ES6\u65b0\u589e\u7684extends\u5173\u952e\u5b57\uff0c\u53ef\u4ee5\u5feb\u901f\u5b9e\u73b0\u7c7b\u7684\u7ee7\u627f\u3002"),(0,a.kt)("p",null,"\u5728\u5b50\u7c7b\u7684constructor\u6784\u9020\u51fd\u6570\u4e2d\uff0c\u4f7f\u7528super\u51fd\u6570\u6765\u6267\u884c\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u7136\u540e\u518d\u6765\u6267\u884c\u5b50\u7c7b\u3002\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'class Parson {\n    constructor() {\n        this.name = "duxin"\n    }\n\n}\n\n\nclass Child extends Parson {\n    constructor() {\n        super();\n        this.age = "908"\n    }\n}\n\nconst child = new Child()\nconsole.log(child.name); // duxin\n')),(0,a.kt)("p",null,"\u8fd9\u5c31\u662fES6\u4e2dclass\u7684\u4f7f\u7528\u3002"))}u.isMDXComponent=!0}}]);