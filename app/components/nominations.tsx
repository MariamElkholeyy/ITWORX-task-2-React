import styles from "./nominations.module.css";
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";

const Nominations = () => {
  return (
    <div className={styles.nominations}>
      <h1 className={styles.title}>Nominations</h1>
      <p>
        Employees can nominate their colleagues for employee of the month. Nominations are anonymous. You can also nominate employees yourself
      </p>

      <div className={styles.nominationEmployees}>
        <Link href="/nomination-form">
          <button className={styles.nominateButton}>
            <i className={`fa fa-plus ${styles.icon}`} />
          </button>
        </Link>

        <div className={styles.nominationEmployeesText}>
          <span className={styles.nomiateEmployees}>Nominate employees</span>
          <p>You can nominate up to 3 employees this month</p>
        </div>
      </div>
    </div>
  );
};

export default Nominations;