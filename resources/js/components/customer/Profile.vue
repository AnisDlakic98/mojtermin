<template>
    <div class="row">
        <div class="col-md-3">

            <!-- Profile Image -->
            <div class="card card-primary card-outline">
                <div class="card-body box-profile">
                    <div class="text-center">
                        <img class="profile-user-img img-circle" :src="getProfilePhoto()" alt="User profile picture">
                    </div>

                    <h3 class="profile-username text-center"></h3>

                    <p class="text-muted text-center"></p>

                    <ul class="list-group list-group-unbordered mb-3">
                        <li class="list-group-item">
                            <b>Br. zakazivanja:</b> <a class="float-right">{{ appointments.length }}</a>
                        </li>
                        <li class="list-group-item">
                            <b>Komentara</b> <a class="float-right">{{ comments.length }}</a>
                        </li>
                    </ul>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->

        </div>
        <div class="col-md-9 mx-auto">
            <div class="card">
                <div class="card-header p-2">
                    <ul class="nav nav-pills">
                        <li class="nav-item"><a class="nav-link active" href="#settings" data-toggle="tab">Korisnički detalji</a></li>
                    </ul>
                </div><!-- /.card-header -->
                <div class="card-body">
                    <div class="tab-content">
                        <div class="tab-pane active" id="settings">
                            <form class="form-horizontal">
                                <div class="form-group row">
                                    <label for="nameSurname" class="col-sm-2 col-form-label">Ime i prezime:</label>
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
                                    <label for="email" class="col-sm-2 col-form-label">Email</label>
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
                                        <button type="button" class="btn btn-success" @click.prevent="updateProfile">Izmijeni</button>
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                appointments: [],
                user: {},
                button: {
                    loading: false,
                    'dataStyle': 'expand-left',
                    progress: 0,
                },
                comments: [],
                form: new Form({
                    id: "",
                    nameSurname: "",
                    email: "",
                    password: "",
                    photo: ""
                }),
            }
        },
        methods: {
            loadUserProfile() {
                axios.get("/api/profile").then(({data}) => {
                    this.form.fill(data.user);
                    this.form.nameSurname = data.user.name;
                    this.appointments = data.appointments;
                });
            },
            getProfilePhoto() {
                if(this.form.photo === "profile.png") {
                    return "img/profile/user.svg";
                } else {
                    let photo = (this.form.photo.length > 200) ? this.form.photo : "img/profile/" + this.form.photo;
                    return photo;
                }
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
            loadComments() {
                axios.get(`/api/comments/${this.user.id}`).then((response) => {
                    this.comments = response.data[1];
                }).catch((error) => {
                    console.log(error);
                });
            },
        },
        mounted() {
            this.user = this.$gate.user;
            this.loadUserProfile();
            this.loadComments();
        },
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