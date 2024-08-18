// import Acme from './header';
import Link from 'next/link';
import Navbar from './components/navbar';
import styles from './page.module.css';
import Winner from './components/winners';

function Homepage() {
  return (
    <>
      {/* <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Homepage</title> */}
      <Navbar />
      <main className={styles.main}>
        <div className={styles.everything}>
          <div className={styles.container}>
            <div className={styles.groupic}>
              <img src="./eotm.jpg" alt="employee of the month" id={styles.eotm} />
            </div>
            <div className={styles.centered}>Employee of the Month</div>
            <div className={styles.notcentered}>
              Reconize your peers. Vote for your favorites. Celebrate the winners.
            </div>
            <Link href="/voting-page">
              <button type="button" className={styles.button1}>
                Vote
              </button>
            </Link>
            
            <Link href="/nomination-page">
              <button type="button" className={styles.button2}>
                Nominate
              </button>
            </Link>
          </div>
          
          <div className={styles.winners}>
            <h2 className={styles.h2}>Recent Winners</h2>
            <div className={styles.winnersImg}>
              <Winner name='Jill Doe' role='Software Engineer' img='./jane.jpg'/>
              <Winner name='John Doe' role='DevOps Engineer' img='./jill.jpg'/>
              <Winner name='Jane Doe' role='Data Scientist' img='./john.jpg'/>
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
}

export default Homepage;