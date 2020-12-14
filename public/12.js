(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/superadmin/About.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/superadmin/About.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      about: [],
      editMode: false,
      form: new Form({
        id: "",
        title: "",
        subtitle: ""
      })
    };
  },
  methods: {
    loadServices: function loadServices() {
      var _this = this;

      axios.get("/api/about").then(function (response) {
        _this.about = response.data[1];
        $('#summernote').summernote('code', response.data[1][0].subtitle);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updateService: function updateService() {
      var _this2 = this;

      this.$Progress.start();
      var textareaValue = $('#summernote').summernote('code');
      this.form.subtitle = textareaValue;
      this.form.put("/api/about/".concat(this.form.id)).then(function (response) {
        $("#addNewModal").modal("hide");
        toast.fire({
          icon: "success",
          title: "Uspješna izmjena!"
        });
        Fire.$emit("refreshDataTable");

        _this2.$Progress.finish();

        window.location.reload();
      })["catch"](function (error) {
        _this2.$Progress.fail();
      });
    },
    openModalForCreate: function openModalForCreate() {
      this.editMode = false;
      this.form.reset();
      $("#servicesModal").modal("show");
    },
    openModalForEdit: function openModalForEdit(testimonial) {
      this.editMode = true;
      this.form.reset();
      $("#servicesModal").modal("show");
      this.form.fill(testimonial);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    $('#summernote').summernote({
      height: 200
    });
    this.loadServices();
    Fire.$on("refreshDataTable", function () {
      _this3.loadServices();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/superadmin/About.vue?vue&type=template&id=7f738f9d&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/superadmin/About.vue?vue&type=template&id=7f738f9d& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row", attrs: { id: "usersManagment" } }, [
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body table-responsive p-0" }, [
          _c("table", { staticClass: "table table-hover text-nowrap" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.about, function(item, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_vm._v(_vm._s(item.title))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.subtitle))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-warning modify-btn mr-2",
                        on: {
                          click: function($event) {
                            return _vm.openModalForEdit(item)
                          }
                        }
                      },
                      [
                        _vm._v("\n                                Izmijeni "),
                        _c("i", { staticClass: "fa fa-edit" })
                      ]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "servicesModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "servicesModal",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "servicesModal" }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.editMode
                            ? "Izmijeni testimonijal"
                            : "Dodaj novi testimonijal"
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(2)
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.editMode ? _vm.updateService() : _vm.createService()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Naslov")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.title,
                              expression: "form.title"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("title") },
                          attrs: {
                            type: "text",
                            name: "title",
                            placeholder: "Naslov"
                          },
                          domProps: { value: _vm.form.title },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "title", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "title" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Podnaslov")]),
                      _vm._v(" "),
                      _c(
                        "textarea",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.subtitle,
                              expression: "form.subtitle"
                            }
                          ],
                          attrs: { id: "summernote" },
                          domProps: { value: _vm.form.subtitle },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "subtitle",
                                $event.target.value
                              )
                            }
                          }
                        },
                        [_vm._v("<p>Hello Summernote</p>")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { type: "button", "data-dismiss": "modal" }
                      },
                      [_vm._v("Odustani")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn",
                        class: [_vm.editMode ? "btn-success" : "btn-primary"],
                        attrs: { type: "submit" }
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.editMode ? "Izmijeni" : "Dodaj") +
                            "\n                        "
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("O Nama")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Naslov")]),
        _vm._v(" "),
        _c("th", [_vm._v("Podnaslov")]),
        _vm._v(" "),
        _c("th", [_vm._v("Akcije")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Odustani"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/superadmin/About.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/superadmin/About.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_7f738f9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=7f738f9d& */ "./resources/js/components/superadmin/About.vue?vue&type=template&id=7f738f9d&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/components/superadmin/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_7f738f9d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_7f738f9d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/superadmin/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/superadmin/About.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/superadmin/About.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/superadmin/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/superadmin/About.vue?vue&type=template&id=7f738f9d&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/superadmin/About.vue?vue&type=template&id=7f738f9d& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_7f738f9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=7f738f9d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/superadmin/About.vue?vue&type=template&id=7f738f9d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_7f738f9d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_7f738f9d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);