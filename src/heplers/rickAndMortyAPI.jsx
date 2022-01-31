import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
axios.defaults.baseURL = "https://rickandmortyapi.com/api";

async function fetchAllCharacters(page) {
  const { data } = await axios.get(`/character/?page=${page}`);
  return data;
}
async function fetchFiltredCharacters({ name, gender, status }) {
  try {
    const { data } = await axios.get(
      `/character/?name=${name}&gender=${gender}&status=${status}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
    toast.error("Nothing was found. Please change search params");
  }
}

export { fetchAllCharacters, fetchFiltredCharacters };
