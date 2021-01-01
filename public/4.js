(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      events: [],
      eventsForCalender: []
    };
  },
  methods: {
    loadUserProfile: function loadUserProfile() {
      var _this = this;

      axios.get("/api/profile").then(function (_ref) {
        var data = _ref.data;
        _this.user = data.user;

        if (data.salonAppointments && data.salonAppointments.length > 0) {
          _this.events = data.salonAppointments;

          _this.events.forEach(function (item) {
            _this.eventsForCalender.push({
              title: item.service_name,
              description: "<div class=\"mt-2\"><p class=\"mb-1\"><b>Poruka:</b> ".concat(item.message, "</p><p class=\"mb-1\"><b>Vrijeme:</b> ").concat(item.time, "</p></div>"),
              icon: "",
              start: item.date,
              end: item.date,
              className: 'fc-bg-default',
              allDay: false
            });
          });

          window.eventsForCalender = _this.eventsForCalender;
        }
      }).then(function () {
        _this.initCalender();
      });
    },
    initCalender: function initCalender() {
      jQuery(document).ready(function () {
        jQuery('.datetimepicker').datepicker({
          timepicker: true,
          language: 'en',
          range: true,
          multipleDates: true,
          multipleDatesSeparator: " - "
        });
        jQuery("#add-event").submit(function () {
          alert("Submitted");
          var values = {};
          $.each($('#add-event').serializeArray(), function (i, field) {
            values[field.name] = field.value;
          });
          console.log(values);
        });
      });

      (function () {
        'use strict'; // ------------------------------------------------------- //
        // Calendar
        // ------------------------------------------------------ //

        jQuery(function () {
          // page is ready
          jQuery('#calendar').fullCalendar({
            themeSystem: 'bootstrap4',
            // emphasizes business hours
            businessHours: false,
            defaultView: 'month',
            // event dragging & resizing
            editable: true,
            // header
            header: {
              left: 'title',
              center: 'month,agendaWeek,agendaDay',
              right: 'today prev,next'
            },
            events: window.eventsForCalender,
            eventRender: function eventRender(event, element) {
              if (event.icon) {
                element.find(".fc-title").prepend("<i class='fa fa-" + event.icon + "'></i>");
              }
            },
            dayClick: function dayClick() {
              jQuery('#modal-view-event-add').modal();
            },
            eventClick: function eventClick(event, jsEvent, view) {
              jQuery('.event-icon').html("<i class='fa fa-" + event.icon + "'></i>");
              jQuery('.event-title').html(event.title);
              jQuery('.event-body').html(event.description);
              jQuery('.eventUrl').attr('href', event.url);
              jQuery('#modal-view-event').modal();
            }
          });
        });
      })(jQuery);
    }
  },
  mounted: function mounted() {
    this.loadUserProfile();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mb-5", attrs: { id: "fullCalendar" } }, [
    _vm.eventsForCalender.length === 0
      ? _c(
          "div",
          { staticClass: "data-not-found d-flex justify-content-center" },
          [_vm._m(0)]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.eventsForCalender.length !== 0 ? _c("div", [_vm._m(1)]) : _vm._e(),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-auto" }, [
      _c("img", {
        staticClass: "w-50 mx-auto d-block tex-center",
        attrs: { src: "/img/broke.svg", alt: "" }
      }),
      _vm._v(" "),
      _c("h2", { staticClass: "mt-3 text-center" }, [
        _vm._v("Nemate zakazanih termina!")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body p-0" }, [
        _c("div", { attrs: { id: "calendar" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal modal-top fade calendar-modal",
        attrs: { id: "modal-view-event" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-body" }, [
              _c("h2", { staticClass: "modal-title" }, [
                _c("span", { staticClass: "event-icon" }),
                _c("span", { staticClass: "event-title" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "event-body" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Zatvori")]
              )
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Dashboard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);