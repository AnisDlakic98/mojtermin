<template>
    <div class="row">
        <div class="col-md-3">

            <!-- Profile Image -->
            <div class="card card-primary card-outline">
                <div class="card-body box-profile">
                    <div class="text-center">
                        <img class="profile-user-img img-fluid img-circle" :src="getProfilePhoto()"
                             alt="User profile picture">
                    </div>

                    <h3 class="profile-username text-center"></h3>

                    <p class="text-muted text-center"></p>

                    <ul class="list-group list-group-unbordered mb-3">
                        <li class="list-group-item">
                            <b>Followers</b> <a class="float-right">1,322</a>
                        </li>
                        <li class="list-group-item">
                            <b>Following</b> <a class="float-right">543</a>
                        </li>
                        <li class="list-group-item">
                            <b>Friends</b> <a class="float-right">13,287</a>
                        </li>
                    </ul>

                    <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->

        </div>
        <!-- /.col -->
        <div class="col-md-9">
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
                                    <label for="name" class="col-sm-2 col-form-label">Ime i prezime:</label>
                                    <div class="col-sm-10">
                                        <input type="text"
                                               class="form-control"
                                               name="name"
                                               id="name"
                                               placeholder="Name"
                                               :class="{ 'is-invalid': form.errors.has('name') }"
                                               v-model="form.name"
                                        >
                                        <has-error :form="form" field="name"></has-error>
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
                                        <button type="submit" class="btn btn-success" @click.prevent="updateProfile">
                                            Izmijeni
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.tab-pane -->
                        <div class="tab-pane" id="timeline">
                            <form class="form-horizontal">
                                <div class="form-group row">
                                    <label for="name" class="col-sm-2 col-form-label">Naziv salona:</label>
                                    <div class="col-sm-10">
                                        <input type="text"
                                               class="form-control"
                                               name="name"
                                               id="name"
                                               placeholder="Naziv salona"
                                               :class="{ 'is-invalid': salonForm.errors.has('name') }"
                                               v-model="salonForm.name"
                                        >
                                        <has-error :form="salonForm" field="name"></has-error>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="description" class="col-sm-2 col-form-label">Opis salona:</label>
                                    <div class="col-sm-10">
                                         <textarea v-model="salonForm.description"
                                                   name="description"
                                                   id="description"
                                                   placeholder="Kratak opis salona..."
                                                   class="form-control"
                                                   :class="{'is-invalid': salonForm.errors.has('description')}"
                                         ></textarea>
                                        <has-error :form="salonForm" field="description"></has-error>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="address" class="col-sm-2 col-form-label">Adresa:</label>
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
                                    <label for="phone_number" class="col-sm-2 col-form-label">Broj telefona:</label>
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
                                    <label for="website" class="col-sm-2 col-form-label">Websajt:</label>
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
                                    <label for="stars" class="col-sm-2 col-form-label">Broj zvijezdica:</label>
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
                                        <label for="latitude" class="col-form-label">Lokacija salona:</label>
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
    </div>
</template>

<script>
    export default {
        data() {
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
                    longitude: "",
                }),

            }
        },
        methods: {
            loadUserProfile(){
                axios.get("/api/profile").then(({data}) => {
                    this.form.fill(data.user);
                    this.salonForm.fill(data.salon);
                    console.log(data);
                });
            },
            getProfilePhoto() {
                let photo = (this.form.photo.length > 200) ? this.form.photo : "img/profile/" + this.form.photo;
                return photo;
            },
            updatePhoto(e) {
                let file = e.target.files[0];
                let reader = new FileReader();

                if (file['size'] < 2000000) {
                    reader.onloadend = file => {
                        // console.log(reader.result);
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
            updateSalon(){
                this.$Progress.start();
            },
            updateProfile() {
                this.$Progress.start();
                this.form.put(`api/profile`).then(() => {
                    toast.fire({
                        icon: "success",
                        title: "User updated successfully"
                    });
                    this.$Progress.finish();
                }).catch(error => {
                    this.$Progress.fail();
                    console.log(error);
                });
            },
        },
        created() {
            this.loadUserProfile();
        },
    }
</script>
