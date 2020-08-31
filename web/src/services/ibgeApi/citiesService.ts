import ibgeApi from './ibgeApi';

const citiesService = {
  index: (estado: string) =>
    ibgeApi.get(`localidades/estados/${estado}/municipios`),
};

export default citiesService;
