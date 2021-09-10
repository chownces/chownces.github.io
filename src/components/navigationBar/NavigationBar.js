import React from 'react';
import { Link } from 'react-scroll';
import styles from './NavigationBar.module.css';

const NavigationBar = props => {
  const getActiveStyling = sectionName => (sectionName === props.section ? styles.active : null);

  return (
    <div className={styles.navbarContainer} ref={props.sectionRef}>
      <ul>
        <li style={{ fontFamily: 'Arvo', color: 'white', fontWeight: 'bold' }}>
          <Link to="home" spy smooth className={styles.logo}>
            Chow En Rong
          </Link>
        </li>
        <li className={getActiveStyling('Landing')}>
          <Link to="home" spy smooth>
            Home
          </Link>
        </li>
        <li className={getActiveStyling('About')}>
          <Link to="about" spy smooth>
            About
          </Link>
        </li>
        <li className={getActiveStyling('Portfolio')}>
          <Link to="portfolio" spy smooth>
            Portfolio
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://github.com/chownces" target="_blank" rel="noreferrer">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/chowenrong/" target="_blank" rel="noreferrer">
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
  );
};

export default NavigationBar;
