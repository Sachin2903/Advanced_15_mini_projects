export function Button({checkNumber,btndata,btnclassname}){
    return <button className={btnclassname} onClick={checkNumber} >{btndata}</button>
}