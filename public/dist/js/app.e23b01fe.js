(function(e){function t(t){for(var s,n,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},r={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-c52b6f74":"aae7c26d"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-c52b6f74":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var s="css/"+({}[e]||e)+"."+{"chunk-c52b6f74":"bb251253"}[e]+".css",r=i.p+s,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===s||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var s=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[e],f.parentNode.removeChild(f),a(o)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,a){s=r[e]=[t,a]}));t.push(s[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var a=r[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,a[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"253a":function(e,t,a){},"329a":function(e,t,a){},"3f4f":function(e,t,a){"use strict";a("89b9")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("a026"),n=a("f23d"),r=(a("3aed"),function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),o=[],c={name:"App",components:{},data(){return{}},watch:{},methods:{}},i=c,u=(a("3f4f"),a("2877")),l=Object(u["a"])(i,r,o,!1,null,null,null),d=l.exports,f=a("8c4f"),p=function(){var e=this,t=e._self._c;return t("a-layout",{attrs:{id:"app-layout-sider"}},[t("a-layout-sider",{staticClass:"layout-sider",attrs:{theme:"light"},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[t("div",{staticClass:"logo"},[t("img",{staticClass:"pic-logo",attrs:{src:a("cf05")}})]),t("a-menu",{staticClass:"menu-item",attrs:{theme:"light",mode:"inline","default-selected-keys":[e.default_key]},on:{click:e.menuHandle}},e._l(e.menu,(function(a,s){return t("a-menu-item",{key:s},[t("a-icon",{attrs:{type:a.icon}}),e._v(" "+e._s(a.title)+" ")],1)})),1)],1),t("a-layout",[t("a-layout-content",{staticClass:"layout-content"},[t("router-view")],1)],1)],1)},m=[],b=(a("14d9"),{name:"AppSider",data(){return{collapsed:!0,default_key:"menu_1",current:"",menu:{menu_1:{icon:"home",title:"框架",pageName:"Base",params:{}},menu_2:{icon:"desktop",title:"其它",pageName:"Other",params:{}}}}},created(){},mounted(){this.menuHandle()},methods:{menuHandle(e){this.current=e?e.key:this.default_key;const t=this.menu[this.current];console.log("[home] load page:",t.pageName),this.$router.push({name:t.pageName,params:t.params})}}}),j=b,h=(a("71df"),Object(u["a"])(j,p,m,!1,null,"b03bc458",null)),g=(h.exports,function(){var e=this,t=e._self._c;return t("a-layout",{attrs:{id:"app-menu"}},[t("a-layout-sider",{staticClass:"layout-sider",attrs:{theme:"light"}},[t("a-menu",{attrs:{theme:"light",mode:"inline","default-selected-keys":[e.default_key],"selected-keys":[e.current]},on:{click:e.menuClick}},e._l(e.menu,(function(a,s){return t("a-menu-item",{key:s},[t("router-link",{attrs:{to:{name:a.pageName,params:a.params}}},[t("span",[e._v(e._s(a.title))])])],1)})),1)],1),t("a-layout",[t("a-layout-content",[t("router-view")],1)],1)],1)}),y=[],k={base:{menu_100:{icon:"profile",title:"文件",pageName:"BaseFileIndex",params:{}},menu_300:{icon:"profile",title:"通信",pageName:"BaseSocketIpc",params:{}},menu_301:{icon:"profile",title:"http服务",pageName:"BaseSocketHttpServer",params:{}},menu_302:{icon:"profile",title:"socket服务",pageName:"BaseSocketSocketServer",params:{}},menu_310:{icon:"profile",title:"json数据库",pageName:"BaseDBIndex",params:{}},menu_320:{icon:"profile",title:"sqlite数据库",pageName:"BaseSqliteDBIndex",params:{}},menu_400:{icon:"profile",title:"视图",pageName:"BaseWindowViewIndex",params:{}},menu_401:{icon:"profile",title:"窗口",pageName:"BaseWindowIndex",params:{}},menu_405:{icon:"profile",title:"桌面通知",pageName:"BaseNotificationIndex",params:{}},menu_407:{icon:"profile",title:"电源监控",pageName:"BasePowerMonitorIndex",params:{}},menu_409:{icon:"profile",title:"屏幕信息",pageName:"BaseScreenIndex",params:{}},menu_411:{icon:"profile",title:"系统主题",pageName:"BaseThemeIndex",params:{}},menu_412:{icon:"profile",title:"自动更新",pageName:"BaseUpdaterIndex",params:{}},menu_500:{icon:"profile",title:"软件调用",pageName:"BaseSoftwareIndex",params:{}},menu_900:{icon:"profile",title:"测试",pageName:"BaseTestApiIndex",params:{}}},other:{menu_100:{icon:"profile",title:"测试",pageName:"OtherTestIndex",params:{}}}},v={props:{id:{type:String,default:""}},data(){return{menu:{},default_key:"menu_100",current:"",keys:[]}},watch:{id:function(){this.menuHandle()}},created(){},mounted(){this.menuHandle()},methods:{menuHandle(){switch(this.current=this.default_key,this.id){case"base":this.menu=k.base;break;case"other":this.menu=k.other;break}const e=this.menu[this.current];this.$router.push({name:e.pageName,params:e.params})},menuClick(e){this.current=e.key}}},_=v,w=(a("e4fb"),Object(u["a"])(_,g,y,!1,null,"4541d966",null));w.exports;const x=[{path:"/",name:"BaseWindowIndex",component:()=>a.e("chunk-c52b6f74").then(a.bind(null,"889f"))}],N=f["a"].prototype.push;f["a"].prototype.push=function(e,t,a){return t||a?N.call(this,e,t,a):N.call(this,e).catch(e=>e)},s["a"].use(f["a"]);var z=new f["a"]({mode:"history",routes:x}),S=a("b775");const{ipcRenderer:B}=window.require&&window.require("electron")||window.electron||{},O=(e,t)=>{const a=B.invoke(e,t);return a},I=(e,t)=>{const a=B.sendSync(e,t);return a};var C={install(e){e.prototype.$ipc=B,e.prototype.$ipcInvoke=O,e.prototype.$ipcSendSync=I}};s["a"].use(n["a"]),s["a"].use(S["a"]),s["a"].use(C),s["a"].config.productionTip=!1,new s["a"]({router:z,render:e=>e(d)}).$mount("#app")},"71df":function(e,t,a){"use strict";a("329a")},"89b9":function(e,t,a){},b775:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var s=a("bc3a"),n=a.n(s),r=a("cff8"),o=a.n(r),c=a("56cd");const i={vm:{},install(e,t){this.installed||(this.installed=!0,t?(e.axios=t,Object.defineProperties(e.prototype,{axios:{get:function(){return t}},$http:{get:function(){return t}}})):console.error("You have to install axios"))}},u=n.a.create({baseURL:"",timeout:6e4}),l=e=>{if(e.response){const t=e.response.data;403===e.response.status&&c["a"].error({message:"Forbidden",description:t.message}),401!==e.response.status||t.result&&t.result.isLogin||c["a"].error({message:"Unauthorized",description:"Authorization verification failed"})}return Promise.reject(e)};u.interceptors.request.use(e=>{const t=o.a.get("token");return t&&(e.headers["Access-Token"]=t),e},l),u.interceptors.response.use(e=>e.data,l);const d={vm:{},install(e){e.use(i,u)}};t["b"]=u},cf05:function(e,t,a){e.exports=a.p+"img/logo.18776b4e.png"},e4fb:function(e,t,a){"use strict";a("253a")}});
//# sourceMappingURL=app.e23b01fe.js.map