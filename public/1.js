(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-upload-multiple-image */ "./node_modules/vue-upload-multiple-image/src/main.js");
/* harmony import */ var object_to_formdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-to-formdata */ "./node_modules/object-to-formdata/dist/index.module.js");
/* harmony import */ var object_to_formdata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_to_formdata__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    VueUploadMultipleImage: vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      button: {
        loading: false,
        'dataStyle': 'expand-left',
        progress: 0
      },
      attachments: [],
      labels: {
        workdaysDelete: false,
        saturdayDelete: false,
        sundayDelete: false
      },
      form: new Form({
        id: "",
        nameSurname: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: ""
      }),
      salonForm: new Form({
        id: 1,
        name: "",
        description: "",
        address: "",
        phone_number: "",
        stars: "",
        website: "",
        latitude: "",
        longitude: "",
        images: []
      }),
      workHoursForm: new Form({
        workdaysOpen: "",
        workdaysClose: "",
        saturdayOpen: "",
        saturdayClose: "",
        sundayOpen: "",
        sundayClose: ""
      })
    };
  },
  methods: {
    updateSalon: function updateSalon() {
      var _this = this;

      this.$Progress.start();

      if (this.attachments.length > 0) {
        for (var i = 0; i < this.attachments.length; i++) {
          this.salonForm.images.push(this.attachments[i]);
        }
      }

      var textareaValue = $('#summernote').summernote('code');
      this.salonForm.description = textareaValue;
      this.salonForm.submit('post', "api/salons/put/".concat(this.salonForm.id), {
        // Transform form data to FormData
        transformRequest: [function (data, headers) {
          var formData = Object(object_to_formdata__WEBPACK_IMPORTED_MODULE_1__["serialize"])(data);
          return formData;
        }]
      }).then(function (response) {
        _this.$Progress.finish();

        swal.fire({
          title: 'Odlično!',
          text: 'Uspješno ste ažurirali Vaš salon',
          icon: "success",
          confirmButtonText: "U redu"
        }).then(function () {
          window.location.reload();
        });
      })["catch"](function (error) {
        _this.$Progress.fail();

        console.log(error);
      });
    },
    fieldChange: function fieldChange(e) {
      var selectedFiles = e.target.files;

      if (!selectedFiles.length) {
        return false;
      }

      for (var i = 0; i < selectedFiles.length; i++) {
        this.attachments.push(selectedFiles[i]);
      }

      console.log(this.attachments);
    },
    updateWorkHours: function updateWorkHours() {
      var _this2 = this;

      this.$Progress.start();

      if (!this.labels.workdaysDelete) {
        this.workHoursForm.workdaysOpen = $('#workdaysOpen').datetimepicker('viewDate').format('HH:mm');
        this.workHoursForm.workdaysClose = $('#workdaysClose').datetimepicker('viewDate').format('HH:mm');
      }

      if (!this.labels.saturdayDelete) {
        this.workHoursForm.saturdayOpen = $('#saturdayOpen').datetimepicker('viewDate').format('HH:mm');
        this.workHoursForm.saturdayClose = $('#saturdayClose').datetimepicker('viewDate').format('HH:mm');
      }

      if (!this.labels.sundayDelete) {
        this.workHoursForm.sundayOpen = $('#sundayOpen').datetimepicker('viewDate').format('HH:mm');
        this.workHoursForm.sundayClose = $('#sundayClose').datetimepicker('viewDate').format('HH:mm');
      }

      this.workHoursForm.put("api/workhours/".concat(this.salonForm.id)).then(function (response) {
        toast.fire({
          icon: "success",
          title: "Salon updated successfully"
        });

        _this2.$Progress.finish();
      })["catch"](function (error) {
        _this2.$Progress.fail();

        console.log(error);
      });
    },
    loadUserProfile: function loadUserProfile() {
      var _this3 = this;

      axios.get("/api/profile").then(function (_ref) {
        var data = _ref.data;

        _this3.form.fill(data.user);

        _this3.form.nameSurname = data.user.name;

        _this3.salonForm.fill(data.salon);

        _this3.salonForm.images = [];
        $('#summernote').summernote('code', _this3.salonForm.description);
        _this3.workHoursForm.workdaysOpen = moment(data.salon.workdaysOpen, "HH:mm").format("LT");
        _this3.workHoursForm.workdaysClose = moment(data.salon.workdaysClose, "HH:mm").format("LT");
        _this3.workHoursForm.saturdayOpen = moment(data.salon.saturdayOpen, "HH:mm").format("LT");
        _this3.workHoursForm.saturdayClose = moment(data.salon.saturdayClose, "HH:mm").format("LT");
        _this3.workHoursForm.sundayOpen = moment(data.salon.sundayOpen, "HH:mm").format("LT");
        _this3.workHoursForm.sundayClose = moment(data.salon.sundayClose, "HH:mm").format("LT");
      });
    },
    getProfilePhoto: function getProfilePhoto() {
      var photo = this.form.photo.length > 200 ? this.form.photo : "img/profile/" + this.form.photo;
      return photo;
    },
    updatePhoto: function updatePhoto(e) {
      var _this4 = this;

      var file = e.target.files[0];
      var reader = new FileReader();

      if (!file.type.match('image.*')) {
        swal.fire({
          title: 'Oops...',
          text: 'Odabrani format nije validan, mora biti slika!',
          icon: "warning",
          showCancelButton: true,
          cancelButtonColor: "#ffc107",
          showConfirmButton: false,
          cancelButtonText: "Ok"
        });
      }

      if (file['size'] < 2000000) {
        reader.onloadend = function (file) {
          _this4.form.photo = reader.result;
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
    updateProfile: function updateProfile() {
      var _this5 = this;

      this.button.loading = true;
      this.$Progress.start();
      this.form.put("api/profile").then(function () {
        _this5.button.loading = false;
        toast.fire({
          icon: "success",
          title: "Uspješno ste ažurirali svoj profil!"
        });

        _this5.$Progress.finish();
      })["catch"](function (error) {
        _this5.button.loading = false;

        _this5.$Progress.fail();

        if (error.response.status === 500) {
          toast.fire({
            icon: 'error',
            title: "Server trenutno nije u stanju da odgovori na zahtjev."
          });
        }

        if (error.response.status === 422) {
          toast.fire({
            icon: 'error',
            title: "Molimo Vas da ispunite svoje podatke pravilno!"
          });
        }
      });
    }
  },
  created: function created() {
    this.loadUserProfile();
  },
  mounted: function mounted() {
    $('#workdaysOpen, #workdaysClose, #sundayOpen, #sundayClose, #saturdayOpen, #saturdayClose').datetimepicker({
      format: 'LT'
    });
    $('#summernote').summernote({
      height: 200
    });
  },
  watch: {
    labels: {
      deep: true,
      handler: function handler(oldVal, newVal) {
        if (this.labels.workdaysDelete) {
          this.workHoursForm.workdaysOpen = null;
          this.workHoursForm.workdaysClose = null;
        }

        if (this.labels.saturdayDelete) {
          this.workHoursForm.saturdayOpen = null;
          this.workHoursForm.saturdayClose = null;
        }

        if (this.labels.sundayDelete) {
          this.workHoursForm.sundayOpen = null;
          this.workHoursForm.sundayClose = null;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#my-strictly-unique-vue-upload-multiple-image {\n    font-family: 'Avenir', Helvetica, Arial, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-align: center;\n    color: #2c3e50;\n    margin-top: 20px;\n}\nh1, h2 {\n    font-weight: normal;\n}\nul {\n    list-style-type: none;\n    padding: 0;\n}\nli {\n    display: inline-block;\n    margin: 0 10px;\n}\na {\n    color: #42b983;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
    _c("div", { staticClass: "col-md-12 mx-auto" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
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
                        attrs: { for: "nameSurname" }
                      },
                      [_vm._v("Ime i prezime *")]
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
                              value: _vm.form.nameSurname,
                              expression: "form.nameSurname"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("nameSurname")
                          },
                          attrs: {
                            type: "text",
                            name: "nameSurname",
                            id: "nameSurname",
                            placeholder: "Ime i prezime"
                          },
                          domProps: { value: _vm.form.nameSurname },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "nameSurname",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "nameSurname" }
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
                      [_vm._v("Email *")]
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
                            placeholder: "Email",
                            disabled: ""
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
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.updateProfile($event)
                            }
                          }
                        },
                        [_vm._v("Izmijeni")]
                      )
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "tab-pane", attrs: { id: "timeline" } }, [
              _c("form", { staticClass: "form-horizontal" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-2 col-form-label",
                      attrs: { for: "salonName" }
                    },
                    [_vm._v("Naziv salona: *")]
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
                          id: "salonName",
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
                      attrs: { for: "summernote" }
                    },
                    [_vm._v("Opis salona: (opciono)")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-10" }, [
                    _c(
                      "textarea",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.salonForm.description,
                            expression: "salonForm.description"
                          }
                        ],
                        attrs: { id: "summernote" },
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
                      },
                      [_vm._v("<p>Hello Summernote</p>")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-2 col-form-label",
                      attrs: { for: "address" }
                    },
                    [_vm._v("Adresa: *")]
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
                    [_vm._v("Broj telefona: *")]
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
                    [_vm._v("Websajt: (opiciono)")]
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
                    [_vm._v("Broj zvijezdica: *")]
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
                  _vm._m(2),
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
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Dodajte slike *")]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.salonForm.errors.has("images")
                          },
                          attrs: {
                            id: "upload-file",
                            type: "file",
                            multiple: ""
                          },
                          on: { change: _vm.fieldChange }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.salonForm, field: "images" }
                        })
                      ],
                      1
                    )
                  ])
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
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "container" }, [
                  _c(
                    "label",
                    { staticStyle: { position: "relative", left: "-15px" } },
                    [_vm._v("Radni dani")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group row d-flex flex-nowrap" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "input-group date",
                          attrs: {
                            id: "workdaysOpen",
                            "data-target-input": "nearest"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.workHoursForm.workdaysOpen,
                                expression: "workHoursForm.workdaysOpen"
                              }
                            ],
                            staticClass: "form-control datetimepicker-input",
                            class: {
                              "is-invalid": _vm.workHoursForm.errors.has(
                                "workdaysOpen"
                              )
                            },
                            attrs: {
                              disabled: _vm.labels.workdaysDelete,
                              name: "workdaysOpen",
                              type: "text",
                              "data-target": "#workdaysOpen"
                            },
                            domProps: { value: _vm.workHoursForm.workdaysOpen },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.workHoursForm,
                                  "workdaysOpen",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(4),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.workHoursForm,
                              field: "workdaysOpen"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("label", { staticClass: "m-auto pl-2 pr-2" }, [
                        _vm._v("-")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "input-group date",
                          attrs: {
                            id: "workdaysClose",
                            "data-target-input": "nearest"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.workHoursForm.workdaysClose,
                                expression: "workHoursForm.workdaysClose"
                              }
                            ],
                            staticClass: "form-control datetimepicker-input",
                            class: {
                              "is-invalid": _vm.workHoursForm.errors.has(
                                "workdaysClose"
                              )
                            },
                            attrs: {
                              disabled: _vm.labels.workdaysDelete,
                              name: "workdaysClose",
                              type: "text",
                              "data-target": "#workdaysClose"
                            },
                            domProps: {
                              value: _vm.workHoursForm.workdaysClose
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.workHoursForm,
                                  "workdaysClose",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(5),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.workHoursForm,
                              field: "workdaysClose"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group row d-flex flex-nowrap" },
                    [
                      _c("label", { attrs: { for: "workdaysDelete" } }, [
                        _vm._v("Zatvoreno")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.labels.workdaysDelete,
                            expression: "labels.workdaysDelete"
                          }
                        ],
                        staticClass: "mt-1 ml-1",
                        attrs: {
                          type: "checkbox",
                          name: "workdaysDelete",
                          id: "workdaysDelete"
                        },
                        domProps: {
                          checked: Array.isArray(_vm.labels.workdaysDelete)
                            ? _vm._i(_vm.labels.workdaysDelete, null) > -1
                            : _vm.labels.workdaysDelete
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.labels.workdaysDelete,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.labels,
                                    "workdaysDelete",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.labels,
                                    "workdaysDelete",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.labels, "workdaysDelete", $$c)
                            }
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "label",
                    { staticStyle: { position: "relative", left: "-15px" } },
                    [_vm._v("Subota")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group row d-flex flex-nowrap" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "input-group date",
                          attrs: {
                            id: "saturdayOpen",
                            "data-target-input": "nearest"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.workHoursForm.saturdayOpen,
                                expression: "workHoursForm.saturdayOpen"
                              }
                            ],
                            staticClass: "form-control datetimepicker-input",
                            class: {
                              "is-invalid": _vm.workHoursForm.errors.has(
                                "saturdayOpen"
                              )
                            },
                            attrs: {
                              disabled: _vm.labels.saturdayDelete,
                              name: "saturdayOpen",
                              type: "text",
                              "data-target": "#saturdayOpen"
                            },
                            domProps: { value: _vm.workHoursForm.saturdayOpen },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.workHoursForm,
                                  "saturdayOpen",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(6),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.workHoursForm,
                              field: "saturdayOpen"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("label", { staticClass: "m-auto pl-2 pr-2" }, [
                        _vm._v("-")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "input-group date",
                          attrs: {
                            id: "saturdayClose",
                            "data-target-input": "nearest"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.workHoursForm.saturdayClose,
                                expression: "workHoursForm.saturdayClose"
                              }
                            ],
                            staticClass: "form-control datetimepicker-input",
                            class: {
                              "is-invalid": _vm.workHoursForm.errors.has(
                                "saturdayClose"
                              )
                            },
                            attrs: {
                              disabled: _vm.labels.saturdayDelete,
                              name: "saturdayClose",
                              type: "text",
                              "data-target": "#saturdayClose"
                            },
                            domProps: {
                              value: _vm.workHoursForm.saturdayClose
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.workHoursForm,
                                  "saturdayClose",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(7),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.workHoursForm,
                              field: "saturdayClose"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group row d-flex flex-nowrap" },
                    [
                      _c("label", { attrs: { for: "saturdayDelete" } }, [
                        _vm._v("Zatvoreno")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.labels.saturdayDelete,
                            expression: "labels.saturdayDelete"
                          }
                        ],
                        staticClass: "mt-1 ml-1",
                        attrs: {
                          type: "checkbox",
                          name: "saturdayDelete",
                          id: "saturdayDelete"
                        },
                        domProps: {
                          checked: Array.isArray(_vm.labels.saturdayDelete)
                            ? _vm._i(_vm.labels.saturdayDelete, null) > -1
                            : _vm.labels.saturdayDelete
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.labels.saturdayDelete,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.labels,
                                    "saturdayDelete",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.labels,
                                    "saturdayDelete",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.labels, "saturdayDelete", $$c)
                            }
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "label",
                    { staticStyle: { position: "relative", left: "-15px" } },
                    [_vm._v("Nedelja")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group row d-flex flex-nowrap" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "input-group date",
                          attrs: {
                            id: "sundayOpen",
                            "data-target-input": "nearest"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.workHoursForm.sundayOpen,
                                expression: "workHoursForm.sundayOpen"
                              }
                            ],
                            staticClass: "form-control datetimepicker-input",
                            class: {
                              "is-invalid": _vm.workHoursForm.errors.has(
                                "sundayOpen"
                              )
                            },
                            attrs: {
                              disabled: _vm.labels.sundayDelete,
                              name: "sundayOpen",
                              type: "text",
                              "data-target": "#sundayOpen"
                            },
                            domProps: { value: _vm.workHoursForm.sundayOpen },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.workHoursForm,
                                  "sundayOpen",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(8),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.workHoursForm,
                              field: "sundayOpen"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "m-auto pl-2 pr-2",
                          attrs: { for: "sundayClose" }
                        },
                        [_vm._v("-")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "input-group date",
                          attrs: {
                            id: "sundayClose",
                            "data-target-input": "nearest"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.workHoursForm.sundayClose,
                                expression: "workHoursForm.sundayClose"
                              }
                            ],
                            staticClass: "form-control datetimepicker-input",
                            class: {
                              "is-invalid": _vm.workHoursForm.errors.has(
                                "sundayClose"
                              )
                            },
                            attrs: {
                              disabled: _vm.labels.sundayDelete,
                              name: "sundayClose",
                              type: "text",
                              "data-target": "#sundayClose"
                            },
                            domProps: { value: _vm.workHoursForm.sundayClose },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.workHoursForm,
                                  "sundayClose",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(9),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.workHoursForm,
                              field: "sundayClose"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group row d-flex flex-nowrap" },
                    [
                      _c("label", { attrs: { for: "sundayDelete" } }, [
                        _vm._v("Zatvoreno")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.labels.sundayDelete,
                            expression: "labels.sundayDelete"
                          }
                        ],
                        staticClass: "mt-1 ml-1",
                        attrs: {
                          type: "checkbox",
                          name: "sundayDelete",
                          id: "sundayDelete"
                        },
                        domProps: {
                          checked: Array.isArray(_vm.labels.sundayDelete)
                            ? _vm._i(_vm.labels.sundayDelete, null) > -1
                            : _vm.labels.sundayDelete
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.labels.sundayDelete,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.labels,
                                    "sundayDelete",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.labels,
                                    "sundayDelete",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.labels, "sundayDelete", $$c)
                            }
                          }
                        }
                      })
                    ]
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
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.updateWorkHours($event)
                      }
                    }
                  },
                  [_vm._v("Sačuvaj")]
                )
              ])
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
    return _c("div", { staticClass: "d-flex justify-content-end mb-4" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            type: "button",
            "data-toggle": "modal",
            "data-target": "#exampleModal"
          }
        },
        [
          _c("i", { staticClass: "fas fa-plus" }),
          _vm._v(
            "\n                                    Dodajte radne sate\n                                "
          )
        ]
      )
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
        [_vm._v("Lokacija salona: *")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Dodajte radne sate")]
      ),
      _vm._v(" "),
      _c(
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "input-group-append",
        attrs: {
          "data-target": "#workdaysOpen",
          "data-toggle": "datetimepicker"
        }
      },
      [
        _c("div", { staticClass: "input-group-text" }, [
          _c("i", { staticClass: "far fa-clock" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "input-group-append",
        attrs: {
          "data-target": "#workdaysClose",
          "data-toggle": "datetimepicker"
        }
      },
      [
        _c("div", { staticClass: "input-group-text" }, [
          _c("i", { staticClass: "far fa-clock" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "input-group-append",
        attrs: {
          "data-target": "#saturdayOpen",
          "data-toggle": "datetimepicker"
        }
      },
      [
        _c("div", { staticClass: "input-group-text" }, [
          _c("i", { staticClass: "far fa-clock" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "input-group-append",
        attrs: {
          "data-target": "#saturdayClose",
          "data-toggle": "datetimepicker"
        }
      },
      [
        _c("div", { staticClass: "input-group-text" }, [
          _c("i", { staticClass: "far fa-clock" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "input-group-append",
        attrs: { "data-target": "#sundayOpen", "data-toggle": "datetimepicker" }
      },
      [
        _c("div", { staticClass: "input-group-text" }, [
          _c("i", { staticClass: "far fa-clock" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "input-group-append",
        attrs: {
          "data-target": "#sundayClose",
          "data-toggle": "datetimepicker"
        }
      },
      [
        _c("div", { staticClass: "input-group-text" }, [
          _c("i", { staticClass: "far fa-clock" })
        ])
      ]
    )
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
/* empty/unused harmony star reexport *//* harmony import */ var _Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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