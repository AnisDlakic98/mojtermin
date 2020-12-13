<template>
    <div id="searchSalons" class="w-100">
        <form class="form-contact contact_form d-flex">
            <div class="col-md-4">
                <div class="form-group">
                    <input type="text" class="form-control" v-model="filters.search" placeholder="Unesite naziv salona..." name="name" />
                </div>
            </div>
        </form>

        <div class="col-md-12">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 col-6" v-for="(salon, index) in salons.data" :key="salon.id">
                    <!-- salon_card -->
                    <div class="card salon-card">
                        <a :href="'/salon-details' + salon.id" class="salon-link">
                            <img v-if="salon.images && salon.images.length > 0" class="card-img-top" :src="'/img/profile/salon/' + salon.images[0].image_path" alt="Card image">
                        </a>
                        <div class="card-body pb-0">
                            <a :href="'/salon-details' + salon.id" class="hoverable-link">
                                <h4 class="card-title">{{ salon.name }}</h4>
                            </a>
                            <cite>{{ salon.address }}, {{ salon.city.name }}</cite>
                            <div class="score-wrap">
                                <span class="stars-active" style="width:88%">
                                    <i v-for="(star, index) in salon.stars" :key="index" class="fa fa-star" aria-hidden="true"></i>
                                    <i v-if="salon.stars < 5" v-for="(star, index) in 5 - salon.stars" :key="index" class="fa fa-star dark" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="salon-statuses d-flex">
                                <h4 v-for="(status, index) in salon.statuses" :key="index"><a href="" :class="'badge badge-primary ' + status.name">{{ status.name }}</a></h4>
                            </div>
                        </div>
                    </div>
                    <!-- salon_card_end -->
                </div>
            </div>
           <div class="mt-5">
               <pagination :data="salons" @pagination-change-page="getResults"></pagination>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                salons: {},
                filters: {
                    search: "",
                }
            }
        },
        methods: {
            applyFilters(){
                if (this.filters.search !== "") {
                    var request = {
                        params: {
                            search: this.filters.search,
                        },
                    };
                    axios.get(`/get/salons`, request).then(response => {
                        this.salons = response.data[0];
                    }).catch(error => {
                        console.log(error)
                    });
                }
            },
            getResults(page = 1) {
                axios.get(`/get/salons?page=${page}`).then(response => {
                    this.salons = response.data[0];
                });
            },
            loadSalons() {
                axios.get(`/get/salons`).then((response) => {
                    this.salons = response.data[0];
                }).catch((error) => {
                    console.log(error);
                });
            },
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
            // this.loadSalons();
            this.getResults();
        }
    }
</script>
