import Search from "../Search";
import styles from "./style.module.scss";

export default function Banner({ onQueryChange }) {

  return (
    <div className={styles.banner}>
      <div className={`container`}>
        <div className={styles.content}>
          <h1>Find your TV series</h1>
          <Search onQueryChange={onQueryChange} className={styles.searchBar} />
        </div>
      </div>
    </div>
  )
}
