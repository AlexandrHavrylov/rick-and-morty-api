import React from "react";
import { CharactersList, Charcter, Main } from "./Characters.styled";

export default function Characters({ characters }) {
  return (
    <Main>
      <section>
        <CharactersList>
          {characters?.map((char) => (
            <Charcter key={char.id}>
              <img src={char.image} alt="" />
              <p>Name: {char.name}</p>
              <p>Gender: {char.gender}</p>
              <p>Status: {char.status}</p>
            </Charcter>
          ))}
        </CharactersList>
      </section>
    </Main>
  );
}
