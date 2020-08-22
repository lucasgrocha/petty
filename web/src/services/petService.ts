import api from "./api";

const petService = {
  index: () => api.get('pets'),
  show: (id: string) => api.get(`pets/${id}`)
}

export default petService