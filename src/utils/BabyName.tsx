interface BabyInfo {
    name: string
    sex: string
}


export default function BabyName(props: BabyInfo): JSX.Element{
    return(
        <>
            {props.sex === 'f' && <p className='female-style'>{props.name}</p>}
            {props.sex === 'm' && <p className ='male-style'>{props.name}</p>}
        </>
    )
}