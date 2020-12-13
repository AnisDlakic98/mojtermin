<template>
    <div class="row" id="usersManagment">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Moji komentari</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                    <table class="table table-hover text-nowrap">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Komentar</th>
                            <th>Datum</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(comment, index) in comments" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ comment.comment }}</td>
                            <td>{{ comment.created_at | formatDate }}</td>
                            <td>
                                <button class="btn btn-warning modify-btn mr-2" @click="openModalForEdit(comment)">
                                    Izmijeni <i class="fa fa-edit"></i>
                                </button>
                                <button class="btn btn-danger modify-btn" @click="deleteService(comment.id)">
                                    Obriši <i class="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>

        <div class="modal fade" id="servicesModal" tabindex="-1" role="dialog" aria-labelledby="servicesModal"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="servicesModal">
                            {{ editMode ? "Izmijeni komentar" : "Dodaj novu uslugu" }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editMode ? updateService() : createService()">
                        <div class="modal-body">
                            <!-- Name Input -->
                            <div class="form-group">
                                <label>Komentar</label>
                                <input v-model="form.comment"
                                       type="text" name="comment"
                                       placeholder="Komentar"
                                       class="form-control"
                                       :class="{ 'is-invalid': form.errors.has('comment') }">
                                <has-error :form="form" field="comment"></has-error>
                            </div>

                            <div class="form-group">
                                <label>Datum</label>
                                <input v-model="form.created_at" type="text" name="created_at" class="form-control"
                                       disabled/>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Odustani</button>
                            <button type="submit" class="btn" :class="[ editMode ? 'btn-success' : 'btn-primary' ]">
                                {{ editMode ? "Izmijeni" : "Dodaj" }}
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
        data() {
            return {
                user: {},
                comments: [],
                editMode: false,
                form: new Form({
                    id: "",
                    comment: "",
                    name: "",
                    email: "",
                    user_id: "",
                    created_at: "",
                })
            }
        },
        methods: {
            loadComments() {
                axios.get(`/api/comments/${this.user.id}`).then((response) => {
                    this.comments = response.data[1];
                }).catch((error) => {
                    if (error.response.status === 500) {
                        Swal.fire({
                            icon: 'error',
                            title: "Greška 500",
                            text: "Server trenutno nije u stanju da odgovori na zahtjev.",
                            confirmButtonText: "Nastavi"
                        });
                    }
                });
            },
            createService() {
                this.form.post(`/api/services/${this.user.salon_id}`).then((response) => {
                    $("#servicesModal").modal("hide");
                    toast.fire({
                        icon: "success",
                        title: "Uspješno dodavanje!"
                    });
                    Fire.$emit("refreshDataTable");
                }).catch(error => {
                    if (error.response.status === 500) {
                        Swal.fire({
                            icon: 'error',
                            title: "Greška 500",
                            text: "Server trenutno nije u stanju da odgovori na zahtjev.",
                            confirmButtonText: "Nastavi"
                        });
                    }
                });
            },
            updateService() {
                this.$Progress.start();
                this.form.put(`/api/comments/${this.form.id}`).then((response) => {
                    $("#addNewModal").modal("hide");
                    toast.fire({
                        icon: "success",
                        title: "Uspješna izmjena!"
                    });
                    Fire.$emit("refreshDataTable");
                    this.$Progress.finish();
                    window.location.reload();
                }).catch(error => {
                    this.$Progress.fail();
                    if (error.response.status === 500) {
                        Swal.fire({
                            icon: 'error',
                            title: "Greška 500",
                            text: "Server trenutno nije u stanju da odgovori na zahtjev.",
                            confirmButtonText: "Nastavi"
                        });
                    }
                });
            },
            deleteService(id) {
                swal.fire({
                    title: "Da li ste sigurni?",
                    text: "Nećete moći da povratite ovu akciju!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Da, obriši!"
                }).then(result => {
                    if (result.value) {
                        this.form.delete(`api/comments/${id}`).then((response) => {
                            swal.fire(
                                "Obrisano!",
                                "Uspješno brisanje",
                                "success"
                            );
                            Fire.$emit("refreshDataTable");
                        }).catch((error) => {
                            if (error.response.status === 500) {
                                Swal.fire({
                                    icon: 'error',
                                    title: "Greška 500",
                                    text: "Server trenutno nije u stanju da odgovori na zahtjev.",
                                    confirmButtonText: "Nastavi"
                                });
                            }
                        });
                    }
                });
            },
            openModalForCreate() {
                this.editMode = false;
                this.form.reset();
                $("#servicesModal").modal("show");
            },
            openModalForEdit(comment) {
                this.editMode = true;
                this.form.reset();
                $("#servicesModal").modal("show");
                this.form.fill(comment);
                this.form.created_at = this.$options.filters.formatDate(comment.created_at);
            },
        },
        mounted() {
            this.user = this.$gate.user;
            this.loadComments();
            Fire.$on("refreshDataTable", () => {
                this.loadComments();
            });
        }
    }
</script>
