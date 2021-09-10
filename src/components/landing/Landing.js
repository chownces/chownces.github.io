import Button from '../button/Button';
import styles from './Landing.module.css';

const Landing = props => {
  return (
    <div id="home" className={styles.landingContainer} ref={props.sectionRef}>
      <div className={styles.landingContentContainer}>
        <div className={styles.landingHeaderContainer}>
          <h1 className={styles.landingHeader1}>Hi, I'm</h1>
          <h1 className={styles.landingHeader2}>En Rong.</h1>
          <div className={styles.landingSubheader}>
            I enjoy bringing ideas to <div className={styles.landingSubheaderAccent}>life</div> on
            the web
          </div>
          <div className={styles.ctaContainer}>
            <Button to="about" text="Find out more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
