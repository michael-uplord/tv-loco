import Search from "../Search";
import styles from "./style.module.scss";

export default function Banner({ title, onQueryChange, showSearch }) {

  return (
    <div className={styles.banner}>
      <div className={`container`}>
        <div className={styles.content}>
          <h1>{title}</h1>
          {showSearch && (
            <Search onQueryChange={onQueryChange} className={styles.searchBar} />
          )}
        </div>
      </div>
    </div>
  )
}
