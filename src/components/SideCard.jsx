import styles from "./SideCard.module.css";

function SideCard({ data: { image, title } }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} /> 
      <p>{title}</p>
    </div>
  );
}

export default SideCard;
