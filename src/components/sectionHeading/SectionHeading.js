import styles from './SectionHeading.module.css';

const SectionHeading = props => {
  const { text } = props;

  return <h2 className={styles.sectionHeading}>{text}</h2>;
};

export default SectionHeading;
