import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';
import {sortedBabyData} from '../utils/sortedBabyData'

interface SearchedName {
    search: string;
}


export function MatchNames({search}: SearchedName, nameObj: {name :string}): JSX.Element{
    const newNameArray = []
    for (nameObj of sortedBabyData){
        if (nameObj.name.toLowerCase().includes(search) && search.length >0){
            newNameArray.push(nameObj.name)
        }
    }
    return (
        <>
            {newNameArray.length !==0 && <p>{newNameArray.slice(0,8)}</p>}
            {newNameArray.length !==0 && <p>{newNameArray.slice(0,8)}</p>}
        </>
    )
}