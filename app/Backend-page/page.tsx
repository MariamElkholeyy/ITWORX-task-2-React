import Navbar from "../components/navbar";
import Nominee from "../components/nominee";
import VoteNominee from "../components/voteNominee";
import styles from "./page.module.css";
import Menu from "../components/menu";
import CurrentVotes from "../components/current.votes";
import NomineeProgress from "../components/nomineeProgress";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Employee of the Month</h1>
          <CurrentVotes />
          <NomineeProgress nomineeName={"Amanda Johnson"} voteNumber={158} />
          <NomineeProgress nomineeName={"John Doe"} voteNumber={130} />
          <NomineeProgress nomineeName={"Jane Doe"} voteNumber={120} />
          <NomineeProgress nomineeName={"Bob Smith"} voteNumber={100} />
          <NomineeProgress nomineeName={"Alice Johnson"} voteNumber={80} />
          <div>
            <button className={`${styles.End}`}>End Voting</button>
          </div>
        </main>
        <div>
          {/* <aside className={`${styles.aside}`}> */}
        <div className={styles.menu}>
          <Menu />
        </div>
            
          {/* </aside> */}
          {/* <section className={`${styles.section}`}>
            <div id="vote-start">
              <p>Voting started on <br /> September 1, 2023</p>
            </div>
            <br />
            <div className={`${styles.vote_end}`}>
              <p>Voting ends on <br /> [end date]</p>
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
}