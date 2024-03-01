import LoginScreen from "@/screens/auth/login_screen.vue";
import HomeSecure from "@/screens/public/home_secure.vue";
import DashboardPage from "@/pages/dashboard_page.vue";
import CandidatsPage from "@/pages/candidats_page.vue";
import CandidatDetailPage from "@/pages/candidat_detail.vue";

const routes = [
  {
    path: "/",
    component: LoginScreen,
    name: "login-route",
  },
  {
    path: "/home/secure",
    component: HomeSecure,
    name: "home-secure-route",
    redirect: { name: "dash-route" },
    children: [
      {
        path: "/home/secure/dashboard",
        component: DashboardPage,
        name: "dash-route",
      },
      {
        path: "/home/secure/candidats",
        component: CandidatsPage,
        name: "candidats-route",
      },
      {
        path: "/home/secure/candidat/detail",
        component: CandidatDetailPage,
        name: "candidat-route-detail",
      },
    ],
  },
];
export default routes;
