import Navbar from "../components/navbar";
import Nominee from "../components/nominee";
import Prize from "../components/prize";
import VoteNominee from  "../components/voteNominee"
import styles from "./page.module.css";

export default function Home() {
  const prizes =[
    {
      rank : '1st',
      prize:"Winner gets a $500 gift card",
      img: "https://lumeaaesthetics.com/wp-content/uploads/2021/01/Lumea-_-Gift-Voucher-FAQ-2-1.png"
    },
    {
      rank : '2nd',
      prize:"Runner-up gets a $250 gift card",
      img:"https://lumeaaesthetics.com/wp-content/uploads/2021/01/Lumea-_-Gift-Voucher-FAQ-2-1.png"
    },
    {
      rank : '3rd',
      prize:"Second runner-up gets a $100 gift card",
      img:"https://lumeaaesthetics.com/wp-content/uploads/2021/01/Lumea-_-Gift-Voucher-FAQ-2-1.png"
    },
  ]
  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Employee of the Month</h1>
          <p className={styles.p1}>Vote for your favorite employee</p>
          <VoteNominee nomineeName={"Amanda Johnson"} experience={"5"} position="Software Engineer"/>
          <VoteNominee nomineeName={"John Doe"}      experience={"3"} position="Data Scientist"/>
          <VoteNominee nomineeName={"Jane Doe"}      experience={"2"} position="Product Manager"/>
          <VoteNominee nomineeName={"Bob Smith"}     experience={"1"} position="UX Designer" />
          <VoteNominee nomineeName={"Alice Johnson"} experience={"4"} position="DevOps Engineer"/>


        </main>
        <div className={styles.prizes}>
          <h2 className={styles.prizeHeader}>Prizes</h2>
          
          {prizes.map((prize) => (
            <Prize 
            key={prize.rank} 
            rank={prize.rank} 
            prize={prize.prize} 
            img={prize.img}/>
            ))}

        </div>
      </div>
    </>
  );
}