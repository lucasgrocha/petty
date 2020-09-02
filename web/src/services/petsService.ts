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
  create: (data: FormData) => api.post('/pets', data),
};

export default petsService;
