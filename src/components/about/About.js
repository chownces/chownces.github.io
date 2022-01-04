import profileImg from '../../assets/profile.jpeg';
import Button from '../button/Button';
import styles from './About.module.css';
import Spacer from '../spacer/Spacer';

const About = props => {
  return (
    <>
      <Spacer id="about" />
      <div
        data-aos="zoom-in"
        data-aos-duration="600"
        className={styles.about}
        ref={props.sectionRef}
      >
        <div className={styles.aboutContent}>
          <div className={styles.aboutContentImg}>
            <img src={profileImg} alt="profile"></img>
            <div className={styles.socialsContainer}>
              <ul>
                <li>
                  <a href="https://github.com/chownces" target="_blank" rel="noreferrer">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/chowenrong/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:chowenrong@u.nus.edu">
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.aboutContentTextContainer}>
            <div className={styles.aboutContentText}>
              <p>
                I am a Computer Science undergrad at the National University of Singapore (NUS).
              </p>
              <p>
                My current interests include web development, computer vision, and AI for
                healthcare. Passionate about using tech for good, I am actively seeking
                opportunities to use software to improve the world around us.
              </p>
              <p>
                Apart from banging out code on the keyboard, I enjoy doing music, nature, and
                reading up on the latest tech happenings.
              </p>
              <div className={styles.portfolioButtonContainer}>
                <Button to="portfolio" text="View my portfolio" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
