import Svg from '../Svg';
import styles from "./style.module.scss";

export default function Footer({ data }) {
  const getYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <a href="/" className={styles.logo}>
          <Svg name="logo" width={80} height={20} />
        </a>
        <p>&copy; {getYear} Michael Allen</p>
      </div>
    </div>
  )
}
