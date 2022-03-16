interface BabyInfo {
    name: string
    sex: string
}


export default function BabyName(props: BabyInfo): JSX.Element{
        return (
           <>
            {props.sex === 'f' && <p className='female-style'>{props.name}</p>}
            {props.sex === 'm' && <p className='male-style'>{props.name}</p>}
           </>
        )
}

/* 
IDEAS
since we want to change all of the values on the screen, I think we should add some conditionality in this function using the {text} state from 
SearchBar. 
If text = '' then display all names 
Otherwise if props.name.includes({text}) display that and the other names
*/