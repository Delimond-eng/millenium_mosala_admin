import { get, post } from "@/http";

export default {
  async viewProfil({ commit }) {
    let candidatDetailsJSON = localStorage.getItem("candidat-detail");
    let profil = JSON.parse(candidatDetailsJSON);
    let formData = new FormData();
    formData.append("candidat_id", profil.candidat_id);
    let { data, status } = await post("/data/viewDetail", formData);
    if (status === 200) {
      if (data.reponse.status === "success") {
        let detail = data.reponse.datasdetail[0];
        let formattedInfos = {
          personal: profil,
          detail: detail,
        };
        commit("SET_PROFIL", formattedInfos);
        return formattedInfos;
      } else {
        return null;
      }
    } else {
      return null;
    }
  },
};
