import { Fragment } from "react";
export function Tiktakblock({ k, value, classstyle, clickfun }) {
  return (
    <Fragment>
      <div
        onClick={() => {
          clickfun(k);
        }}
        className={classstyle}
      >
        {value}
      </div>
    </Fragment>
  );
}
