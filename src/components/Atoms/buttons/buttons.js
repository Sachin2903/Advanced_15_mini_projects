export function Button({name,classnam,clickfun}){
    return <button onClick={clickfun} className={classnam}>{name}</button>
}