import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  fetchAllCharacters,
  fetchFiltredCharacters,
} from "../../heplers/rickAndMortyAPI";
import LoadMore from "../Button/Button";
import Characters from "../Characters/Characters";

import SearchForm from "../SearchForm/SearchForm";

import { Wrapper } from "./App.styled";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const updatePageHandler = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const fetch = async () => {
      const chars = await fetchAllCharacters(page);

      page === 1
        ? setCharacters(chars.results)
        : setCharacters((prev) => [...prev, ...chars.results]);
    };
    fetch();
  }, [page]);

  const getFiltredCharacters = async (char) => {
    const filtredChars = await fetchFiltredCharacters(char);
    setCharacters(filtredChars?.results);
  };

  return (
    <Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <SearchForm onSubmit={getFiltredCharacters} />
      {characters ? (
        <Characters characters={characters} />
      ) : (
        <p>Nothing was found</p>
      )}
      <LoadMore onClick={updatePageHandler} page={page} />
    </Wrapper>
  );
}
