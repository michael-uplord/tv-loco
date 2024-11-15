import Svg from '../Svg';
import styles from "./style.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.container}`}>
        <a href="/" className={styles.logo}>
          <Svg name="logo" width={80} height={20} />
        </a>
      </div>
    </div>
  )
}
