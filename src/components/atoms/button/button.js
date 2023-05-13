import { ImCross } from 'react-icons/im';
export function Button({ kindex, btnclickfun, stylebtn }) {
    return (<button onClick={() => btnclickfun(kindex)} className={stylebtn}><ImCross /></button>)
}