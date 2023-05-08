import styles from "./Header.module.css"
import image from "../../assets/ignite-logo.svg"

export const Header = () => {
  return(
    <div className={styles.header}>
      <img src={image} alt="logo" />
      Ignite Feed</div>
  )
}