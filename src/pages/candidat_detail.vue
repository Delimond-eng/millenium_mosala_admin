<template>
    <div class="page-content">
        <div class="d-flex h-50 justify-content-center align-items-center" v-if="isLoading">
            <svg fill="#042893" width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g class="spinner_OSmW">
                    <rect x="11" y="1" width="2" height="5" opacity=".14" />
                    <rect x="11" y="1" width="2" height="5" transform="rotate(30 12 12)" opacity=".29" />
                    <rect x="11" y="1" width="2" height="5" transform="rotate(60 12 12)" opacity=".43" />
                    <rect x="11" y="1" width="2" height="5" transform="rotate(90 12 12)" opacity=".57" />
                    <rect x="11" y="1" width="2" height="5" transform="rotate(120 12 12)" opacity=".71" />
                    <rect x="11" y="1" width="2" height="5" transform="rotate(150 12 12)" opacity=".86" />
                    <rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)" />
                </g>
            </svg>
        </div>
        <div class="container-fluid" v-else>
            <div class="profile-foreground position-relative mx-n4 mt-2">
                <div class="profile-wid-bg rounded-2" style="border-radius: 10px !important;">
                    <img src="assets/images/profile-bg.jpg" alt="" class="profile-wid-img" />
                </div>
            </div>
            <div class="pt-4 mb-4 mb-lg-3 pb-lg-4 profile-wrapper">
                <div class="row g-4">
                    <div class="col-auto">
                        <div class="avatar-lg" v-if="candidat" style="height:10rem; width:10rem !important;">
                            <img :src="candidat.detail.profil"
                                style="height:10rem; width:10rem !important; object-fit: cover; object-position: center;"
                                alt="user-img" class="img-thumbnail" />
                        </div>
                    </div>
                    <!--end col-->
                    <div class="col" v-if="candidat">
                        <div v-if="candidat.personal">
                            <h3 class="text-white mb-1">{{ candidat.personal.nom }} {{ candidat.personal.postnom
                                }} {{ candidat.personal.prenom }}
                            </h3>
                            <table class="table mb-0 w-50">
                                <tbody class="text-white">
                                    <tr style="border-color: rgba(240, 248, 255, 0.196);">
                                        <th scope="row">Email</th>
                                        <td>
                                            {{ candidat.personal.email }}
                                        </td>
                                    </tr>

                                    <tr style="border-color: rgba(240, 248, 255, 0.196);">
                                        <th scope="row">Téléphone</th>
                                        <td>
                                            {{ candidat.personal.telephone }}
                                        </td>
                                    </tr>
                                    <tr style="border-color: rgba(240, 248, 255, 0.196);">
                                        <th scope="row">Domaine</th>
                                        <td>
                                            {{ candidat.personal.domaine }}
                                        </td>
                                    </tr>
                                    <tr style="border-color: rgba(240, 248, 255, 0.196);">
                                        <th scope="row">Diplôme</th>
                                        <td>
                                            {{ candidat.personal.diplome }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!--end row-->
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div>
                        <div class="card" v-if="candidat">
                            <div class="card-body">
                                <h2 class="card-title mb-3">Description</h2>
                                <p v-if="candidat.detail">{{ candidat.detail.description }}</p>

                                <h2 class="card-title mb-3">Curriculum vitae</h2>
                                <div class="row">
                                    <div class="col-md-3">
                                        <a v-if="candidat.detail.cv" :href="candidat.detail.cv" target="_blank"
                                            title="cliquez pour voir le CV !" rel="noopener noreferrer"
                                            class="card card-border-success shadow-none p-2 card-animate">
                                            <div class="card-body">
                                                <img src="assets/images/document.png" height="250" width="250"
                                                    alt="Curriculum vitae">
                                            </div>
                                            <div class="card-footer">
                                                <small>Cliquez pour ouvrir le CV !</small>
                                            </div>
                                        </a>
                                        <a v-if="candidat.detail.image" :href="candidat.detail.image" target="_blank"
                                            title="cliquez pour voir le CV !" rel="noopener noreferrer"
                                            class="card card-border-success shadow-none card-animate">
                                            <div class="card-body">
                                                <img src="assets/images/document.png" height="250" width="250"
                                                    alt="Curriculum vitae">
                                            </div>
                                            <div class="card-footer">
                                                <small>Cliquez pour ouvrir le CV !</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <!--end row-->
                            </div>
                            <!--end card-body-->
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->



        </div><!-- container-fluid -->
    </div>
</template>

<script>
export default {
    name: 'CandidatDetails',

    data() {
        return {
            isLoading: false
        }
    },

    mounted() {
        this.isLoading = true;
        this.$store.dispatch('viewProfil').then((res) => {
            this.isLoading = false;
        });
    },

    computed: {
        candidat() {
            return this.$store.getters['GET_PROFIL'];
        }
    },
}
</script>

<style>
.spinner_OSmW {
    transform-origin: center;
    animation: spinner_T6mA .75s step-end infinite
}

@keyframes spinner_T6mA {
    8.3% {
        transform: rotate(30deg)
    }

    16.6% {
        transform: rotate(60deg)
    }

    25% {
        transform: rotate(90deg)
    }

    33.3% {
        transform: rotate(120deg)
    }

    41.6% {
        transform: rotate(150deg)
    }

    50% {
        transform: rotate(180deg)
    }

    58.3% {
        transform: rotate(210deg)
    }

    66.6% {
        transform: rotate(240deg)
    }

    75% {
        transform: rotate(270deg)
    }

    83.3% {
        transform: rotate(300deg)
    }

    91.6% {
        transform: rotate(330deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>
