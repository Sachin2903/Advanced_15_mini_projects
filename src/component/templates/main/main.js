import { Fragment } from "react";
import { Navbar } from "../../organisms/navbar/navbar.js";
import { Herosection } from "../../organisms/herosection/herosection.js";
export function Main() {
  return (
    <Fragment>
      <Navbar />
      <Herosection />
    </Fragment>
  );
}
