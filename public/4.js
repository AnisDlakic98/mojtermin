(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{182:function(t,a,s){var o=s(283);"string"==typeof o&&(o=[[t.i,o,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};s(6)(o,e);o.locals&&(t.exports=o.locals)},282:function(t,a,s){"use strict";var o=s(182);s.n(o).a},283:function(t,a,s){(t.exports=s(5)(!1)).push([t.i,"\n#my-strictly-unique-vue-upload-multiple-image {\n    font-family: 'Avenir', Helvetica, Arial, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-align: center;\n    color: #2c3e50;\n    margin-top: 20px;\n}\nh1, h2 {\n    font-weight: normal;\n}\nul {\n    list-style-type: none;\n    padding: 0;\n}\nli {\n    display: inline-block;\n    margin: 0 10px;\n}\na {\n    color: #42b983;\n}\n",""])},330:function(t,a,s){"use strict";s.r(a);var o={data:function(){return{appointments:[],user:{},button:{loading:!1,dataStyle:"expand-left",progress:0},comments:[],form:new Form({id:"",nameSurname:"",email:"",password:"",photo:""})}},methods:{loadUserProfile:function(){var t=this;axios.get("/api/profile").then((function(a){var s=a.data;t.form.fill(s.user),t.form.nameSurname=s.user.name,t.appointments=s.appointments}))},getProfilePhoto:function(){return"profile.png"===this.form.photo?"img/profile/user.svg":this.form.photo.length>200?this.form.photo:"img/profile/"+this.form.photo},updatePhoto:function(t){var a=this,s=t.target.files[0],o=new FileReader;s.type.match("image.*")||swal.fire({title:"Oops...",text:"Odabrani format nije validan, mora biti slika!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#ffc107",showConfirmButton:!1,cancelButtonText:"Ok"}),s.size<2e6?(o.onloadend=function(t){a.form.photo=o.result},o.readAsDataURL(s)):swal.fire({title:"Oops...",text:"You are uploading a large file",icon:"warning",showCancelButton:!0,cancelButtonColor:"#ffc107",showConfirmButton:!1,cancelButtonText:"Ok"})},updateProfile:function(){var t=this;this.button.loading=!0,this.$Progress.start(),this.form.put("api/profile").then((function(){t.button.loading=!1,toast.fire({icon:"success",title:"Uspješno ste ažurirali svoj profil!"}),t.$Progress.finish()})).catch((function(a){t.button.loading=!1,t.$Progress.fail(),500===a.response.status&&toast.fire({icon:"error",title:"Server trenutno nije u stanju da odgovori na zahtjev."}),422===a.response.status&&toast.fire({icon:"error",title:"Molimo Vas da ispunite svoje podatke pravilno!"})}))},loadComments:function(){var t=this;axios.get("/api/comments/".concat(this.user.id)).then((function(a){t.comments=a.data[1]})).catch((function(t){console.log(t)}))}},mounted:function(){this.user=this.$gate.user,this.loadUserProfile(),this.loadComments()}},e=(s(282),s(1)),i=Object(e.a)(o,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"card card-primary card-outline"},[s("div",{staticClass:"card-body box-profile"},[s("div",{staticClass:"text-center"},[s("img",{staticClass:"profile-user-img img-circle",attrs:{src:t.getProfilePhoto(),alt:"User profile picture"}})]),t._v(" "),s("h3",{staticClass:"profile-username text-center"}),t._v(" "),s("p",{staticClass:"text-muted text-center"}),t._v(" "),s("ul",{staticClass:"list-group list-group-unbordered mb-3"},[s("li",{staticClass:"list-group-item"},[s("b",[t._v("Br. zakazivanja:")]),t._v(" "),s("a",{staticClass:"float-right"},[t._v(t._s(t.appointments.length))])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("b",[t._v("Komentara")]),t._v(" "),s("a",{staticClass:"float-right"},[t._v(t._s(t.comments.length))])])])])])]),t._v(" "),s("div",{staticClass:"col-md-9 mx-auto"},[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane active",attrs:{id:"settings"}},[s("form",{staticClass:"form-horizontal"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"nameSurname"}},[t._v("Ime i prezime:")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nameSurname,expression:"form.nameSurname"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("nameSurname")},attrs:{type:"text",name:"nameSurname",id:"nameSurname",placeholder:"Ime i prezime"},domProps:{value:t.form.nameSurname},on:{input:function(a){a.target.composing||t.$set(t.form,"nameSurname",a.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"nameSurname"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email",id:"email",placeholder:"Email",disabled:""},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"photo"}},[t._v("Profilna slika")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{staticClass:"form-input",attrs:{type:"file",name:"photo",id:"photo"},on:{change:t.updatePhoto}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"password"}},[t._v("Lozinka")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password",id:"password",placeholder:"Unesite lozinku"},domProps:{value:t.form.password},on:{input:function(a){a.target.composing||t.$set(t.form,"password",a.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"offset-sm-2 col-sm-10"},[s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.updateProfile(a)}}},[t._v("Izmijeni")])])])])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header p-2"},[a("ul",{staticClass:"nav nav-pills"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{href:"#settings","data-toggle":"tab"}},[this._v("Korisnički detalji")])])])])}],!1,null,null,null);a.default=i.exports}}]);