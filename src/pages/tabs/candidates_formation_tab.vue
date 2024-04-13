<template>
    <data-table :api-url="`/formation.allCandidates`" :columns="dataTableColumns2" :data-src="'formation_candidates'"
        ref="customTable2" />
</template>
<script>
import DataTable from '@/components/public/datatable.vue'
export default {
    components: {
        DataTable,
    },
    data() {
        return {
            dataTableColumns2: [
                {
                    title: "Nom",
                    data: 'formation_candidate_nom'
                },
                { data: "formation_candidate_prenom", title: "Prénom" },
                { data: "formation_candidate_email", title: "Email" },
                { data: "formation_candidate_phone", title: "Téléphone" },
                { data: "formation_candidate_current_job", title: "Emploi actuel" },
                { data: "formation_candidate_adresse", title: "Adresse " },
            ],
        }
    },
}
</script>