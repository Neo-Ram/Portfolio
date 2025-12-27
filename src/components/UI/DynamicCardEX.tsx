import styles from "./DynamicCardEX.module.css";
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
  date: string;
};

function DynamicCard({ title, description, tags, date }: Props) {
  return (
    <div className={styles.card}>
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
      <h5>{date}</h5>
    </div>
  );
}

export default DynamicCard;
