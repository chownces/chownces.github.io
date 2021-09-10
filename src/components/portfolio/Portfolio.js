import { Carousel } from 'react-responsive-carousel';
import Spacer from '../spacer/Spacer';
import sa1 from '../../assets/sa1.png';
import sa2 from '../../assets/sa2.png';
import sa3 from '../../assets/sa3.png';
import sa4 from '../../assets/sa4.png';
import nw1 from '../../assets/nw1.png';
import nw2 from '../../assets/nw2.png';
import nw3 from '../../assets/nw3.png';
import styles from './Portfolio.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Portfolio = props => {
  return (
    <>
      <Spacer id="portfolio" />
      <div className={styles.portfolio} ref={props.sectionRef}>
        <div className={styles.portfolioContent}>
          <Section sectionTitle="Education" cards={educationCards} />
          <Section sectionTitle="External Courses" cards={externalCoursesCards} />

          <h1 style={{ margin: '50px 0 0 0' }}>Work Experience</h1>
          <CardCarousel card={workExperienceCards[0]} />
          <CardCarousel images={[sa1, sa2, sa3, sa4]} card={workExperienceCards[1]} />
          <CardCarousel card={workExperienceCards[2]} />

          <h1 style={{ margin: '50px 0 0 0' }}>Side Projects</h1>
          <CardCarousel images={[nw1, nw2, nw3]} card={sideProjectCards[0]} />
          <div style={{ height: '100px' }} />
        </div>
      </div>
    </>
  );
};

const educationCards = [
  {
    title: 'National University of Singapore',
    sections: [
      {
        subtitle: 'Bachelor of Computing in Computer Science',
        date: 'Present',
        points: [
          'Expected Graduation: May 2024',
          'CAP: 4.85/ 5.0',
          `Dean's List AY20/21 Semester 1`
        ]
      }
    ]
  },
  {
    title: 'Raffles Institution',
    sections: [
      {
        subtitle: 'GCE A Level',
        date: 'Jan 2016 - Dec 2017',
        points: ['Attained 88.75/90 RP with Distinction in H3 Geography']
      }
    ]
  }
];

const externalCoursesCards = [
  {
    title: 'Neural Networks and Deep Learning',
    sections: [
      {
        subtitle: 'Coursera (DeepLearning.ai)',
        links: [
          {
            to: 'https://www.coursera.org/account/accomplishments/certificate/N7CYGG5Y87H2',
            text: 'See credential...'
          }
        ]
      }
    ]
  },
  {
    title: 'Machine Learning',
    sections: [
      {
        subtitle: 'Coursera (Stanford University)',
        links: [
          {
            to: 'https://www.coursera.org/account/accomplishments/certificate/VQQFG8S5BS48',
            text: 'See credential...'
          }
        ]
      }
    ]
  },
  {
    title: 'AI for Industry (AI4I)',
    sections: [
      {
        subtitle: 'AI Singapore',
        points: ['In progress...']
      }
    ]
  }
];

const workExperienceCards = [
  {
    title: 'Teaching Assistant (CS1101S Programming Methodology)',
    sections: [
      {
        subtitle: 'NUS School of Computing',
        date: 'Aug 2021 - Present',
        points: [
          'Leads weekly tutorial sessions on programming and computational problem solving for Computer Science freshmen'
        ]
      }
    ]
  },
  {
    title: 'Full Stack Developer (Summer)',
    sections: [
      {
        subtitle: 'Source Academy',
        date: 'May 2021 - Jul 2021',
        points: [
          <>
            The{' '}
            <a href="https://github.com/source-academy" target="_blank" rel="noreferrer">
              Source Academy
            </a>{' '}
            is an open-source, immersive gamified online learning environment developed at NUS, and
            is used to teach <i>CS1101S Programming Methodology</i>
          </>,
          'Developed multi-tenant backend architecture and UI for the system which could previously only cater to a single course at a time',
          'Enabled multiple courses to be created and ran concurrently on the same instance with no downtime',
          'Additionally, managed deployment ops for the summer Source Academy courses at NUS',
          <i>
            (ReactJS, Redux, Saga, BlueprintJS | Elixir, Phoenix, Ecto, PostgreSQL | AWS IaaS |
            GitHub)
          </i>
        ]
      }
    ]
  },
  {
    title: 'Student Frontend Developer',
    sections: [
      {
        subtitle: 'NUS School of Computing',
        date: 'Dec 2020 - Apr 2021',
        points: [
          'Designed and implemented responsive layouts and mobile-friendly features for the previously desktop-only online IDE in Source Academy, as part of the module CP3108B (Independent Work)',
          <i>(Responsive Web Design | UI/UX Design | ReactJS, BlueprintJS, CSS)</i>
        ]
      }
    ]
  }
];

const sideProjectCards = [
  {
    title: 'NoteWorthy',
    sections: [
      {
        subtitle: 'CP2106 Independent Software Development Project (NUS Orbital)',
        date: 'May 2021 - Aug 2021',
        points: [
          'Developed a desktop notetaking app with a feature set targeted at learning and collaboration of notes for students',
          'Implemented an interactive frontend where notes are stored in draggable and nestable content-editable div blocks',
          'Designed an Express-GraphQL backend with MongoDB to enable notes to be persisted on an online database',
          <a
            href="https://chownces.github.io/noteworthy-documentation/"
            target="_blank"
            rel="noreferrer"
          >
            See project documentation and repositories...
          </a>,
          <i>
            (ReactJS, Semantic-UI | Express, Apollo, GraphQL, MongoDB | Vercel, Heroku, MongoDB
            Atlas)
          </i>
        ]
      }
    ]
  }
];

const Section = props => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h1>{props.sectionTitle}</h1>
      </div>
      <div className={styles.sectionContent}>
        {props.cards && props.cards.map((e, idx) => <Card {...e} key={idx} />)}
      </div>
    </div>
  );
};

const CardCarousel = props => {
  const { card, images } = props;

  return (
    <div className={styles.cardCarouselContainer}>
      <div>
        <Card {...card} />
      </div>
      {images && (
        <div className={styles.cardCarousel}>
          <Carousel showArrows autoPlay infiniteLoop showThumbs={false} className={styles.carousel}>
            {images.map((img, idx) => (
              <div key={idx}>
                <img src={img} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

const Card = props => {
  const { title, date, sections } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        {title}
        {date ? <span> | {date}</span> : null}
      </div>
      {sections &&
        sections.map((e, idx) => (
          <div key={idx}>
            <div className={styles.cardSubtitle}>{e.subtitle}</div>
            <ul>
              {e.points && e.points.map((e, idx) => <li key={idx}>{e}</li>)}
              {e.links &&
                e.links.map((e, idx) => (
                  <li key={idx}>
                    <a href={e.to} target="_blank" rel="noreferrer">
                      {e.text}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Portfolio;
