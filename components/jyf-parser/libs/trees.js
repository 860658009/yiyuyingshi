(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/jyf-parser/libs/trees"],{"25df":function(t,e,r){"use strict";var i=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])};e["a"]=i},5453:function(t,e,r){"use strict";r.r(e);var i=r("b332"),s=r("6faa");for(var n in s)"default"!==n&&function(t){r.d(e,t,(function(){return s[t]}))}(n);r("bade");var a,o=r("f0c5"),u=r("25df"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);"function"===typeof u["a"]&&Object(u["a"])(c),e["default"]=c.exports},"6faa":function(t,e,r){"use strict";r.r(e);var i=r("9241"),s=r.n(i);for(var n in i)"default"!==n&&function(t){r.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},9241:function(t,e,r){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t.Parser={};var s=function(){Promise.resolve().then(function(){return resolve(r("5453"))}.bind(null,r)).catch(r.oe)},n=r("44e7").errorImg,a={components:{trees:s},name:"trees",data:function(){return{ctrl:[],placeholder:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="225"/>',errorImg:n,loadVideo:"undefined"==typeof plus,c:"",s:""}},props:{nodes:Array,lazyLoad:Boolean,loading:String},mounted:function(){for(this.top=this.$parent;"parser"!=this.top.$options.name;this.top=this.top.$parent);this.init()},methods:{init:function(){for(var t,e=this.nodes.length;t=this.nodes[--e];)if("img"==t.name)this.top.imgList.setItem(t.attrs.i,t.attrs.src);else if("video"==t.name||"audio"==t.name){var r;"video"==t.name?r=i.createVideoContext(t.attrs.id,this):this.$refs[t.attrs.id]&&(r=this.$refs[t.attrs.id][0]),r&&(r.id=t.attrs.id,this.top.videoContexts.push(r))}},play:function(t){var e=this.top.videoContexts;if(e.length>1&&this.top.autopause)for(var r=e.length;r--;)e[r].id!=t.currentTarget.dataset.id&&e[r].pause()},imgtap:function(e){var r=e.currentTarget.dataset.attrs;if(!r.ignore){var s=!0,n={id:e.target.id,src:r.src,ignore:function(){return s=!1}};if(t.Parser.onImgtap&&t.Parser.onImgtap(n),this.top.$emit("imgtap",n),s){var a=this.top.imgList,o=a[r.i]?parseInt(r.i):(a=[r.src],0);i.previewImage({current:o,urls:a})}}},loadImg:function(t){var e=t.currentTarget.dataset.i;this.lazyLoad&&!this.ctrl[e]?this.$set(this.ctrl,e,1):this.loading&&2!=this.ctrl[e]&&this.$set(this.ctrl,e,2)},linkpress:function(e){var r=!0,s=e.currentTarget.dataset.attrs;if(s.ignore=function(){return r=!1},t.Parser.onLinkpress&&t.Parser.onLinkpress(s),this.top.$emit("linkpress",s),r){if(s["app-id"])return i.navigateToMiniProgram({appId:s["app-id"],path:s.path});s.href&&("#"==s.href[0]?this.top.useAnchor&&this.top.navigateTo({id:s.href.substring(1)}):0==s.href.indexOf("http")||0==s.href.indexOf("//")?i.setClipboardData({data:s.href,success:function(){return i.showToast({title:"链接已复制"})}}):i.navigateTo({url:s.href,fail:function(){i.switchTab({url:s.href})}}))}},error:function(t){var e=t.currentTarget,r=e.dataset.source,i=e.dataset.i;if("video"==r||"audio"==r){var s=this.ctrl[i]?this.ctrl[i].i+1:1;s<this.nodes[i].attrs.source.length&&this.$set(this.ctrl,i,s),t.detail.__args__&&(t.detail=t.detail.__args__[0])}else n&&"img"==r&&(this.top.imgList.setItem(e.dataset.index,n),this.$set(this.ctrl,i,3));this.top&&this.top.$emit("error",{source:r,target:e,errMsg:t.detail.errMsg})},_loadVideo:function(t){this.$set(this.ctrl,t.target.dataset.i,0)}}};e.default=a}).call(this,r("c8ba"),r("543d")["default"])},"9e34":function(t,e,r){},b332:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return i}));var i={customAd:function(){return r.e("components/custom-ad/custom-ad").then(r.bind(null,"dac9"))}},s=function(){var t=this,e=t.$createElement;t._self._c},n=[]},bade:function(t,e,r){"use strict";var i=r("9e34"),s=r.n(i);s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/jyf-parser/libs/trees-create-component',
    {
        'components/jyf-parser/libs/trees-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5453"))
        })
    },
    [['components/jyf-parser/libs/trees-create-component']]
]);
