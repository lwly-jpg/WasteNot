import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>Recipe data powered by Edamam API:</div>
      <img className={styles.edamam_logo} src="../Edamam_Badge.svg" alt="Edamam" />
    </div>
  )
}

export default Footer;