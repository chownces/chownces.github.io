import { Carousel } from 'react-responsive-carousel';
import Spacer from '../spacer/Spacer';
import chr1 from '../../assets/chr1.png';
import chr2 from '../../assets/chr2.png';
import chr3 from '../../assets/chr3.png';
import sa1 from '../../assets/sa1.png';
import sa2 from '../../assets/sa2.png';
import sa3 from '../../assets/sa3.png';
import sa4 from '../../assets/sa4.png';
import nw1 from '../../assets/nw1.png';
import nw2 from '../../assets/nw2.png';
import nw3 from '../../assets/nw3.png';
import sam1 from '../../assets/sam1.PNG';
import sam2 from '../../assets/sam2.PNG';
import styles from './Portfolio.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Portfolio = props => {
  const renderCards = cards => cards.map((card, idx) => <CardCarousel key={idx} card={card} />);

  return (
    <>
      <Spacer id="portfolio" />
      <div className={styles.portfolio} ref={props.sectionRef}>
        <div className={styles.portfolioContent}>
          <Section sectionTitle="Education" cards={educationCards} />
          <Section sectionTitle="External Courses" cards={externalCoursesCards} />

          <h1 style={{ margin: '80px 0 0 0' }}>Work Experience</h1>
          {renderCards(workExperienceCards)}

          <h1 style={{ margin: '80px 0 0 0' }}>Software Side Projects</h1>
          {renderCards(softwareSideProjectCards)}

          <h1 style={{ margin: '80px 0 0 0' }}>AI Side Projects</h1>
          {renderCards(aiSideProjects)}

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
          'Expected Graduation: Dec 2023',
          'CAP: 4.82/ 5.0',
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
    title: 'Deep Learning Specialization',
    sections: [
      {
        subtitle: 'Coursera (DeepLearning.ai)',
        points: ['Audited']
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
    title: 'Software Engineer Intern',
    date: 'Jan 2022 - Present',
    sections: [
      {
        subtitle: 'GovTech (Engineering Suite)',
        subtitleLink:
          'https://www.developer.tech.gov.sg/singapore-government-tech-stack/service-management/engineering-suite',
        points: [
          "Engineering Suite is a Service Management Tool that unifies central services such as government agencies' access and subscription to Singapore Government Tech Stack (SGTS) products"
        ]
      }
    ]
  },
  {
    title: 'Software Engineer Intern',
    date: 'Nov 2021 - Dec 2021',
    sections: [
      {
        subtitle: 'MatcHub',
        subtitleLink: 'https://matchub.co',
        points: [
          'Implemented new features and responsive layouts for user-facing frontend dashboards',
          'Spearheaded code quality improvement efforts for the frontend repository, such as the migration from JavaScript to TypeScript, and miscellaneous light refactoring',
          <>
            <u>Leveraged knowledge</u>:{' '}
            <i>TypeScript, ReactJS, Redux, Material-UI | Django, PostgreSQL, Docker</i>
          </>
        ]
      }
    ]
  },
  {
    title: 'Teaching Assistant (CS1101S Programming Methodology)',
    date: 'Aug 2021 - Nov 2021',
    sections: [
      {
        subtitle: 'NUS School of Computing',
        subtitleLink: 'https://www.comp.nus.edu.sg/',
        points: [
          <>
            Led weekly tutorial sessions on programming and computational problem solving for
            Computer Science freshmen, based on the content in{' '}
            <a href="https://sourceacademy.org/sicpjs/index" target="_blank" rel="noreferrer">
              SICP JavaScript Edition
            </a>
          </>,
          'Graded and provided timely feedback on weekly programming assignments ranging from computer graphics, sound processing to robotics'
        ]
      }
    ]
  },
  {
    title: 'Full Stack Developer (Summer)',
    date: 'May 2021 - Jul 2021',
    images: [sa1, sa2, sa3, sa4],
    sections: [
      {
        subtitle: 'Source Academy',
        subtitleLink: 'https://github.com/source-academy',
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
          'The system is currently used live by over 700 users (as of Sep 2021), with much more to come in the future',
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
    images: [sam1, sam2],
    sections: [
      {
        subtitle: 'NUS School of Computing',
        subtitleLink: 'https://www.comp.nus.edu.sg/',
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

const softwareSideProjectCards = [
  {
    title: 'NoteWorthy',
    date: 'May 2021 - Aug 2021',
    images: [nw1, nw2, nw3],
    sections: [
      {
        subtitle: 'CP2106 Independent Software Development Project (NUS Orbital)',
        points: [
          'Developed a desktop notetaking app with a feature set targeted at learning and collaboration of notes for students',
          'Implemented an interactive frontend where notes are stored in draggable and nestable content-editable div blocks',
          'Designed an Express-GraphQL backend with MongoDB to enable notes to be persisted on an online database',
          'Practiced writing unit tests and database migration files',
          'Setup basic CI/CD pipeline for deployment to Vercel, Heroku and MongoDB Atlas',
          <>
            <a
              href="https://chownces.github.io/noteworthy-documentation/"
              target="_blank"
              rel="noreferrer"
            >
              See project documentation...
            </a>{' '}
            <a href="https://github.com/chownces/NoteWorthy" target="_blank" rel="noreferrer">
              repositories...
            </a>
          </>,
          <>
            <u>Utilized</u>:{' '}
            <i>
              ReactJS, Semantic-UI | Express, Apollo, GraphQL, MongoDB | Vercel, Heroku, MongoDB
              Atlas | Basic Testing &amp; CI/CD
            </i>
          </>
        ]
      }
    ]
  },
  {
    title: 'Telegram Bots',
    date: 'July 2020 & July 2021',
    sections: [
      {
        subtitle: 'Personal Project',
        points: [
          'Created a collaborative Todo List Bot for students to track homework due dates filterable by their own module codes',
          'Implemented a Web Scraping Bot which gathered online Christian prayer material used by 500 people when operational',
          <>
            <u>Utilized</u>: <i>Python, Node.js, Telegram API | PostgreSQL | Heroku</i>
          </>
        ]
      }
    ]
  },
  {
    title: 'Online Christmas Escape Room',
    date: 'Dec 2020',
    images: [chr1, chr2, chr3],
    sections: [
      {
        subtitle: 'Personal Project',
        points: [
          'Designed and implemented a simple React quiz application for a Christmas-themed online escape room',
          'Deployed on Heroku and used by around two dozen people when operational',
          <>
            <u>Utilized</u>: <i>ReactJS, HTML, CSS | Heroku</i>
          </>
        ]
      }
    ]
  }
];

const aiSideProjects = [
  {
    title: 'Build On, Singapore 2020',
    date: 'Jul 2020 - Sep 2020',
    sections: [
      {
        subtitle: 'Case Competition (Amazon Web Services)',
        points: [
          'Designed and prototyped a Telegram bot to combat misinformation through state-of-the-art Natural Language Processing (NLP) techniques',
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
  const { card } = props;

  return (
    <div className={styles.cardCarouselContainer}>
      <div>
        <Card {...card} />
      </div>
      {card.images && (
        <div className={styles.cardCarousel}>
          <Carousel showArrows autoPlay infiniteLoop showThumbs={false} className={styles.carousel}>
            {card.images.map((img, idx) => (
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
            <div className={styles.cardSubtitle}>
              {e.subtitleLink && (
                <a href={e.subtitleLink} target="_blank" rel="noreferrer">
                  {e.subtitle}
                </a>
              )}
              {!e.subtitleLink && e.subtitle}
            </div>
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
