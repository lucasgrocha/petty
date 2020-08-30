import api from './api';

const petsService = {
  index: (status: string, page: number) =>
    api.get('pets', {
      params: {
        status,
        page,
      },
    }),
  show: (id: string) => api.get(`pets/${id}`),
  create: (formData: object) => api.post('/pets', { ...formData }),
};

export default petsService;
