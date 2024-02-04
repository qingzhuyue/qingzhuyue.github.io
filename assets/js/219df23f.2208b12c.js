"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3,slug:"JavaScript Ajax",title:"JavaScript\uff1aAjax",tags:["JavaScript"]},o=void 0,p={permalink:"/javaScript/JavaScript Ajax",source:"@site/javascript/js.md",title:"JavaScript\uff1aAjax",description:"Ajax\u662f\u524d\u7aef\u597d\u540e\u7aef\u6570\u636e\u4ea4\u4e92\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7\u5f02\u6b65\u8bf7\u6c42\u5c31\u53ef\u4ee5\u5728\u4e0d\u9700\u8981\u5237\u65b0\u9875\u9762\u7684\u60c5\u51b5\u4e0b\uff0c\u8fbe\u5230\u5c40\u90e8\u5237\u65b0\u7684\u6548\u679c\u3002",date:"2024-01-31T02:49:10.000Z",formattedDate:"2024\u5e741\u670831\u65e5",tags:[{label:"JavaScript",permalink:"/javaScript/tags/java-script"}],readingTime:8.125,hasTruncateMarker:!1,authors:[],frontMatter:{sidebar_position:3,slug:"JavaScript Ajax",title:"JavaScript\uff1aAjax",tags:["JavaScript"]},prevItem:{title:"JavaScript\uff1a\u9632\u6296\u548c\u8282\u6d41",permalink:"/javaScript/JavaScript\uff1a\u9632\u6296\u548c\u8282\u6d41"},nextItem:{title:"3.3-\u524d\u7aef\u768410\u4e2a\u95ee\u9898",permalink:"/javaScript/3.3-\u524d\u7aef\u768410\u4e2a\u95ee\u9898"}},s={authorsImageUrls:[]},i=[{value:"XMLHttpRequest\u5bf9\u8c61",id:"xmlhttprequest\u5bf9\u8c61",level:2},{value:"XMLHttpRequest\u5bf9\u8c61\u58f0\u660e\u5468\u671f",id:"xmlhttprequest\u5bf9\u8c61\u58f0\u660e\u5468\u671f",level:2},{value:"Ajax\u4f18\u7f3a\u70b9",id:"ajax\u4f18\u7f3a\u70b9",level:2},{value:"\u8868\u5355\u63d0\u4ea4",id:"\u8868\u5355\u63d0\u4ea4",level:2},{value:"\u8fdb\u5ea6\u4e8b\u4ef6",id:"\u8fdb\u5ea6\u4e8b\u4ef6",level:2},{value:"Ajax\u8de8\u57df\u89e3\u51b3\u65b9\u6848",id:"ajax\u8de8\u57df\u89e3\u51b3\u65b9\u6848",level:2}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ajax\u662f\u524d\u7aef\u597d\u540e\u7aef\u6570\u636e\u4ea4\u4e92\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7\u5f02\u6b65\u8bf7\u6c42\u5c31\u53ef\u4ee5\u5728\u4e0d\u9700\u8981\u5237\u65b0\u9875\u9762\u7684\u60c5\u51b5\u4e0b\uff0c\u8fbe\u5230\u5c40\u90e8\u5237\u65b0\u7684\u6548\u679c\u3002"),(0,r.kt)("p",null,"Ajax\u7684\u539f\u7406\u5c31\u662f\u901a\u8fc7XMLHttpRequest\u5bf9\u8c61\u5411\u670d\u52a1\u5668\u53d1\u9001\u5f02\u6b65\u8bf7\u6c42\uff0c\u83b7\u53d6\u6570\u636e\u540e\u5229\u7528DOM\u64cd\u4f5c\u6765\u66f4\u65b0\u9875\u9762\u3002\n\u6d41\u7a0b\u5982\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/312e1598ba664048a4283a214b027c2c.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,r.kt)("p",null,"XMLHttpRequest\u5bf9\u8c61\uff0c\u652f\u6301\u5f02\u6b65\u8bf7\u6c42\u3002\u8bbf\u95ee\u670d\u52a1\u5668\u7684\u5e76\u4e14\u4e0d\u963b\u585e\u7528\u6237\uff0c\u8fbe\u5230\u4e0d\u7528\u5237\u65b0\u9875\u9762\u7684\u6548\u679c\u3002"),(0,r.kt)("h2",{id:"xmlhttprequest\u5bf9\u8c61"},"XMLHttpRequest\u5bf9\u8c61"),(0,r.kt)("p",null,"\u5b83\u5728\u521b\u5efa\u5230\u9500\u6bc1\u6574\u4e2a\u751f\u547d\u5468\u671f\u4e2d\uff0c\u4e0d\u540c\u9636\u6bb5\u662f\u8c03\u7528\u4e0d\u540c\u7684\u51fd\u6570\uff0c\u5728\u51fd\u6570\u4e2d\u9700\u8981\u901a\u8fc7XMLHttpRequest\u5bf9\u8c61\u7684\u7279\u5b9a\u5c5e\u6027\u6765\u5224\u65ad\u51fd\u6570\u6267\u884c\u7684\u60c5\u51b5\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"abort\u51fd\u6570\uff1a\u5982\u679c\u8bf7\u6c42\u5df2\u7ecf\u53d1\u9001\uff0c\u90a3\u4e48\u6682\u505c\u5f53\u524d\u7684\u8bf7\u6c42\uff1b"),(0,r.kt)("li",{parentName:"ol"},"getAllResponseHeaders\u51fd\u6570\uff0c\u83b7\u53d6http\u8bf7\u6c42\u7684\u54cd\u5e94\u5934\u90e8\uff0c\u4f5c\u4e3a\u952e\u503c\u5bf9\u8fd4\u56de\uff0c\u5982\u679c\u6ca1\u6709\u90a3\u4e48\u8fd4\u56de\u4e00\u4e2anull\uff1b"),(0,r.kt)("li",{parentName:"ol"},"getRequestHeader(key)\u51fd\u6570\uff0c\u83b7\u53d6\u6307\u5b9akey\u7684\u54cd\u5e94\u5934\uff0c\u5982\u679c\u6ca1\u6709\u6216\u8005\u4e0d\u5b58\u5728key\u5bf9\u5e94\u7684\u62a5\u5934\uff0c\u90a3\u4e48\u8fd4\u56denull\u3002"),(0,r.kt)("li",{parentName:"ol"},'open("method",,"url",',"[asyncFlag]",',"username","password")\uff0c\u5efa\u7acb\u5bf9\u670d\u52a1\u5668\u7684\u8c03\u7528\u3002\u5176\u4e2dasyncFlag\u8868\u793a\u5f02\u6b65\u8fd8\u662f\u540c\u6b65\uff0c\u9ed8\u8ba4\u662ftrue\uff0c\u8868\u793a\u5f02\u6b65'),(0,r.kt)("li",{parentName:"ol"},"send(content)\u51fd\u6570\uff0c\u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ol"},'setRequestHeader("key","value")\u51fd\u6570\uff0c\u8bbe\u7f6e\u8bf7\u6c42\u5934\uff0c\u8bbe\u7f6eheader\u4e4b\u524d\uff0c\u5148\u8c03\u7528open\u51fd\u6570\uff0c\u8bbe\u7f6e\u7684header\u548csend\u51fd\u6570\u4e00\u8d77\u53d1\u9001\uff1b')),(0,r.kt)("h2",{id:"xmlhttprequest\u5bf9\u8c61\u58f0\u660e\u5468\u671f"},"XMLHttpRequest\u5bf9\u8c61\u58f0\u660e\u5468\u671f"),(0,r.kt)("p",null,"\u6807\u51c6\u7684XMLHttpRequest\u521b\u5efa\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'        let xmlhttp = null;\n        function createXMLHttp() {\n            // code for IE7+, Firefox, Chrome, Opera, Safari\n            if (window.XMLHttpRequest) {\n                xmlhttp = new XMLHttpRequest();\n            }\n            // code for IE6, IE5\n            if (window.ActiveXObject) {\n                try {\n                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");\n                }\n                catch (e) {\n                    try {\n                        xmlhttp = new ActiveXObject("msxml2.XMLHTTP");\n                    }\n                    catch (ex) { }\n                }\n            }\n        }\n')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u662f\u4e3a\u4e86\u517c\u5bb9\u5176\u4ed6\u4f4e\u7248\u672c\u7684\u6d4f\u89c8\u5668\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u8981\u76f4\u63a5\u4f7f\u7528new XMLHttpRequest\u6765\u521b\u5efa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var xhr = new XMLHttpRequest();\n        xhr.open(\"post\", \"/admin/login\", true);\n        //  \u8bf7\u6c42\u53c2\u6570\n        var content = {\n            userName: 'duxin',\n            password: '123456',\n        }\n\n        // \u53d1\u9001\u8bf7\u6c42\n        xhr.send(content);\n\n        // \u5904\u7406\u54cd\u5e94\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4 && xhr.readyState === 200) {\n                document.write(xhr.responseText)\n            }\n        }\n")),(0,r.kt)("h2",{id:"ajax\u4f18\u7f3a\u70b9"},"Ajax\u4f18\u7f3a\u70b9"),(0,r.kt)("p",null,"\u6709\u70b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u9700\u8981\u5237\u65b0\u5c31\u53ef\u4ee5\u4e2a\u65b0\u6570\u636e\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5f02\u6b65\u901a\u4fe1\uff0cAjax\u4f7f\u7528\u5f02\u6b65\u7684\u65b9\u5f0f\u548c\u670d\u52a1\u5668\u901a\u4fe1\uff0c\u80fd\u591f\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u901a\u4fe1\uff0c\u964d\u4f4e\u7f51\u7edc\u6570\u636e\u6d41\u91cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u524d\u540e\u7aef\u5206\u79bb\uff0c\u524d\u7aef\u4e13\u6ce8\u4e8e\u9875\u9762\u903b\u8f91\u7684\u5904\u7406\uff0c\u540e\u7aef\u5219\u662f\u4e13\u6ce8\u4e8e\u63a5\u6536\u548c\u54cd\u5e94\u6570\u636e"),(0,r.kt)("li",{parentName:"ol"},"\u524d\u540e\u7aef\u8d1f\u8f7d\u5747\u8861\uff0c\u53ef\u4ee5\u5c06\u4e00\u4e9b\u5728\u540e\u7aef\u5904\u7406\u7684\u6570\u636e\u903b\u8f91\uff0c\u653e\u5230\u524d\u7aef\u6765\u5904\u7406\u3002")),(0,r.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u5168\u6027\u95ee\u9898\uff0c\u6bd4\u5982\u8de8\u57df\u811a\u672c\u653b\u51fb\u3001SQL\u6ce8\u5165\u653b\u51fb\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u641c\u7d22\u5f15\u64ce\u652f\u6301\u6bd4\u8f83\u5f31\uff0c\u56e0\u4e3a\u6d4f\u89c8\u5668\u5728\u8fdb\u884cSEO\u7684\u65f6\u5019\uff0c\u4f1a\u5c4f\u853d\u6240\u6709\u7684JavaScript\u4ee3\u7801\uff0c\u800cAjax\u6b63\u597d\u662fJavaScript\u4e00\u90e8\u5206\u3002")),(0,r.kt)("h2",{id:"\u8868\u5355\u63d0\u4ea4"},"\u8868\u5355\u63d0\u4ea4"),(0,r.kt)("p",null,"\u73b0\u5728\u6709\u4e00\u4e2a\u7b80\u5355\u7684\u8868\u5355\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n\n<body>\n    <form name="userForm" id="userForm">\n        <div class="form-group">\n            <label for="username">\u7528\u6237\u540d</label>\n            <input type="text" class="form-control" name="username" id="username">\n        </div>\n        <div class="form-group">\n            <label for="password">\u5bc6\u7801</label>\n            <input type="password" class="form-control" name="password" id="password">\n        </div>\n        <div class="text-center">\n            <input type="button" class="btn btn-default btn-primary" value="\u63d0\u4ea4" id="submit">\n        </div>\n    </form>\n    <div id="result"></div>\n    <script>\n        const textDiv = document.getElementById("result")\n        function ajaxBtn() {\n            var xhr = new XMLHttpRequest();\n            xhr.open("post", "http://192.168.0.114:3000/user/login", true);\n            xhr.setRequestHeader("Content-Type", "application/json")\n            //  \u8bf7\u6c42\u53c2\u6570\n            const username = document.getElementById("username").value;\n            const password = document.getElementById("password").value\n            var content = {\n                name: username,\n                password: password,\n            }\n\n            // \u53d1\u9001\u8bf7\u6c42\n            xhr.send(JSON.stringify(content));\n\n            // \u5904\u7406\u54cd\u5e94\n            xhr.onreadystatechange = function () {\n                console.log("\u7f51\u7edc\u8bf7\u6c42", xhr)\n                if (xhr.readyState === 4 && xhr.status === 200) {\n                    textDiv.innerText = xhr.responseText\n                }\n            }\n        }\n        var btn = document.getElementById("submit");\n        btn.addEventListener("click", function () {\n            ajaxBtn();\n        })\n    <\/script>\n</body>\n\n</html>\n')),(0,r.kt)("p",null,"\u6548\u679c\u5982\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/d270e12144904d37a2bfc9531265a941.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684\u670d\u52a1\u5668\u7aef\u662f\u4f7f\u7528nodejs\u3002"),(0,r.kt)("h2",{id:"\u8fdb\u5ea6\u4e8b\u4ef6"},"\u8fdb\u5ea6\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u65f6\u4f7f\u7528onreadystatechange\u4e8b\u4ef6\uff0c\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u83b7\u53d6readyState\u548cstatus\u7684\u503c\uff0c\u5e76\u4e14\u505a\u76f8\u5173\u7684\u5224\u65ad\u8bf7\u6c42\u662f\u5426\u6210\u529f\u3002"),(0,r.kt)("p",null,"\u8fdb\u5ea6\u4e8b\u4ef6\u5c31\u662f\u8ba9Ajax\u5728\u8bf7\u6c42\u7684\u4e0d\u540c\u9636\u6bb5\u89e6\u53d1\u4e0d\u540c\u7c7b\u578b\u7684\u4e8b\u4ef6\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u4e0d\u7528readystate\u7684\u5c5e\u6027\uff0c\u4e5f\u80fd\u591f\u5904\u7406\u8bf7\u6c42\u6210\u529f\u548c\u5931\u8d25\u7684\u64cd\u4f5c\u3002\n\u4e0b\u9762\u662f\u4e00\u4e9b\u5e38\u89c1\u7684\u8fdb\u5ea6\u4e8b\u4ef6\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"loadstart\uff0c\u5728\u5f00\u59cb\u63a5\u6536\u54cd\u5e94\u65f6\u89e6\u53d1"),(0,r.kt)("li",{parentName:"ol"},"progress\uff0c\u5728\u63a5\u6536\u54cd\u5e94\u671f\u95f4\u4e0d\u65ad\u89e6\u53d1\uff0c\u76f4\u5230\u8bf7\u6c42\u7ed3\u675f"),(0,r.kt)("li",{parentName:"ol"},"error\uff0c\u8bf7\u6c42\u5931\u8d25"),(0,r.kt)("li",{parentName:"ol"},"abort\uff0c\u5728\u4e3b\u52a8\u8bf7\u6c42\u65f6\uff0c\u8c03\u7528abort\u51fd\u6570\u8868\u793a\u8bf7\u6c42\u7ec8\u6b62"),(0,r.kt)("li",{parentName:"ol"},"load\uff0c\u6570\u636e\u63a5\u6536\u5b8c\u6210\u540e\u89e6\u53d1\uff0c"),(0,r.kt)("li",{parentName:"ol"},"loadend\uff0c\u5728\u901a\u4fe1\u5b8c\u6210\u6216\u8005error\u3001abort\u3001load\u4e8b\u4ef6\u540e\u89e6\u53d1"),(0,r.kt)("li",{parentName:"ol"},"timeout\uff0c\u8bf7\u6c42\u8d85\u65f6\u89e6\u53d1")),(0,r.kt)("p",null,"progress\u4e8b\u4ef6\u5728\u6d4f\u89c8\u5668\u63a5\u6536\u6570\u636e\u7684\u8fc7\u7a0b\u4e2d\u5468\u671f\u6027\u8c03\u7528\uff0c\u5728\u56de\u8c03\u5904\u7406\u7a0b\u5e8f\u4e2d\u63a5\u6536\u4e00\u4e2aevent\u5bf9\u8c61\uff0c\u91cc\u9762\u542b\u6709\u5bf9\u5e94\u7684XMLHttpRequest\u5bf9\u8c61\u7684\u5b9e\u4f8b\uff0c\u53e6\u5916\u542b\u6709\u4e09\u4e2a\u5c5e\u6027\uff1a\u5206\u522b\u662flengthComputable\u3001loaded\u548ctotal\u3002"),(0,r.kt)("p",null,"lengthComputable\uff0c\u8868\u793a\u8fdb\u5ea6\u4fe1\u606f\u662f\u5426\u53ef\u7528\uff1b\nloaded\uff0c\u8868\u793a\u5df2\u7ecf\u63a5\u53d7\u5230\u7684\u5b57\u8282\u6570\uff1b\ntotal\uff0c\u8868\u793a\u54cd\u5e94\u7684\u5b9e\u9645\u5b57\u8282\u6570\u3002"),(0,r.kt)("h2",{id:"ajax\u8de8\u57df\u89e3\u51b3\u65b9\u6848"},"Ajax\u8de8\u57df\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u9996\u5148\u6d4f\u89c8\u5668\u540c\u6e90\u7b56\u7565\u7ea6\u5b9a\u4e86\u5ba2\u6237\u7aef\u811a\u672c\u5728\u6ca1\u6709\u660e\u786e\u6388\u6743\u7684\u60c5\u51b5\u4e0b\uff0c\u4e0d\u80fd\u8bbf\u95ee\u4e0d\u540c\u6e90\u7684\u76ee\u6807\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u540c\u6e90\u6307\u7684\u662f\u76f8\u540c\u7684\u534f\u8bae\u3001\u57df\u540d\u3001\u7aef\u53e3\u53f7\uff0c\u5982\u679c\u4e24\u4e2a\u8d44\u6e90\u8def\u5f84\u5728\u534f\u8bae\u3001\u7aef\u53e3\u53f7\u6216\u8005\u662f\u57df\u540d\u4e0a\u7684\u4efb\u4f55\u4e00\u70b9\u4e0d\u540c\uff0c\u90a3\u4e48\u8fd9\u4e24\u4e2a\u8d44\u6e90\u5c31\u662f\u5c5e\u4e8e\u540c\u6e90\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u8de8\u57df\u9650\u5236\uff0c\u8fd9\u662f\u56e0\u4e3a\u6709\u4e00\u4e9b\u6ca1\u6709\u9075\u5b88\u6d4f\u89c8\u5668\u7684\u540c\u6e90\u7b56\u7565\u5f15\u8d77\u7684\uff0c\u6d4f\u89c8\u5668\u8de8\u57df\u8bbf\u95ee\u7684\u9650\u5236\uff0c\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u53ef\u4ee5\u4fdd\u62a4\u7528\u6237\u7684\u9690\u79c1\u6570\u636e\u5b89\u5168\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709DOM\u540c\u6e90\u7b56\u7565\u9650\u5236\uff0c\u4e0d\u540c\u57df\u540d\u7684iframe\u53ef\u4ee5\u76f8\u4e92\u8bbf\u95ee\uff0c\u8fd9\u6837\u9ed1\u5ba2\u505a\u5047\u7684\u7f51\u7ad9\uff0c\u91cc\u9762\u4f7f\u7528iframe\u5d4c\u5957\u4e00\u4e2a\u94f6\u884c\u7684\u7f51\u7ad9\uff0c\u8fd9\u4e2a\u5047\u7f51\u7ad9\u7684\u5185\u5bb9\u5c31\u662f\u548c\u94f6\u884c\u7f51\u7ad9\u4e00\u6a21\u4e00\u6837\u3002\u5f53\u7528\u6237\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\u540e\uff0c\u9ed1\u5ba2\u5c31\u53ef\u4ee5\u83b7\u53d6\u5230iframe\u6240\u5d4c\u5957\u7684\u94f6\u884c\u7f51\u7ad9\u7684DOM\u8282\u70b9\uff0c\u4ece\u800c\u62ff\u5230\u7528\u6237\u7684\u8d26\u53f7\u548c\u5bc6\u7801\u4e86\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2a\u662fXMLHttpRequest\u540c\u6e90\u7b56\u7565\uff0c\u5982\u679c\u6ca1\u6709\u8fd9\u4e2a\u7b56\u7565\u7684\u8bdd\uff0c\u9ed1\u5ba2\u5c31\u53ef\u4ee5\u8fdb\u884c\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020CSRF\u653b\u51fb\u3002"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u9700\u8981\u8de8\u57df\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u4e3b\u8981\u662f\u5728\u670d\u52a1\u7aef\u901a\u8fc7\u8bbe\u7f6e\u54cd\u5e94\u5934\uff0c\u63a5\u6536\u8de8\u57df\u8bf7\u6c42\u5904\u7406\uff0c\u5728express\u5f00\u53d1\u7684\u670d\u52a1\u7aef\u8de8\u57df\u5904\u7406\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"app.all('*', function (req, res, next) {\n  // \u8bbe\u7f6e\u53ef\u4ee5\u63a5\u6536\u8bf7\u6c42\u7684\u57df\u540d\n  res.header('Access-Control-Allow-Origin', '*');\n  // \u662f\u5426\u53ef\u4ee5\u643a\u5e26cookie\n  res.header('Access-Control-Allow-Credentials', true);\n  res.header('Access-Control-Allow-Headers', 'Content-Type');\n  res.header('Access-Control-Allow-Methods', '*');\n  res.header('Content-Type', 'application/json;charset=utf-8');\n  next();\n});\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u6307\u5b9a\u5177\u4f53\u57df\u540d\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2a\u8de8\u57df\u89e3\u51b3\u65b9\u6cd5\u5c31\u662fJSONP\uff0c\u4f18\u70b9\u5c31\u662f\u7b80\u5355\u3001\u517c\u5bb9\u4f4e\u7248\u672c\u6d4f\u89c8\u5668\uff0c\u5bf9\u670d\u52a1\u7aef\u5f71\u54cd\u5c0f\u3002\n\u4f46\u662f\u5b83\u53ea\u652f\u6301get\u8bf7\u6c42\u3002\u53e6\u5916\u5f88\u96be\u5224\u65adJSONP\u8bf7\u6c42\u662f\u5426\u6210\u529f"))}u.isMDXComponent=!0}}]);