<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="profile-foreground position-relative mx-n4 mt-2">
                <div class="profile-wid-bg rounded-2" style="border-radius: 10px !important;">
                    <img src="assets/images/profile-bg.jpg" alt="" class="profile-wid-img" />
                </div>
            </div>
            <div class="pt-4 mb-4 mb-lg-3 pb-lg-4 profile-wrapper">
                <div class="row g-4">
                    <div class="col-auto">
                        <div class="avatar-lg" v-if="candidat" style="height:10rem; width:10rem !important;">
                            <img :src="candidat.detail.profil" alt="user-img" class="img-thumbnail" />
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
                                        <th scope="row">Domaine</th>
                                        <td>
                                            {{ candidat.personal.domaine }}
                                        </td>
                                    </tr>
                                    <tr style="border-color: rgba(240, 248, 255, 0.196);">
                                        <th scope="row">Téléphone</th>
                                        <td>
                                            {{ candidat.personal.telephone }}
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
                                <h5 class="card-title mb-3">Description</h5>
                                <p v-if="candidat.detail">{{ candidat.detail.description }}</p>
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

    mounted() {
        this.$store.dispatch('viewProfil').then((res) => {
            console.log(res);
        })
    },

    computed: {
        candidat() {
            return this.$store.getters['GET_PROFIL'];
        }
    },
}
</script>
