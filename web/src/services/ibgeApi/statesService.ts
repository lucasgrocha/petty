import ibgeApi from './ibgeApi';

const statesService = {
  index: () => ibgeApi.get('localidades/estados'),
};

export default statesService;
