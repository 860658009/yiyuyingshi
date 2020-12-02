(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/side-slip/index"],{5385:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"595e":function(t,e,n){},b28e:function(t,e,n){"use strict";n.r(e);var i=n("d929"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a},bffb:function(t,e,n){"use strict";var i=n("595e"),o=n.n(i);o.a},d929:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{},data:function(){return{x:0,move:0,open:!1}},watch:{},mounted:function(){var e=t.getSystemInfoSync(),n=e.windowWidth;this.deleteBtnWidth=(n||375)/375*80},methods:{remove:function(){this.move=0,this.open=!1,this.$emit("remove")},change:function(t){this.x=t.detail.x},touchend:function(){var t=this.x;this.open?t>20-this.deleteBtnWidth?(this.move=0,this.open=!1):(this.move=-this.deleteBtnWidth,this.open=!0):t<-20?(this.move=-this.deleteBtnWidth,this.open=!0):(this.move=0,this.open=!1)}}};e.default=n}).call(this,n("543d")["default"])},de31:function(t,e,n){"use strict";n.r(e);var i=n("5385"),o=n("b28e");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("bffb");var s,c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"54c88fd8",null,!1,i["a"],s);e["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/side-slip/index-create-component',
    {
        'components/side-slip/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("de31"))
        })
    },
    [['components/side-slip/index-create-component']]
]);
