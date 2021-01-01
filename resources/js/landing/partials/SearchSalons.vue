<template>
    <div id="searchSalons" class="w-100">


        <div class="row">
            <div class="col-lg-4">
                <div class="filters-sidebar">
                    <form class="form-contact contact_form">
                        <div class="row">
                            <div class="col-md-12 reset-filters">
                                <div class="form-group d-flex justify-content-between">
                                    <span>Filteri</span>
                                    <a href="" @click.prevent="clearFilters">Obriši sve</a>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="form-label mb-3">Kategirija:</label>
                                    <select name="category_id" class="form-control" v-model="filters.category_id">
                                        <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <label class="form-label mb-3">Gradovi:</label>
                                <div class="boxes mb-3" v-for="city in cities">
                                    <input type="checkbox" :id="'box-0-' + city.id"  v-model="filters.cities" :value="city.id">
                                    <label :for="'box-0-' + city.id">{{ city.name }}</label>
                                </div>


                            </div>
                            <div class="col-lg-12 mt-4">
                                <label class="form-label mb-3">Zvijezdice:</label>
                                <div class="boxes">
                                    <input type="checkbox" v-model="filters.stars" value="5" id="box-1-1">
                                    <label for="box-1-1">
                                        <i v-for="n in 5" class="fa fa-star mr-1"></i>
                                    </label>
                                    <input type="checkbox" v-model="filters.stars" value="4" id="box-1-2">
                                    <label for="box-1-2">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star dark"></i>
                                    </label>
                                    <input type="checkbox" v-model="filters.stars" value="3" id="box-1-3">
                                    <label for="box-1-3">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star dark"></i>
                                        <i class="fa fa-star dark"></i>
                                    </label>
                                    <input type="checkbox" v-model="filters.stars" value="2" id="box-1-4">
                                    <label for="box-1-4">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star dark"></i>
                                        <i class="fa fa-star dark"></i>
                                        <i class="fa fa-star dark"></i>
                                    </label>
                                    <input type="checkbox" v-model="filters.stars" value="1" id="box-1-5">
                                    <label for="box-1-5">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star dark"></i>
                                        <i class="fa fa-star dark"></i>
                                        <i class="fa fa-star dark"></i>
                                        <i class="fa fa-star dark"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label class="form-label mb-3">Tip salona:</label>
                                <div class="boxes">
                                    <input type="checkbox" id="box-3-0" v-model="filters.gender" value="unisex">
                                    <label for="box-3-0">Muško-Ženski</label>

                                    <input type="checkbox" id="box-3-1" v-model="filters.gender" value="male">
                                    <label for="box-3-1">Muški</label>

                                    <input type="checkbox" id="box-3-2" v-model="filters.gender" value="female">
                                    <label for="box-3-2">Ženski</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-md-7">
                        <div class="form-group">
                            <form class="form-contact contact_form d-flex">
                                <input type="text" class="form-control" v-model="filters.search" placeholder="Unesite naziv salona..." name="name" />
                            </form>
                        </div>
                    </div>
                </div>

                <div v-if="salons.data && salons.data.length === 0" class="data-not-found d-flex justify-content-center">
                    <div class="m-auto">
                        <img src="/img/broke.svg" class="w-50 mx-auto d-block tex-center" alt="">
                        <h2 class="mt-3 text-center">Nema traženih salona!</h2>
                    </div>
                </div>

                <div v-for="(salon, index) in salons.data" :key="salon.id">
                    <!-- salon_card -->
                    <div class="card salon-card">
                        <div class="row">
                            <div class="col-lg-6">
                                <a :href="'/salon-details/' + salon.id" class="salon-link">
                                    <img v-if="salon.images && salon.images.length > 0" class="card-img-top" :src="'/img/profile/salon/' + salon.images[0].image_path" alt="Card image">
                                </a>
                            </div>
                            <div class="col-lg-6">
                                <div class="card-body pb-0">
                                    <a :href="'/salon-details/' + salon.id" class="hoverable-link">
                                        <h4 class="card-title">{{ salon.name }}</h4>
                                    </a>
                                    <cite>{{ salon.address }}, {{ salon.city.name }}</cite>
                                    <div class="score-wrap">
                                <span class="stars-active" style="width:88%">
                                    <i v-for="(star, index) in salon.stars" class="fa fa-star" aria-hidden="true"></i>
                                    <i v-if="salon.stars < 5" v-for="(star, index) in 5 - salon.stars" class="fa fa-star dark" aria-hidden="true"></i>
                                </span>
                                    </div>
                                    <div class="salon-statuses d-flex">
                                        <h4 v-for="(status, index) in salon.statuses"><a href="" :class="'badge badge-primary ' + status.name">{{ status.name }}</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <!-- salon_card_end -->
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        data() {
            return {
                cities: [],
                salons: {},
                categories: [],
                filters: {
                    search: "",
                    category_id: 1,
                    stars: [],
                    cities: [],
                    gender: [],
                }
            }
        },
        methods: {
            applyFilters(){
                var request = {
                    params: {
                        search: this.filters.search,
                        category_id: this.filters.category_id,
                        stars: this.filters.stars,
                        cities: this.filters.cities,
                        gender: this.filters.gender,
                    },
                };
                axios.get(`/get/salons`, request).then(response => {
                    this.salons = response.data[0];
                }).catch(error => {
                    console.log(error)
                });
            },
            clearFilters(){
                this.filters.search = "";
                this.filters.category_id = 1;
                this.filters.stars = [];
                this.filters.cities = [];
                this.filters.gender = [];
            },
            getResults(page = 1) {
                var request = {
                    params: {
                        search: this.filters.search,
                        category_id: this.filters.category_id,
                    },
                };
                axios.get(`/get/salons?page=${page}`, request).then(response => {
                    this.salons = response.data[0];
                }).catch(error => {
                    console.log(error)
                });

            },
            loadSalons() {
                axios.get(`/get/salons`).then((response) => {
                    this.salons = response.data[0];
                }).catch((error) => {
                    console.log(error);
                });
            },
            loadCategories() {
                axios.get(`/get/categories`).then((response) => {
                    this.categories = response.data[1];
                    this.filters.category_id = this.categories[0].id;
                }).catch((error) => {
                    console.log(error);
                });
            },
            loadCities(){
                axios.get(`/country/1/cities`).then((response) => {
                    this.cities = response.data;
                }).catch((error) => {
                    console.log(error);
                });

            }
        },
        watch: {
            filters: {
                deep: true,
                handler(oldVal, newVal) {
                    this.applyFilters();
                },
            },
        },
        mounted() {
            this.loadCategories();
            this.loadCities();
            this.getResults();
        }
    }
</script>
