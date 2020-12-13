<template>
    <div class="row" id="usersManagment">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Pitanja i odgovori</h3>

                    <div class="card-tools">
                        <div class="input-group input-group-sm">
                            <button class="btn btn-success" @click="openModalForCreate">
                                <i class="fas fa-list"></i>
                                Dodaj faq
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
                            <th>Naslov</th>
                            <th>Tekst</th>
                            <th>Akcije</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(faq, index) in faqs" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ faq.title }}</td>
                            <td>{{ faq.body }}</td>
                            <td>
                                <button class="btn btn-warning modify-btn mr-2" @click="openModalForEdit(faq)">Izmijeni <i class="fa fa-edit"></i></button>
                                <button class="btn btn-danger modify-btn" @click="deleteService(faq.id)">Obriši<i class="fa fa-trash"></i></button>
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
                            {{ editMode ? "Izmijeni faq" : "Dodaj novi faq" }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editMode ? updateService() : createService()">
                        <div class="modal-body">
                            <!-- Name Input -->
                            <div class="form-group">
                                <label>Naslov</label>
                                <input v-model="form.title"
                                       type="text" name="title"
                                       placeholder="Naslov *"
                                       class="form-control"
                                       :class="{ 'is-invalid': form.errors.has('title') }">
                                <has-error :form="form" field="title"></has-error>
                            </div>
                            <!-- Price Input -->
                            <div class="form-group">
                                <label>Tekst</label>
                                <textarea v-model="form.body" placeholder="Tekst"
                                       type="body" name="body" rows="5"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('body') }">
                                </textarea>
                                <has-error :form="form" field="body"></has-error>
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
                faqs: [],
                editMode: false,
                form: new Form({
                    id: "",
                    title: "",
                    body: "",
                })
            }
        },
        methods: {
            loadServices() {
                axios.get(`/api/faqs`).then((response) => {
                    this.faqs = response.data[1];
                }).catch((error) => {
                    console.log(error);
                });
            },
            createService() {
                this.form.post(`/api/faqs`).then((response) => {
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
                this.form.put(`/api/faqs/${this.form.id}`).then((response) => {
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
                        this.form.delete(`/api/faqs/${id}`).then((response) => {
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
