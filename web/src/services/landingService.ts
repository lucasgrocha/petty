import api from './api';

const landingService = {
  index: (limit: number) =>
    api.get('landing', {
      params: {
        limit,
      },
    }),
};

export default landingService;
