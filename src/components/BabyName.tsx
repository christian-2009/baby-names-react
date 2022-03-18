interface BabyInfo {
  name: string;
  sex: string;
  id: number;
}

export default function BabyName(props: BabyInfo): JSX.Element {
  return (
    <>
      <div key={props.id}>
        {props.sex === "f" && (
          <button className="female-style">{props.name}</button>
        )}
        {props.sex === "m" && (
          <button className="male-style">{props.name}</button>
        )}
      </div>
    </>
  );
}

/* 
IDEAS
since we want to change all of the values on the screen, I think we should add some conditionality in this function using the {text} state from 
SearchBar. 
If text = '' then display all names 
Otherwise if props.name.includes({text}) display that and the other names
*/
