(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{333:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{user:{},comments:[],editMode:!1,form:new Form({id:"",comment:"",name:"",email:"",user_id:"",created_at:""})}},methods:{loadComments:function(){var t=this;axios.get("/api/comments/".concat(this.user.id)).then((function(e){t.comments=e.data[1]})).catch((function(t){500===t.response.status&&Swal.fire({icon:"error",title:"Greška 500",text:"Server trenutno nije u stanju da odgovori na zahtjev.",confirmButtonText:"Nastavi"})}))},createService:function(){this.form.post("/api/services/".concat(this.user.salon_id)).then((function(t){$("#servicesModal").modal("hide"),toast.fire({icon:"success",title:"Uspješno dodavanje!"}),Fire.$emit("refreshDataTable")})).catch((function(t){500===t.response.status&&Swal.fire({icon:"error",title:"Greška 500",text:"Server trenutno nije u stanju da odgovori na zahtjev.",confirmButtonText:"Nastavi"})}))},updateService:function(){var t=this;this.$Progress.start(),this.form.put("/api/comments/".concat(this.form.id)).then((function(e){$("#addNewModal").modal("hide"),toast.fire({icon:"success",title:"Uspješna izmjena!"}),Fire.$emit("refreshDataTable"),t.$Progress.finish(),window.location.reload()})).catch((function(e){t.$Progress.fail(),500===e.response.status&&Swal.fire({icon:"error",title:"Greška 500",text:"Server trenutno nije u stanju da odgovori na zahtjev.",confirmButtonText:"Nastavi"})}))},deleteService:function(t){var e=this;swal.fire({title:"Da li ste sigurni?",text:"Nećete moći da povratite ovu akciju!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Da, obriši!"}).then((function(a){a.value&&e.form.delete("api/comments/".concat(t)).then((function(t){swal.fire("Obrisano!","Uspješno brisanje","success"),Fire.$emit("refreshDataTable")})).catch((function(t){500===t.response.status&&Swal.fire({icon:"error",title:"Greška 500",text:"Server trenutno nije u stanju da odgovori na zahtjev.",confirmButtonText:"Nastavi"})}))}))},openModalForCreate:function(){this.editMode=!1,this.form.reset(),$("#servicesModal").modal("show")},openModalForEdit:function(t){this.editMode=!0,this.form.reset(),$("#servicesModal").modal("show"),this.form.fill(t),this.form.created_at=this.$options.filters.formatDate(t.created_at)}},mounted:function(){var t=this;this.user=this.$gate.user,this.loadComments(),Fire.$on("refreshDataTable",(function(){t.loadComments()}))}},i=a(1),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"usersManagment"}},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body table-responsive p-0"},[a("table",{staticClass:"table table-hover text-nowrap"},[t._m(1),t._v(" "),a("tbody",t._l(t.comments,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.comment))]),t._v(" "),a("td",[t._v(t._s(t._f("formatDate")(e.created_at)))]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-warning modify-btn mr-2",on:{click:function(a){return t.openModalForEdit(e)}}},[t._v("\n                                Izmijeni "),a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("button",{staticClass:"btn btn-danger modify-btn",on:{click:function(a){return t.deleteService(e.id)}}},[t._v("\n                                Obriši "),a("i",{staticClass:"fa fa-trash"})])])])})),0)])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"servicesModal",tabindex:"-1",role:"dialog","aria-labelledby":"servicesModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"servicesModal"}},[t._v("\n                        "+t._s(t.editMode?"Izmijeni komentar":"Dodaj novu uslugu")+"\n                    ")]),t._v(" "),t._m(2)]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateService():t.createService()}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Komentar")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.comment,expression:"form.comment"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("comment")},attrs:{type:"text",name:"comment",placeholder:"Komentar"},domProps:{value:t.form.comment},on:{input:function(e){e.target.composing||t.$set(t.form,"comment",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"comment"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Datum")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.created_at,expression:"form.created_at"}],staticClass:"form-control",attrs:{type:"text",name:"created_at",disabled:""},domProps:{value:t.form.created_at},on:{input:function(e){e.target.composing||t.$set(t.form,"created_at",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Odustani")]),t._v(" "),a("button",{staticClass:"btn",class:[t.editMode?"btn-success":"btn-primary"],attrs:{type:"submit"}},[t._v("\n                            "+t._s(t.editMode?"Izmijeni":"Dodaj")+"\n                        ")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[this._v("Moji komentari")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("ID")]),this._v(" "),e("th",[this._v("Komentar")]),this._v(" "),e("th",[this._v("Datum")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);e.default=o.exports}}]);