import { get, post } from "@/http";

export default {
  async viewProfil({ commit }) {
    let candidatDetailsJSON = localStorage.getItem("candidat-detail");
    let profil = JSON.parse(candidatDetailsJSON);
    let { data, status } = await get(
      `/candidate.profile/${profil.candidat_id}`
    );
    if (status === 200) {
      if (data.status === "success") {
        let detail = data.candidat;
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
