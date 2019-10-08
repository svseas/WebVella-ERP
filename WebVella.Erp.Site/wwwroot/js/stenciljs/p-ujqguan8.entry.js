import{r as e,h as t}from"./p-bbce00a9.js";var r=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},n=Object.prototype.toString;function o(e){return"[object Array]"===n.call(e)}function a(e){return null!==e&&"object"==typeof e}function i(e){return"[object Function]"===n.call(e)}function s(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}var c={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===n.call(e)},isBuffer:function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===n.call(e)},isFile:function(e){return"[object File]"===n.call(e)},isBlob:function(e){return"[object Blob]"===n.call(e)},isFunction:i,isStream:function(e){return a(e)&&i(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:s,merge:function e(){var t={};function r(r,n){t[n]="object"==typeof t[n]&&"object"==typeof r?e(t[n],r):r}for(var n=0,o=arguments.length;n<o;n++)s(arguments[n],r);return t},deepMerge:function e(){var t={};function r(r,n){t[n]="object"==typeof t[n]&&"object"==typeof r?e(t[n],r):"object"==typeof r?e({},r):r}for(var n=0,o=arguments.length;n<o;n++)s(arguments[n],r);return t},extend:function(e,t,n){return s(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}};function u(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var f=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(c.isURLSearchParams(t))n=t.toString();else{var o=[];c.forEach(t,function(e,t){null!=e&&(c.isArray(e)?t+="[]":e=[e],c.forEach(e,function(e){c.isDate(e)?e=e.toISOString():c.isObject(e)&&(e=JSON.stringify(e)),o.push(u(t)+"="+u(e))}))}),n=o.join("&")}if(n){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function p(){this.handlers=[]}p.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},p.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},p.prototype.forEach=function(e){c.forEach(this.handlers,function(t){null!==t&&e(t)})};var d=p,l=function(e,t,r){return c.forEach(r,function(r){e=r(e,t)}),e},h=function(e){return!(!e||!e.__CANCEL__)},m=function(e,t){c.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})},v=function(e,t,r,n,o){return function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,r,n,o)},g=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],y=c.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=c.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},w=c.isStandardBrowserEnv()?{write:function(e,t,r,n,o,a){var i=[];i.push(e+"="+encodeURIComponent(t)),c.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),c.isString(n)&&i.push("path="+n),c.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},x=function(e){return new Promise(function(t,r){var n=e.data,o=e.headers;c.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth&&(o.Authorization="Basic "+btoa((e.auth.username||"")+":"+(e.auth.password||""))),a.open(e.method.toUpperCase(),f(e.url,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var n,o,i,s,u,f="getAllResponseHeaders"in a?(n=a.getAllResponseHeaders(),u={},n?(c.forEach(n.split("\n"),function(e){if(s=e.indexOf(":"),o=c.trim(e.substr(0,s)).toLowerCase(),i=c.trim(e.substr(s+1)),o){if(u[o]&&g.indexOf(o)>=0)return;u[o]="set-cookie"===o?(u[o]?u[o]:[]).concat([i]):u[o]?u[o]+", "+i:i}}),u):u):null;!function(e,t,r){var n=r.config.validateStatus;!n||n(r.status)?e(r):t(v("Request failed with status code "+r.status,r.config,null,r.request,r))}(t,r,{data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:f,config:e,request:a}),a=null}},a.onabort=function(){a&&(r(v("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(v("Network Error",e,null,a)),a=null},a.ontimeout=function(){r(v("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",a)),a=null},c.isStandardBrowserEnv()){var i=w,s=(e.withCredentials||y(e.url))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;s&&(o[e.xsrfHeaderName]=s)}if("setRequestHeader"in a&&c.forEach(o,function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)}),e.withCredentials&&(a.withCredentials=!0),e.responseType)try{a.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){a&&(a.abort(),r(e),a=null)}),void 0===n&&(n=null),a.send(n)})},b={"Content-Type":"application/x-www-form-urlencoded"};function j(e,t){!c.isUndefined(e)&&c.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var E,C={adapter:("undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)?E=x:"undefined"!=typeof XMLHttpRequest&&(E=x),E),transformRequest:[function(e,t){return m(t,"Accept"),m(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(j(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)?(j(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){C.headers[e]={}}),c.forEach(["post","put","patch"],function(e){C.headers[e]=c.merge(b)});var S=C;function R(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var A=function(e){var t,r;return R(e),e.baseURL&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e.url)&&(e.url=(t=e.baseURL,(r=e.url)?t.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):t)),e.headers=e.headers||{},e.data=l(e.data,e.headers,e.transformRequest),e.headers=c.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),c.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||S.adapter)(e).then(function(t){return R(e),t.data=l(t.data,t.headers,e.transformResponse),t},function(t){return h(t)||(R(e),t&&t.response&&(t.response.data=l(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})},N=function(e,t){t=t||{};var r={};return c.forEach(["url","method","params","data"],function(e){void 0!==t[e]&&(r[e]=t[e])}),c.forEach(["headers","auth","proxy"],function(n){c.isObject(t[n])?r[n]=c.deepMerge(e[n],t[n]):void 0!==t[n]?r[n]=t[n]:c.isObject(e[n])?r[n]=c.deepMerge(e[n]):void 0!==e[n]&&(r[n]=e[n])}),c.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}),r};function T(e){this.defaults=e,this.interceptors={request:new d,response:new d}}T.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=N(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[A,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},T.prototype.getUri=function(e){return e=N(this.defaults,e),f(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},c.forEach(["delete","get","head","options"],function(e){T.prototype[e]=function(t,r){return this.request(c.merge(r||{},{method:e,url:t}))}}),c.forEach(["post","put","patch"],function(e){T.prototype[e]=function(t,r,n){return this.request(c.merge(n||{},{method:e,url:t,data:r}))}});var L=T;function O(e){this.message=e}O.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},O.prototype.__CANCEL__=!0;var U=O;function B(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new U(e),t(r.reason))})}B.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},B.source=function(){var e;return{token:new B(function(t){e=t}),cancel:e}};var q=B;function k(e){var t=new L(e),n=r(L.prototype.request,t);return c.extend(n,L.prototype,t),c.extend(n,t),n}var P=k(S);P.Axios=L,P.create=function(e){return k(N(P.defaults,e))},P.Cancel=U,P.CancelToken=q,P.isCancel=h,P.all=function(e){return Promise.all(e)},P.spread=function(e){return function(t){return e.apply(null,t)}};var D=P;D.default=P;var F=D;function H(e){return t("div",{class:"go-red"},e.error)}function z(e){let r=e.scope;return r.error?t(H,{error:r.error}):t("div",{id:"lazyload-"+r.nodeId})}function I(){var e=document.createEvent("Event");e.initEvent("DOMContentLoaded",!0,!0),document.dispatchEvent(e)}var _=["application/javascript","application/ecmascript","application/x-ecmascript","application/x-javascript","text/ecmascript","text/javascript","text/javascript1.0","text/javascript1.1","text/javascript1.2","text/javascript1.3","text/javascript1.4","text/javascript1.5","text/jscript","text/livescript","text/x-ecmascript","text/x-javascript"];class M{constructor(t){e(this,t),this.isLoading=!0,this.error=""}componentWillLoad(){let e=this;e.isLoading=!0,e.viewHtml="";let t=e.siteRootUrl+"/api/v3.0/pc/"+e.componentName+"/view/display?nid="+e.nodeId+"&pid="+e.pageId,r=JSON.parse(e.nodeOptions);F.post(t,r,{headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}}).then(function(t){e.viewHtml=t.data,e.isLoading=!1,window.setTimeout(function(){!function(e){let t=document.querySelector("#lazyload-"+e.nodeId);if(t){var r=document.createElement("div");r.setAttribute("id","lazyload-injector-"+e.nodeId),r.innerHTML=e.viewHtml,t.appendChild(r),o=r.querySelectorAll("script"),a=[],[].forEach.call(o,function(e){(n=e.getAttribute("type"))&&-1===_.indexOf(n)||a.push(function(t){!function(e,t){var r=document.createElement("script");r.type="text/javascript",e.src?(r.onload=t,r.onerror=t,r.src=e.src):r.textContent=e.innerText,document.head.appendChild(r),e.parentNode.removeChild(e),e.src||t()}(e,t)})}),function e(t,r,n){void 0===n&&(n=0),t[n]&&t[n](function(){++n===t.length?r():e(t,r,n)})}(a,I,0)}var n,o,a}(e)},100)}).catch(function(t){e.error=t.response?t.response.statusText+":"+t.response.data:t.message,e.isLoading=!1})}render(){return this.isLoading?t("div",{class:"loading-panel"},"Loading..."):t(z,{scope:this})}}export{M as wv_lazyload};