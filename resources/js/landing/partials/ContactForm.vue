<template>
    <form class="form-contact contact_form" id="contactForm">
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <textarea class="pt-3 form-control w-100" name="message"
                              id="message" cols="30" placeholder="Poruka *" rows="9"
                              v-model="form.message"
                              :class="{ 'is-invalid': form.errors.has('message') }">
                    </textarea>
                    <has-error :form="form" field="message"></has-error>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <input class="form-control valid"
                           name="name" id="name" type="text"
                           placeholder="Ime i prezime *"
                           v-model="form.name"
                           :class="{ 'is-invalid': form.errors.has('name') }">
                    <has-error :form="form" field="name"></has-error>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <input class="form-control valid"
                           name="email" id="email" type="text"
                           placeholder="Email *"
                           v-model="form.email"
                           :class="{ 'is-invalid': form.errors.has('email') }">
                    <has-error :form="form" field="email"></has-error>
                </div>
            </div>
            <div class="col-12">
                <div class="form-group">
                    <input class="form-control valid"
                           name="subject" id="subject" type="text"
                           placeholder="Naslov *"
                           v-model="form.subject"
                           :class="{ 'is-invalid': form.errors.has('subject') }">
                    <has-error :form="form" field="subject"></has-error>
                </div>
            </div>
        </div>
        <div class="form-group mt-3">
            <vue-ladda id="laddaBtn"
                       @click.prevent="sendRequest"
                       class="btn btn-transparent"
                       :class="{ 'disabled' : button.loading }"
                       :loading="button.loading"
                       :data-style="button.dataStyle"
                       :progress="button.progress">Pošalji
            </vue-ladda>
        </div>
    </form>
</template>

<script>
    export default {

        data() {
            return {
                button: {
                    loading: false,
                    'dataStyle': 'expand-left',
                    progress: 0,
                },
                form: new Form({
                    id: "",
                    subject: "",
                    message: "",
                    name: "",
                    email: "",
                })
            }
        },
        methods: {
            sendRequest() {
                this.button.loading = true;
                this.form.post('/api/contact').then(response => {
                    this.button.loading = false;
                    Swal.fire({
                        icon: 'success',
                        title: "Odlično!",
                        text: "Uspješno ste nas kontaktirali.",
                        confirmButtonText: "Nastavi"
                    }).then(() => {
                        window.location.reload();
                    });

                }).catch(error => {
                    this.button.loading = false;
                    if (error.response.status === 500) {
                        Swal.fire({
                            icon: 'error',
                            title: "Greška 500",
                            text: "Server trenutno nije u stanju da odgovori na zahtjev.",
                            confirmButtonText: "Nastavi"
                        }).then(() => {
                            window.location.reload();
                        });
                    }
                });

            }
        }

    }
</script>
