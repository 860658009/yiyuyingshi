(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/vod-item/vod-item"],{"05bb":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;getApp().globalData;var e={data:function(){return{WxVerify:"0",picError:!1,picLoad:!1,showImg:!1}},props:{theme:{type:[String],default:"white"},item:{type:Object,defual:function(){return{}}},scrollTop:{type:[Number,String],default:0},itemClick:{type:Boolean,default:!0}},mounted:function(){},filters:{ellipsis:function(t){return t?t.length>7?t.slice(0,6)+"...":t:""}},methods:{play:function(n){t.setStorageSync("$voddata",n),this.itemClick&&t.navigateTo({url:"../detail/detail?id="+n.vod_id})},imgload:function(t){this.showImg=!0},imgError:function(t){this.picError=!0}}};n.default=e}).call(this,e("543d")["default"])},"3c66":function(t,n,e){"use strict";var i=e("c99f"),r=e.n(i);r.a},"63bc":function(t,n,e){"use strict";e.r(n);var i=e("05bb"),r=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=r.a},7534:function(t,n,e){"use strict";e.r(n);var i=e("9464"),r=e("63bc");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("3c66");var o,c=e("f0c5"),a=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);n["default"]=a.exports},9464:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var r=function(){var t=this,n=t.$createElement;t._self._c},u=[]},c99f:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/vod-item/vod-item-create-component',
    {
        'components/vod-item/vod-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7534"))
        })
    },
    [['components/vod-item/vod-item-create-component']]
]);
