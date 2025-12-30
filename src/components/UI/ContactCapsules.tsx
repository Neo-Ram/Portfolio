import styles from "./ContactCapsules.module.css";
type Props = {
  icon: string;
  title: string;
  link?: string;
  onClick?: () => void;
};
function ContactCapsules({ icon, title, link, onClick }: Props) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      if (link.startsWith("mailto:")) {
        window.location.href = link;
      } else {
        window.open(link, "_blank");
      }
    }
  };

  return (
    <button
      className={styles.capsule}
      onClick={handleClick}
      disabled={!link && !onClick}
    >
      <img src={icon} alt="iconlink" />
      {title}
    </button>
  );
}

export default ContactCapsules;
