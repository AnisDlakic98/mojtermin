(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{322:function(t,e,a){"use strict";a.r(e);var n={data:function(){return{events:[],eventsForCalender:[]}},methods:{loadUserProfile:function(){var t=this;axios.get("/api/profile").then((function(e){var a=e.data;t.user=a.user,a.salonAppointments&&a.salonAppointments.length>0&&(t.events=a.salonAppointments,t.events.forEach((function(e){t.eventsForCalender.push({title:e.service_name,description:'<div class="mt-2"><p class="mb-1"><b>Poruka:</b> '.concat(e.message,'</p><p class="mb-1"><b>Vrijeme:</b> ').concat(e.time,"</p></div>"),icon:"",start:e.date,end:e.date,className:"fc-bg-default",allDay:!1})})),window.eventsForCalender=t.eventsForCalender)})).then((function(){t.initCalender()}))},initCalender:function(){jQuery(document).ready((function(){jQuery(".datetimepicker").datepicker({timepicker:!0,language:"en",range:!0,multipleDates:!0,multipleDatesSeparator:" - "}),jQuery("#add-event").submit((function(){alert("Submitted");var t={};$.each($("#add-event").serializeArray(),(function(e,a){t[a.name]=a.value})),console.log(t)}))})),jQuery,jQuery((function(){jQuery("#calendar").fullCalendar({themeSystem:"bootstrap4",businessHours:!1,defaultView:"month",editable:!0,header:{left:"title",center:"month,agendaWeek,agendaDay",right:"today prev,next"},events:window.eventsForCalender,eventRender:function(t,e){t.icon&&e.find(".fc-title").prepend("<i class='fa fa-"+t.icon+"'></i>")},dayClick:function(){jQuery("#modal-view-event-add").modal()},eventClick:function(t,e,a){jQuery(".event-icon").html("<i class='fa fa-"+t.icon+"'></i>"),jQuery(".event-title").html(t.title),jQuery(".event-body").html(t.description),jQuery(".eventUrl").attr("href",t.url),jQuery("#modal-view-event").modal()}})}))}},mounted:function(){this.loadUserProfile()}},i=a(1),s=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-5",attrs:{id:"fullCalendar"}},[0===this.eventsForCalender.length?e("div",{staticClass:"data-not-found d-flex justify-content-center"},[this._m(0)]):this._e(),this._v(" "),this._m(1),this._v(" "),this._m(2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-auto"},[e("img",{staticClass:"w-50 mx-auto d-block tex-center",attrs:{src:"/img/broke.svg",alt:""}}),this._v(" "),e("h2",{staticClass:"mt-3 text-center"},[this._v("Nemate zakazanih termina!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body p-0"},[e("div",{attrs:{id:"calendar"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal modal-top fade calendar-modal",attrs:{id:"modal-view-event"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("h2",{staticClass:"modal-title"},[e("span",{staticClass:"event-icon"}),e("span",{staticClass:"event-title"})]),this._v(" "),e("div",{staticClass:"event-body"})]),this._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Zatvori")])])])])])}],!1,null,null,null);e.default=s.exports}}]);