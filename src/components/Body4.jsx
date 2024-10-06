import styles from "./Body4.module.css";
import GitHubCalendar from "react-github-calendar";

function Body4() {
  return (
    <div id="b4">
      <h2 id={`${styles["h2skills"]}`}>My Projects</h2>
      <hr />
      <div id={`${styles["Body4Main"]}`}>
        <GitHubCalendar username="pranav-051" />
      </div>
    </div>
  );
}

export default Body4;
