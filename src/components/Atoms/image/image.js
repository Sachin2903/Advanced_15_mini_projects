export default function Image({imgdata,imageref,imgclassnam}){
    return <img alt={imgdata} ref={imageref} className={imgclassnam}/>
}