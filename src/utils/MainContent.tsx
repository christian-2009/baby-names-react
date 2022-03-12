import BabyName from "./BabyName";
import { sortedBabyData } from "./sortedBabyData";

export default function MainContent(): JSX.Element{
    const listItems = sortedBabyData.map(BabyName)
    return (
        <>
            <h1 className='title'>Babynames</h1>
            <p>{listItems}</p>
        </>
    )
}