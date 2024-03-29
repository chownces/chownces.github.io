import { Link } from 'react-scroll';
import styles from './Button.module.css';

const Button = props => {
  const { to, text, style, className, isSmall } = props;
  return (
    <div
      className={`${styles.button} ${isSmall ? styles.small : ''} ${className ? className : ''}`}
      style={style}
    >
      <Link to={to} spy smooth>
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default Button;
