import styles from "./nominations.module.css";
import 'font-awesome/css/font-awesome.min.css';



const Nominations = () => {
  return (
    <div className={styles.nominations}>
      <h1 className={styles.title}>Nominations</h1>
      <p>
        Employees can nominate their colleagues for employee of the month. Nominations are anonymous. You can also<br />
        nominate employees yourself
      </p>

      <div className={styles.nominationEmployees}>
        <a href="NominationForm.html">
          <button className={styles.nominateButton}>
            <i className={`fa fa-plus ${styles.icon}`} />
          </button>
        </a>

        <div className={styles.nominationEmployeesText}>
          <span id={styles.nomiateemployees}>Nominate employees</span>
          <p>You can nominate up to 3 employees this month</p>
        </div>
      </div>
    </div>
  );
};

export default Nominations;