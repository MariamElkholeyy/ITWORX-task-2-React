import Navbar from "../components/navbar";
import Nominee from "../components/nominee";
import VoteNominee from  "../components/voteNominee";
import styles from "./page.module.css";
import Menu from "../components/menu";
import CurrentVotes from "../components/current.votes";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Employee of the Month</h1>
          <CurrentVotes/>
          <VoteNominee nomineeName={"Amanda Johnson"} experience={"5"} position="Software Engineer"/>
          <VoteNominee nomineeName={"John Doe"}      experience={"3"} position="Data Scientist"/>
          <VoteNominee nomineeName={"Jane Doe"}      experience={"2"} position="Product Manager"/>
          <VoteNominee nomineeName={"Bob Smith"}     experience={"1"} position="UX Designer" />
          <VoteNominee nomineeName={"Alice Johnson"} experience={"4"} position="DevOps Engineer"/>
          <div>
              <button id="End">End Voting</button>
          </div>
        </main>
        <aside>
          <Menu />
        </aside>
        <section>
            <div id="vote-start">
                <p>Voting started on <br/> September 1, 2023</p>
            </div>
            <br/>
            <div id="vote-end">
                <p>Voting ends on <br/> [end date]</p>
            </div>
        </section>
      </div>
    </>
  );
}