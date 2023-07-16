import Button from '../../components/button/Button';
import styles from './Landing.module.css';

const Landing = props => {
  return (
    <div id="home" className={styles.landingContainer} ref={props.sectionRef}>
      <div data-aos="zoom-in" data-aos-easing="ease-in">
        <h1 className={styles.landingHeader}>Hi, I'm En Rong.</h1>
      </div>
      {/* Wrapping div to 'contain' and prevent the typing effect from overflowing to parent container edge */}
      <div>
        <div className={styles.landingSubheader}>
          I enjoy bringing ideas to <div className={styles.landingSubheaderAccent}>life</div> on the
          web
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-easing="ease-in" className={styles.landingText}>
        I'm a full stack engineer working on several open source projects used by thousands of users
        across the world. Currently, I'm in my final year of university, awaiting graduation in May
        2024.
      </div>
      <div data-aos="zoom-in" data-aos-easing="ease-in" className={styles.ctaContainer}>
        <Button to="about" text="Find out more" />
      </div>
    </div>
  );
};

export default Landing;
