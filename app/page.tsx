import styles from "./page.module.css";
import Nominee from "./components/nominee";
import Nominations from "./components/nominations";
import SideBar from "./components/sidebar";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <>
      <div className={styles.headerContainer}>
        {/* <Navbar /> */}
        <SideBar />
      </div>
      <main className={styles.main}>
        <Nominations/>
        <div className={styles.currentNominations}>
          <h2>Current Nominations</h2>
          <Nominee nomineeName="Alice Johnson" nominatedBy="John Smith" />
          <Nominee nomineeName="Bob Miller" nominatedBy="Jane Doe" />
          <Nominee nomineeName="Eve Davis" nominatedBy="John Smith" />
          <Nominee nomineeName="Sam Wilson" nominatedBy="Jane Doe" />
          <div className={styles.buttons}>
            <button type="button" className={styles.cancel}>
              Cancel
            </button>
            <button type="button" className={styles.save}>
              Save
            </button>
          </div>
        </div>
        <div className={styles.previousNominations}>
          <h2>Previous Nominations</h2>
          <Nominee nomineeName="Alice Johnson" nominatedBy="John Smith" />
          <Nominee nomineeName="Bob Miller" nominatedBy="Jane Doe" />
          <Nominee nomineeName="Eve Davis" nominatedBy="John Smith" />
          <Nominee nomineeName="Sam Wilson" nominatedBy="Jane Doe" />
        </div>
      </main>
    </>
  );
}