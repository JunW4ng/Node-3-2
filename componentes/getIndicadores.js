const axios = require("axios");

const indicadoresApi = "https://mindicador.cl/api";

const getDataIndicadores = async () => {
  const { data } = await axios.get(indicadoresApi);
  return data;
};

module.exports = getDataIndicadores;