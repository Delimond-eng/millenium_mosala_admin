import LoginScreen from "@/screens/auth/login_screen";

const routes = [
  {
    path: "/",
    component: LoginScreen,
    name: "login",
  },
  /* {
        path: "/",
        component: LoginScreen,
        name: "login",
      },
      {
        path: "/home/modules",
        component: HomeModule,
        name: "modules",
      },
      {
        path: "/home",
        component: HomeMain,
        name: "home",
        redirect: { name: "dash" },
        children: [
          {
            path: "/home/dash",
            component: Dashboard,
            name: "dash",
          },
          {
            path: "/home/datatables.net",
            component: DatatablesNet,
            name: "datatable-route",
          },

          {
            path: "/home/transferts",
            component: TransfertPatientPage,
            name: "transferts-route",
          },
          {
            path: "/admin/labo/config/examens",
            component: ConfigExamensPage,
            name: "admin-config-examens",
          },
          {
            path: "/admin/labo/config",
            component: ConfigLabosPage,
            name: "admin-config-labos",
          },
          {
            path: "/admin/manage/pharmacies",
            component: PharmacieManagerPage,
            name: "manage-pharmacies",
          },
          {
            path: "/home/patient/create",
            component: PatientCreatePage,
            name: "patient-create",
          },
          {
            path: "/home/patients/list",
            component: PatientListPage,
            name: "patient-list",
          },

          {
            path: "/home/patients/docs",
            component: PatientDocMedPage,
            name: "patient-docs",
          },
          {
            path: "/home/med/create",
            component: AgentCreatePage,
            name: "med-create",
          },
          {
            path: "/home/meds/list",
            component: AgentListPage,
            name: "med-list",
          },
          {
            path: "/home/consult/create",
            component: ConsultCreatePage,
            name: "consult-create",
          },
          {
            path: "/home/consults/list",
            component: ConsultListPage,
            name: "consult-list",
          },
          {
            path: "/home/prescription/create",
            component: PrescriptionCreatePage,
            name: "prescription-create",
          },
          {
            path: "/home/prescriptions/list",
            component: PrescriptionListPage,
            name: "prescriptions-list",
          },
          {
            path: "/home/invoice/fiche",
            component: FicheInvoice,
            name: "fiche-invoice",
          },
          {
            path: "/home/hospitalisations.manage",
            component: HospitalisationHome,
            name: "hospitalisation-home",
            redirect: { name: "bed-tab" },
            children: [
              {
                path: "",
                component: BedTab,
                name: "bed-tab",
              },
              {
                path: "/home/hospitalisations.manage/hospitalisations",
                component: HospitalisationTab,
                name: "hospitalisation-tab",
              },
              {
                path: "/home/hospitalisations.manage/hospitalisations",
                component: TransfertTab,
                name: "transfert-tab",
              },
              {
                path: "/home/hospitalisations.manage/facturations",
                component: FacturationTab,
                name: "facturation-tab",
              },
              {
                path: "/home/hospitalisations.manage/settings",
                component: SettingTab,
                name: "setting-tab",
              },
            ],
          },
          {
            path: "/admin/config/all",
            component: ConfigHome,
            name: "settings-app",
            redirect: { name: "emplacements-config-tab" },
            children: [
              {
                path: "",
                component: EmplacementsTab,
                name: "emplacements-config-tab",
              },
              {
                path: "/admin/config/services",
                component: ServicesTab,
                name: "services-config-tab",
              },
              {
                path: "/admin/config/fonctions",
                component: FonctionsTab,
                name: "fonctions-config-tab",
              },
              {
                path: "/admin/config/facturations",
                component: FacturationsTab,
                name: "facturations-config-tab",
              },
            ],
          },
          {
            path: "/home/premiers_soins",
            component: PremierSoinsPage,
            name: "premiers-soins",
          },
          {
            path: "/home/premiers_soins/list",
            component: PremierSoinsListPage,
            name: "premiers-soins-list",
          },
          {
            path: "/home/facture/create",
            component: FactureCreatePage,
            name: "facture-create-route",
          },
          {
            path: "/home/factures/list",
            component: FacturesListPage,
            name: "factures-list-route",
          },
          {
            path: "/admin/config/partener",
            component: PartenersViewPage,
            name: "partener-view-route",
          },
        ],
      }, */
];
export default routes;
