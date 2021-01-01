<template>
    <!-- Comments Section -->
    <section class="section section-padding smaller pb-0">
        <div class="container">
            <div class="row">
                <div class="comments-area">
                    <h4 v-if="comments.length === 0">Budite prvi koji ćete komentarisati!</h4>
                    <h4 v-else>{{ comments.length }} {{ comments.length === 1 ? 'Komentar' : 'Komentara' }}</h4>
                    <div class="comment-list">
                        <div v-for="(comment, index) in comments" class="single-comment mb-4">
                            <div class="user d-flex">
                                <div class="thumb d-flex">
                                    <img v-if="comment.user && comment.user.photo !== 'profile.png'" :src="getProfilePhoto(comment.user.photo)" alt="user-photo" />
                                    <p v-else class="m-auto text-uppercase">{{ comment.name.split(" ")[0].split("")[0] + comment.name.split(" ")[1].split("")[0] }}</p>
                                </div>
                                <div class="desc">
                                    <p class="comment">{{ comment.comment }}</p>
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <h5><a href="#">{{ comment.name }}</a></h5>
                                            <p class="date">{{ comment.created_at | formatDate }}</p>
                                        </div>
                                        <div class="reply-btn d-flex" v-if="form.id !== '' && comment.user">
                                            <a href="" class="btn-reply text-uppercase" @click.prevent="deleteComment(comment.id)">obriši</a>
                                            <a href="" class="btn-reply text-uppercase" @click.prevent="edit = true">izmijeni</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="update-comment" v-if="form.id !== '' && comment.user" v-show="edit">
                                <textarea v-model="updateForm.comment" :class="{ 'is-invalid': updateForm.errors.has('comment') }" class="form-control w-100 mt-3" name="comment" cols="30" rows="9" placeholder="Izmijeni komentar"></textarea>
                                <has-error :form="updateForm" field="comment"></has-error>
                                <div class="d-flex justify-content-end mt-3">
                                    <button type="button" class="btn btn-default mr-2" @click.prevent="edit = false">Odustani</button>
                                    <a href="" class="btn btn-primary" @click.prevent="editComment(comment)">Izmijeni</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment-form pt-5 mt-0">
                <h4>Komentarišite</h4>
                <form class="form-contact comment_form" id="commentForm">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea  v-model="form.comment" :class="{ 'is-invalid': form.errors.has('comment') }" class="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment"></textarea>
                                        <has-error :form="form" field="comment"></has-error>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input :disabled="form.id !== ''" :class="{ 'disabled' : form.id !== '', 'is-invalid': form.errors.has('name')  }" v-model="form.name" class="form-control" name="name" id="name" type="text" placeholder="Name">
                                        <has-error :form="form" field="name"></has-error>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input :disabled="form.id !== ''" :class="{ 'disabled' : form.id !== '', 'is-invalid': form.errors.has('email') }" v-model="form.email" class="form-control" name="email" id="email" type="email" placeholder="Email">
                                        <has-error :form="form" field="email"></has-error>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <vue-ladda id="laddaBtn"
                                           @click.prevent="postComment"
                                           class="btn btn-success"
                                           :class="{ 'disabled' : button.loading }"
                                           :loading="button.loading"
                                           :data-style="button.dataStyle"
                                           :progress="button.progress">Postavite komentar
                                </vue-ladda>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <!-- End of Comments Section -->
</template>

<script>
    export default {
        props: ['salon'],
        data() {
            return {
                edit: false,
                form: new Form({
                    id: '',
                    salon_id: '',
                    name: '',
                    email: '',
                    comment: '',
                }),
                updateForm: new Form({
                    id: '',
                    name: '',
                    email: '',
                    comment: '',
                }),
                button: {
                    loading: false,
                    'dataStyle': 'expand-left',
                    progress: 0,
                },
                comments: [],
            }
        },
        methods: {
            getProfilePhoto(path){
                return "/img/profile/" + path;
            },
            loadComments(){
                this.form.get(`/api/get/comments/${this.form.salon_id}`).then(({data}) => {
                   this.comments = data[1];
                }).catch(error => {
                });
            },
            loadUser() {
                axios.get("/api/profile").then(({data}) => {
                    this.form.id = data.user.id;
                    this.form.name = data.user.name;
                    this.form.email = data.user.email;
                    this.form.comment = "";
                }).catch(error => {
                });
            },
            postComment(){
                this.button.loading = true;
                this.form.post("/api/comments").then(({data}) => {
                    Swal.fire({
                        icon: 'success',
                        title: "Odlično!",
                        text: "Uspješno ste postavili komentar.",
                        confirmButtonText: "Nastavi"
                    });
                    this.button.loading = false;
                    this.loadComments();
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
            },
            deleteComment(id){
                Swal.fire({
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
                        axios.post(`/comments/delete/${id}`).then((response) => {
                            this.loadComments();
                            swal.fire(
                                "Obrisano!",
                                "Uspješno brisanje",
                                "success"
                            );
                        }).catch((error) => {
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
                });
            },
            editComment(comment){
                this.updateForm.id = comment.id;
                this.updateForm.email = comment.email;
                this.updateForm.name = comment.name;
                this.updateForm.put(`/api/comments/${comment.id}`).then((data) => {
                    Swal.fire({
                        icon: 'success',
                        title: "Odlično!",
                        text: "Uspješno ste izmijenili Vaš komentar.",
                        confirmButtonText: "Nastavi"
                    });
                    this.loadComments();
                    this.edit = false;
                }).catch(error => {
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
        },
        mounted() {
            this.form.salon_id = this.salon.id;
            this.loadUser();
            this.loadComments();
        }

    }
</script>

