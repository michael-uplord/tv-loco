import Buttons from '../Buttons';
import Svg from '../Svg';
import styles from "./style.module.scss";

export default function ErrorPage({ data }) {

  const buttons = [
    { title: "Go back to the homepage", link: "/", class: "primary" },
  ];

  return (
    <div className={styles.errorPage}>
      <div className={`container`}>
        <div className={styles.content}>
          <a href="/" className={styles.logo}>
            <Svg name="logo" width={80} height={20} />
          </a>
          <h1>Page not found</h1>
          <p>We couldn't find the page you are looking for.</p>
          <Buttons data={buttons} className={styles.buttons} />
        </div>
      </div>
    </div>
  )
}
