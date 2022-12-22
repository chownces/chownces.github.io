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
    date: 'Sep 2022 - Present',
    content: [
      'ClimbJios is an open-source app that connects the climbing community in Singapore, and is currently being used by >1300 climbers across Singapore to share gym passes, meet new people, and discover cool Beta videos from the community',
      'Architected, implemented and deployed the backend infrastructure',
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
      'Open-source contributor, reviewer, maintainer and system admin of the Source Academy and its repositories',
      'Liaises closely with NUS Professors and students to deliver impactful new features and final year projects',
      <>
        Sample of features I built include:
        <ul>
          <li>
            Multi-tenant backend architecture and UI for a system which could previously only cater
            to a single course at a time, thus enabling multiple courses to run concurrently on the
            same instance with no downtime
          </li>
          <li>
            Designed and implemented responsive layouts and mobile-friendly features for the
            previously desktop-only online IDE
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
      'Spearheaded code quality improvements for the frontend repository, such as the migration from JavaScript to TypeScript'
    ]
  },
  {
    tabTitle: 'NUS',
    header: 'Undegraduate Teaching Assistant',
    landingPageLink: 'https://www.nus.edu.sg',
    date: 'Aug 2021 - Present',
    content: [
      <>
        CS1101S Programming Methodology (Aug - Nov 2022)
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
      'CS2103T Software Engineering (Aug - Nov 2022)',
      'CS1101S Programming Methodology (Aug - Nov 2021)'
    ]
  }
];

export default Experience;
