import BabyName from "./BabyName";
import {babyData} from '../data'

export default function MainContent(): JSX.Element{
    const listItems = babyData.map(BabyName)
    return (
        <>
            <h1 className='title'>Babynames</h1>
            <p>{listItems}</p>
        </>
    )
}