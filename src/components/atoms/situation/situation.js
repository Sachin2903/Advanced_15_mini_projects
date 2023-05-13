export function Situation({onclickunder,stylecondi,value}){
    return <p onClick={onclickunder} className={stylecondi}>{value}</p>
}