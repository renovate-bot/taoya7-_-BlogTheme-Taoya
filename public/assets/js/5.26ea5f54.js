(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{588:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(151),i=r.n(n),o=function(){return Math.random().toString(36).substring(2)},a={name:"ContentLoader",functional:!0,props:{width:{type:[Number,String],default:400},height:{type:[Number,String],default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(t,e){var r=e.props,n=e.data,a=e.children,s=r.uniqueKey?r.uniqueKey+"-idClip":o(),u=r.uniqueKey?r.uniqueKey+"-idGradient":o();return t("svg",i()([n,{attrs:{viewBox:"0 0 "+r.width+" "+r.height,version:"1.1",preserveAspectRatio:r.preserveAspectRatio}}]),[t("rect",{style:{fill:"url("+r.baseUrl+"#"+u+")"},attrs:{"clip-path":"url("+r.baseUrl+"#"+s+")",x:"0",y:"0",width:r.width,height:r.height}}),t("defs",[t("clipPath",{attrs:{id:s}},[a||t("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:r.width,height:r.height}})]),t("linearGradient",{attrs:{id:u}},[t("stop",{attrs:{offset:"0%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"50%","stop-color":r.secondaryColor,"stop-opacity":r.secondaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"100%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:r.speed+"s",repeatCount:"indefinite"}}):null])])])])}}},604:function(t,e,r){},605:function(t,e,r){},631:function(t,e,r){"use strict";var n=r(604);r.n(n).a},632:function(t,e,r){"use strict";var n=r(605);r.n(n).a},633:function(t,e,r){"use strict";var n=r(12),i=r(9),o=r(360),a=r(35),s=r(10),u=r(44),p=r(634),c=r(59),f=r(5),l=r(60),d=r(102).f,h=r(43).f,g=r(15).f,v=r(371).trim,y=i.Number,m=y.prototype,b="Number"==u(l(m)),x=function(t){var e,r,n,i,o,a,s,u,p=c(t,!1);if("string"==typeof p&&p.length>2)if(43===(e=(p=v(p)).charCodeAt(0))||45===e){if(88===(r=p.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(p.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+p}for(a=(o=p.slice(2)).length,s=0;s<a;s++)if((u=o.charCodeAt(s))<48||u>i)return NaN;return parseInt(o,n)}return+p};if(o("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var N,_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(b?f((function(){m.valueOf.call(r)})):"Number"!=u(r))?p(new y(x(e)),r,_):x(e)},O=n?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;O.length>S;S++)s(y,N=O[S])&&!s(_,N)&&g(_,N,h(y,N));_.prototype=m,m.constructor=_,a(i,"Number",_)}},634:function(t,e,r){var n=r(11),i=r(361);t.exports=function(t,e,r){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==r&&n(a=o.prototype)&&a!==r.prototype&&i(t,a),t}},635:function(t,e,r){var n=r(369),i=r(362),o=r(636),a=r(640);t.exports=function(t,e){if(null==t)return{};var r=n(a(t),(function(t){return[t]}));return e=i(e),o(t,r,(function(t,r){return e(t,r[0])}))}},636:function(t,e,r){var n=r(160),i=r(637),o=r(153);t.exports=function(t,e,r){for(var a=-1,s=e.length,u={};++a<s;){var p=e[a],c=n(t,p);r(c,p)&&i(u,o(p,t),c)}return u}},637:function(t,e,r){var n=r(638),i=r(153),o=r(158),a=r(101),s=r(62);t.exports=function(t,e,r,u){if(!a(t))return t;for(var p=-1,c=(e=i(e,t)).length,f=c-1,l=t;null!=l&&++p<c;){var d=s(e[p]),h=r;if(p!=f){var g=l[d];void 0===(h=u?u(g,d,l):void 0)&&(h=a(g)?g:o(e[p+1])?[]:{})}n(l,d,h),l=l[d]}return t}},638:function(t,e,r){var n=r(639),i=r(157),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){var a=t[e];o.call(t,e)&&i(a,r)&&(void 0!==r||e in t)||n(t,e,r)}},639:function(t,e,r){var n=r(370);t.exports=function(t,e,r){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},640:function(t,e,r){var n=r(363),i=r(641),o=r(643);t.exports=function(t){return n(t,o,i)}},641:function(t,e,r){var n=r(156),i=r(642),o=r(364),a=r(365),s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)n(e,o(t)),t=i(t);return e}:a;t.exports=s},642:function(t,e,r){var n=r(368)(Object.getPrototypeOf,Object);t.exports=n},643:function(t,e,r){var n=r(366),i=r(644),o=r(159);t.exports=function(t){return o(t)?n(t,!0):i(t)}},644:function(t,e,r){var n=r(101),i=r(367),o=r(645),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=i(t),r=[];for(var s in t)("constructor"!=s||!e&&a.call(t,s))&&r.push(s);return r}},645:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},650:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return a}));r(27);var n={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;r.e(3).then(r.t.bind(null,652,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(r(631),r(7)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.comp?r(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,a=(r(632),Object(i.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?r("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?r("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),s=(r(633),r(103)),u=r.n(s),p=r(635),c=r.n(p),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return c()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}};Object(i.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports}}]);