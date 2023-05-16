
export function Button({ kindex, btnclickfun, stylebtn }) {
    return (<button onClick={() => btnclickfun(kindex)} className={stylebtn}>Delete</button>)
}