(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[12],{102:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(k){i=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),c=new O(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=E(c,n);if(i){if(i===l)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,c),o}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var l={};function f(){}function m(){}function y(){}var h={};h[a]=function(){return this};var d=Object.getPrototypeOf,p=d&&d(d(x([])));p&&p!==e&&n.call(p,a)&&(h=p);var b=y.prototype=f.prototype=Object.create(h);function v(t){["next","throw","return"].forEach((function(e){i(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var r;this._invoke=function(a,o){function c(){return new e((function(r,c){!function r(a,o,c,i){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,i)}))}i(u.arg)}(a,o,r,c)}))}return r=r?r.then(c,c):c()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=b.constructor=y,y.constructor=m,m.displayName=i(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,i(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},v(g.prototype),g.prototype[o]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var c=new g(u(e,n,r,a),o);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},v(b),i(b,c,"Generator"),b[a]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},158:function(t,e,n){t.exports=n.p+"static/media/fast-forward.04baf9a2.png"},198:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return F}));var r=n(91),a=n(95),o=n(3),c=n.n(o),i=n(10),u=n(49),s=n(100),l=n(96),f=n(27),m=n(93),y=n(98),h=n.n(y),d=n(99),p=function(t){var e=t.text,n=t.fadeOut,a=t.style,i=Object(o.useState)(0),u=Object(r.a)(i,2),s=u[0],l=u[1],f=Object(o.useState)(""),y=Object(r.a)(f,2),p=y[0],b=y[1],v=function(t){return new Promise((function(e){return setTimeout(e,t)}))};return Object(o.useEffect)((function(){l(1),b(e)}),[e]),Object(o.useEffect)((function(){(function(){var t=Object(d.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(0),t.next=3,v(250);case 3:b(e),l(1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),c.a.createElement("p",{style:Object(m.a)({textAlign:n?"left":"center",transition:"opacity 0.25s",opacity:s},a)},p)},b=n(97),v=n(107),g=n(50),E=n(92),w=n(108),j=n(117),O=n.n(j),x=n(155);var L=c.a.memo((function(t){var e=t.id,n=t.text,a=t.time,i=t.changeLyricById,u=t.videoDuration,s=t.width,l=t.playing,f=t.setPlaying,m=Object(o.useState)(s),y=Object(r.a)(m,2),p=y[0],b=y[1];Object(o.useEffect)((function(){b(s*((a-u+5)/10))}),[u]);var v=Object(o.useState)("primary"),g=Object(r.a)(v,2),w=g[0],j=g[1],O=Object(o.useState)(0),L=Object(r.a)(O,2),k=L[0],S=L[1];Object(o.useEffect)((function(){a-u<=.5&&a-u>0&&function(){var t=Object(d.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,1e3*(a-u))}));case 2:return j("warning"),t.next=5,new Promise((function(t){return setTimeout(t,500)}));case 5:j("primary");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[u,a]);var T=Object(o.useState)(p),C=Object(r.a)(T,2),I=C[0],P=C[1],N=Object(o.useState)(!1),D=Object(r.a)(N,2),z=D[0],_=D[1],B=function(){var t=Object(d.a)(h.a.mark((function t(n){var r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=10*((r=n/s)-.5),a=l,f(!1),i(e,u+r),_(!1),t.next=8,new Promise((function(t){return setTimeout(t,1e3)}));case 8:a&&f(!0),S(0);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){S(l?0:1e3)}),[l]),Object(o.useEffect)((function(){z||P(p)}),[p,z]),c.a.createElement(c.a.Fragment,null,c.a.createElement(x.DraggableCore,{axis:"x",onStart:function(){return _(!0)},onStop:function(){return B(I)},onDrag:function(t){var e=t.movementX,n=t.clientX,r=t.screenX;P((function(t){return e*(n/r)+t})),S(0)}},c.a.createElement(E.a,{key:e,variant:w,style:{transition:"transform ease-in-out ".concat(k,"ms"),position:"absolute",alignSelf:"center",transform:"translate(".concat(I,"px, 0px)"),justifyContent:"start"}},c.a.createElement("p",{style:{fontSize:"30px"}},n))))}));function k(t){var e=t.videoDuration,n=t.syncedLyrics,a=t.changeLyricById,i=t.aboveProgressBar,u=t.playing,f=t.setPlaying,m=Object(o.useState)(Array(3)),y=Object(r.a)(m,2),h=y[0],d=y[1],p=Object(o.useState)(0),b=Object(r.a)(p,2),v=b[0],g=b[1],E=Object(o.useRef)();return Object(o.useLayoutEffect)((function(){E.current&&g(E.current.offsetWidth)}),[]),Object(o.useEffect)((function(){for(var t=Array(3),r=0;r<t.length;r++)t[r]=[];n.forEach((function(n){n.forEach((function(n){var r,a=n.time-e;(-5<a&&a<5||!n.time)&&(r=n.id,i?0<=r%6&&r%6<=2:3<=r%6&&r%6<=6)&&t[n.id%3].push(n)}))})),d(t)}),[e,i,n]),c.a.createElement(l.a,{ref:E,fluid:!0,style:{height:"30%",width:"80%"}},c.a.createElement(c.a.Fragment,null,h.map((function(t,n){return c.a.createElement(s.a,{key:n,style:{marginTop:"8%"}},t.map((function(t){return c.a.createElement(L,{key:t.id,text:t.text,id:t.id,time:t.time,changeLyricById:a,videoDuration:e,width:v,playing:u,setPlaying:f})})))}))))}var S=n(112),T=n(153),C=n.n(T),I=n(154),P=n.n(I);function N(){var t=Object(a.a)(["\n  mutation postsyncedlyrics($syncedLyrics: [[InputSyncedLyric]], $synchronizationData: InputSynchronizationData,) {\n    postSyncedLyrics(syncedLyrics: $syncedLyrics, synchronizationData: $synchronizationData,)\n  }\n"]);return N=function(){return t},t}var D=Object(u.gql)(N());function z(t){var e=t.syncedLyrics,a=t.startTime,f=t.endTime,y=Object(i.g)(),h=y.youtubeID,d=y.geniusID,p=Object(o.useRef)(null),j=Object(o.useRef)(null),x=Object(o.useRef)(null),L=Object(i.f)(),T=Object(o.useState)(e),I=Object(r.a)(T,2),N=I[0],z=I[1],_=Object(o.useState)(""),B=Object(r.a)(_,2),F=B[0],R=B[1],G=Object(o.useState)(""),A=Object(r.a)(G,2),$=A[0],W=A[1],M=Object(u.useMutation)(D,{variables:{syncedLyrics:N,synchronizationData:{youtubeID:h,geniusID:d,startTime:a,endTime:f,tokenId:F}},onCompleted:function(){lt(!0)},skip:""===F}),X=Object(r.a)(M,1)[0],q=Object(o.useState)(""),H=Object(r.a)(q,2),J=H[0],Y=H[1],Q=Object(o.useState)(0),U=Object(r.a)(Q,2),K=U[0],V=U[1],Z=Object(o.useState)(""),tt=Object(r.a)(Z,2),et=tt[0],nt=tt[1],rt=Object(o.useState)(!1),at=Object(r.a)(rt,2),ot=at[0],ct=at[1],it=Object(o.useState)(!1),ut=Object(r.a)(it,2),st=ut[0],lt=ut[1],ft=function(t){return"".concat(Math.floor(t/60),":").concat(t%60>=10?Math.floor(t%60):"0"+Math.floor(t%60))},mt=Object(o.useCallback)((function(t,e){z((function(n){return n.map((function(n){return n.map((function(n){return n.id===t?(nt("'".concat(n.text,"' ").concat(ft(n.time)," \u2192 ").concat(ft(e))),Object(m.a)(Object(m.a)({},n),{},{time:e})):n}))}))})),K-e<3&&p.current.seekTo(e-2)}),[]),yt=Object(o.useState)(!0),ht=Object(r.a)(yt,2),dt=ht[0],pt=ht[1],bt=Object(o.useState)(!0),vt=Object(r.a)(bt,2),gt=vt[0],Et=vt[1];return Object(o.useEffect)((function(){var t=setInterval((function(){if(p.current){var t=p.current.getCurrentTime();t<a&&(p.current.seekTo(a),V(a)),t>f?(V(f),pt(!1)):V(t)}Y(ft(K))}),25),e=function(t){"Space"===t.code&&pt((function(t){return gt?t:!t}))};return window.addEventListener("keydown",e,!1),function(){clearInterval(t),window.removeEventListener("keydown",e)}}),[f,V,a,K,gt]),c.a.createElement(l.a,{fluid:!0,style:{paddingLeft:0,paddingRight:0}},c.a.createElement(b.a,{setParentTokenId:R,setParentUserName:W,centerContent:c.a.createElement(S.a.Collapse,null,c.a.createElement(E.a,{disabled:gt,style:{color:"black",height:"40px",textAlign:"center"},onClick:function(){return pt((function(t){return!t}))}},c.a.createElement(g.a,{style:{height:30,width:30},src:dt?C.a:P.a})),c.a.createElement(S.a.Text,{style:{fontSize:30,marginLeft:10}}," ",J)),customContent:c.a.createElement(S.a.Text,{style:{fontSize:15}},"Icons made by"," ",c.a.createElement("a",{href:"https://www.flaticon.com/authors/elias-bikbulatov",title:"Elias Bikbulatov"}," ","Elias Bikbulatov")," ","from"," ",c.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"}," ","www.flaticon.com"))}),c.a.createElement(l.a,{style:{position:"relative"}},c.a.createElement(s.a,{style:{position:"relative"}},c.a.createElement(O.a,{ref:p,playing:dt,onBuffer:function(){return Et(!0)},onBufferEnd:function(){return Et(!1)},url:"https://www.youtube.com/watch?v=".concat(h),controls:!1,style:{opacity:0}}))),c.a.createElement(l.a,{fluid:!0,style:{position:"absolute",top:0,left:0,right:0,bottom:0}},c.a.createElement("div",{style:{position:"absolute",left:"50%",marginLeft:"-3px",top:0,bottom:0,borderLeft:"4px solid black"}}),c.a.createElement(w.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:1e3},show:ot,dismissible:!0,onClose:function(){return ct(!1)},variant:st?"success":"primary"},st?c.a.createElement(c.a.Fragment,null,c.a.createElement(w.a.Heading,null,"Success: lyrics saved!"),c.a.createElement(E.a,{onClick:function(){return L.push("/play/".concat($,"/").concat(h,"/").concat(d))}}," Play now!")):c.a.createElement(c.a.Fragment,null,c.a.createElement(w.a.Heading,{style:{justifyContent:"center"}}," Click the button below to confirm your submission "),c.a.createElement(E.a,{onClick:function(){return X()}}," Send Lyric Synchronization"))),c.a.createElement(s.a,{className:"justify-content-center h-10"},c.a.createElement(v.a,{xs:5}),c.a.createElement(v.a,{className:"align-self-center",xs:1}),c.a.createElement(v.a,{style:{alignSelf:"center",fontSize:"20px"},xs:5})),c.a.createElement(k,{videoDuration:K,syncedLyrics:N,changeLyricById:mt,aboveProgressBar:!0,playing:dt,setPlaying:pt}),c.a.createElement(l.a,{fluid:!0,className:"mw-100 h-10"},c.a.createElement(s.a,{className:"align-self-center"},c.a.createElement(v.a,{xs:1,className:"align-self-center"},c.a.createElement(E.a,{ref:x,disabled:gt,block:!0,onClick:function(){p.current.seekTo(K-10),x.current.blur()}},c.a.createElement(g.a,{style:{justifyContent:"center",height:30,transform:"scaleX(-1)"},src:n(158)}))),c.a.createElement(v.a,{className:"align-self-center",xs:10},c.a.createElement("hr",{style:{color:"black",backgroundColor:"black",height:2}})),c.a.createElement(v.a,{xs:1,className:"align-self-center"},c.a.createElement(E.a,{ref:j,disabled:gt,block:!0,onClick:function(){p.current.seekTo(K+10),j.current.blur()}},c.a.createElement(g.a,{style:{justifyContent:"center",height:30},src:n(158)}))))),c.a.createElement(k,{videoDuration:K,syncedLyrics:N,changeLyricById:mt,aboveProgressBar:!1,playing:dt,setPlaying:pt}),c.a.createElement("div",{style:{width:1,backgroundColor:"black",position:"absolute",left:"50%",transform:"translate(-50%, 0%)"}}),c.a.createElement(S.a,{style:{height:60,maxWidth:"100%"},fixed:"bottom",bg:"secondary",variant:"dark"},c.a.createElement(S.a.Collapse,{style:{position:"absolute",transform:"translate(-50%, 0%)",left:"50%"}},c.a.createElement(S.a.Text,{style:{fontSize:40}},et)),c.a.createElement(S.a.Collapse,{className:"justify-content-end"},c.a.createElement(E.a,{onClick:function(){return ct(!0)}}," Submit synchronization ")))))}function _(){var t=Object(a.a)(["\n  query processedlyrics($id: String) {\n    processedLyrics(id: $id) {\n      id\n      text\n    }\n  }\n"]);return _=function(){return t},t}var B=Object(u.gql)(_());function F(t){var e=t.startTime,n=t.endTime,a=Object(i.g)(),m=a.youtubeID,y=a.geniusID,h=Object(o.useRef)(null),d=Object(o.useState)(!1),v=Object(r.a)(d,2),g=v[0],E=v[1],w=Object(o.useState)(!1),j=Object(r.a)(w,2),x=j[0],L=j[1],k=Object(o.useState)(!0),S=Object(r.a)(k,2),T=S[0],C=S[1],I=Object(o.useState)({row:0,col:0}),P=Object(r.a)(I,2),N=P[0],D=P[1],_=Object(o.useState)({}),F=Object(r.a)(_,2),R=F[0],G=F[1];Object(o.useEffect)((function(){var t=function(t){t.keyCode&&(g?T||D((function(t){var e=t.row,n=t.col;return e<R.length?(G((function(t){return t.map((function(t,r){return t.map((function(t,a){return r===e&&a===n&&(t.time=h.current.getCurrentTime()),t}))}))})),R[e].length-1!==n?{row:e,col:n+1}:e!==R.length?{row:e+1,col:0}:void 0):{row:e,col:n}})):(E(!0),h.current&&h.current.seekTo(e)))};return window.addEventListener("keydown",t,!1),function(){return window.removeEventListener("keydown",t)}}),[T,g,e]),Object(o.useEffect)((function(){var t=setInterval((function(){h.current&&h.current.getCurrentTime()>n&&L(!0)}),1e3);return function(){return clearInterval(t)}}),[h,n]);var A=Object(o.useState)("Waiting for lyrics to be processed..."),$=Object(r.a)(A,2),W=$[0],M=$[1],X=Object(u.useQuery)(B,{variables:{id:y},onCompleted:function(){G(X.processedLyrics.map((function(t){return t.map((function(t){return delete t.__typename,t}))}))),M("Press any key to start the video")}}).data;return Object(o.useEffect)((function(){T||M("Whenever the highlighted word is said, press any key to sync it.")}),[T]),x?c.a.createElement(z,{syncedLyrics:R,startTime:e,endTime:n}):c.a.createElement(l.a,{fluid:!0,style:{paddingLeft:0,paddingRight:0}},c.a.createElement(b.a,{centerContent:c.a.createElement(p,{text:W,style:{fontSize:30,color:"white",zIndex:1e3,textAlign:"center"}})}),c.a.createElement(s.a,{className:"justify-content-md-center"},c.a.createElement(O.a,{ref:h,playing:g,url:"https://www.youtube.com/watch?v=".concat(m),onEnded:function(){return L(!0)},onBuffer:function(){return C(!0)},onBufferEnd:function(){return C(!1)},controls:!1})),X?X.processedLyrics.slice(N.row).map((function(t,e){return c.a.createElement(s.a,{className:"justify-content-md-center",style:{minWidth:"100%"},key:e},t.map((function(t,n){return 0===e&&n===N.col?c.a.createElement("mark",{key:t.id,style:{backgroundColor:"#007bff",color:"#fff",marginBottom:10,fontSize:"40px",marginLeft:"0.5em"}},t.text):c.a.createElement("p",{key:t.id,style:{marginBottom:10,fontSize:"40px",marginLeft:"0.5em"}},t.text)})))})):c.a.createElement(f.a,{centered:!0}))}},98:function(t,e,n){t.exports=n(102)},99:function(t,e,n){"use strict";function r(t,e,n,r,a,o,c){try{var i=t[o](c),u=i.value}catch(s){return void n(s)}i.done?e(u):Promise.resolve(u).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var c=t.apply(e,n);function i(t){r(c,a,o,i,u,"next",t)}function u(t){r(c,a,o,i,u,"throw",t)}i(void 0)}))}}n.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=12.1e52317e.chunk.js.map