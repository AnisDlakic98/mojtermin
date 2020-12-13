<template>
    <div class="row" id="usersManagment">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Testimonijali</h3>

                    <div class="card-tools">
                        <div class="input-group input-group-sm">
                            <button class="btn btn-success" @click="openModalForCreate">
                                <i class="fas fa-list"></i>
                                Dodaj testimonijal
                            </button>
                        </div>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                    <table class="table table-hover text-nowrap">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Autor</th>
                            <th>Tekst</th>
                            <th>Br. zvijezdica</th>
                            <th>Akcije</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(testimonial, index) in testimonials" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ testimonial.author }}</td>
                            <td>{{ testimonial.text }}</td>
                            <td>{{ testimonial.stars }}</td>
                            <td>
                                <button class="btn btn-warning modify-btn mr-2" @click="openModalForEdit(testimonial)">
                                    Izmijeni <i class="fa fa-edit"></i></button>
                                <button class="btn btn-danger modify-btn" @click="deleteService(testimonial.id)">Obriši
                                    <i class="fa fa-trash"></i></button>
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
                            {{ editMode ? "Izmijeni testimonijal" : "Dodaj novi testimonijal" }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editMode ? updateService() : createService()">
                        <div class="modal-body">
                            <!-- Name Input -->
                            <div class="form-group">
                                <label>Autor</label>
                                <input v-model="form.author"
                                       type="text" name="author"
                                       placeholder="Autor"
                                       class="form-control"
                                       :class="{ 'is-invalid': form.errors.has('author') }">
                                <has-error :form="form" field="author"></has-error>
                            </div>
                            <!-- Price Input -->
                            <div class="form-group">
                                <label>Tekst</label>
                                <textarea v-model="form.text"
                                       type="text" name="text" rows="5"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('text') }">
                                </textarea>
                                <has-error :form="form" field="text"></has-error>
                            </div>
                            <!-- Price Input -->
                            <div class="form-group">
                                <label>Br. zvjezdica</label>
                                <input v-model="form.stars"
                                       type="text" name="stars"
                                       placeholder="Br. zvjezdica"
                                       class="form-control"
                                       :class="{ 'is-invalid': form.errors.has('stars') }">
                                <has-error :form="form" field="stars"></has-error>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
                testimonials: [],
                editMode: false,
                form: new Form({
                    id: "",
                    author: "",
                    text: "",
                    stars: "",
                })
            }
        },
        methods: {
            loadServices() {
                axios.get(`/api/testimonials`).then((response) => {
                    this.testimonials = response.data[1];
                }).catch((error) => {
                    console.log(error);
                });
            },
            createService() {
                this.form.post(`/api/testimonials`).then((response) => {
                    $("#servicesModal").modal("hide");
                    toast.fire({
                        icon: "success",
                        title: "Uspješno dodavanje!"
                    });
                    Fire.$emit("refreshDataTable");
                }).catch(error => {
                });
            },
            updateService() {
                this.$Progress.start();
                this.form.put(`/api/testimonials/${this.form.id}`).then((response) => {
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
                        this.form.delete(`/api/testimonials/${id}`).then((response) => {
                            swal.fire(
                                "Obrisano!",
                                "Uspješno brisanje",
                                "success"
                            );
                            Fire.$emit("refreshDataTable");
                        }).catch((error) => {
                            console.log(error)
                        });
                    }
                });
            },
            openModalForCreate() {
                this.editMode = false;
                this.form.reset();
                $("#servicesModal").modal("show");
            },
            openModalForEdit(testimonial) {
                this.editMode = true;
                this.form.reset();
                $("#servicesModal").modal("show");
                this.form.fill(testimonial);
            },
        },
        mounted() {
            this.loadServices();
            Fire.$on("refreshDataTable", () => {
                this.loadServices();
            });
        }
    }
</script>
