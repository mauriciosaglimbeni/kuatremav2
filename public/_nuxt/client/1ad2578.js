(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{452:function(t,e,r){},466:function(t,e,r){"use strict";r(452)},477:function(t,e,r){"use strict";r.r(e);var c=r(14),o=(r(62),{path:"/",name:"ProductPage",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/products/"+t.route.params.id);case 2:return r=e.sent,data=r.data,e.abrupt("return",{product:data});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{}}}),n=(r(466),r(91)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"main-container"},[r("div",{staticClass:"image-showcase"},[r("div",{staticStyle:{"background-size":"cover",height:"auto"},style:{backgroundImage:"url("+t.product.img1+")"}}),t._v(" "),r("div",{staticStyle:{"background-size":"cover",height:"auto"},style:{backgroundImage:"url("+t.product.img2+")"}}),t._v(" "),r("div",{staticStyle:{"background-size":"cover",height:"auto"},style:{backgroundImage:"url("+t.product.img3+")"}}),t._v(" "),r("div",{staticStyle:{"background-size":"cover",height:"auto"},style:{backgroundImage:"url("+t.product.img4+")"}})]),t._v(" "),r("div",{staticClass:"information"},[r("nuxt-link",{staticStyle:{"font-size":"14px",color:"gray",cursor:"pointer"},attrs:{to:t.localePath("/products")}},[t._v(t._s(t.$t("return"))+" ")]),t._v(" "),r("h1",{staticClass:"product-name"},[t._v(t._s(t.product.productName))]),t._v(" "),r("h2",{staticClass:"artist-name"},[t._v("by "+t._s(t.product.artist))]),t._v(" "),t.product.isOffer?r("h2",[r("span",{staticClass:"old-price"},[t._v(" "+t._s(t.product.price)+" $")]),t._v(" "),r("span",{staticClass:"offer-price"},[t._v(t._s(t.product.offerPrice)+" $ ")])]):r("h2",{staticClass:"price"},[t._v(t._s(t.product.price)+" $")]),t._v(" "),t.product.isClothing?r("h2",{staticClass:"artist-name"},[t._v(t._s(t.$t("sizeChoose"))+" :")]):r("h2",{staticClass:"artist-name"},[t._v(t._s(t.$t("qtyChoose"))+" :")]),t._v(" "),r("div",{staticClass:"button-holder"},t._l(t.product.sizes,(function(e,c){return r("button",{key:c,staticClass:"size-button"},[t._v(t._s(e))])})),0)],1)])}),[],!1,null,"37d9fddc",null);e.default=component.exports}}]);