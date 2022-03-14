import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Characters from "./Characters";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = "https://course-api.com/react-tours-project";
const url = "https://breakingbadapi.com/api/characters?limit=5&offset=5";
function App() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacter] = useState([]);
  const removeTour = (char_id) => {
    const newCharacter = characters.filter(
      (character) => character.char_id !== char_id
    );
    setCharacter(newCharacter);
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const characters = await response.json();
      setLoading(false);
      setCharacter(characters);
      console.log(characters);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (characters.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>Karakter Bulunamadı</h2>
          <button className="btn" onClick={fetchTours}>
            Ana Sayfaya Dön
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Characters characters={characters} removeTour={removeTour} />
    </main>
  );
}

export default App;
