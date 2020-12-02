(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-ad/uni-ad"],{"2a1c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{gg:{type:Object,defual:function(){return{}}}},data:function(){return{}},methods:{ggImage:function(){var t=this;switch(t.gg.type){case"0":e.setStorageSync("$web",t.gg.url),e.navigateTo({url:"../web/web"});break;case"1":e.navigateToMiniProgram({appId:t.gg.url,path:"",success:function(e){}});break;case"2":t.gg.url&&wx.previewImage({current:t.gg.url,urls:[t.gg.url]});break;case"3":t.gg.url&&e.navigateTo({url:t.gg.url});break}}}};t.default=n}).call(this,n("543d")["default"])},"2fcb":function(e,t,n){"use strict";n.r(t);var a=n("2a1c"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},"43a2":function(e,t,n){},e53c:function(e,t,n){"use strict";n.r(t);var a=n("f71d"),r=n("2fcb");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("e9d1");var c,i=n("f0c5"),f=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"5224f1ac",null,!1,a["a"],c);t["default"]=f.exports},e9d1:function(e,t,n){"use strict";var a=n("43a2"),r=n.n(a);r.a},f71d:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement;e._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-ad/uni-ad-create-component',
    {
        'components/uni-ad/uni-ad-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e53c"))
        })
    },
    [['components/uni-ad/uni-ad-create-component']]
]);
