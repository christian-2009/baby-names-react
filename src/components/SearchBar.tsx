import { useState } from "react";
import { MatchNames } from "./MatchNames";

export default function SearchBar(): JSX.Element {
    const [text, setText] = useState('')

    const handleDelete = () => {
        setText('')
    }

    return (
        <>
            <input value ={text} onChange = {(event) => {setText(event.target.value)}}></input>
            <button onClick={handleDelete}>Clear</button>
            <MatchNames search={text} />
        </>
    )
}
