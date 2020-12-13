<template>
    <div class="row">
        <!-- /.col -->
        <div class="col-md-12 mx-auto">
            <div class="card">
                <div class="card-header p-2">
                    <ul class="nav nav-pills">
                        <li class="nav-item"><a class="nav-link active" href="#settings" data-toggle="tab">Korisnički
                            detalji</a></li>
                        <li class="nav-item"><a class="nav-link" href="#timeline" data-toggle="tab">Salon</a></li>
                    </ul>
                </div><!-- /.card-header -->
                <div class="card-body">
                    <div class="tab-content">
                        <div class="tab-pane active" id="settings">
                            <form class="form-horizontal">
                                <div class="form-group row">
                                    <label for="nameSurname" class="col-sm-2 col-form-label">Ime i prezime *</label>
                                    <div class="col-sm-10">
                                        <input type="text"
                                               class="form-control"
                                               name="nameSurname"
                                               id="nameSurname"
                                               placeholder="Ime i prezime"
                                               :class="{ 'is-invalid': form.errors.has('nameSurname') }"
                                               v-model="form.nameSurname"
                                        >
                                        <has-error :form="form" field="nameSurname"></has-error>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-sm-2 col-form-label">Email *</label>
                                    <div class="col-sm-10">
                                        <input type="email"
                                               class="form-control"
                                               name="email"
                                               id="email"
                                               placeholder="Email"
                                               disabled
                                               :class="{ 'is-invalid': form.errors.has('email') }"
                                               v-model="form.email"
                                        >
                                        <has-error :form="form" field="email"></has-error>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="photo" class="col-sm-2 col-form-label">Profilna slika</label>
                                    <div class="col-sm-10">
                                        <input @change="updatePhoto"
                                               type="file"
                                               name="photo"
                                               id="photo"
                                               class="form-input"
                                        />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="password" class="col-sm-2 col-form-label">Lozinka</label>
                                    <div class="col-sm-10">
                                        <input type="password"
                                               class="form-control"
                                               name="password"
                                               id="password"
                                               placeholder="Unesite lozinku"
                                               :class="{ 'is-invalid': form.errors.has('password') }"
                                               v-model="form.password"
                                        >
                                        <has-error :form="form" field="password"></has-error>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="offset-sm-2 col-sm-10">
                                        <button @click.prevent="updateProfile" class="btn btn-success">Izmijeni</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.tab-pane -->
                        <div class="tab-pane" id="timeline">
                            <form class="form-horizontal">


                                <div class="d-flex justify-content-end mb-4"> <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-primary" data-toggle="modal"
                                            data-target="#exampleModal">
                                        <i class="fas fa-plus"></i>
                                        Dodajte radne sate
                                    </button>
                                </div>

                                <div class="form-group row">
                                    <label for="salonName" class="col-sm-2 col-form-label">Naziv salona: *</label>
                                    <div class="col-sm-10">
                                        <input type="text"
                                               class="form-control"
                                               name="name"
                                               id="salonName"
                                               placeholder="Naziv salona"
                                               :class="{ 'is-invalid': salonForm.errors.has('name') }"
                                               v-model="salonForm.name"
                                        >
                                        <has-error :form="salonForm" field="name"></has-error>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="summernote" class="col-sm-2 col-form-label">Opis salona: (opciono)</label>
                                    <div class="col-sm-10">
                                        <textarea v-model="salonForm.description" id="summernote"><p>Hello Summernote</p></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="address" class="col-sm-2 col-form-label">Adresa: *</label>
                                    <div class="col-sm-10">
                                        <input type="text"
                                               class="form-control"
                                               name="address"
                                               id="address"
                                               placeholder="Unesite adresu"
                                               :class="{ 'is-invalid': salonForm.errors.has('address') }"
                                               v-model="salonForm.address"
                                        >
                                        <has-error :form="salonForm" field="address"></has-error>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="phone_number" class="col-sm-2 col-form-label">Broj telefona: *</label>
                                    <div class="col-sm-10">
                                        <input type="text"
                                               class="form-control"
                                               name="phone_number"
                                               id="phone_number"
                                               placeholder="Unesite kontakt telefon"
                                               :class="{ 'is-invalid': salonForm.errors.has('phone_number') }"
                                               v-model="salonForm.phone_number"
                                        >
                                        <has-error :form="salonForm" field="phone_number"></has-error>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="website" class="col-sm-2 col-form-label">Websajt: (opiciono)</label>
                                    <div class="col-sm-10">
                                        <input type="text"
                                               class="form-control"
                                               name="website"
                                               id="website"
                                               placeholder="Unesite websajt salona"
                                               :class="{ 'is-invalid': salonForm.errors.has('website') }"
                                               v-model="salonForm.website"
                                        >
                                        <has-error :form="salonForm" field="website"></has-error>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="stars" class="col-sm-2 col-form-label">Broj zvijezdica: *</label>
                                    <div class="col-sm-10">
                                        <input type="number"
                                               class="form-control"
                                               name="stars"
                                               id="stars"
                                               placeholder="Unesite broj zvijezdica"
                                               :class="{ 'is-invalid': salonForm.errors.has('stars') }"
                                               v-model="salonForm.stars"
                                        >
                                        <has-error :form="salonForm" field="stars"></has-error>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-2">
                                        <label for="latitude" class="col-form-label">Lokacija salona: *</label>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <input type="text"
                                                       class="form-control"
                                                       name="latitude"
                                                       id="latitude"
                                                       placeholder="Unesite geografsku širinu"
                                                       :class="{ 'is-invalid': salonForm.errors.has('latitude') }"
                                                       v-model="salonForm.latitude"
                                                >
                                                <has-error :form="salonForm" field="latitude"></has-error>
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text"
                                                       class="form-control"
                                                       name="longitude"
                                                       id="longitude"
                                                       placeholder="Unesite geografsku dužinu"
                                                       :class="{ 'is-invalid': salonForm.errors.has('longitude') }"
                                                       v-model="salonForm.longitude"
                                                >
                                                <has-error :form="salonForm" field="longitude"></has-error>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Dodajte slike *</label>
                                            <input id="upload-file" type="file" multiple class="form-control" :class="{ 'is-invalid': salonForm.errors.has('images') }" @change="fieldChange">
                                            <has-error :form="salonForm" field="images"></has-error>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="offset-sm-2 col-sm-10">
                                        <button type="submit" class="btn btn-success" @click.prevent="updateSalon">
                                            Izmijeni salon
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.tab-pane -->
                    </div>
                    <!-- /.tab-content -->
                </div><!-- /.card-body -->
            </div>
            <!-- /.nav-tabs-custom -->
        </div>
        <!-- /.col -->

        <!--        <div class="col-md-12">-->

        <!--            &lt;!&ndash; Profile Image &ndash;&gt;-->
        <!--            <div class="card card-primary card-outline">-->
        <!--                <div class="card-body box-profile">-->
        <!--                    <div class="text-center">-->
        <!--                        <img class="profile-user-img img-fluid img-circle" :src="getProfilePhoto()"-->
        <!--                             alt="User profile picture">-->
        <!--                    </div>-->

        <!--                    <h3 class="profile-username text-center"></h3>-->

        <!--                    <p class="text-muted text-center"></p>-->

        <!--                    <ul class="list-group list-group-unbordered mb-3">-->
        <!--                        <li class="list-group-item">-->
        <!--                            <b>Followers</b> <a class="float-right">1,322</a>-->
        <!--                        </li>-->
        <!--                        <li class="list-group-item">-->
        <!--                            <b>Following</b> <a class="float-right">543</a>-->
        <!--                        </li>-->
        <!--                        <li class="list-group-item">-->
        <!--                            <b>Friends</b> <a class="float-right">13,287</a>-->
        <!--                        </li>-->
        <!--                    </ul>-->

        <!--                    <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>-->
        <!--                </div>-->
        <!--                &lt;!&ndash; /.card-body &ndash;&gt;-->
        <!--            </div>-->
        <!--            &lt;!&ndash; /.card &ndash;&gt;-->

        <!--        </div>-->


        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Dodajte radne sate</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="container">

                            <label style="position: relative;left: -15px;">Radni dani</label>


                            <div class="form-group row d-flex flex-nowrap">
                                <div class="input-group date" id="workdaysOpen" data-target-input="nearest">
                                    <input :disabled="labels.workdaysDelete" name="workdaysOpen"
                                           v-model="workHoursForm.workdaysOpen"
                                           :class="{ 'is-invalid': workHoursForm.errors.has('workdaysOpen') }"
                                           type="text" class="form-control datetimepicker-input"
                                           data-target="#workdaysOpen"/>
                                    <div class="input-group-append" data-target="#workdaysOpen"
                                         data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="far fa-clock"></i></div>
                                    </div>
                                    <has-error :form="workHoursForm" field="workdaysOpen"></has-error>
                                </div>

                                <label class="m-auto pl-2 pr-2">-</label>
                                <div class="input-group date" id="workdaysClose" data-target-input="nearest">
                                    <input :disabled="labels.workdaysDelete" name="workdaysClose"
                                           v-model="workHoursForm.workdaysClose"
                                           :class="{ 'is-invalid': workHoursForm.errors.has('workdaysClose') }"
                                           type="text" class="form-control datetimepicker-input"
                                           data-target="#workdaysClose"/>
                                    <div class="input-group-append" data-target="#workdaysClose"
                                         data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="far fa-clock"></i></div>
                                    </div>
                                    <has-error :form="workHoursForm" field="workdaysClose"></has-error>
                                </div>
                            </div>

                            <div class="form-group row d-flex flex-nowrap">
                                <label for="workdaysDelete">Zatvoreno</label>
                                <input type="checkbox" class="mt-1 ml-1" v-model="labels.workdaysDelete"
                                       name="workdaysDelete" id="workdaysDelete"/>
                            </div>

                            <label style="position: relative;left: -15px;">Subota</label>
                            <div class="form-group row d-flex flex-nowrap">
                                <div class="input-group date" id="saturdayOpen" data-target-input="nearest">
                                    <input :disabled="labels.saturdayDelete" name="saturdayOpen"
                                           v-model="workHoursForm.saturdayOpen"
                                           :class="{ 'is-invalid': workHoursForm.errors.has('saturdayOpen') }"
                                           type="text" class="form-control datetimepicker-input"
                                           data-target="#saturdayOpen"/>
                                    <div class="input-group-append" data-target="#saturdayOpen"
                                         data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="far fa-clock"></i></div>
                                    </div>
                                    <has-error :form="workHoursForm" field="saturdayOpen"></has-error>
                                </div>
                                <label class="m-auto pl-2 pr-2">-</label>
                                <div class="input-group date" id="saturdayClose" data-target-input="nearest">
                                    <input :disabled="labels.saturdayDelete" name="saturdayClose"
                                           v-model="workHoursForm.saturdayClose"
                                           :class="{ 'is-invalid': workHoursForm.errors.has('saturdayClose') }"
                                           type="text" class="form-control datetimepicker-input"
                                           data-target="#saturdayClose"/>
                                    <div class="input-group-append" data-target="#saturdayClose"
                                         data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="far fa-clock"></i></div>
                                    </div>
                                    <has-error :form="workHoursForm" field="saturdayClose"></has-error>
                                </div>
                            </div>

                            <div class="form-group row d-flex flex-nowrap">
                                <label for="saturdayDelete">Zatvoreno</label>
                                <input type="checkbox" class="mt-1 ml-1" v-model="labels.saturdayDelete"
                                       name="saturdayDelete" id="saturdayDelete"/>
                            </div>

                            <label style="position: relative;left: -15px;">Nedelja</label>
                            <div class="form-group row d-flex flex-nowrap">
                                <div class="input-group date" id="sundayOpen" data-target-input="nearest">
                                    <input :disabled="labels.sundayDelete" name="sundayOpen"
                                           v-model="workHoursForm.sundayOpen"
                                           :class="{ 'is-invalid': workHoursForm.errors.has('sundayOpen') }" type="text"
                                           class="form-control datetimepicker-input" data-target="#sundayOpen"/>
                                    <div class="input-group-append" data-target="#sundayOpen"
                                         data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="far fa-clock"></i></div>
                                    </div>
                                    <has-error :form="workHoursForm" field="sundayOpen"></has-error>
                                </div>
                                <label for="sundayClose" class="m-auto pl-2 pr-2">-</label>
                                <div class="input-group date" id="sundayClose" data-target-input="nearest">
                                    <input :disabled="labels.sundayDelete" name="sundayClose"
                                           v-model="workHoursForm.sundayClose"
                                           :class="{ 'is-invalid': workHoursForm.errors.has('sundayClose') }"
                                           type="text" class="form-control datetimepicker-input"
                                           data-target="#sundayClose"/>
                                    <div class="input-group-append" data-target="#sundayClose"
                                         data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="far fa-clock"></i></div>
                                    </div>
                                    <has-error :form="workHoursForm" field="sundayClose"></has-error>
                                </div>
                            </div>

                            <div class="form-group row d-flex flex-nowrap">
                                <label for="sundayDelete">Zatvoreno</label>
                                <input type="checkbox" class="mt-1 ml-1" v-model="labels.sundayDelete"
                                       name="sundayDelete" id="sundayDelete"/>
                            </div>


                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Odustani</button>
                        <button type="button" class="btn btn-primary" @click.prevent="updateWorkHours">Sačuvaj</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueUploadMultipleImage from 'vue-upload-multiple-image';
    import {serialize} from 'object-to-formdata';

    export default {
        components: {
            VueUploadMultipleImage,
        },
        data() {
            return {
                button: {
                    loading: false,
                    'dataStyle': 'expand-left',
                    progress: 0,
                },
                attachments: [],
                labels: {
                    workdaysDelete: false,
                    saturdayDelete: false,
                    sundayDelete: false,
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
                    images: [],
                }),
                workHoursForm: new Form({
                    workdaysOpen: "",
                    workdaysClose: "",
                    saturdayOpen: "",
                    saturdayClose: "",
                    sundayOpen: "",
                    sundayClose: "",
                }),
            }
        },
        methods: {
            updateSalon() {
                this.$Progress.start();
                if (this.attachments.length > 0) {
                    for (let i = 0; i < this.attachments.length; i++) {
                        this.salonForm.images.push(this.attachments[i]);
                    }

                }
                let textareaValue = $('#summernote').summernote('code');
                this.salonForm.description = textareaValue;
                this.salonForm.submit('post', `api/salons/put/${this.salonForm.id}`, {
                    // Transform form data to FormData
                    transformRequest: [function (data, headers) {
                        const formData = serialize(
                            data
                        );
                        return formData;
                    }]
                }).then((response) => {
                    this.$Progress.finish();
                    swal.fire({
                        title: 'Odlično!',
                        text: 'Uspješno ste ažurirali Vaš salon',
                        icon: "success",
                        confirmButtonText: "U redu",
                    }).then(() => {
                        window.location.reload();
                    });
                }).catch(error => {
                    this.$Progress.fail();
                    console.log(error);
                });
            },

            fieldChange(e) {
                let selectedFiles = e.target.files;
                if (!selectedFiles.length) {
                    return false;
                }
                for (let i = 0; i < selectedFiles.length; i++) {
                    this.attachments.push(selectedFiles[i]);
                }
                console.log(this.attachments);
            },

            updateWorkHours() {
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


                this.workHoursForm.put(`api/workhours/${this.salonForm.id}`).then((response) => {
                    toast.fire({
                        icon: "success",
                        title: "Salon updated successfully"
                    });
                    this.$Progress.finish();
                }).catch(error => {
                    this.$Progress.fail();
                    console.log(error);
                });
            },


            loadUserProfile() {
                axios.get("/api/profile").then(({data}) => {
                    this.form.fill(data.user);
                    this.form.nameSurname = data.user.name;
                    this.salonForm.fill(data.salon);
                    this.salonForm.images = [];
                    $('#summernote').summernote('code', this.salonForm.description);
                    this.workHoursForm.workdaysOpen = moment(data.salon.workdaysOpen, "HH:mm").format("LT");
                    this.workHoursForm.workdaysClose = moment(data.salon.workdaysClose, "HH:mm").format("LT");
                    this.workHoursForm.saturdayOpen = moment(data.salon.saturdayOpen, "HH:mm").format("LT");
                    this.workHoursForm.saturdayClose = moment(data.salon.saturdayClose, "HH:mm").format("LT");
                    this.workHoursForm.sundayOpen = moment(data.salon.sundayOpen, "HH:mm").format("LT");
                    this.workHoursForm.sundayClose = moment(data.salon.sundayClose, "HH:mm").format("LT");
                });
            },
            getProfilePhoto() {
                let photo = (this.form.photo.length > 200) ? this.form.photo : "img/profile/" + this.form.photo;
                return photo;
            },
            updatePhoto(e) {
                let file = e.target.files[0];
                let reader = new FileReader();

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
                    reader.onloadend = file => {
                        this.form.photo = reader.result;
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
            updateProfile() {
                this.button.loading = true;
                this.$Progress.start();
                this.form.put(`api/profile`).then(() => {
                    this.button.loading = false;
                    toast.fire({
                        icon: "success",
                        title: "Uspješno ste ažurirali svoj profil!"
                    });
                    this.$Progress.finish();
                }).catch(error => {
                    this.button.loading = false;
                    this.$Progress.fail();
                    if (error.response.status === 500) {
                        toast.fire({
                            icon: 'error',
                            title: "Server trenutno nije u stanju da odgovori na zahtjev.",
                        });
                    }
                    if (error.response.status === 422) {
                        toast.fire({
                            icon: 'error',
                            title: "Molimo Vas da ispunite svoje podatke pravilno!",
                        });
                    }
                });
            },

        },
        created() {
            this.loadUserProfile();
        },
        mounted() {
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
                handler(oldVal, newVal) {
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
                },
            },
        }
    }
</script>

<style>
    #my-strictly-unique-vue-upload-multiple-image {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 20px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>