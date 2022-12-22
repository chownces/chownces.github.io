import SectionHeading from '../../components/sectionHeading/SectionHeading';
import Spacer from '../../components/spacer/Spacer';
import styles from './Portfolio.module.css';
import NoteWorthyImg from '../../assets/nw1.png';
import SAImg from '../../assets/sa2.png';
import ClimbJiosImg from '../../assets/climbjios.png';
import React from 'react';

const Portfolio = props => {
  return (
    <div id="portfolio" ref={props.sectionRef}>
      <Spacer />
      <div data-aos="zoom-in" data-aos-duration="600" className={styles.portfolio}>
        <SectionHeading text="Featured Projects" />
        {portfolioData.map((e, idx) => (
          <Card key={idx} data={e} />
        ))}
      </div>
    </div>
  );
};

const Card = props => {
  const { data } = props;
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={data.image} alt={data.title}></img>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardContentHeader}>{data.title}</h3>
        <div className={styles.cardContentDate}>{data.date}</div>
        <div className={styles.cardContentText}>
          {data.content.map((e, idx) => (
            <React.Fragment key={idx}>
              <div>{e}</div>
              {idx !== data.content.length - 1 ? <br /> : <></>}
            </React.Fragment>
          ))}
        </div>
        <div className={styles.cardContentTechStack}>
          {data.techStack.map((e, idx) => (
            <div key={idx}>{e}</div>
          ))}
        </div>
        <div className={styles.cardContentLinks}>
          {data.githubLink ? (
            <a href={data.githubLink} title="Github Repository" target="_blank" rel="noreferrer">
              <i className="fa fa-github fa-lg"></i>
            </a>
          ) : (
            <></>
          )}
          {data.appLink ? (
            <a href={data.appLink} title="Application" target="_blank" rel="noreferrer">
              <i className="fa fa-external-link fa-lg"></i>
            </a>
          ) : (
            <></>
          )}
          {data.documentationLink ? (
            <a href={data.documentationLink} title="Documentation" target="_blank" rel="noreferrer">
              <i className="fa fa-book fa-lg"></i>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

const portfolioData = [
  {
    title: 'ClimbJios',
    date: 'Sep 2022 - Present',
    image: ClimbJiosImg,
    content: [
      'Architected and implemented the backend infrastructure, and presently managing deployment ops for the application, which has over 1300 users',
      'Worked closely with product stakeholders to setup analytics dashboards through software tools like Retool',
      'Awarded the winning project for the NUS School of Computing STePS Showcase Event in November 2022'
    ],
    techStack: ['TypeScript', 'ReactJS', 'NestJS', 'PostgreSQL', 'AWS'],
    githubLink: 'https://github.com/climbjios-sg/climbjios-app',
    appLink: 'https://app.climbjios.com',
    documentationLink:
      'https://gentle-wealth-37f.notion.site/ClimbJios-Showcase-ca19570da1b84b09a8190a299bb7703f'
  },
  {
    title: (
      <>
        Source Academy
        <br />
        (Multitenant Backend)
      </>
    ),
    date: 'May 2021 - Jul 2021',
    image: SAImg,
    content: [
      'Developed multi-tenant backend architecture and UI for the system, enabling multiple courses to run concurrently on the same instance with no downtime',
      'The system is now being used at universities worldwide, such as NUS and Uppsala, with >750 users in NUS alone every academic year'
    ],
    techStack: ['TypeScript', 'ReactJS', 'Redux', 'Elixir', 'Phoenix', 'PostgreSQL'],
    githubLink: 'https://github.com/source-academy',
    appLink: 'https://sourceacademy.org',
    documentationLink: 'https://about.sourceacademy.org'
  },
  {
    title: 'NoteWorthy',
    date: 'May 2021 - Jul 2021',
    image: NoteWorthyImg,
    content: [
      'Developed an interactive desktop notetaking app where notes are stored in draggable and nestable content-editable div blocks',
      'Designed an Express-GraphQL backend with MongoDB to enable notes to be persisted on an online database'
    ],
    techStack: ['TypeScript', 'ReactJS', 'Express', 'Apollo', 'GraphQL', 'MongoDB'],
    githubLink: 'https://github.com/chownces/NoteWorthy',
    // appLink: '',
    documentationLink: 'https://chownces.github.io/noteworthy-documentation/'
  }
];

export default Portfolio;
