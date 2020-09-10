import api from './api';

const searchService = {
  search: (search_term: string, search_type: string) =>
    api.get('search', {
      params: {
        search_term,
        search_type,
      },
    }),
};

export default searchService;
