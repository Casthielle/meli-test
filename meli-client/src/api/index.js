import axios from "axios";

const Api = () => {
  const _baseUrl = "http://localhost:8081";

  const _api = {
    items: _baseUrl + "/api/items",
  };

  const search = async (endpoint, query) => {
    const { data } = await axios.get(`${_api[endpoint]}?search=${query}`);
    return data;
  };

  const find = async (endpoint, id) => {
    const { data } = await axios.get(`${_api[endpoint]}/${id}`);
    return data;
  };

  return { search: search, find: find };
};

export default Api();
