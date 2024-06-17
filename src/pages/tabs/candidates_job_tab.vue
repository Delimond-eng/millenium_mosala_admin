<template>
    <data-table :api-url="`/candidates.all`" :columns="dataTableColumns" :action-buttons="actionButtons"
        @actionButtonClick="handleActionButtonClick" :data-src="'candidats'" ref="customTable" />
</template>
<script>
import DataTable from '@/components/public/datatable.vue'
export default {
    components: {
        DataTable,
    },
    data() {
        return {
            dataTableColumns: [
                {
                    title: "NOM COMPLET",
                    data: null, render(row, data) {
                        return `${row.nom} ${row.postnom} ${row.prenom}`;
                    }
                },
                { data: "domaine", title: "DOMAINE" },
                { data: "email", title: "EMAIL" },
                /* { data: "diplome", title: "DIPLOME" }, */
                { data: "telephone", title: "TELEPHONE" },
            ],

            actionButtons: [
                { label: '<i class="ri-eye-2-line me-2"></i> Voir détails', class: 'btn-secondary', key: 'detail' },
            ],
            isLoading: false,
            code: ''
        }
    },

    methods: {
        handleActionButtonClick(payload) {
            switch (payload.key) {
                case "detail":
                    console.log(payload.data);
                    localStorage.setItem('candidat-detail', JSON.stringify(payload.data));
                    this.$router.push({ name: 'candidat-route-detail' });
                    break;
                case "edit":
                    console.log("edit", JSON.stringify(payload.data));
                    break;
                default:
                    break;
            }
        }
    },
}
</script>