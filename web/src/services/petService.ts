import api from "./api";

const petService = {
  index: () => api.get('pets')
}

export default petService