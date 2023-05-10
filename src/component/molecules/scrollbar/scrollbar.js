import { Fragment } from "react";
import styles from "./scrollbar.module.css";
import { Card } from "../../atoms/card/card.js";
import logo1 from "../../../image/avatar/icons6.png";
import logo2 from "../../../image/avatar/icons7.png";
import logo3 from "../../../image/avatar/icons6.png";
import logo4 from "../../../image/avatar/icons7.png";
import logo5 from "../../../image/avatar/icons6.png";
import logo6 from "../../../image/avatar/icons7.png";
import logo7 from "../../../image/avatar/icons6.png";
export function Scrollbar() {
    const mentordata = [{ img: logo1, name: "Pritesh Kumar , IIT Delhi", position: "CTO @ FunctionUp", yearexp: "9 Yrs Exp." },
    { img: logo2, name: "Anubhav Singh , IIT Kanpur", position: "Co-founder @ Dubdub.ai", yearexp: "7 Yrs Exp." },
    { img: logo3, name: "Rahul Garg , IIT Kanpur", position: "Co-founder @ Dubdub.ai", yearexp: "7 Yrs Exp." },
    { img: logo4, name: "Aviral Sharma , IIT Delhi", position: "Data Scientist Manager @ Optum", yearexp: "7 Yrs Exp.." },
    { img: logo5, name: "Uddhav Bamba , IIT Dhanbad", position: "Applied Scientist @ Amazon", yearexp: "3 Yrs Exp." },
    { img: logo6, name: "Anchal Jaiswal,IIT Kanpur", position: "Senior Data Scientist @ Tredence", yearexp: "7 Yrs Exp." },
    { img: logo7, name: "Rahul Sankhwar,IIT Kanpur", position: "Senior Data Scientist @ Sharechat", yearexp: "6 Yrs Exp." },]

    return (
        <Fragment><div className={styles.main}>
            <div className={styles.scroll}>

                {
                    mentordata.map((detail, i) =>
                        <Card key={i * 10} k={detail} />
                    )
                }

            </div>
        </div>


        </Fragment>

    )
}