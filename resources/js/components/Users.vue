<template>
    <div class="row" id="usersManagment">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Users Managment</h3>

                    <div class="card-tools">
                        <div class="input-group input-group-sm">
                            <button class="btn btn-success" @click="openModalForCreate">Add New <i class="fas fa-user-plus"></i></button>
                        </div>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                    <table class="table table-hover text-nowrap">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Modify</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(user, index) in users" :key="index">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.type | upperText }}</td>
                            <td>{{ user.created_at | formatDate }}
                            <td>
                                <button class="modify-btn" @click="openModalForEdit(user)">Edit <i class="fa fa-edit"></i></button>
                                <button class="modify-btn" @click="deleteUser(user.id)">Delete <i class="fa fa-trash"></i></button>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>

        <!-- Modal -->
        <div class="modal fade" id="usersModal" tabindex="-1" role="dialog" aria-labelledby="usersModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="usersModalLabel">
                            {{ editMode ? "Edit User" : "Add New User" }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editMode ? updateUser() : createUser()">
                        <div class="modal-body">
                            <!-- Name Input -->
                            <div class="form-group">
                                <label>Name</label>
                                <input v-model="form.name"
                                       type="text" name="name"
                                       placeholder="Name"
                                       class="form-control"
                                       :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>

                            <!-- Email Input -->
                            <div class="form-group">
                                <label>Email</label>
                                <input v-model="form.email"
                                       type="text" name="email"
                                       placeholder="Email Address"
                                       class="form-control"
                                       :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
                            </div>

                            <!-- Bio Input -->
                            <div class="form-group">
                                <textarea v-model="form.bio"
                                        name="bio"
                                        id="bio"
                                        placeholder="Short bio for user (Optional)"
                                        class="form-control"
                                        :class="{
                                        'is-invalid': form.errors.has('bio')
                                    }"
                                ></textarea>
                                <has-error :form="form" field="bio"></has-error>
                            </div>

                            <!-- Role Input -->
                            <div class="form-group">
                                <select name="type"
                                        v-model="form.type"
                                        id="type"
                                        class="form-control"
                                        :class="{
                                                'is-invalid': form.errors.has(
                                                    'type'
                                                )
                                            }"
                                >
                                    <option value="">Select User Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">Standard User</option>
                                    <option value="author">Author</option>
                                </select>
                                <has-error :form="form" field="type"></has-error>
                            </div>

                            <!-- Password Input -->
                            <div class="form-group">
                                <input v-model="form.password"
                                        type="password"
                                        name="password"
                                        id="password"
                                        class="form-control"
                                        :class="{
                                                'is-invalid': form.errors.has(
                                                    'password'
                                                )
                                            }"
                                />
                                <has-error :form="form" field="password"></has-error>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button
                                    type="submit"
                                    class="btn"
                                    :class="[
                                        editMode ? 'btn-success' : 'btn-primary'
                                    ]"
                            >
                                {{ editMode ? "Edit" : "Create" }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                users: [],
                editMode: false,
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
            loadUsers() {
                if(this.$gate.isAdmin()){
                    this.$Progress.start();
                    axios.get("api/user").then(
                        data => {
                            this.users = data.data.data;
                            this.$Progress.finish();
                        },
                        error => {
                            console.log(error);
                            this.$Progress.fail();
                        }
                    );
                }
            },
            createUser() {
                this.form.post("api/user").then(() => {
                        $("#usersModal").modal("hide");
                        toast.fire({
                            icon: "success",
                            title: "User created successfully"
                        });
                        Fire.$emit("refreshDataTable");
                    })
                    .catch(error => {
                        console.log("greska u dodavanju");
                    });
            },
            updateUser() {
                this.$Progress.start();
                this.form.put(`api/user/${this.form.id}`).then(() => {
                    $("#addNewModal").modal("hide");
                    toast.fire({
                        icon: "success",
                        title: "User updated successfully"
                    });
                    Fire.$emit("refreshDataTable");
                    this.$Progress.finish();
                })
                .catch(error => {
                    this.$Progress.fail();
                    console.log(error);
                });
            },
            deleteUser(id) {
                swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then(result => {
                    if (result.value) {
                        this.form.delete(`api/user/${id}`).then(() => {
                            swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                            );
                            Fire.$emit("refreshDataTable");
                        });
                    }
                });
            },
            openModalForCreate(){
                this.editMode = false;
                this.form.reset();
                $("#usersModal").modal("show");
            },
            openModalForEdit(user) {
                this.editMode = true;
                this.form.reset();
                $("#usersModal").modal("show");
                this.form.fill(user); // vform f-je
            },
        },
        created() {
            this.loadUsers();
            Fire.$on("refreshDataTable", () => {
                this.loadUsers();
            });
        }
    }
</script>
