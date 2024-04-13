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
                            <!-- Nav tabs -->
                            <ul class="nav nav-pills nav-customs nav-danger mb-3" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" data-bs-toggle="tab" href="#jobCandidates" role="tab"
                                        aria-selected="true">Candidats pour l'emploi</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" href="#formationCandidates" role="tab"
                                        aria-selected="false" tabindex="-1">Candidats pour la formation</a>
                                </li>
                            </ul><!-- Tab panes -->
                            <div class="tab-content">
                                <div class="tab-pane active show" id="jobCandidates" role="tabpanel">
                                    <candidates-job-tab />
                                </div>
                                <div class="tab-pane" id="formationCandidates" role="tabpanel">
                                    <candidates-formation-tab />
                                </div>
                            </div>
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
import candidatesFormationTab from "./tabs/candidates_formation_tab.vue";
import candidatesJobTab from "./tabs/candidates_job_tab.vue";
export default {
    name: 'CandidatPage',
    components: { candidatesFormationTab, candidatesJobTab },
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
