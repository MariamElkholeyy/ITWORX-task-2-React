'use client'
import styles from "./page.module.css";
import Nominee from "../components/nominee";
import Nominations from "../components/nominations";
import SideBar from "../components/sidebar";
import Navbar from "../components/navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useContext, useState } from "react";
import Link from "next/link";
import { NominationContext } from '../nominationContext.js';

export default function Home() {
  const {nominees} = useContext(NominationContext);

  return (
    <>
      <div className={styles.headerContainer}>
        {/* <Navbar /> */}
        <SideBar />
      </div>
      <main className={styles.main}>

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
        <div className={styles.currentNominations}>
          <h2>My Nominations</h2>
          {nominees.map((nominee: any) =>(
            <Nominee 
            key={nominee.id}
            nomineeName={nominee.name}
            nominatedBy={nominee.nominatedBy}/>
          ))}
          {/* <Nominee nomineeName="Alice Johnson" nominatedBy="John Smith" />
          <Nominee nomineeName="Bob Miller" nominatedBy="Jane Doe" />
          <Nominee nomineeName="Eve Davis" nominatedBy="John Smith" /> */}
          {/* <Nominee nomineeName="Sam Wilson" nominatedBy="Jane Doe" /> */}
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
          <h2>Current Nominations</h2>
          <Nominee nomineeName="Alice Johnson" nominatedBy="John Smith" />
          <Nominee nomineeName="Bob Miller" nominatedBy="Jane Doe" />
          <Nominee nomineeName="Eve Davis" nominatedBy="John Smith" />
          <Nominee nomineeName="Sam Wilson" nominatedBy="Jane Doe" />
        </div>
      </main>
    </>
  );
}