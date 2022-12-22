import profileImg from '../../assets/profile.jpeg';
import styles from './About.module.css';
import Spacer from '../../components/spacer/Spacer';
import SectionHeading from '../../components/sectionHeading/SectionHeading';

const About = props => {
  return (
    <div id="about" ref={props.sectionRef}>
      <Spacer />
      <div data-aos="zoom-in" data-aos-duration="600" className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutContentTextContainer}>
            <div className={styles.aboutContentText}>
              <SectionHeading text="About Me" />
              <p>
                I am currently completing my Computer Science degree at the National University of
                Singapore (NUS). Naturally curious, I enjoy tinkering and disassembling things to
                find out how they work.
              </p>
              <p>
                My interests these days include web development, DevOps and computer vision.
                Passionate about using tech for good, I am actively seeking opportunities to use
                software to improve the world around us.
              </p>
              <p>
                Outside studying, you can find me tutoring undergrad modules, playing fingerstyle
                guitar, or contributing back to the open source community.
              </p>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default About;
