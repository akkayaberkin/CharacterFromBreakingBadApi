import React from "react";
import Character from "./Character";
const Charactes = ({ characters, removeCharacter }) => {
  return (
    <section>
      <div className="title">
        <h2>Karakterler</h2>
        <div className="underline"></div>
      </div>
      <div>
        {characters.map((character) => {
          return (
            <Character
              key={character.char_id}
              {...character}
              removeCharacter={removeCharacter}
            ></Character>
          );
        })}
      </div>
    </section>
  );
};

export default Charactes;
