import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <>
      <nav id={`${styles["navBar"]}`} className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img
            id={`${styles["iconGRP"]}`}
            src="./src/assets/napster-brands-solid.svg"
          ></img>

          <a id={`${styles["siteName"]}`} className="navbar-brand" href="#">
            Pranav Sherekar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id={`${styles["rightDiv"]}`} class="collapse navbar-collapse">
            <form class="d-flex" role="search">
              <Link
                to="InternalBody2Main"
                smooth={true}
                duration={500}
                className=" btn nav-link active navbar-brand  "
              >
                Skills Acquired
              </Link>

              <Link
                to="Body3Main"
                smooth={true}
                duration={500}
                className="btn nav-link active navbar-brand"
              >
                My Projects
              </Link>

              <Link
                to="b4"
                smooth={true}
                duration={500}
                className="btn nav-link active navbar-brand"
              >
                GitHub
              </Link>

              <div> | </div>
              <a
                href="https://www.linkedin.com/in/pranav-sherekar-22695b244/"
                target="__main"
              >
                <img
                  id={`${styles["iconGRP"]}`}
                  src="./src/assets/linkedin-brands-solid.svg"
                ></img>
              </a>

              <a href="https://github.com/pranav-051" target="__main">
                <img
                  id={`${styles["iconGRP"]}`}
                  src="./src/assets/github-brands-solid.svg"
                ></img>
              </a>

              <img
                id={`${styles["iconGRP"]}`}
                src="./src/assets/moon-solid.svg"
              ></img>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
