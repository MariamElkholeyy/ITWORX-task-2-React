import Navbar from "../components/navbar";
import Nominee from "../components/nominee";
import VoteNominee from  "../components/voteNominee"
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className={styles.main}>
        <h1>Employee of the Month</h1>
        <p className={styles.p1}>Vote for your favorite employee</p>
        <VoteNominee nomineeName={"Amanda Johnson"} experience={"5"} position="Software Engineer"/>
        <VoteNominee nomineeName={"John Doe"}      experience={"3"} position="Data Scientist"/>
        <VoteNominee nomineeName={"Jane Doe"}      experience={"2"} position="Product Manager"/>
        <VoteNominee nomineeName={"Bob Smith"}     experience={"1"} position="UX Designer" />
        <VoteNominee nomineeName={"Alice Johnson"} experience={"4"} position="DevOps Engineer"/>
      </main>
    
    </>
  );
}