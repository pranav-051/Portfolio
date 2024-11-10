import React, { useState } from "react";
import styles from "./Body2.module.css";
import Button3D from "./Button3D";
import htmlImg from "/src/assets/html.jpg";
import cssImg from "/src/assets/css.jpg";
import jsImg from "/src/assets/js.jpg";
import reactImg from "/src/assets/react.jpg";
import nodeImg from "/src/assets/node.jpg";
import mongodbImg from "/src/assets/mongodb.jpg";
import sqlImg from "/src/assets/sql.jpg";
import cImg from "/src/assets/c.jpg";
import cppImg from "/src/assets/cpp.jpg";
import javaImg from "/src/assets/java.jpg";
import pyImg from "/src/assets/py.jpg";
import dartImg from "/src/assets/dart.jpg";
import flutterImg from "/src/assets/flutter.jpg";
import firebaseImg from "/src/assets/firebase.jpg";
import phpImg from "/src/assets/php.jpg";
import springImg from "/src/assets/spring.jpg";
import gitImg from "/src/assets/git.jpg";
import linuxImg from "/src/assets/linux.jpg";
import bootstrapImg from "/src/assets/bootstrap.jpg";
import expressImg from "/src/assets/express.jpg";
import mlImg from "/src/assets/ml.jpg";
import figmaImg from "/src/assets/figma.jpg";
import androidImg from "/src/assets/astudio.jpg";

function Body2() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="InternalBody2Main">
      <h2 id={`${styles["h2skills"]}`}>
        Skills Acquired <hr />
      </h2>

      <div
        id={`${styles["InternalBody2Main"]}`}
        /*   id="InternalBody2Main" // Sectio */ n
        for
        Skills
        Acquired
        style={{
          height: isExpanded ? "auto" : "44.6vh",
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <div id={`${styles["Body2Main"]}`} className="container text-center">
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 g-lg-3">
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={htmlImg}
                />
              </div>
              <div className="p-3">HTML</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={cssImg}
                />
              </div>
              <div className="p-3">CSS</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={jsImg}
                />
              </div>
              <div className="p-3">JavaScript</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={reactImg}
                />
              </div>
              <div className="p-3">ReactJS</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={nodeImg}
                />
              </div>
              <div className="p-3">NodeJS</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={mongodbImg}
                />
              </div>
              <div className="p-3">MongoDB</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={sqlImg}
                />
              </div>
              <div className="p-3">SQL</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={cImg}
                />
              </div>
              <div className="p-3">C</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={cppImg}
                />
              </div>
              <div className="p-3">C++</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={javaImg}
                />
              </div>
              <div className="p-3">Java</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={pyImg}
                />
              </div>
              <div className="p-3">Python</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={dartImg}
                />
              </div>
              <div className="p-3">Dart</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={flutterImg}
                />
              </div>
              <div className="p-3">Flutter</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={firebaseImg}
                />
              </div>
              <div className="p-3">Firebase</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={phpImg}
                />
              </div>
              <div className="p-3">PHP</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={springImg}
                />
              </div>
              <div className="p-3">Spring Boot</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={gitImg}
                />
              </div>
              <div className="p-3">Git</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={linuxImg}
                />
              </div>
              <div className="p-3">Linux</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={bootstrapImg}
                />
              </div>
              <div className="p-3">Bootstrap</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={expressImg}
                />
              </div>
              <div className="p-3">Express JS</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={mlImg}
                />
              </div>
              <div className="p-3">Machine Learning</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={figmaImg}
                />
              </div>
              <div className="p-3">Figma</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src={androidImg}
                />
              </div>
              <div className="p-3">Android Studio</div>
            </div>
          </div>
        </div>
      </div>

      <button
        id={`${styles["btn"]}`}
        onClick={toggleExpand}
        className={styles.collapseButton}
      >
        {isExpanded ? "View less >>" : "View more >>"}
      </button>
    </div>
  );
}

export default Body2;
