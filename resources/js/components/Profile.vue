<template>
    <div class="row">
        <div class="col-md-3">

            <!-- Profile Image -->
            <div class="card card-primary card-outline">
                <div class="card-body box-profile">
                    <div class="text-center">
                        <img class="profile-user-img img-fluid img-circle" :src="getProfilePhoto()" alt="User profile picture">
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
                        <li class="nav-item"><a class="nav-link active" href="#settings" data-toggle="tab">Settings</a></li>
                        <li class="nav-item"><a class="nav-link" href="#timeline" data-toggle="tab">Activity</a></li>
                    </ul>
                </div><!-- /.card-header -->
                <div class="card-body">
                    <div class="tab-content">
                        <div class="tab-pane active" id="settings">
                            <form class="form-horizontal">
                                <div class="form-group row">
                                    <label for="name" class="col-sm-2 col-form-label">Name</label>
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
                                    <label for="bio" class="col-sm-2 col-form-label">Experience</label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control"
                                                  name="bio"
                                                  id="bio"
                                                  placeholder="Experience"
                                                  v-model="form.bio"
                                        ></textarea>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="photo" class="col-sm-2 col-form-label">Profile Photo</label>
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
                                    <label for="password" class="col-sm-2 col-form-label">Password</label>
                                    <div class="col-sm-10">
                                        <input type="password"
                                               class="form-control"
                                               name="password"
                                               id="password"
                                               placeholder="Password"
                                               :class="{ 'is-invalid': form.errors.has('password') }"
                                               v-model="form.password"
                                        >
                                        <has-error :form="form" field="password"></has-error>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="offset-sm-2 col-sm-10">
                                        <button type="submit" class="btn btn-success" @click.prevent="updateProfile">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.tab-pane -->
                        <div class="tab-pane" id="timeline">
                            nesto
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
        data(){
            return {
                form: new Form({
                    id: "",
                    name: "",
                    email: "",
                    password: "",
                    type: "",
                    bio: "",
                    photo: ""
                })
            }
        },
        methods: {
            getProfilePhoto(){
                let photo = (this.form.photo.length > 200) ? this.form.photo : "img/profile/"+ this.form.photo ;
                return photo;
            },
            updatePhoto(e) {
                let file = e.target.files[0];
                let reader = new FileReader();

                if(file['size'] < 2000000){
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
            updateProfile() {
                this.$Progress.start();
                this.form.put(`api/profile`).then(() => {
                    toast.fire({
                        icon: "success",
                        title: "User updated successfully"
                    });
                    this.$Progress.finish();
                })
                .catch(error => {
                    this.$Progress.fail();
                    console.log(error);
                });
            },
        },
        created() {
            axios.get("api/profile").then(({ data }) => this.form.fill(data));
        }
    }
</script>
