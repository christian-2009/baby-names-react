import BabyName from "./BabyName";
import { sortedBabyData } from "../utils/sortedBabyData";
import SearchBar from "./SearchBar";

export default function MainContent(): JSX.Element{
    const listItems = sortedBabyData.map(BabyName)
    return (
        <>
            <h1 className='title'>Babynames</h1>
            <SearchBar />
            <p>{listItems}</p>
        </>
    )
}
