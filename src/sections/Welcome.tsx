import styles from "./Welcome.module.css";
import ContactCapsules from "../components/UI/ContactCapsules";
function Welcome() {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "Ramon_Franco_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            icon="/assets/Linkedin.svg"
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
          <ContactCapsules
            icon="/assets/PDF.svg"
            title="Curriculum"
            onClick={handleDownloadCV}
          />
        </div>
      </div>
      <svg
        className={styles.scrollArrow}
        onClick={handleScroll}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="200%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#575f67ff", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#575f67ff", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#575f67ff", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M7 10L12 15L17 10"
          stroke="url(#arrowGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 16L12 21L17 16"
          stroke="url(#arrowGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
export default Welcome;
