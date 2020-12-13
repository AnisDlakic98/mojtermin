<template>
    <div class="row" id="usersManagment">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Kontakt poruke</h3>

                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                    <table class="table table-hover text-nowrap">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Naslov</th>
                            <th>Poruka</th>
                            <th>Ime i prezime</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in requests" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.subject }}</td>
                            <td>{{ item.message }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.email }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                requests: [],
                editMode: false,
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
            loadServices() {
                axios.get(`/api/contact`).then((response) => {
                    this.requests = response.data[1];
                }).catch((error) => {
                    console.log(error);
                });
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
