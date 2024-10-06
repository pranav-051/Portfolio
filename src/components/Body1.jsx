import styles from "./Body1.module.css";
function Body1() {
  return (
    <div id={`${styles["Body1Main"]}`}>
      <div id={`${styles["Body1Box1"]}`}>
        <p id={`${styles["myname"]}`}> Hi, my name is </p>
        <p id={`${styles["itsname"]}`}> Mr. Pranav Sherekar </p>
        <p id={`${styles["bio"]}`} class="fw-lighter fw-normal    ">
          I am a dedicated mobile and web developer with a strong foundation in
          full-stack development. I excel in collaborating with cross-functional
          teams to deliver projects on time, and I’m passionate about innovation
          and continuous growth.
        </p>

        <p id={`${styles["bio"]}`} class="fw-lighter fw-normal    ">
          You can explore the skills I’ve acquired and the projects I’ve
          completed on this website. I'm always eager to connect and discover
          new opportunities for collaboration. :)
        </p>

        <div className={`${styles["threeBoxes"]}`}>
          <div id={`${styles["threeBoxesBox1"]}`}>
            <div id={`${styles["box1data"]}`}>
              <div id={`${styles["no1"]}`}>21</div>
              <div id={`${styles["no1Name"]}`}>Verfiied Skills</div>
            </div>
          </div>
          <div id={`${styles["threeBoxesBox2"]}`}>
            <div id={`${styles["no1"]}`}>7</div>
            <div id={`${styles["no1Name"]}`}>Professional Projects</div>
          </div>
          <div id={`${styles["threeBoxesBox3"]}`}>
            <div id={`${styles["no1"]}`}>62+</div>
            <div id={`${styles["no1Name"]}`}>DSA Problem Solved</div>
          </div>
        </div>
      </div>

      <div id={`${styles["Body1Box2"]}`}>
        <img
          id={`${styles["profilePiic"]}`}
          className="img-fluid"
          src="./src/assets/profile.png"
        ></img>
      </div>
    </div>
  );
}

export default Body1;
