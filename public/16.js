(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{335:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{faqs:[],editMode:!1,form:new Form({id:"",title:"",body:""})}},methods:{loadServices:function(){var t=this;axios.get("/api/faqs").then((function(e){t.faqs=e.data[1]})).catch((function(t){console.log(t)}))},createService:function(){this.form.post("/api/faqs").then((function(t){$("#servicesModal").modal("hide"),toast.fire({icon:"success",title:"Uspješno dodavanje!"}),Fire.$emit("refreshDataTable")})).catch((function(t){}))},updateService:function(){var t=this;this.$Progress.start(),this.form.put("/api/faqs/".concat(this.form.id)).then((function(e){$("#addNewModal").modal("hide"),toast.fire({icon:"success",title:"Uspješna izmjena!"}),Fire.$emit("refreshDataTable"),t.$Progress.finish(),window.location.reload()})).catch((function(e){t.$Progress.fail()}))},deleteService:function(t){var e=this;swal.fire({title:"Da li ste sigurni?",text:"Nećete moći da povratite ovu akciju!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Da, obriši!"}).then((function(a){a.value&&e.form.delete("/api/faqs/".concat(t)).then((function(t){swal.fire("Obrisano!","Uspješno brisanje","success"),Fire.$emit("refreshDataTable")})).catch((function(t){console.log(t)}))}))},openModalForCreate:function(){this.editMode=!1,this.form.reset(),$("#servicesModal").modal("show")},openModalForEdit:function(t){this.editMode=!0,this.form.reset(),$("#servicesModal").modal("show"),this.form.fill(t)}},mounted:function(){var t=this;this.loadServices(),Fire.$on("refreshDataTable",(function(){t.loadServices()}))}},i=a(1),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"usersManagment"}},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("Pitanja i odgovori")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("div",{staticClass:"input-group input-group-sm"},[a("button",{staticClass:"btn btn-success",on:{click:t.openModalForCreate}},[a("i",{staticClass:"fas fa-list"}),t._v("\n                            Dodaj faq\n                        ")])])])]),t._v(" "),a("div",{staticClass:"card-body table-responsive p-0"},[a("table",{staticClass:"table table-hover text-nowrap"},[t._m(0),t._v(" "),a("tbody",t._l(t.faqs,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",[t._v(t._s(e.body))]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-warning modify-btn mr-2",on:{click:function(a){return t.openModalForEdit(e)}}},[t._v("Izmijeni "),a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("button",{staticClass:"btn btn-danger modify-btn",on:{click:function(a){return t.deleteService(e.id)}}},[t._v("Obriši"),a("i",{staticClass:"fa fa-trash"})])])])})),0)])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"servicesModal",tabindex:"-1",role:"dialog","aria-labelledby":"servicesModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"servicesModal"}},[t._v("\n                        "+t._s(t.editMode?"Izmijeni faq":"Dodaj novi faq")+"\n                    ")]),t._v(" "),t._m(1)]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateService():t.createService()}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Naslov")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("title")},attrs:{type:"text",name:"title",placeholder:"Naslov *"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"title"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Tekst")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.body,expression:"form.body"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("body")},attrs:{placeholder:"Tekst",type:"body",name:"body",rows:"5"},domProps:{value:t.form.body},on:{input:function(e){e.target.composing||t.$set(t.form,"body",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"body"}})],1)]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Odustani")]),t._v(" "),a("button",{staticClass:"btn",class:[t.editMode?"btn-success":"btn-primary"],attrs:{type:"submit"}},[t._v("\n                            "+t._s(t.editMode?"Izmijeni":"Dodaj")+"\n                        ")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("ID")]),this._v(" "),e("th",[this._v("Naslov")]),this._v(" "),e("th",[this._v("Tekst")]),this._v(" "),e("th",[this._v("Akcije")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);e.default=o.exports}}]);