<template>
    <div class="row" id="usersManagment">
        <div class="col-12">
            <div v-if="services.length === 0" class="data-not-found d-flex justify-content-center">
                <div class="m-auto">
                    <img src="/img/broke.svg" class="w-50 mx-auto d-block tex-center" alt="">
                    <h2 class="mt-3 text-center">Nemate dodatih usluga!</h2>
                </div>
                <div class="card-tools">
                    <div class="input-group input-group-sm">
                        <button class="btn btn-success" @click="openModalForCreate">
                            <i class="fas fa-list"></i>
                            Dodaj uslugu
                        </button>
                    </div>
                </div>
            </div>

            <div v-else class="card">
                <div class="card-header">
                    <h3 class="card-title">Usluge</h3>

                    <div class="card-tools">
                        <div class="input-group input-group-sm">
                            <button class="btn btn-success" @click="openModalForCreate">
                                <i class="fas fa-list"></i>
                                Dodaj uslugu
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
                            <th>Naziv usluge</th>
                            <th>Cijena usluge</th>
                            <th>Trajanje</th>
                            <th>Izmjene</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(service, index) in services" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ service.name }}</td>
                            <td>{{ service.price }}</td>
                            <td>{{ service.duration | upperText }}</td>
                            <td>
                                <button class="btn btn-warning modify-btn mr-2" @click="openModalForEdit(service)">Izmijeni <i class="fa fa-edit"></i></button>
                                <button class="btn btn-danger modify-btn" @click="deleteService(service.id)">Obriši <i class="fa fa-trash"></i></button>
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
                            {{ editMode ? "Izmijeni uslugu" : "Dodaj novu uslugu" }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editMode ? updateService() : createService()">
                        <div class="modal-body">
                            <!-- Name Input -->
                            <div class="form-group">
                                <label>Naziv usluge</label>
                                <input v-model="form.name"
                                       type="text" name="name"
                                       placeholder="Naziv usluge"
                                       class="form-control"
                                       :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <!-- Price Input -->
                            <div class="form-group">
                                <label>Cijena</label>
                                <input v-model="form.price"
                                       type="text" name="price"
                                       placeholder="Cijena"
                                       class="form-control"
                                       :class="{ 'is-invalid': form.errors.has('price') }">
                                <has-error :form="form" field="price"></has-error>
                            </div>
                            <!-- Price Input -->
                            <div class="form-group">
                                <label>Trajanje</label>
                                <select name="type"
                                        v-model="form.duration"
                                        id="duration"
                                        class="form-control"
                                        :class="{'is-invalid': form.errors.has('duration')}"
                                >
                                    <option value="5">5min</option>
                                    <option value="10">10min</option>
                                    <option value="15">15min</option>
                                    <option value="20">20min</option>
                                    <option value="25">25min</option>
                                    <option value="30">30min</option>
                                    <option value="35">35min</option>
                                    <option value="40">40min</option>
                                    <option value="45">45min</option>
                                    <option value="50">50min</option>
                                    <option value="55">55min</option>
                                    <option value="60">1h</option>
                                    <option value="65">1h 5min</option>
                                    <option value="70">1h 10min</option>
                                    <option value="75">1h 15min</option>
                                    <option value="80">1h 20min</option>
                                    <option value="85">1h 25min</option>
                                    <option value="90">1h 30min</option>
                                    <option value="95">1h 35min</option>
                                    <option value="100">1h 40min</option>
                                    <option value="105">1h 45min</option>
                                    <option value="110">1h 50min</option>
                                    <option value="115">1h 55min</option>
                                    <option value="120">2h</option>
                                    <option value="135">2h 15min</option>
                                    <option value="150">2h 30min</option>
                                    <option value="165">2h 45min</option>
                                    <option value="180">3h</option>
                                    <option value="195">3h 15min</option>
                                    <option value="210">3h 30min</option>
                                    <option value="225">3h 45min</option>
                                    <option value="240">4h</option>
                                    <option value="270">4h 30min</option>
                                    <option value="300">5h</option>
                                    <option value="330">5h 30min</option>
                                    <option value="360">6h</option>
                                    <option value="390">6h 30min</option>
                                    <option value="420">7h</option>
                                    <option value="450">7h 30min</option>
                                    <option value="480">8h</option>
                                    <option value="540">9h</option>
                                    <option value="600">10h</option>
                                    <option value="660">11h</option>
                                    <option value="720">12h</option>
                                </select>
                                <has-error :form="form" field="duration"></has-error>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Odustani</button>
                            <button
                                    type="submit"
                                    class="btn"
                                    :class="[
                                                editMode ? 'btn-success' : 'btn-primary'
                                            ]"
                            >
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
                services: [],
                editMode: false,
                form: new Form({
                    duration: 5,
                    id: "",
                    name: "",
                    price: "",
                })
            }
        },
        methods: {
            loadServices() {
                axios.get(`/api/services/${this.user.id}`).then((response) => {
                    this.services = response.data[1];
                }).catch((error) => {
                    console.log(error);
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
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                });
            },
            updateService() {
                this.$Progress.start();
                this.form.put(`/api/services/${this.form.id}`).then((response) => {
                    $("#addNewModal").modal("hide");
                    toast.fire({
                        icon: "success",
                        title: "Uspješna izmjena!"
                    });
                    Fire.$emit("refreshDataTable");
                    this.$Progress.finish();
                    console.log(response);
                })
                    .catch(error => {
                        this.$Progress.fail();
                        console.log(error);
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
                    cancelButtonText: "Odustani",
                    confirmButtonText: "Da, obriši!"
                }).then(result => {
                    if (result.value) {
                        this.form.delete(`api/services/${id}`).then((response) => {
                            swal.fire(
                                "Obrisano!",
                                "Uspješno brisanje",
                                "success"
                            );
                            Fire.$emit("refreshDataTable");
                            console.log(response);
                        }).catch((error) => {
                            console.log(error);
                        });
                    }
                });
            },
            openModalForCreate() {
                this.editMode = false;
                this.form.reset();
                $("#servicesModal").modal("show");
            },
            openModalForEdit(service) {
                this.editMode = true;
                this.form.reset();
                $("#servicesModal").modal("show");
                this.form.fill(service);
            },
        },
        mounted() {
            this.user = this.$gate.user;
            this.loadServices();

            Fire.$on("refreshDataTable", () => {
                this.loadServices();
            });
        }
    }
</script>
