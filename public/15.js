(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/superadmin/Testimonials.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/superadmin/Testimonials.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
      testimonials: [],
      editMode: false,
      form: new Form({
        id: "",
        author: "",
        text: "",
        stars: ""
      })
    };
  },
  methods: {
    loadServices: function loadServices() {
      var _this = this;

      axios.get("/api/testimonials").then(function (response) {
        _this.testimonials = response.data[1];
      })["catch"](function (error) {
        console.log(error);
      });
    },
    createService: function createService() {
      this.form.post("/api/testimonials").then(function (response) {
        $("#servicesModal").modal("hide");
        toast.fire({
          icon: "success",
          title: "Uspješno dodavanje!"
        });
        Fire.$emit("refreshDataTable");
      })["catch"](function (error) {});
    },
    updateService: function updateService() {
      var _this2 = this;

      this.$Progress.start();
      this.form.put("/api/testimonials/".concat(this.form.id)).then(function (response) {
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
    deleteService: function deleteService(id) {
      var _this3 = this;

      swal.fire({
        title: "Da li ste sigurni?",
        text: "Nećete moći da povratite ovu akciju!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Da, obriši!"
      }).then(function (result) {
        if (result.value) {
          _this3.form["delete"]("/api/testimonials/".concat(id)).then(function (response) {
            swal.fire("Obrisano!", "Uspješno brisanje", "success");
            Fire.$emit("refreshDataTable");
          })["catch"](function (error) {
            console.log(error);
          });
        }
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
    var _this4 = this;

    this.loadServices();
    Fire.$on("refreshDataTable", function () {
      _this4.loadServices();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/superadmin/Testimonials.vue?vue&type=template&id=b0270d58&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/superadmin/Testimonials.vue?vue&type=template&id=b0270d58& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card-header" }, [
          _c("h3", { staticClass: "card-title" }, [_vm._v("Testimonijali")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-tools" }, [
            _c("div", { staticClass: "input-group input-group-sm" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  on: { click: _vm.openModalForCreate }
                },
                [
                  _c("i", { staticClass: "fas fa-list" }),
                  _vm._v(
                    "\n                            Dodaj testimonijal\n                        "
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body table-responsive p-0" }, [
          _c("table", { staticClass: "table table-hover text-nowrap" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.testimonials, function(testimonial, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(testimonial.author))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(testimonial.text))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(testimonial.stars))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-warning modify-btn mr-2",
                        on: {
                          click: function($event) {
                            return _vm.openModalForEdit(testimonial)
                          }
                        }
                      },
                      [
                        _vm._v("\n                                Izmijeni "),
                        _c("i", { staticClass: "fa fa-edit" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger modify-btn",
                        on: {
                          click: function($event) {
                            return _vm.deleteService(testimonial.id)
                          }
                        }
                      },
                      [
                        _vm._v("Obriši\n                                "),
                        _c("i", { staticClass: "fa fa-trash" })
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
                _vm._m(1)
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
                        _c("label", [_vm._v("Autor")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.author,
                              expression: "form.author"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("author")
                          },
                          attrs: {
                            type: "text",
                            name: "author",
                            placeholder: "Autor"
                          },
                          domProps: { value: _vm.form.author },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "author", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "author" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Tekst")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.text,
                              expression: "form.text"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("text") },
                          attrs: { type: "text", name: "text", rows: "5" },
                          domProps: { value: _vm.form.text },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "text", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "text" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Br. zvjezdica")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.stars,
                              expression: "form.stars"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("stars") },
                          attrs: {
                            type: "text",
                            name: "stars",
                            placeholder: "Br. zvjezdica"
                          },
                          domProps: { value: _vm.form.stars },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "stars", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "stars" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { type: "button", "data-dismiss": "modal" }
                      },
                      [_vm._v("Close")]
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Autor")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tekst")]),
        _vm._v(" "),
        _c("th", [_vm._v("Br. zvijezdica")]),
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
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/superadmin/Testimonials.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/superadmin/Testimonials.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Testimonials_vue_vue_type_template_id_b0270d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Testimonials.vue?vue&type=template&id=b0270d58& */ "./resources/js/components/superadmin/Testimonials.vue?vue&type=template&id=b0270d58&");
/* harmony import */ var _Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Testimonials.vue?vue&type=script&lang=js& */ "./resources/js/components/superadmin/Testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Testimonials_vue_vue_type_template_id_b0270d58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Testimonials_vue_vue_type_template_id_b0270d58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/superadmin/Testimonials.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/superadmin/Testimonials.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/superadmin/Testimonials.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Testimonials.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/superadmin/Testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/superadmin/Testimonials.vue?vue&type=template&id=b0270d58&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/superadmin/Testimonials.vue?vue&type=template&id=b0270d58& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_b0270d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Testimonials.vue?vue&type=template&id=b0270d58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/superadmin/Testimonials.vue?vue&type=template&id=b0270d58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_b0270d58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_b0270d58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);