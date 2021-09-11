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
          <CardCarousel card={sideProjectCards[1]} />
          <div style={{ height: '100px' }} />
        </div>
      </div>
    </>
  );
};

const educationCards = [
  {
    title: 'National University of Singapore',
    date: 'Present',
    sections: [
      {
        subtitle: 'Bachelor of Computing in Computer Science',
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
    date: 'Jan 2016 - Dec 2017',
    sections: [
      {
        subtitle: 'GCE A Level',
        points: ['Attained 88.75/ 90 RP with Distinction in H3 Geography']
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
    date: 'Aug 2021 - Present',
    sections: [
      {
        subtitle: 'NUS School of Computing',
        points: [
          'Leads weekly tutorial sessions on programming and computational problem solving for Computer Science freshmen'
        ]
      }
    ]
  },
  {
    title: 'Full Stack Developer (Summer)',
    date: 'May 2021 - Jul 2021',
    sections: [
      {
        subtitle: 'Source Academy',
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
          <a href="https://github.com/source-academy/" target="_blank" rel="noreferrer">
            See repositories...
          </a>,
          <>
            <u>Leveraged knowledge</u>:{' '}
            <i>
              TypeScript, ReactJS, Redux, Saga, BlueprintJS | Elixir, Phoenix, Ecto, PostgreSQL |
              AWS IaaS | GitHub
            </i>
          </>
        ]
      }
    ]
  },
  {
    title: 'Student Frontend Developer',
    date: 'Dec 2020 - Apr 2021',
    sections: [
      {
        subtitle: 'NUS School of Computing',
        points: [
          'Designed and implemented responsive layouts and mobile-friendly features for the previously desktop-only online IDE in Source Academy, as part of the module CP3108B (Independent Work)',
          'Added Progressive Web App (PWA) functionality for mobile users',
          <a href="https://github.com/source-academy/frontend" target="_blank" rel="noreferrer">
            See repository...
          </a>,
          <>
            <u>Leveraged knowledge</u>:{' '}
            <i>Responsive Web Design | UI/UX Design | ReactJS, BlueprintJS, CSS</i>
          </>
        ]
      }
    ]
  }
];

const sideProjectCards = [
  {
    title: 'NoteWorthy',
    date: 'May 2021 - Aug 2021',
    sections: [
      {
        subtitle: 'CP2106 Independent Software Development Project (NUS Orbital)',
        points: [
          'Developed a desktop notetaking app with a feature set targeted at learning and collaboration of notes for students',
          'Implemented an interactive frontend where notes are stored in draggable and nestable content-editable div blocks',
          'Designed an Express-GraphQL backend with MongoDB to enable notes to be persisted on an online database',
          <a
            href="https://chownces.github.io/noteworthy-documentation/"
            target="_blank"
            rel="noreferrer"
          >
            See project documentation...
          </a>,
          <a href="https://github.com/chownces/NoteWorthy" target="_blank" rel="noreferrer">
            See repositories...
          </a>,
          <>
            <u>Utilized</u>:{' '}
            <i>
              ReactJS, Semantic-UI | Express, Apollo, GraphQL, MongoDB | Vercel, Heroku, MongoDB
              Atlas
            </i>
          </>
        ]
      }
    ]
  },
  {
    title: 'Build On, Singapore 2020',
    date: 'Jul 2020 - Sep 2020',
    sections: [
      {
        subtitle: 'Case Competition (Amazon Web Services)',
        points: [
          'Designed and prototyped a Telegram bot to combat misinformation through state-of-the-art Natural Language Processing techniques',
          'Fine-tuned a BERT Sequence Classification Model and deployed it on an AWS Sagemaker endpoint, to be invoked from the Telegram bot backend on AWS Lambda',
          'Advanced to semi-finalist phase, consisting of the top 50 teams',
          <>
            <u>Utilized</u>:{' '}
            <i>
              Python, Transformer Neural Networks, Jupyter Notebooks, Telegram API | AWS Sagemaker,
              AWS Lambda
            </i>
          </>
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
        {date ? <span className={styles.date1}> | {date}</span> : null}
      </div>
      {sections &&
        sections.map((e, idx) => (
          <div key={idx}>
            <div className={styles.cardSubtitle}>{e.subtitle}</div>
            {idx === 0 && date && <div className={styles.date2}>({date})</div>}
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
