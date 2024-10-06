import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <section id={`${styles["abt1"]}`}>
            <h4>Hello, Flock!</h4>
            <p>
              My journey in the world of coding and engineering has been nothing
              short of amazing, filled with learning and connecting with
              like-minded professionals. I'm a passionate mobile app developer
              specializing in Flutter technology, with a versatile skill set
              that includes expertise in C++, Java, Spring Boot, ReactJS,
              JavaScript, HTML, CSS, and Bootstrap. I also have a solid
              foundation in mobile and full-stack web development.
            </p>

            <p>
              I thrive in collaborative environments, working with
              cross-functional teams to meet project goals and deadlines. I’m
              always eager to contribute to dynamic teams that value innovation,
              teamwork, and continuous growth.
            </p>

            <p>
              That’s a little about me. Let’s connect and explore exciting
              opportunities together!
            </p>
          </section>
        </div>
        <div className={styles.links}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Clients</li>
            <li>Team</li>
            <li>Career</li>
            <li>Testimonials</li>
            <li>Journal</li>
          </ul>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Partners</li>
          </ul>
        </div>

        <div className="={styles.mydiv11">
          <button className={styles.contactButton}>Contact Us</button>
          <div className={styles.social}>
            <a
              className="fab fa-instagram"
              href="https://www.instagram.com/pranav___051/"
            ></a>
            <a className="fab fa-twitter" href="https://x.com/pranav_051"></a>
            <a
              className="fab fa-linkedin"
              href="https://www.linkedin.com/in/pranav-sherekar-22695b244/"
            ></a>
            <a
              className="fab fa-github"
              href="https://github.com/pranav-051"
            ></a>
          </div>
        </div>
      </div>
    </footer>
      <div className={styles.copyright}>
        <hr></hr>
        &copy; 2024-2025 All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
