import styles from "./Welcome.module.css";
import ContactCapsules from "../components/UI/ContactCapsules";
function Welcome() {
  return (
    <div className={styles.welcome}>
      <h1>Ramon Franco</h1>
      <span>Full-Stack Developer</span>
      <p>
        Creating digital experiences where modern design and technical
        robustness go hand in hand. Focused on organized methodologies and clear
        structures to facilitate collaboration and the steady growth of every
        project.
      </p>
      <div className={styles.contactCapsules}>
        <div className={styles.contactCapsule}>
          <ContactCapsules icon="/src/assets/Email.svg" title="Email" />
        </div>
        <div className={styles.contactCapsule}>
          <ContactCapsules icon="/src/assets/LinkedIn.svg" title="Linkedin" />
        </div>
        <div className={styles.contactCapsule}>
          <ContactCapsules icon="/src/assets/Github3.svg" title="Github" />
        </div>
        <div className={styles.contactCapsule}>
          <ContactCapsules icon="/src/assets/PDF.svg" title="Curriculum" />
        </div>
      </div>
    </div>
  );
}
export default Welcome;
