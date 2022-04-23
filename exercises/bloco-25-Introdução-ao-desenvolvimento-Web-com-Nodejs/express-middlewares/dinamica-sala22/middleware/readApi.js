const axios = require('axios').default;

const readApi = async () => {
  const api = await axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
  return api.data;
}

module.exports = readApi;
