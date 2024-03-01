import { createStore } from "vuex";
import Actions from "./provider/actions";
import Setters from "./provider/setters";
import Getters from "./provider/getters";
import States from "./provider/states";

const store = createStore({
  state: States,
  mutations: Setters,
  getters: Getters,
  actions: Actions,
});

export default store;
