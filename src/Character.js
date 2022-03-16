import React, { useState } from "react";

const Character = ({
  char_id,
  img,
  occupation,
  birthday,
  name,
  removeCharacter,
}) => {
  const [readMore, SetReadMore] = useState(false);
  return (
    <article className="single-char">
      <img src={img} alt={name} />
      <footer>
        <div className="char-info">
          <h4>{name}</h4>
          <h4 className="char-birth">{birthday} </h4>
        </div>
        <p>
          {readMore ? occupation[0] : `${occupation[0].substring(0, 5)}...`}
        </p>
        <button onClick={() => SetReadMore(!readMore)}>
          {readMore ? "Gizle" : "Tümünü Göster"}
        </button>
        <button className="delete-btn" onClick={() => removeCharacter(char_id)}>
          Kaldır
        </button>
      </footer>
    </article>
  );
};

export default Character;
