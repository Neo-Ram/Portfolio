import styles from "./ContactCapsules.module.css";
type Props = {
  icon: string;
  title: string;
  link?: string;
};
function ContactCapsules({ icon, title, link }: Props) {
  const handleClick = () => {
    if (link) {
      if (link.startsWith("mailto:")) {
        window.location.href = link;
      } else {
        window.open(link, "_blank");
      }
    }
  };

  return (
    <button className={styles.capsule} onClick={handleClick} disabled={!link}>
      <img src={icon} alt="iconlink" />
      {title}
    </button>
  );
}

export default ContactCapsules;
