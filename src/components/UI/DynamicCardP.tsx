import styles from "./DynamicCardP.module.css";
type Tag = {
  id: string;
  label: string;
  icon?: string;
  bgGradient?: string;
};

type Props = {
  title: string;
  description: string;
  tags: Tag[];
  preview: string;
};

function DynamicCard({ title, description, tags, preview }: Props) {
  return (
    <div className={styles.card}>
      <img src={preview} alt="preview" className={styles.preview} />
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span
            key={tag.id}
            style={{ background: tag.bgGradient }}
            className="tag"
          >
            {tag.icon && <img src={tag.icon} alt={tag.label} />}
            {tag.label}
          </span>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.viewProjectButton}>
          View Project <img src="/src/assets/ExternalGray.svg" alt="" />
        </button>
        <button className={styles.githubButton}>
          <img src="/src/assets/Github2.svg" alt="" /> Github
        </button>
      </div>
    </div>
  );
}

export default DynamicCard;
