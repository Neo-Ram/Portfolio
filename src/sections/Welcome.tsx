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
          <ContactCapsules
            icon="/assets/Email.svg"
            title="Email"
            link="mailto:ramon.franco.reyes@gmail.com"
          />
        </div>
        <div className={styles.contactCapsule}>
          <ContactCapsules
            icon="/assets/LinkedIn.svg"
            title="Linkedin"
            link="https://www.linkedin.com/in/ram%C3%B3n-franco-a45496274/"
          />
        </div>
        <div className={styles.contactCapsule}>
          <ContactCapsules
            icon="/assets/Github3.svg"
            title="Github"
            link="https://github.com/Neo-Ram"
          />
        </div>
        <div className={styles.contactCapsule}>
          <ContactCapsules icon="/assets/PDF.svg" title="Curriculum" />
        </div>
      </div>
    </div>
  );
}
export default Welcome;
