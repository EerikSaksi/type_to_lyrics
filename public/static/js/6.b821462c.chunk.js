(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var a=n(91),r=n(95),o=n(3),c=n.n(o),i=n(112),u=n(108),s=n(111),l=n(92),m=n(123),d=n(118),f=n(105),b=n(10),g=n(124),y=n(103),p=n.n(y),v="359548864121-f3blhpvvgm17oqoun8tvh2708a8loujm.apps.googleusercontent.com",h=n(49),O=n(106),j=n.n(O);function E(){var e=Object(r.a)(["\n  mutation createuser($tokenId: String, $userName: String) {\n    createUser(tokenId: $tokenId, userName: $userName)\n  }\n"]);return E=function(){return e},e}function x(){var e=Object(r.a)(["\n  query usernametaken($userName: String!) {\n    userNameTaken(userName: $userName)\n  }\n"]);return x=function(){return e},e}function S(){var e=Object(r.a)(["\n  query userdata($tokenId: String) {\n    userData(tokenId: $tokenId) {\n      userName\n      existsInDB\n    }\n  }\n"]);return S=function(){return e},e}var I=Object(h.gql)(S()),k=Object(h.gql)(x()),N=Object(h.gql)(E());function T(e){var t=e.centerContent,r=e.customContent,O=e.setParentTokenId,E=e.setParentUserName,x=Object(b.f)(),S=j()(),T=S.innerWidth,w=S.innerHeight,C=Object(o.useState)(""),P=Object(a.a)(C,2),q=P[0],D=P[1],R=Object(h.useLazyQuery)(I,{variables:{tokenId:q},onCompleted:function(){B.existsInDB?E&&E(B.userName):W(!0)},fetchPolicy:"network-only"}),L=Object(a.a)(R,2),$=L[0],z=L[1].data,B=(z=void 0===z?{}:z).userData,H=Object(o.useState)(""),U=Object(a.a)(H,2),F=U[0],A=U[1],_=Object(h.useQuery)(k,{variables:{userName:F},skip:!B||B.existsInDB||""===F}).data,V=(_=void 0===_?{}:_).userNameTaken,Y=Object(o.useState)(!1),M=Object(a.a)(Y,2),Q=M[0],W=M[1],G=Object(h.useMutation)(N,{variables:{userName:F,tokenId:q},onCompleted:function(){$({variables:{tokenId:q}}),W(!1)}}),J=Object(a.a)(G,1)[0];return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{className:"shadow-lg",style:{position:"absolute",left:.5*T,top:.5*w,transform:"translate(-50%, -50%)",zIndex:1e3},show:Q,onClose:function(){return W(!1)},variant:V?"danger":"primary"},c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a.Heading,null,V?"This username is taken":"Create a username for your account"),c.a.createElement(f.a,{onSubmit:function(e){e.preventDefault(),V||J()},onChange:function(e){return A(e.target.value)}},c.a.createElement(f.a.Control,{style:{marginTop:"em"},placeholder:"Enter username for your new account",autoFocus:!0}),c.a.createElement(l.a,{style:{position:"relative",marginTop:"1em",left:"50%",transform:"translate(-50%, 0px)"},disabled:V,onClick:function(){return J()}},"Create account")))),c.a.createElement(i.a,{style:{height:60},sticky:"top",bg:"secondary",variant:"dark"},c.a.createElement(i.a.Brand,{onClick:function(){return x.push("/")}},c.a.createElement(l.a,{variant:"outline-primary",style:{justifyContent:"left",width:142,height:44},size:"sm"},c.a.createElement("img",{alt:"Home",src:n(104),style:{top:0,height:"100%",width:"100%"}}))),r,c.a.createElement(i.a.Collapse,{style:{position:"absolute",transform:"translate(-50%, 0%)",left:"50%"}},t),c.a.createElement(s.a,{className:"ml-auto"},c.a.createElement("div",{style:{marginRight:10,marginTop:20,marginBottom:20}},c.a.createElement(g.a,{href:"https://github.com/EerikSaksi/type_to_lyrics","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star EerikSaksi/type_to_lyrics on GitHub"},"Star")),B&&B.existsInDB?c.a.createElement(m.a,{title:"Signed in as ".concat(B.userName),style:{alignSelf:"center"}},c.a.createElement(d.a.Item,{style:{paddingLeft:4,paddingRight:4}},c.a.createElement(l.a,{style:{width:"100%"},onClick:function(){return x.push("/user/".concat(B.userName))}},"View your profile")),c.a.createElement(d.a.Item,{style:{paddingLeft:4,paddingRight:4}},c.a.createElement(y.GoogleLogout,{clientId:v,onLogoutSuccess:function(){D(""),$()}}))):Q?c.a.createElement("p",{style:{fontSize:20,marginTop:16}}," Logging in... "):c.a.createElement("div",{style:{height:"100%",alignSelf:"center"}},c.a.createElement(p.a,{clientId:v,onSuccess:function(e){D(e.tokenId),$(),O&&O(e.tokenId)},onFailure:function(e){},isSignedIn:!0})))))}},104:function(e,t,n){e.exports=n.p+"static/media/home.34034ca8.png"},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(93),r=n(91),o=n(3),c=n.n(o),i=n(126),u=n(106),s=n.n(u),l=n(110);function m(e){var t=e.children,n=e.title,u=e.imgOverlay,m=e.linkText,d=e.linkHref,f=e.style,b=Object(o.useState)(0),g=Object(r.a)(b,2),y=g[0],p=g[1],v=Object(l.a)({threshold:.5}),h=Object(r.a)(v,2),O=h[0],j=h[1];Object(o.useEffect)((function(){j&&p(1)}),[j]);var E=s()(),x=E.innerWidth,S=E.innerHeight;return c.a.createElement(i.a,{ref:O,className:"shadow-lg",style:Object(a.a)({width:"".concat(.8*x),position:"relative",left:"50%",transform:"translate(-50%, 0px)",opacity:y,transition:"opacity 500ms",marginBottom:20,marginTop:20,height:S-100},f),border:"primary"},c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a.Title,{style:{fontSize:40,textAlign:"center"}},n),c.a.createElement(i.a.Link,{style:{fontSize:20,textAlign:"center",zIndex:1e3},href:d},m),c.a.createElement(i.a.ImgOverlay,null,u),t))}},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(91),r=n(113),o=n(3),c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=Object(o.useRef)(null),i=Object(o.useCallback)(t,[e].concat(Object(r.a)(a)));return Object(o.useEffect)((function(){if(e){c.current&&c.current.unobserve(e),c.current=new IntersectionObserver(i,n);var t=c.current;return t.observe(e),function(){return t.unobserve(e)}}}),[e].concat(Object(r.a)(a))),c.current},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=c(e,[]),r=n.root,u=void 0===r?null:r,s=n.rootMargin,l=void 0===s?"0px 0px 0px 0px":s,m=n.threshold,d=void 0===m?0:m,f=n.target,b=n.onEnter,g=n.onLeave,y=n.unobserveOnEnter,p=Object(o.useState)(null),v=Object(a.a)(p,2),h=v[0],O=v[1],j=Object(o.useState)({inView:!1,entry:null}),E=Object(a.a)(j,2),x=E[0],S=E[1],I=function(e,t){var n=Object(a.a)(e,1)[0];if(h&&n&&t){var r=n.isIntersecting,o=n.intersectionRatio;if(o>=0){var c=t.thresholds.some((function(e){return o>=e}))&&r;S({inView:c,entry:n}),c?(b&&b(n,t),y&&t.unobserve(h)):g&&g(n,t)}}};Object(o.useEffect)((function(){f&&O(f.current)}),[f]);var k=i(h,I,{root:u,rootMargin:l,threshold:d},t);return[O,x.inView,x.entry,k]}},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(120);var r=n(119);function o(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},126:function(e,t,n){"use strict";var a=n(9),r=n(22),o=n(41),c=n.n(o),i=n(3),u=n.n(i),s=n(47),l=n(115),m=n(127),d=n(131),f=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.variant,l=e.as,m=void 0===l?"img":l,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),f=Object(s.a)(n,"card-img");return u.a.createElement(m,Object(a.a)({ref:t,className:c()(i?f+"-"+i:f,o)},d))}));f.displayName="CardImg",f.defaultProps={variant:null};var b=f,g=Object(m.a)("h5"),y=Object(m.a)("h6"),p=Object(l.a)("card-body"),v=Object(l.a)("card-title",{Component:g}),h=Object(l.a)("card-subtitle",{Component:y}),O=Object(l.a)("card-link",{Component:"a"}),j=Object(l.a)("card-text",{Component:"p"}),E=Object(l.a)("card-header"),x=Object(l.a)("card-footer"),S=Object(l.a)("card-img-overlay"),I=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,l=e.bg,m=e.text,f=e.border,b=e.body,g=e.children,y=e.as,v=void 0===y?"div":y,h=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(s.a)(n,"card"),j=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return u.a.createElement(d.a.Provider,{value:j},u.a.createElement(v,Object(a.a)({ref:t},h,{className:c()(o,O,l&&"bg-"+l,m&&"text-"+m,f&&"border-"+f)}),b?u.a.createElement(p,null,g):g))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=b,I.Title=v,I.Subtitle=h,I.Body=p,I.Link=O,I.Text=j,I.Header=E,I.Footer=x,I.ImgOverlay=S;t.a=I},204:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n(91),r=n(95),o=n(3),c=n.n(o),i=n(27),u=n(49),s=n(10),l=n(96),m=n(99),d=n(50),f=n(101),b=n(109);function g(){var e=Object(r.a)(["\n  query youtubesearchresults($query: String, $geniusID: String!) {\n    youtubeSearchResults(query: $query, geniusID: $geniusID) {\n      forwardingUrl\n      topText\n      bottomText\n      imgUrl\n    }\n  }\n"]);return g=function(){return e},e}function y(){var e=Object(r.a)(["\n  query geniussongdata($id: String) {\n    geniusSongData(id: $id) {\n      topText\n      bottomText\n      imgUrl\n    }\n  }\n"]);return y=function(){return e},e}var p=Object(o.lazy)((function(){return n.e(15).then(n.bind(null,137))})),v=Promise.all([n.e(1),n.e(8),n.e(13)]).then(n.bind(null,193)),h=Object(u.gql)(y()),O=Object(u.gql)(g());function j(){var e=Object(s.f)(),t=Object(s.g)(),n=t.youtubeID,r=t.geniusID,g=Object(o.useState)(""),y=Object(a.a)(g,2),j=y[0],E=y[1],x=Object(u.useQuery)(h,{variables:{id:r},skip:r&&"0"===r,onCompleted:function(){var e=S.topText,t=S.bottomText;E("".concat(e," - ").concat(t))}}).data,S=(x=void 0===x?{}:x).geniusSongData,I=Object(u.useQuery)(O,{variables:{geniusID:r,query:j},skip:""===j&&!r}),k=I.data,N=(k=void 0===k?{}:k).youtubeSearchResults,T=I.loading,w=I.error;if("0"!==r){if("0"===n){if(S){var C=S.imgUrl;S.text;return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,null),c.a.createElement(b.a,{style:{paddingLeft:"1.5em",paddingRight:"1.5em"}},c.a.createElement(m.a,{className:"justify-content-md-center"},c.a.createElement("p",{style:{fontSize:30}},"".concat(S.topText," - ").concat(S.bottomText))),c.a.createElement(m.a,{style:{height:"min(100%, 347.5px)",justifyContent:"center"}},c.a.createElement(d.a,{style:{justifyContent:"center",height:"min(100%, 347.5px)"},src:C})),c.a.createElement(m.a,{className:"justify-content-center"},c.a.createElement("a",{style:{textAlign:"center",zIndex:1e3},href:"https://www.youtube.com/results?search_query=".concat("".concat(S.topText," - ").concat(S.bottomText)),target:"_blank"},w?"I've reached my YouTube search quota, so just copy paste a YouTube URL:":null)),c.a.createElement(o.Suspense,{fallback:c.a.createElement(i.a,null)},c.a.createElement(p,{results:N,input:j,setInput:E,formText:w?"Search for a YouTube video or enter enter a Youtube URL to sync the lyrics to:":"Enter a Youtube URL to sync the lyrics to:",formFontSize:30,loading:T,defaultValue:w?"":"".concat(S.topText," - ").concat(S.bottomText),style:{maxHeight:240,maxWidth:320}}))))}return c.a.createElement(l.a,{fluid:!0,style:{paddingLeft:0,paddingRight:0}},c.a.createElement(f.a,null),c.a.createElement(m.a,{className:"justify-content-md-center"},c.a.createElement(i.a,null)))}return c.a.createElement(o.Suspense,{fallback:c.a.createElement(i.a,{centered:!0})},c.a.createElement(v,null))}"0"===n&&e.push("/")}},96:function(e,t,n){"use strict";var a=n(9),r=n(22),o=n(41),c=n.n(o),i=n(3),u=n.n(i),s=n(47),l=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,i=e.as,l=void 0===i?"div":i,m=e.className,d=Object(r.a)(e,["bsPrefix","fluid","as","className"]),f=Object(s.a)(n,"container"),b="string"===typeof o?"-"+o:"-fluid";return u.a.createElement(l,Object(a.a)({ref:t},d,{className:c()(m,o?""+f+b:f)}))}));l.displayName="Container",l.defaultProps={fluid:!1},t.a=l}}]);
//# sourceMappingURL=6.b821462c.chunk.js.map