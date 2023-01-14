import styles from "../styles/contact.module.css";

const LoadContact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contact}>
        <div className={styles.title}></div>
        <ul className={styles.listParent}>
          <li className={styles.listChild}>Phone Number: 0769 420 696</li>
          <br />
          <li className={styles.listChild}>
            Email: realGiorgio@giovannimail.com
          </li>
          <br />
          <li className={styles.listChild}>Address: Giorgio's Home</li>
          <br />
          <li className={styles.listChild}>
            EGLD: mt8QSUg2EZi28RgsXeUBzWrawibBKWBvcp
          </li>
          <br />
          <li className={styles.listChild}>
            DOGE: myjujp1iPuUtYq7LEpYKAaQ29ahfodGVxC
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoadContact;
