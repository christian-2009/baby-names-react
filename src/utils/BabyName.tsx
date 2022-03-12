interface BabyInfo {
    name: string
}


export default function BabyName(props: BabyInfo): JSX.Element{
    return(
        <>
            <p className='.inline'>{props.name}</p>
        </>
    )
}