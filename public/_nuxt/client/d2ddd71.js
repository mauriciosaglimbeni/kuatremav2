(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{432:function(t,e,r){},433:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{routes:["/sweats","/tees","/accesories","/products","/releases","/offers"],routeNames:["header1","header2","accesories","header3","releases","offers"]}}},o=(r(434),r(91)),c=r(136),l=r.n(c),d=r(423),f=r(436),v=r(429),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",t._l(6,(function(e){return r("v-col",{key:e,attrs:{cols:"2.2"}},[r("nuxt-link",{staticClass:"button",attrs:{to:t.localePath(t.routes[e-1]),"exact-active-class":"active"}},[t._v("\n        "+t._s(t.$t(t.routeNames[e-1]))+"\n      ")])],1)})),1)],1)}),[],!1,null,"5d801264",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:f.a,VRow:v.a})},434:function(t,e,r){"use strict";r(432)},436:function(t,e,r){"use strict";r(9),r(5),r(12),r(63),r(25),r(226),r(225);var n=r(137),o=r(68);e.a=Object(n.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),c)}})}}]);