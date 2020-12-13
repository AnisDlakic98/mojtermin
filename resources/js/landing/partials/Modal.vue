<template>
    <div class="modal fade modal-fullscreen  footer-to-bottom" id="myModalFullscreen" tabindex="-1" role="dialog"
         aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="container d-flex justify-content-between">
                        <h4 class="my-auto">{{ form.salon_name }}</h4>
                        <div class="score-wrap my-auto ml-3">
                            <span class="stars-active" style="width:88%">
                                <i v-for="(star, index) in salon.stars" :key="index" class="fa fa-star" aria-hidden="true"></i>
                                <i v-if="salon.stars < 5" v-for="(star, index) in 5 - salon.stars" :key="index" class="fa fa-star dark" aria-hidden="true"></i>
                            </span>
                        </div>
                        <button type="button" class="close my-auto" data-dismiss="modal" aria-hidden="true">
                            <i class="far fa-times-circle" style="font-size: 40px"></i>
                        </button>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 mx-auto">
                                <form class="form-contact contact_form">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="hidden" v-model="form.user_id">
                                                <input type="hidden" v-model="form.salon_id">
                                                <img src="/img/mojtermin_logo_dark.png" class="w-25 d-flex mx-auto my-5" alt="mojtermin-logo">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Odaberite uslugu *</label>
                                                <select name="services" class="form-control" v-model="form.service_name">
                                                    <option v-for="service in salon.services" :value="service.name">{{ service.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Odaberite datum *</label>
                                                <datetime v-model="form.date" class="form-control p-0" :class="{ 'is-invalid': form.errors.has('date') }"></datetime>
                                                <has-error :form="form" field="date"></has-error>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Odaberite vrijeme *</label>
                                                <datetime type="time" v-model="form.time" class="form-control p-0" :class="{ 'is-invalid': form.errors.has('time') }"></datetime>
                                                <has-error :form="form" field="time"></has-error>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Poruka (opciono)</label>
                                                <textarea v-model="form.message" class="form-control" rows="5" name="message" placeholder="Poruka (opciono)"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="container d-flex justify-content-end">
                        <vue-ladda id="laddaBtn"
                                   @click.prevent="makeAppointment"
                                   class="bbtn btn-transparent mt-3"
                                   :class="{ 'disabled' : button.loading }"
                                   :loading="button.loading"
                                   :data-style="button.dataStyle"
                                   :progress="button.progress">Potvrdi zakazivanje
                        </vue-ladda>
                    </div>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script>
    export default {
        props: ['salon'],
        data() {
            return {
                form: new Form({
                    salon_id: "",
                    user_id: "",
                    date: "",
                    time: "",
                    salon_name: this.salon.name,
                    service_name: "",
                    message: "",
                }),
                button: {
                    loading: false,
                    'dataStyle': 'expand-left',
                    progress: 0,
                },
            }
        },
        methods: {
            makeAppointment() {
                this.button.loading = true;
                if(this.form.date !== "" && this.form.time !== "") {
                    this.form.date = this.$options.filters.formatDate2(this.form.date);
                    this.form.time = this.$options.filters.formatTime(this.form.time);
                }

                this.form.post('/api/appointments').then(({data}) => {
                    Swal.fire({
                        icon: 'success',
                        title: "Odlično!",
                        text: "Uspješno ste zakazali termin.",
                        confirmButtonText: "Nastavi"
                    }).then(() => {
                        window.location.reload();
                    });
                    this.button.loading = false;
                }).catch((error) => {
                    this.button.loading = false;
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
        },
        mounted() {
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes();
            this.form.date = this.$options.filters.formatDate2(date);
            this.form.time = "01:00";
            this.form.service_name = this.salon.services[0].name;
            this.form.user_id = this.$gate.user.id;
            this.form.salon_id = this.salon.id;
        }

    }
</script>

