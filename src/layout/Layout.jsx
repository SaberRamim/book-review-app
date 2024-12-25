import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="#">Saber Ramim</a> | React.js Projhe{" "}
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
          Developed by Saber Ramim with
          <span className={styles.heart}></span>
        </p>
      </footer>
    </>
  );
}

export default Layout;
