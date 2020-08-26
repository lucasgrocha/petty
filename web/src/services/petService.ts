import api from './api';

const petService = {
  index: (status: string) => api.get(`pets?status=${status}`),
  show: (id: string) => api.get(`pets/${id}`),
};

export default petService;
