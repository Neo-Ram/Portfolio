import styles from "./ContactCapsules.module.css";
type Props = {
  icon: string;
  title: string;
  link?: string;
};
function ContactCapsules({ icon, title, link }: Props) {
  return (
    <div className={styles.capsule}>
      <img src={icon} alt="iconlink" />
      <a href={link}>{title}</a>
    </div>
  );
}

export default ContactCapsules;
