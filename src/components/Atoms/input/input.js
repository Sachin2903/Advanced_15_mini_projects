export function Input({reftype,stylee,hints}){
    return <input placeholder={hints} className={stylee} ref={reftype}/>

}