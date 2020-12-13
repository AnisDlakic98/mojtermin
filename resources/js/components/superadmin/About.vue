<template>
    <div class="row" id="usersManagment">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">O Nama</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                    <table class="table table-hover text-nowrap">
                        <thead>
                        <tr>
                            <th>Naslov</th>
                            <th>Podnaslov</th>
                            <th>Akcije</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in about" :key="index">
                            <td>{{ item.title }}</td>
                            <td>{{ item.subtitle }}</td>
                            <td>
                                <button class="btn btn-warning modify-btn mr-2" @click="openModalForEdit(item)">
                                    Izmijeni <i class="fa fa-edit"></i>
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
                            {{ editMode ? "Izmijeni testimonijal" : "Dodaj novi testimonijal" }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Odustani">
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
                                       placeholder="Naslov"
                                       class="form-control"
                                       :class="{ 'is-invalid': form.errors.has('title') }">
                                <has-error :form="form" field="title"></has-error>
                            </div>
                            <!-- Price Input -->
                            <div class="form-group">
                                <label>Podnaslov</label>
                                <textarea v-model="form.subtitle" id="summernote"><p>Hello Summernote</p></textarea>
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
                about: [],
                editMode: false,
                form: new Form({
                    id: "",
                    title: "",
                    subtitle: "",
                })
            }
        },
        methods: {
            loadServices() {
                axios.get(`/api/about`).then((response) => {
                    this.about = response.data[1];
                    $('#summernote').summernote('code', response.data[1][0].subtitle);
                }).catch((error) => {
                    console.log(error);
                });
            },
            updateService() {
                this.$Progress.start();
                let textareaValue = $('#summernote').summernote('code');
                this.form.subtitle = textareaValue;
                this.form.put(`/api/about/${this.form.id}`).then((response) => {
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
            $('#summernote').summernote({
                height: 200
            });
            this.loadServices();

            Fire.$on("refreshDataTable", () => {
                this.loadServices();
            });
        }
    }
</script>
