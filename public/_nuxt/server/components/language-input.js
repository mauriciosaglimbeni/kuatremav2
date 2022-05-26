exports.ids = [1];
exports.modules = {

/***/ 147:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageInput_vue_vue_type_style_index_0_id_1f7ef2d1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageInput_vue_vue_type_style_index_0_id_1f7ef2d1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageInput_vue_vue_type_style_index_0_id_1f7ef2d1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageInput_vue_vue_type_style_index_0_id_1f7ef2d1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageInput_vue_vue_type_style_index_0_id_1f7ef2d1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LanguageInput.vue?vue&type=template&id=1f7ef2d1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lang-dropdown"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.$i18n.locale),expression:"$i18n.locale"}],on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.$i18n, "locale", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){_vm.spain = !_vm.spain}]}},_vm._l((_vm.$i18n.locales),function(locale){return _c('option',{key:locale.code,domProps:{"value":locale.code}},[_vm._v("\n        "+_vm._s(locale.name)+"\n      ")])}),0),_vm._ssrNode(" "+((!_vm.spain)?("<i class=\"sl-flag flag-usa\" data-v-1f7ef2d1></i>"):("<i class=\"sl-flag flag-spain\" data-v-1f7ef2d1></i>")))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LanguageInput.vue?vue&type=template&id=1f7ef2d1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LanguageInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LanguageInputvue_type_script_lang_js_ = ({
  data() {
    return {
      spain: true
    };
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales;
    }

  }
});
// CONCATENATED MODULE: ./src/components/LanguageInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LanguageInputvue_type_script_lang_js_ = (LanguageInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// CONCATENATED MODULE: ./src/components/LanguageInput.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(160)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LanguageInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f7ef2d1",
  "432a1a95"
  
)

/* harmony default export */ var LanguageInput = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=language-input.js.map