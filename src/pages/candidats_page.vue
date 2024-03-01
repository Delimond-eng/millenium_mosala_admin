<template>
    <div class="page-content">
        <div class="container-fluid">
            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Candidats</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="#/home/secure/dashboard">Accueil</a></li>
                                <li class="breadcrumb-item active">Candidats</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <data-table :api-url="`/data/viewProfil`" :columns="dataTableColumns"
                                :action-buttons="actionButtons" @actionButtonClick="handleActionButtonClick"
                                :data-src="'reponse.dataprofil'" ref="customTable" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <!-- container-fluid -->
    </div>

    <div class="customizer-setting d-none d-md-block">
        <div class="btn-info rounded-pill shadow-lg btn btn-icon btn-lg p-2" @click="reload">
            <i class="mdi mdi-refresh  fs-22" :class="isLoading ? 'mdi-spin' : ''"></i>
        </div>
    </div>
</template>

<script>
import DataTable from '@/components/public/datatable.vue'
export default {
    name: 'CandidatPage',

    data() {
        return {
            dataTableColumns: [

                { data: "nom", title: "NOM" },
                { data: "postnom", title: "POSTNOM" },
                { data: "prenom", title: "PRENOM" },
                /* { data: "domaine", title: "DOMAINE" }, */
                { data: "email", title: "EMAIL" },
                /* { data: "diplome", title: "DIPLOME" }, */
                { data: "telephone", title: "TELEPHONE" },
            ],
            actionButtons: [
                { label: '<i class="ri-eye-2-line me-2"></i> Voir détails', class: 'btn-secondary', key: 'detail' },
            ],
            isLoading: false
        }
    },

    components: {
        DataTable,
    },

    methods: {

        handleActionButtonClick(payload) {
            switch (payload.key) {
                case "detail":
                    localStorage.setItem('candidat-detail', JSON.stringify(payload.data));
                    this.$router.push({ name: 'candidat-route-detail' });
                    break;
                case "edit":
                    console.log("edit", JSON.stringify(payload.data));
                    break;
                default:
                    break;
            }
        },

        async reload() {
            this.isLoading = true;
            await this.$refs.customTable.reloadData()
            this.isLoading = false;
        }
    },
}
</script>
