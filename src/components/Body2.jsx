import React, { useState } from "react";
import styles from "./Body2.module.css";
import Button3D from "./Button3D";

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
                  src="./src/assets/html.jpg"
                />
              </div>
              <div className="p-3">HTML</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/css.jpg"
                />
              </div>
              <div className="p-3">CSS</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/js.jpg"
                />
              </div>
              <div className="p-3">JavaScript</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/react.jpg"
                />
              </div>
              <div className="p-3">ReactJS</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/node.jpg"
                />
              </div>
              <div className="p-3">NodeJS</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/mongodb.jpg"
                />
              </div>
              <div className="p-3">MongoDB</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/sql.jpg"
                />
              </div>
              <div className="p-3">SQL</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/c.jpg"
                />
              </div>
              <div className="p-3">C</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/cpp.jpg"
                />
              </div>
              <div className="p-3">C++</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/java.jpg"
                />
              </div>
              <div className="p-3">Java</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/py.jpg"
                />
              </div>
              <div className="p-3">Python</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/dart.jpg"
                />
              </div>
              <div className="p-3">Dart</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/flutter.jpg"
                />
              </div>
              <div className="p-3">Flutter</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/firebase.jpg"
                />
              </div>
              <div className="p-3">Firebase</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/php.jpg"
                />
              </div>
              <div className="p-3">PHP</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/spring.jpg"
                />
              </div>
              <div className="p-3">Spring Boot</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/git.jpg"
                />
              </div>
              <div className="p-3">Git</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/linux.jpg"
                />
              </div>
              <div className="p-3">Linux</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/bootstrap.jpg"
                />
              </div>
              <div className="p-3">Bootstrap</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/express.jpg"
                />
              </div>
              <div className="p-3">Express JS</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/ml.jpg"
                />
              </div>
              <div className="p-3">Machine Learning</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/figma.jpg"
                />
              </div>
              <div className="p-3">Figma</div>
            </div>
            <div className="col">
              <div>
                <img
                  id={`${styles["Liconlogo"]}`}
                  className="img-fluid"
                  src="./src/assets/astudio.jpg"
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
