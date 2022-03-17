import { sortedBabyData } from "../utils/sortedBabyData";
import React, { useState } from "react";
import BabyName from "./BabyName";

export default function MainContent(): JSX.Element {
  const [text, setText] = useState("");
  const [array, setArray] = useState<string[]>([])

  const filteredBabyNames = sortedBabyData.filter((obj) =>
    obj.name.toLowerCase().includes(text.toLowerCase())
  );


  const babyNames = filteredBabyNames.map((babyObj) => {
    return (
        <button className={"babyname " + babyObj.sex} key={babyObj.id}>{babyObj.name}</button>
    )})
//     if (babyObj.sex === "f") {
//       return (
//         <button className="female-style" key={babyObj.id} onClick={handleNameArray}>
//           {babyObj.name}
//         </button>
//       );
//     } else {
//       return (
//         <button className="male-style" key={babyObj.id} onClick={handleNameArray}>
//           {babyObj.name}
//         </button>
//       );
//     }
//   });
//   return (
//       <button className="babyname" + {babyObj.sex}>{babyObj.name}</button>
//   )


//   const babyNames = filteredBabyNames.map(BabyName)

//   const handleNameArray = () => {
//       setArray([... array, ])
//   }

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
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div style={{display:"inline-block"}}>{babyNames}</div>

    </>
  );
}
