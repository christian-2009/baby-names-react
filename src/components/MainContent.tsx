import BabyName from "./BabyName";
import { sortedBabyData } from "../utils/sortedBabyData";
import SearchBar from "./SearchBar";




export default function MainContent(): JSX.Element{
    const babyNames = sortedBabyData.map((babyObj) => {
    if (babyObj.sex === 'f'){
        return(
        <button className = 'female-style' key={babyObj.id}>{babyObj.name}</button>)}
    else{
        return (
        <button className = 'male-style' key={babyObj.id}>{babyObj.name}</button>)
    }})
    return (
        <>
            <h1 className='title'>Babynames</h1>
            <SearchBar />
            {babyNames}
            
        </>
    )
}
