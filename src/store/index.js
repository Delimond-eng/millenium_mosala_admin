import { createStore } from "vuex";
import { get } from "@/http";

/*modules imports*/
import auth from "./modules/auth";
/*Crée un store central global qui permet d'ajouter des tiers modules */
import Actions from "./provider/actions";
import Setters from "./provider/setters";
import Getters from "./provider/getters";
import States from "./provider/states";

const store = createStore({
  modules: {
    auth: auth,
  },
  state: States,
  mutations: Setters,
  getters: Getters,
  actions: Actions,
});

export default store;
