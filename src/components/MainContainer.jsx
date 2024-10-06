import Body1 from "./Body1";
import Body2 from "./Body2";
import Body3 from "./Body3";
import Body4 from "./Body4";
import Footer from "./Footer";
import styles from "./MainContainer.module.css";
import Navbar from "./Navbar";
function MainContainer() {
    return <div id={`${styles["mainContainer"]}`}>
      <Navbar></Navbar>
      <Body1></Body1>
      <Body2></Body2>
      <Body3></Body3>
      <Body4></Body4>
      <Footer></Footer>
  </div>;
}
export default MainContainer;
