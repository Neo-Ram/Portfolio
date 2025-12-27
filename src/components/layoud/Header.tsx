import styles from "./header.module.css";
function header() {
  return (
    <header className={styles.header}>
      <p>Ramon Franco</p>
      <ul>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default header;
