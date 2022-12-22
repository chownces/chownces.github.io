import { useCallback, useState } from 'react';
import styles from './TabList.module.css';

const TabList = props => {
  const { data } = props;

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTabData = data[activeTabIndex];

  const generateTabChangeOnClickHandler = useCallback(
    idx => () => {
      setActiveTabIndex(idx);
    },
    []
  );

  return (
    <div className={styles.tablist}>
      <div className={styles.tabs}>
        {data.map((e, idx) => (
          <div
            className={`${styles.tab}` + (idx === activeTabIndex ? ` ${styles.tabActive}` : '')}
            onClick={generateTabChangeOnClickHandler(idx)}
            key={idx}
          >
            {e.tabTitle}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>
        <h3 className={styles.tabContentHeader}>
          {activeTabData.header}{' '}
          <span className={styles.tabContentHeaderAccent}>
            @{' '}
            {activeTabData.landingPageLink ? (
              <a href={activeTabData.landingPageLink} target="_blank" rel="noreferrer">
                {activeTabData.tabTitle}
              </a>
            ) : (
              <>{activeTabData.tabTitle}</>
            )}
          </span>
        </h3>
        <div className={styles.tabContentDate}>{activeTabData.date}</div>
        <ul className={styles.tabContentText}>
          {activeTabData.content.map((e, idx) => (
            <li key={idx}>{e}</li>
          ))}
        </ul>
        <div className={styles.tabContentLinks}>
          {activeTabData.links &&
            activeTabData.links.map((e, idx) => (
              <a
                className={styles.tabContentLink}
                href={e.link}
                target="_blank"
                rel="noreferrer"
                key={idx}
              >
                {e.title}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TabList;
