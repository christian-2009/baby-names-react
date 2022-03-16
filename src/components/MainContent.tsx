
import { sortedBabyData } from "../utils/sortedBabyData";
import React, {useState} from "react";





export default function MainContent(): JSX.Element{
    const [text, setText] = useState('')

    const filteredBabyNames = sortedBabyData.filter((obj) => obj.name.toLowerCase().includes(text.toLowerCase()) )

    const babyNames = filteredBabyNames.map((babyObj) => {
    if (babyObj.sex === 'f'){
        return(
        <button className = 'female-style' key={babyObj.id}>{babyObj.name}</button>)}
    else{
        return (
        <button className = 'male-style' key={babyObj.id}>{babyObj.name}</button>)
    }})


    const handleDelete = () => {
        setText('')
    }

    return (
        <>
            <h1 className='title'>Babynames</h1>
            <div className = 'flex'>
                <input placeholder="search..." value ={text} onChange = {(event) => {setText(event.target.value)}}></input>
                <button onClick={handleDelete}>Delete</button>
            </div>
            {babyNames}
            
        </>
    )
}
