import Button from '../button/Button';
import styles from './Landing.module.css';

const Landing = props => {
  return (
    <div id="home" className={styles.landingContainer} ref={props.sectionRef}>
      <div className={styles.landingContentContainer}>
        <div className={styles.landingHeaderContainer}>
          <div data-aos="slide-right" data-aos-easing="ease-in">
            <h1 className={styles.landingHeader1}>Hi, I'm</h1>
            <h1 className={styles.landingHeader2}>En Rong.</h1>
          </div>
          <div className={styles.landingSubheader}>
            I enjoy bringing ideas to <div className={styles.landingSubheaderAccent}>life</div> on
            the web
          </div>
          <div data-aos="zoom-in" data-aos-easing="ease-in" className={styles.ctaContainer}>
            <Button to="about" text="Find out more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
