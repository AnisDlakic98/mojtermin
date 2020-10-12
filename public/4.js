(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/Services.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/services/Services.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
      user: {},
      services: [],
      editMode: false,
      form: new Form({
        duration: "",
        id: "",
        name: "",
        price: ""
      })
    };
  },
  methods: {
    loadServices: function loadServices() {
      var _this = this;

      axios.get("/api/services/".concat(this.user.id)).then(function (response) {
        _this.services = response.data[1];
      })["catch"](function (error) {
        console.log(error);
      });
    },
    createService: function createService() {
      this.form.post("/api/services/".concat(this.user.salon_id)).then(function (response) {
        $("#servicesModal").modal("hide");
        toast.fire({
          icon: "success",
          title: "Uspješno dodavanje!"
        });
        Fire.$emit("refreshDataTable");
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updateService: function updateService() {
      var _this2 = this;

      this.$Progress.start();
      this.form.put("/api/services/".concat(this.form.id)).then(function (response) {
        $("#addNewModal").modal("hide");
        toast.fire({
          icon: "success",
          title: "Uspješna izmjena!"
        });
        Fire.$emit("refreshDataTable");

        _this2.$Progress.finish();

        console.log(response);
      })["catch"](function (error) {
        _this2.$Progress.fail();

        console.log(error);
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
          _this3.form["delete"]("api/services/".concat(id)).then(function (response) {
            swal.fire("Obrisano!", "Uspješno brisanje", "success");
            Fire.$emit("refreshDataTable");
            console.log(response);
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
    openModalForEdit: function openModalForEdit(service) {
      this.editMode = true;
      this.form.reset();
      $("#servicesModal").modal("show");
      this.form.fill(service);
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.user = this.$gate.user;
    this.loadServices();
    this.form.duration = 5;
    Fire.$on("refreshDataTable", function () {
      _this4.loadServices();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/Services.vue?vue&type=template&id=4e18a658&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/services/Services.vue?vue&type=template&id=4e18a658& ***!
  \********************************************************************************************************************************************************************************************************************/
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
          _c("h3", { staticClass: "card-title" }, [_vm._v("Services")]),
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
                  _vm._v("Dodaj uslugu "),
                  _c("i", { staticClass: "fas fa-user-plus" })
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
              _vm._l(_vm.services, function(service, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(service.name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(service.price))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(_vm._f("upperText")(service.duration)))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "modify-btn",
                        on: {
                          click: function($event) {
                            return _vm.openModalForEdit(service)
                          }
                        }
                      },
                      [
                        _vm._v("Izmijeni "),
                        _c("i", { staticClass: "fa fa-edit" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "modify-btn",
                        on: {
                          click: function($event) {
                            return _vm.deleteService(service.id)
                          }
                        }
                      },
                      [
                        _vm._v("Obriši "),
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
                          _vm.editMode ? "Izmijeni uslugu" : "Dodaj novu uslugu"
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
                        _c("label", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("name") },
                          attrs: {
                            type: "text",
                            name: "name",
                            placeholder: "Name"
                          },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "name" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Cijena")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.price,
                              expression: "form.price"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("price") },
                          attrs: {
                            type: "text",
                            name: "price",
                            placeholder: "Cijena"
                          },
                          domProps: { value: _vm.form.price },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "price", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "price" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Trajanje")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.duration,
                                expression: "form.duration"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("duration")
                            },
                            attrs: { name: "type", id: "duration" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "duration",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("Odaberi trajanje")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "5" } }, [
                              _vm._v("5min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "10" } }, [
                              _vm._v("10min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "15" } }, [
                              _vm._v("15min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "20" } }, [
                              _vm._v("20min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "25" } }, [
                              _vm._v("25min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "30" } }, [
                              _vm._v("30min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "35" } }, [
                              _vm._v("35min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "40" } }, [
                              _vm._v("40min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "45" } }, [
                              _vm._v("45min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "50" } }, [
                              _vm._v("50min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "55" } }, [
                              _vm._v("55min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "60" } }, [
                              _vm._v("1h")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "65" } }, [
                              _vm._v("1h 5min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "70" } }, [
                              _vm._v("1h 10min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "75" } }, [
                              _vm._v("1h 15min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "80" } }, [
                              _vm._v("1h 20min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "85" } }, [
                              _vm._v("1h 25min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "90" } }, [
                              _vm._v("1h 30min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "95" } }, [
                              _vm._v("1h 35min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "100" } }, [
                              _vm._v("1h 40min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "105" } }, [
                              _vm._v("1h 45min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "110" } }, [
                              _vm._v("1h 50min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "115" } }, [
                              _vm._v("1h 55min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "120" } }, [
                              _vm._v("2h")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "135" } }, [
                              _vm._v("2h 15min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "150" } }, [
                              _vm._v("2h 30min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "165" } }, [
                              _vm._v("2h 45min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "180" } }, [
                              _vm._v("3h")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "195" } }, [
                              _vm._v("3h 15min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "210" } }, [
                              _vm._v("3h 30min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "225" } }, [
                              _vm._v("3h 45min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "240" } }, [
                              _vm._v("4h")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "270" } }, [
                              _vm._v("4h 30min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "300" } }, [
                              _vm._v("5h")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "330" } }, [
                              _vm._v("5h 30min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "360" } }, [
                              _vm._v("6h")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "390" } }, [
                              _vm._v("6h 30min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "420" } }, [
                              _vm._v("7h")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "450" } }, [
                              _vm._v("7h 30min")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "480" } }, [
                              _vm._v("8h")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "540" } }, [
                              _vm._v("9h")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "600" } }, [
                              _vm._v("10h")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "660" } }, [
                              _vm._v("11h")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "720" } }, [
                              _vm._v("12h")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "duration" }
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
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Modify")])
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

/***/ "./resources/js/components/services/Services.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/services/Services.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_vue_vue_type_template_id_4e18a658___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services.vue?vue&type=template&id=4e18a658& */ "./resources/js/components/services/Services.vue?vue&type=template&id=4e18a658&");
/* harmony import */ var _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services.vue?vue&type=script&lang=js& */ "./resources/js/components/services/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Services_vue_vue_type_template_id_4e18a658___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Services_vue_vue_type_template_id_4e18a658___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/services/Services.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/services/Services.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/services/Services.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/services/Services.vue?vue&type=template&id=4e18a658&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/services/Services.vue?vue&type=template&id=4e18a658& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_4e18a658___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=template&id=4e18a658& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/Services.vue?vue&type=template&id=4e18a658&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_4e18a658___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_4e18a658___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);