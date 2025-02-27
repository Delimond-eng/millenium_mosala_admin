<template>
    <div class="page-content">
        <div class="container-fluid">
            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Liste des participations</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="#/home/secure/dashboard">Accueil</a></li>
                                <li class="breadcrumb-item active">participants</li>
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
                            <data-table ref="customTableFormulaireCandidates" :api-url="`/formulaires.candidate`"
                                :columns="dataTableColumns2" :data-src="'formulaires'" :action-buttons="actionButtons"
                                :show-button="showButton" @actionButtonClick="handleActionButtonClick" />
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

    <teleport to='body'>
        <div id="info-modal" class="modal fade" tabindex="-1" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content p-5" v-if="selectedCandidate">
                    <div class="row mb-3">
                        <div class="col-sm-4">
                            <strong>Sécurité :</strong>
                            <p class="form-control-plaintext">{{ selectedCandidate.securite }}</p>
                        </div>
                        <div class="col-sm-4">
                            <strong>Nom :</strong>
                            <p class="form-control-plaintext">{{ selectedCandidate.nom }}</p>
                        </div>
                        <div class="col-sm-4">
                            <strong>Prénom :</strong>
                            <p class="form-control-plaintext">{{ selectedCandidate.prenom }}</p>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-sm-4">
                            <strong>Email :</strong>
                            <p class="form-control-plaintext">{{ selectedCandidate.email }}</p>
                        </div>
                        <div class="col-sm-4">
                            <strong>Téléphone :</strong>
                            <p class="form-control-plaintext">{{ selectedCandidate.telephone }}</p>
                        </div>
                        <div class="col-sm-4">
                            <strong>À propos :</strong>
                            <p class="form-control-plaintext">{{ selectedCandidate.about }}</p>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-sm-4">
                            <strong>Niveau :</strong>
                            <p class="form-control-plaintext">{{ selectedCandidate.niveau }}</p>
                        </div>

                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
    </teleport>
</template>

<script>
import DataTable from '@/components/public/datatable.vue';
export default {
    components: {
        DataTable,
    },
    data() {
        return {
            dataTableColumns2: [
                { title: "Securité", data: 'securite' },
                { title: "Nom", data: 'nom' },
                { title: "Prénom", data: "prenom" },
                { title: "Email", data: "email" },
                { title: "Téléphone", data: "telephone" },

                {
                    title: "Description",
                    data: null, render(row, data) {
                        return `${row.about}`.substring(0, 30) + "...";
                    }
                },
                { title: "Centre d'intérêt", data: "niveau" },
                { title: "Date Soumission", data: "created_at" },
            ],
            actionButtons: [
                {
                    label: 'Détails',
                    class: "btn-primary me-1",
                    key: "detail",
                    tooltip: 'Voir détail'
                },

            ],
            selectedCandidate: null
        }
    },

    methods: {
        handleActionButtonClick(payload) {
            const self = this;
            switch (payload.key) {
                case "detail":
                    self.selectedCandidate = payload.data
                    $("#info-modal").modal("show")
                    break;
            }


        },

        showButton(button, row) {
            return true;
        },

    },
}
</script>
