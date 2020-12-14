(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Location.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Location.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      salon: {},
      mapIcon: "./theme/img/location-white.svg",
      currentHotelThumb: "",
      startLocation: {
        lat: 41.9311,
        lng: 19.2148
      },
      markerOptions: {
        url: "/img/map-marker.ico"
      },
      mapStyle: {
        styles: [{
          featureType: "administrative",
          elementType: "all",
          stylers: [{
            saturation: -99
          }]
        }, {
          featureType: "landscape",
          elementType: "all",
          stylers: [{
            saturation: -99
          }]
        }, {
          featureType: "poi",
          elementType: "all",
          stylers: [{
            saturation: -99
          }]
        }, {
          featureType: "road",
          elementType: "all",
          stylers: [{
            saturation: -99
          }]
        }, {
          featureType: "transit",
          elementType: "all",
          stylers: [{
            saturation: -99
          }]
        }]
      },
      zoom: 14
    };
  },
  methods: {
    loadUserProfile: function loadUserProfile() {
      var _this = this;

      axios.get("/api/profile").then(function (_ref) {
        var data = _ref.data;
        _this.salon = data.salon;
        _this.startLocation.lat = parseFloat(data.salon.latitude);
        _this.startLocation.lng = parseFloat(data.salon.longitude);
      });
    }
  },
  mounted: function mounted() {
    this.loadUserProfile();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Location.vue?vue&type=template&id=16b5d2a0&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Location.vue?vue&type=template&id=16b5d2a0& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "GmapMap",
    {
      ref: "mymap",
      staticStyle: { width: "100%", height: "70vh" },
      attrs: {
        id: "googleMap",
        center: _vm.startLocation,
        zoom: 14,
        options: _vm.mapStyle
      }
    },
    [
      _vm._v("\n    >\n    "),
      _c("GmapMarker", {
        attrs: {
          position: _vm.startLocation,
          icon: _vm.markerOptions,
          clickable: true,
          animation: 2
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Location.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Location.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Location_vue_vue_type_template_id_16b5d2a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Location.vue?vue&type=template&id=16b5d2a0& */ "./resources/js/components/Location.vue?vue&type=template&id=16b5d2a0&");
/* harmony import */ var _Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Location.vue?vue&type=script&lang=js& */ "./resources/js/components/Location.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Location_vue_vue_type_template_id_16b5d2a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Location_vue_vue_type_template_id_16b5d2a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Location.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Location.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Location.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Location.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Location.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Location.vue?vue&type=template&id=16b5d2a0&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Location.vue?vue&type=template&id=16b5d2a0& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_16b5d2a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Location.vue?vue&type=template&id=16b5d2a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Location.vue?vue&type=template&id=16b5d2a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_16b5d2a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_16b5d2a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);