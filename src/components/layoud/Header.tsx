import styles from "./header.module.css";
function header() {
  return (
    <header className={styles.header}>
      <p className={styles.txt}>Ramon Franco</p>
      <ul className={styles.list}>
        <li>
          <a className={styles.links} href="#">
            Experience
          </a>
        </li>
        <li>
          <a className={styles.links} href="#">
            Projects
          </a>
        </li>
        <li>
          <a className={styles.links} href="#">
            Skills
          </a>
        </li>
        <li>
          <a className={styles.links} href="#">
            About me
          </a>
        </li>
        <li>
          <a className={styles.links} href="#">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default header;
