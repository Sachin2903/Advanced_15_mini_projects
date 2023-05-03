export default function Input({refstate,placedata,intype,inclassnam}){
    return <input className={inclassnam} ref={refstate} placeholder={placedata} type={intype}  />
}