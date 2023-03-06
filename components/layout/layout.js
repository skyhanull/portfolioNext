import { Fragment } from "react";
import MainNavtigation from "./mainNavigation";
import Logo from "./logo";

function Layout(props) {
  return (
    <Fragment>
      <MainNavtigation />
      <main>{props.children}</main>
      {/* <Logo /> */}
    </Fragment>
  );
}

export default Layout;
