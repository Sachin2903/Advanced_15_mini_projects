import { Fragment, useState, useEffect } from "react";
import styles from "./tiktak.module.css";
import { Tiktakblock } from "../../atoms/tiktakblock/tiktakblock";
const tikboxarray = ["", "", "", "", "", "", "", "", ""];
export function Tiktak() {
  const [xo, setxo] = useState(tikboxarray);
  const [turn, setturn] = useState(true);

  function onclickvalue(event) {
    let tempxo = [...xo];
    tempxo[event] = turn ? "x" : "o";
  
    setxo(tempxo);
    setturn(!turn);
  }

  function restart() {
    setxo(tikboxarray);
  }

  useEffect(() => {
    let win = checkWinner();
    if (win) {
      alert(`${win} is the Winner of this Game`);
      setxo(tikboxarray);
    }
  },[xo]);

  function checkWinner() {
    const wincondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < wincondition.length; i++) {
      const [a, b, c] = wincondition[i];
      if (xo[a] && xo[a] === xo[b] && xo[a] === xo[c]) {
        return xo[a];
      }
    }
    return null;
  }

  return (
    <Fragment>
      <h1> Enjoy  Tic-Tac-Toe- Game  </h1>
      <div className={styles.tiktak}>
        {xo.map((element, i) => (
          <Tiktakblock
            key={i * 10}
            k={i}
            value={element}
            classstyle={turn ? styles.takboxzero : styles.takboxex}
            clickfun={onclickvalue}
          />
        ))}
      </div>
      <button onClick={restart} className={styles.btnxo}>
        
        Start Again
      </button>
    </Fragment>
  );
}
