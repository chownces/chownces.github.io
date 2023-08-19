import SectionHeading from '../../components/sectionHeading/SectionHeading';
import Spacer from '../../components/spacer/Spacer';
import styles from './Coursework.module.css';

const Coursework = () => {
  const col1Data = courseworkData.filter((e, idx) => idx < courseworkData.length / 2);
  const col2Data = courseworkData.filter((e, idx) => idx >= courseworkData.length / 2);

  const renderSection = (data, idx) => (
    <div key={idx} className={styles.courseworkContentSection}>
      <h3 className={styles.courseworkContentSectionHeader}>{data.sectionHeader}</h3>
      <ul className={styles.courseworkContentSectionText}>
        {data.content.map((e, idx) =>
          typeof e === 'string' ? (
            <li key={idx}>{e}</li>
          ) : (
            <li key={idx} className={styles.courseworkContentSectionTextLink}>
              <a href={e.link} title={e.text} target="_blank" rel="noreferrer">
                {e.text} <i className="fa fa-external-link"></i>
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );

  return (
    <div id="coursework">
      <Spacer />
      <div data-aos="zoom-in" data-aos-duration="600" className={styles.coursework}>
        <SectionHeading text="Relevant Coursework" />
        <div className={styles.courseworkContent}>
          <div className={styles.courseworkContentColumn}>
            {col1Data.map((e, idx) => renderSection(e, idx))}
          </div>
          <div className={styles.courseworkContentColumn}>
            {col2Data.map((e, idx) => renderSection(e, idx))}
          </div>
        </div>
      </div>
    </div>
  );
};

const courseworkData = [
  {
    sectionHeader: 'Programming',
    content: [
      'CS1101S Programming Methodology (A+)',
      'CS2030S Programming Methodology II (A+)',
      'CS2040S Data Structures and Algorithms (A-)',
      'CS2105 Introduction to Computer Networks (A-)',
      'CS3230 Design and Analysis of Algorithms (ongoing)'
    ]
  },
  {
    sectionHeader: 'Software Engineering',
    content: [
      'CS2103T Software Engineering (A+)',
      'CS3216 Software Product Engineering for Digital Markets (A+)',
      'CS3219 Software Engineering Principles and Patterns (ongoing)',
      'CP3880 Advanced Technology Attachment Programme (CS)',
      'CP3108B Independent Work (CS)',
      {
        text: 'CP2106 Independent Software Development Project - Orbital (CS)',
        link: 'https://credentials.nus.edu.sg/35d4de8a-aee7-47e6-a967-2f80101856ca'
      }
    ]
  },
  {
    sectionHeader: 'UI/UX Design',
    content: [
      'CS3240 Interaction Design (A+)',
      'CS4249 Phenomena and Theories of Human-Computer Interaction (B+)'
    ]
  },
  {
    sectionHeader: 'Cybersecurity',
    content: ['CS2107 Introduction to Information Security (A-)']
  },
  {
    sectionHeader: 'Artificial Intelligence',
    content: [
      'CS3243 Introduction to Artificial Intelligence (A)',
      'CS4243 Computer Vision and Pattern Recognition (A+)',
      'CS3244 Machine Learning (ongoing)',
      {
        text: 'DMX1501AI AI for Industry - AI Singapore (CS)',
        link: 'https://certified.aisingapore.org/5513aa36-b3d4-45af-b0b1-021999b6ae74'
      },
      {
        text: 'Neural Networks and Deep Learning - DeepLearning.AI (Coursera)',
        link: 'https://www.coursera.org/account/accomplishments/certificate/N7CYGG5Y87H2'
      },
      {
        text: 'Machine Learning - Stanford University (Coursera)',
        link: 'https://www.coursera.org/account/accomplishments/certificate/VQQFG8S5BS48'
      }
    ]
  },
  {
    sectionHeader: 'Technical Management',
    content: ['IT2900 Technical Management and Leadership (CS)']
  },
  // {
  //   sectionHeader: 'Ongoing Coursework',
  //   content: [
  //     // 'CS3217 Software Engineering on Modern Application Platforms',
  //   ]
  // },
  {
    sectionHeader: 'NUS Awards',
    content: [
      'Cumulative Average Point (CAP): 4.79/ 5.0',
      {
        text: "Dean's List AY20/21 Semester 1",
        link: 'https://credentials.nus.edu.sg/03ec0e09-4f93-430a-93e0-43c7499fcc99'
      },
      {
        text: "Dean's List AY22/23 Semester 1",
        link: 'https://credentials.nus.edu.sg/5244f877-f86e-4e8f-8b30-99b0c2fde2cd'
      },
      {
        text: 'Top student in CS2103T Software Engineering AY21/22 Semester 1',
        link: 'https://credentials.nus.edu.sg/32b7a65e-29df-42ab-a148-06319a7b6b0d'
      },
      {
        text: 'Top student in CS4243 Computer Vision and Pattern Recognition AY22/23 Semester 2',
        link: 'https://credentials.nus.edu.sg/8ddc2fad-b1f1-4020-9928-22501a3bc8a9'
      },
      {
        text: 'Outstanding Undergraduate Researcher Prize (Group) 2022',
        link: 'https://credentials.nus.edu.sg/8ac97c2c-6c03-4478-af4c-f34b662a3e10'
      },
      {
        text: 'NUS SoC STePS CS3216 Best Project Award - Platinum',
        link: 'https://credentials.nus.edu.sg/04e94179-de38-47f4-9615-9427b5f9651c'
      }
    ]
  }
];

export default Coursework;
