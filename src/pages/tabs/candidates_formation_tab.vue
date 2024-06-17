<template>

    <data-table ref="customTableFormationCandidates" :api-url="`/formation.candidates`" :columns="dataTableColumns2"
        :data-src="'formation_candidates'" :action-buttons="actionButtons" :show-button="showButton"
        @actionButtonClick="handleActionButtonClick" />
    <teleport to='body'>
        <div id="paie-modal" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            style="display: none; padding-left: 0px" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content border-0 overflow-hidden">
                    <div class="row g-0">
                        <div class="col-lg-7">
                            <div class="modal-body p-5">
                                <h2 class="lh-base">
                                    Perception de frais de participation à la formation pour le participant <b
                                        class="text-info">{{ form.candidate_code
                                        }}</b>
                                </h2>
                                <p class="text-muted mb-4">
                                    Veuillez renseigner toutes les informations requises
                                </p>
                                <form class="row g-3" @submit.prevent="makePaymnt">
                                    <div class="col-md-12">
                                        <div class="d-flex">
                                            <input type="number" v-model="form.amount" class="form-control w-100 me-1"
                                                placeholder="Montant" required />
                                            <select class="form-control" v-model="form.devise" style="width: 100px;">
                                                <option value="CDF" selected>CDF</option>
                                                <option value="USD" selected>USD</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <select class="form-select" disabled>
                                            <option value="Cash" selected>Cash</option>
                                            <option value="Mobile">Mobile</option>
                                            <option value="Mobile">Visa/mastercard</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="d-flex">
                                            <button type="button" class="btn btn-dark me-2" data-bs-dismiss="modal"
                                                aria-label="Close">
                                                Fermer
                                            </button>
                                            <button type="submit" class="btn btn-success">
                                                Soumettre
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="subscribe-modals-cover h-100">
                                <img src="assets/images/ipay-2.jpg" alt="" class="h-100 w-100 object-fit-cover" style="
                    clip-path: polygon(
                      100% 0%,
                      100% 100%,
                      100% 100%,
                      0% 100%,
                      25% 50%,
                      0% 0%
                    );
                  " />
                            </div>
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
import { get, post } from '@/http'
export default {
    components: {
        DataTable,
    },
    data() {
        return {
            dataTableColumns2: [
                { title: "Code", data: 'code' },
                { title: "Nom", data: 'nom' },
                { title: "Prénom", data: "prenom" },
                { title: "Email", data: "email" },
                { title: "Téléphone", data: "telephone" },
                { title: "Emploi actuel", data: "current_job" },
                { title: "Centre d'intérêt", data: "hobbie" },
                { title: "Ville", data: "ville" },
                {
                    title: "Status paiement",
                    data: null,
                    render: function (data, type, row) {
                        return row.paiement ? 'completed' : 'pending';
                    },
                },
                {
                    title: "Paiement",
                    data: null,
                    render: function (data, type, row) {
                        return row.paiement ? row.paiement.amount + '' + row.paiement.devise : '--';
                    },
                },

            ],
            actionButtons: [
                {
                    label: '<i class="ri-delete-bin-2-line me-1"></i>',
                    class: "btn-soft-danger me-1",
                    key: "delete",
                    tooltip: 'Supprimer un candidat'
                },
                {
                    label: '<i class="ri-money-dollar-circle-line"></i>Paiement',
                    class: "btn-secondary me-1",
                    tooltip: 'Recevoir un paiement d\'un candidat',
                    key: "paie",
                },
            ],
            form: {
                candidate_code: '',
                amount: '',
                devise: 'CDF',
                mode: 'Cash'
            }
        }
    },

    methods: {
        handleActionButtonClick(payload) {
            const self = this;
            switch (payload.key) {

                case "paie":
                    this.form.candidate_code = payload.data.code;
                    $("#paie-modal").modal("show");
                    break;
                case "delete":

                    Swal.fire({
                        title: "Attention ! Action irreversible",
                        text: "Voulez-vous vraiment supprimer ce candidat ?",
                        icon: "warning",
                        showCancelButton: !0,
                        confirmButtonText: "Continuer",
                        cancelButtonText: "Fermer",
                        confirmButtonClass: "btn btn-success w-xs me-2 mt-2",
                        cancelButtonClass: "btn btn-danger w-xs mt-2",
                        buttonsStyling: !1,
                        showCloseButton: false,
                    }).then(function (t) {
                        if (t.value) {
                            Swal.fire({
                                text: "Traitement en cours ...",
                                timerProgressBar: true,
                                allowOutsideClick: false,
                                didOpen: () => {
                                    Swal.showLoading();
                                },
                            });
                            get(`/formation.candidate.delete/${payload.data.id}`)
                                .then((res) => {
                                    Swal.close();
                                    self.$refs.customTableFormationCandidates.reloadData();
                                })
                                .catch((err) => {
                                    Swal.close();
                                });
                        }
                    });
                    break;
            }


        },

        showButton(button, row) {
            if (button.key === 'delete' && row.paiement) {
                return false;
            }
            return true;
        },
        makePaymnt(e) {
            const self = this;
            Swal.fire({
                text: "Traitement en cours ...",
                timerProgressBar: true,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            post('/formation.save.paiement', this.form)
                .then((res) => {
                    Swal.close()
                    if (res.data.errors !== undefined) {
                        Swal.fire({
                            icon: 'error',
                            title: "Echec de traitement !",
                            text: res.data.errors.toString(),
                            timer: 3000,
                            showCancelButton: false,
                            showConfirmButton: false
                        });
                    }
                    if (res.data.status !== undefined) {
                        Swal.fire({
                            icon: 'success',
                            title: "Paiement effectué !",
                            text: `le paiement pour le candidat ${res.data.result.candidate_code} est effectué avec succès !`,
                            timer: 3000,
                            showCancelButton: false,
                            showConfirmButton: false
                        });
                        self.$refs.customTableFormationCandidates.reloadData();
                        $("#paie-modal").modal("hide");
                        self.form.candidate_code = '';
                        self.form.amount = '';
                    }
                }).catch((err) => {
                    Swal.close()
                    console.error(err);
                });
        }
    },
}
</script>