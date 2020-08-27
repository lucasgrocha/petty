import api from './api';

const petsService = {
  index: (status: string) =>
    api.get('pets', {
      params: {
        status,
      },
    }),
  show: (id: string) => api.get(`pets/${id}`),
};

export default petsService;
