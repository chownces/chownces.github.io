import profileImg from '../../assets/profile.jpeg';
import styles from './About.module.css';
import Spacer from '../../components/spacer/Spacer';
import SectionHeading from '../../components/sectionHeading/SectionHeading';
import Button from '../../components/button/Button';

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
                I recently completed my Computer Science degree at the National University of
                Singapore (NUS) in June 2024. Naturally curious, I enjoy tinkering and disassembling
                things to find out how they work.
              </p>
              <p>
                My interests these days lie within the GenAI space, where a large part of my work is
                devoted to building secure RAG LLM applications. During my undergrad, I was also
                actively involved in the areas of web development, DevOps and large opensource
                knowledge graphs.
              </p>
              <p>
                Passionate about using tech for good, I am always actively seeking opportunities to
                use software to improve the world around us. Feel free to connect with me over
                LinkedIn to have a chat!
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
        <div className={styles.aboutNavigationButtonsContainer}>
          <AboutNavigationButton to="experience" text="My Experiences" />
          <AboutNavigationButton to="portfolio" text="My Projects" />
          <AboutNavigationButton to="coursework" text="My Coursework" />
        </div>
      </div>
    </div>
  );
};

const AboutNavigationButton = ({ to, text }) => {
  return (
    <div className={styles.aboutNavigationButton}>
      <Button to={to} text={text} isSmall />
    </div>
  );
};

export default About;
