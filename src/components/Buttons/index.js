import Button from "../Button";
import styles from "./style.module.scss";

export default function Buttons({ data, className }) {
  return (
    <div className={`${styles.buttons} ${className}`}>
      {data.map((button, index) => (
        <Button key={index} data={button} />
      ))}
    </div>
  )
}
