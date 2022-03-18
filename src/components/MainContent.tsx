import { sortedBabyData } from "../utils/sortedBabyData";
import React, { useState } from "react";
import BabyName from "./BabyName";

interface BabyInfo {
  id: number;
  name: string;
  sex: string;
}

export default function MainContent(): JSX.Element {
  const [text, setText] = useState("");
  const [favourites, setFavourites] = useState<BabyInfo[]>([]);

  const filteredBabyNames = sortedBabyData.filter((obj) =>
    obj.name.toLowerCase().includes(text.toLowerCase())
  );

  const favouriteBabyNames = favourites.map((babyObj) => {
    return (
      <div className={"babyname " + babyObj.sex} key={babyObj.id}>
        {babyObj.name}
      </div>
    );
  });

  const favouriteFilteredBabyNames = filteredBabyNames.filter((obj) => 
    !([...favourites].includes(obj)))

  const babyNames = favouriteFilteredBabyNames.map((babyObj: BabyInfo) => {
    return (
      <button
        className={"babyname " + babyObj.sex}
        key={babyObj.id}
        onClick={() => setFavourites([...favourites, babyObj])}
      >
        {babyObj.name}
      </button>
    );
  });

  const handleDelete = () => {
    setText("");
  };

  return (
    <>
      <h1 className="title">Babynames</h1>
      <div className="flex">
        <input
          placeholder="search..."
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button onClick={handleDelete} className="delete">
          Delete
        </button>
      </div>
      <hr />
      <div className="flex">FAVOURITES: {favouriteBabyNames}</div>
      <div className="flex">{babyNames}</div>
    </>
  );
}
