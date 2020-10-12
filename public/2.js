(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: new Form({
        id: "",
        name: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: ""
      }),
      salonForm: new Form({
        id: "",
        name: "",
        description: "",
        address: "",
        phone_number: "",
        stars: "",
        image_path: "",
        website: "",
        latitude: "",
        longitude: ""
      })
    };
  },
  methods: {
    loadUserProfile: function loadUserProfile() {
      var _this = this;

      axios.get("/api/profile").then(function (_ref) {
        var data = _ref.data;

        _this.form.fill(data.user);

        _this.salonForm.fill(data.salon);

        console.log(data);
      });
    },
    getProfilePhoto: function getProfilePhoto() {
      var photo = this.form.photo.length > 200 ? this.form.photo : "img/profile/" + this.form.photo;
      return photo;
    },
    updatePhoto: function updatePhoto(e) {
      var _this2 = this;

      var file = e.target.files[0];
      var reader = new FileReader();

      if (file['size'] < 2000000) {
        reader.onloadend = function (file) {
          // console.log(reader.result);
          _this2.form.photo = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        swal.fire({
          title: 'Oops...',
          text: 'You are uploading a large file',
          icon: "warning",
          showCancelButton: true,
          cancelButtonColor: "#ffc107",
          showConfirmButton: false,
          cancelButtonText: "Ok"
        });
      }
    },
    updateSalon: function updateSalon() {
      this.$Progress.start();
    },
    updateProfile: function updateProfile() {
      var _this3 = this;

      this.$Progress.start();
      this.form.put("api/profile").then(function () {
        toast.fire({
          icon: "success",
          title: "User updated successfully"
        });

        _this3.$Progress.finish();
      })["catch"](function (error) {
        _this3.$Progress.fail();

        console.log(error);
      });
    }
  },
  created: function created() {
    this.loadUserProfile();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticClass: "card card-primary card-outline" }, [
        _c("div", { staticClass: "card-body box-profile" }, [
          _c("div", { staticClass: "text-center" }, [
            _c("img", {
              staticClass: "profile-user-img img-fluid img-circle",
              attrs: { src: _vm.getProfilePhoto(), alt: "User profile picture" }
            })
          ]),
          _vm._v(" "),
          _c("h3", { staticClass: "profile-username text-center" }),
          _vm._v(" "),
          _c("p", { staticClass: "text-muted text-center" }),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-9" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              { staticClass: "tab-pane active", attrs: { id: "settings" } },
              [
                _c("form", { staticClass: "form-horizontal" }, [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-sm-2 col-form-label",
                        attrs: { for: "name" }
                      },
                      [_vm._v("Ime i prezime:")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-10" },
                      [
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
                            id: "name",
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
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-sm-2 col-form-label",
                        attrs: { for: "email" }
                      },
                      [_vm._v("Email")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-10" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.email,
                              expression: "form.email"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("email") },
                          attrs: {
                            type: "email",
                            name: "email",
                            id: "email",
                            placeholder: "Email"
                          },
                          domProps: { value: _vm.form.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "email" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-sm-2 col-form-label",
                        attrs: { for: "photo" }
                      },
                      [_vm._v("Profilna slika")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c("input", {
                        staticClass: "form-input",
                        attrs: { type: "file", name: "photo", id: "photo" },
                        on: { change: _vm.updatePhoto }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-sm-2 col-form-label",
                        attrs: { for: "password" }
                      },
                      [_vm._v("Lozinka")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-10" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("password")
                          },
                          attrs: {
                            type: "password",
                            name: "password",
                            id: "password",
                            placeholder: "Unesite lozinku"
                          },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "password" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "offset-sm-2 col-sm-10" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          attrs: { type: "submit" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.updateProfile($event)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                        Izmijeni\n                                    "
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "tab-pane", attrs: { id: "timeline" } }, [
              _c("form", { staticClass: "form-horizontal" }, [
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-2 col-form-label",
                      attrs: { for: "name" }
                    },
                    [_vm._v("Naziv salona:")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-10" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.salonForm.name,
                            expression: "salonForm.name"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.salonForm.errors.has("name")
                        },
                        attrs: {
                          type: "text",
                          name: "name",
                          id: "name",
                          placeholder: "Naziv salona"
                        },
                        domProps: { value: _vm.salonForm.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.salonForm, "name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.salonForm, field: "name" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-2 col-form-label",
                      attrs: { for: "description" }
                    },
                    [_vm._v("Opis salona:")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-10" },
                    [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.salonForm.description,
                            expression: "salonForm.description"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.salonForm.errors.has("description")
                        },
                        attrs: {
                          name: "description",
                          id: "description",
                          placeholder: "Kratak opis salona..."
                        },
                        domProps: { value: _vm.salonForm.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.salonForm,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.salonForm, field: "description" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-2 col-form-label",
                      attrs: { for: "address" }
                    },
                    [_vm._v("Adresa:")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-10" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.salonForm.address,
                            expression: "salonForm.address"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.salonForm.errors.has("address")
                        },
                        attrs: {
                          type: "text",
                          name: "address",
                          id: "address",
                          placeholder: "Unesite adresu"
                        },
                        domProps: { value: _vm.salonForm.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.salonForm,
                              "address",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.salonForm, field: "address" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-2 col-form-label",
                      attrs: { for: "phone_number" }
                    },
                    [_vm._v("Broj telefona:")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-10" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.salonForm.phone_number,
                            expression: "salonForm.phone_number"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.salonForm.errors.has("phone_number")
                        },
                        attrs: {
                          type: "text",
                          name: "phone_number",
                          id: "phone_number",
                          placeholder: "Unesite kontakt telefon"
                        },
                        domProps: { value: _vm.salonForm.phone_number },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.salonForm,
                              "phone_number",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.salonForm, field: "phone_number" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-2 col-form-label",
                      attrs: { for: "website" }
                    },
                    [_vm._v("Websajt:")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-10" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.salonForm.website,
                            expression: "salonForm.website"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.salonForm.errors.has("website")
                        },
                        attrs: {
                          type: "text",
                          name: "website",
                          id: "website",
                          placeholder: "Unesite websajt salona"
                        },
                        domProps: { value: _vm.salonForm.website },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.salonForm,
                              "website",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.salonForm, field: "website" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-2 col-form-label",
                      attrs: { for: "stars" }
                    },
                    [_vm._v("Broj zvijezdica:")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-10" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.salonForm.stars,
                            expression: "salonForm.stars"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.salonForm.errors.has("stars")
                        },
                        attrs: {
                          type: "number",
                          name: "stars",
                          id: "stars",
                          placeholder: "Unesite broj zvijezdica"
                        },
                        domProps: { value: _vm.salonForm.stars },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.salonForm,
                              "stars",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.salonForm, field: "stars" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-10" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.salonForm.latitude,
                                expression: "salonForm.latitude"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.salonForm.errors.has("latitude")
                            },
                            attrs: {
                              type: "text",
                              name: "latitude",
                              id: "latitude",
                              placeholder: "Unesite geografsku širinu"
                            },
                            domProps: { value: _vm.salonForm.latitude },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.salonForm,
                                  "latitude",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.salonForm, field: "latitude" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.salonForm.longitude,
                                expression: "salonForm.longitude"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.salonForm.errors.has(
                                "longitude"
                              )
                            },
                            attrs: {
                              type: "text",
                              name: "longitude",
                              id: "longitude",
                              placeholder: "Unesite geografsku dužinu"
                            },
                            domProps: { value: _vm.salonForm.longitude },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.salonForm,
                                  "longitude",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.salonForm, field: "longitude" }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "offset-sm-2 col-sm-10" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "submit" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.updateSalon($event)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                                        Izmijeni salon\n                                    "
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "list-group list-group-unbordered mb-3" }, [
      _c("li", { staticClass: "list-group-item" }, [
        _c("b", [_vm._v("Followers")]),
        _vm._v(" "),
        _c("a", { staticClass: "float-right" }, [_vm._v("1,322")])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("b", [_vm._v("Following")]),
        _vm._v(" "),
        _c("a", { staticClass: "float-right" }, [_vm._v("543")])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("b", [_vm._v("Friends")]),
        _vm._v(" "),
        _c("a", { staticClass: "float-right" }, [_vm._v("13,287")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "btn btn-primary btn-block", attrs: { href: "#" } },
      [_c("b", [_vm._v("Follow")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header p-2" }, [
      _c("ul", { staticClass: "nav nav-pills" }, [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: { href: "#settings", "data-toggle": "tab" }
            },
            [_vm._v("Korisnički\n                        detalji")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#timeline", "data-toggle": "tab" }
            },
            [_vm._v("Salon")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2" }, [
      _c(
        "label",
        { staticClass: "col-form-label", attrs: { for: "latitude" } },
        [_vm._v("Lokacija salona:")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Profile.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Profile.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_3bd692e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=3bd692e4& */ "./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_3bd692e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_3bd692e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3bd692e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=3bd692e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3bd692e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3bd692e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);