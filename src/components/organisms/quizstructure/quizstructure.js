import { Fragment, useState, useEffect } from "react";
import { Quizdata } from "./quizdata";
import { tru } from "./quizdata";

import styles from "./quizstructure.module.css";

export function Quizstructure() {
    const [marks, setMarks] = useState(0);
    const [quepage, setQuepage] = useState(0);
    const [truanswer, setTruAnswer] = useState([...tru]);
    const [ansstyle, setAnsStyle] = useState(-1);
    const [btnstate, setbtnState] = useState("Next");
    const [min, setMin] = useState(9);
    const [sec, setSec] = useState(60);

    useEffect(() => {
        const id = setTimeout(() => {

            setSec(sec - 1);
            if (sec == 1) {
                setMin(min - 1)
                if (min == 0) {
                    setQuepage(11)
                }
                setSec(60)
            }
        }, 1000)

        return () => {
            clearTimeout(id);
        }

    }, [sec]);


    function changeQuestion() {
        setAnsStyle(-1)
        if (!truanswer[quepage] && quepage < Quizdata.length) {
            setQuepage(quepage + 1);
            if (quepage == 8) {
                setbtnState("Submit");
            }


        } else if (!(quepage < Quizdata.length)) {
            setbtnState("Next");
            setMin(9);
            setSec(60)
            setMarks(0);
            setQuepage(0);
            setTruAnswer([...tru]);

        }

    }
    function scoreFun(check) {

        if (truanswer[quepage])
            setAnsStyle(check - 1)

        if (truanswer[quepage] && Quizdata[quepage].answer === check)
            setMarks(marks + 2);

        truanswer[quepage] = false;


    }




    return (
        <Fragment>

            <div className={styles.quizbox}>{

                (!(quepage < Quizdata.length)) ? (
                    <Fragment>
                        <div>
                            <h1>Your Score : {marks}</h1>
                            <h1>Total Score 20</h1>
                        </div>
                        <button onClick={changeQuestion} className={styles.restartbtn} >Restart</button>

                    </Fragment>

                ) : (
                    <Fragment>
                        <p className={styles.timetime}>{min}:{sec} min left</p>
                        <p className={styles.question}>{Quizdata[quepage].question}</p>
                        <div className={styles.optiondiv}>{
                            Quizdata[quepage].options.map((e, i) => <p onClick={() => scoreFun(i + 1)} className={` ${styles.optionoption} ${(ansstyle === i) ? styles.optionoptionselect : null}`} key={i * 10}>{e}</p>)
                        }
                        </div>
                        <div className={styles.btndiv}><button onClick={changeQuestion} className={styles.nextbtn}>{btnstate}</button></div>
                    </Fragment>
                )

            }</div>


        </Fragment>
    );//return
}//function
