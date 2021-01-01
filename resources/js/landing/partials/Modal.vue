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
                                <i v-for="(star, index) in salon.stars" class="fa fa-star" aria-hidden="true"></i>
                                <i v-if="salon.stars < 5" v-for="(star, index) in 5 - salon.stars"
                                   class="fa fa-star dark" aria-hidden="true"></i>
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
                                                <a href="/"><img src="/img/mojtermin_logo_dark.png" class="w-25 d-flex mx-auto my-5"
                                                                 alt="mojtermin-logo"></a>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Odaberite uslugu *</label>
                                                <select name="services" class="form-control"
                                                        v-model="form.service_name">
                                                    <option v-for="service in salon.services" :value="service.name">{{
                                                        service.name }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Odaberite datum *</label>
                                                <vue-ctk-date-time-picker
                                                        v-model="form.date"
                                                        label="Datum"
                                                        :onlyDate="true"
                                                        :noButtonNow="true"
                                                        :noClearButton="true"
                                                        format="YYYY-MM-DD"
                                                        formatted="YYYY-MM-DD">
                                                </vue-ctk-date-time-picker>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Odaberite vrijeme *</label>
                                                <vue-ctk-date-time-picker
                                                        v-model="form.time"
                                                        label="Vrijeme"
                                                        :disabled-hours="disabledHours"
                                                        :onlyTime="true"
                                                        :noClearButton="true"
                                                        format="HH:mm"
                                                        formatted="YHH:mm">
                                                </vue-ctk-date-time-picker>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Kontakt telefon *</label>
                                                <input type="text" name="contact_phone" class="form-control"
                                                       placeholder="+382" v-model="form.contact_phone"
                                                       :class="{ 'is-invalid': form.errors.has('contact_phone') }">
                                                <has-error :form="form" field="contact_phone"></has-error>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Poruka (opciono)</label>
                                                <textarea v-model="form.message" class="form-control" rows="5"
                                                          name="message" placeholder="Poruka (opciono)"></textarea>
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
                disabledDates: [],
                disabledHours: [],
                form: new Form({
                    salon_id: "",
                    user_id: "",
                    date: "",
                    time: "",
                    salon_name: this.salon.name,
                    service_name: "",
                    message: "",
                    contact_phone: "",
                }),
                form1: new Form({
                   date: "2020-12-10",
                }),
                button: {
                    loading: false,
                    'dataStyle': 'expand-left',
                    progress: 0,
                },
            }
        },
        methods: {
            checkAvaiableTimeByDate() {
                axios.get(`/api/appointment/avaiable/${this.form1.date}`).then(({data}) => {
                    this.disabledHours = [];
                    if(data[1].length > 0){
                        data[1].forEach(item => {
                            this.disabledHours.push(item.time.split(":")[0]);
                        });
                    }

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
            makeAppointment() {
                this.button.loading = true;

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

            this.form.date = this.$options.filters.formatDate2(new Date());
            this.form.time = "08:00:00";
            this.appointments = this.salon.appointments;
            this.salon.appointments.forEach((date) => {
                this.disabledDates.push(date.pivot.date);
            });

            this.form.service_name = this.salon.services[0].name;
            this.form.user_id = this.$gate.user.id;
            this.form.salon_id = this.salon.id;

            var date = new Date();
            switch(date.getDay()){
                case 0:
                    for(let i = 0; i <= 23; i++){
                        if(i < this.salon.saturdayOpen.split(":")[0] || i > this.salon.saturdayClose.split(":")[0]) {
                            console.log(i);
                            this.disabledHours.push(i.toString());
                        }
                    }
                    break;
                case 6: console.log("saturday");
                    break;
                default:
                    for(let i = 0; i <= 23; i++){
                        if(i < this.salon.workdaysOpen.split(":")[0] || i > this.salon.workdaysClose.split(":")[0]) {
                            console.log(i);
                            this.disabledHours.push(i.toString());
                        }
                    }
            }


            this.checkAvaiableTimeByDate();

            this.$watch("form.date", (newVal, oldVal) => {
                this.form1.date = newVal;
                this.checkAvaiableTimeByDate();
            });
        }

    }
</script>

