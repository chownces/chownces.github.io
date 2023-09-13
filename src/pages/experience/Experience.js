import SectionHeading from '../../components/sectionHeading/SectionHeading';
import Spacer from '../../components/spacer/Spacer';
import TabList from '../../components/tablist/TabList';
import styles from './Experience.module.css';

const Experience = props => {
  return (
    <div id="experience" ref={props.sectionRef}>
      <Spacer />
      <div data-aos="zoom-in" data-aos-duration="600" className={styles.experience}>
        <SectionHeading text="Where I've Worked" />
        <TabList data={experienceData} />
      </div>
    </div>
  );
};

const experienceData = [
  {
    tabTitle: 'ClimbJios',
    header: 'Co-Founder',
    landingPageLink: 'https://www.climbjios.com',
    date: 'Sep 2022 - Dec 2022',
    content: [
      'ClimbJios is an open-source app that connects the climbing community in Singapore, and is currently being used by >1700 climbers across Singapore to share gym passes, meet new people, and discover cool Beta videos from the community',
      'Architected, implemented and deployed the backend infrastructure on AWS',
      'Worked closely with product stakeholders to setup analytics dashboards through software tools like Retool',
      'Awarded the winning project for the NUS School of Computing STePS Showcase Event in November 2022'
    ],
    links: [
      {
        title: 'App',
        link: 'https://app.climbjios.com'
      },
      {
        title: 'Showcase Website',
        link: 'https://gentle-wealth-37f.notion.site/ClimbJios-Showcase-ca19570da1b84b09a8190a299bb7703f'
      },
      {
        title: 'Repo',
        link: 'https://github.com/climbjios-sg/climbjios-app'
      }
    ]
  },
  {
    tabTitle: 'Source Academy',
    header: 'Frontend Lead & Fullstack Developer',
    landingPageLink: 'https://about.sourceacademy.org',
    date: 'Dec 2020 - Present',
    content: [
      'Source Academy is an open-source, gamified online learning environment developed at NUS, and is used to teach CS1101S Programming Methodology to >750 Computer Science freshmen each year',
      'Open-source contributor, reviewer, maintainer of the Source Academy repositories with over 120 commits and 71 PRs',
      <>
        Notable contributions include:
        <ul>
          <li>
            Spearheaded the migration to React18, react-router v6, functional components and various
            dependency upgrades
          </li>
          <li>
            Enabled multiple courses to run concurrently on the same backend instance by developing
            multi-tenant backend architecture for the system which could previously only cater to a
            single course at a time
          </li>
          <li>
            Designed and implemented responsive layouts and mobile-friendly features for the
            previously desktop-only online IDE in Source Academy
          </li>
        </ul>
      </>,
      'Awarded the Outstanding Undergraduate Researcher Prize (Group) in 2022'
    ],
    links: [
      {
        title: 'Public Deployment',
        link: 'https://sourceacademy.org'
      },
      {
        title: 'Repo',
        link: 'https://github.com/source-academy'
      }
    ]
  },
  {
    tabTitle: 'GovTech',
    header: 'Full Stack Software Engineering Intern',
    landingPageLink: 'https://www.tech.gov.sg',
    date: 'Jan 2022 - Jun 2022',
    content: [
      'Worked on TechBiz, a centralized platform to manage the usage, subscription and billing of Singapore Government Tech Stack (SGTS) products',
      'Developed several new features across the full stack and assisted the team in launching the app to production',
      <>
        Worked on several DevOps-related tasks, inclusive of:
        <ul>
          <li>Implementing feature toggles</li>
          <li>Improving software observability with OpenTelemetry</li>
          <li>
            Updating CI/CD pipelines and Kubernetes manifests to deploy new microservices while
            practicing GitOps
          </li>
        </ul>
      </>
    ]
  },
  {
    tabTitle: 'MatcHub',
    header: 'Software Engineering Intern',
    landingPageLink: 'https://matchub.co',
    date: 'Nov 2021 - Dec 2021',
    content: [
      'Implemented new features and responsive layouts for user-facing frontend dashboards',
      'Spearheaded code quality improvements for the frontend repository, inclusive of the migration from JavaScript to TypeScript'
    ]
  },
  {
    tabTitle: 'NUS',
    header: 'Undegraduate Teaching Assistant',
    landingPageLink: 'https://www.nus.edu.sg',
    date: 'Aug 2021 - Present',
    content: [
      <>
        CS1101S Programming Methodology (Aug-Nov '23, Aug-Nov '22, Aug-Nov '21)
        <ul>
          <li>
            Led weekly recitation classes on programming and computational problem solving for
            around 100 Computer Science freshmen
          </li>
          <li>
            Received an effectiveness score of 4.6/5, with 29 nominations for teaching awards based
            on student feedback
          </li>
        </ul>
      </>,
      'CS2040S Data Structures and Algorithms (Jan - April 2023)',
      'CS2103T Software Engineering (Aug - Nov 2022)',
      'CS1101S Programming Methodology (Aug - Nov 2021)'
    ]
  }
];

export default Experience;
