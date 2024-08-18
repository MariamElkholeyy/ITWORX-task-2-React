// import Acme from './header';
import Link from 'next/link';
import Navbar from './components/navbar';
import './page.module.css';

function Homepage() {
  return (<>
    {/* <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>Homepage</title> */}
    <Navbar/>
    <main  className='main'>
      <div className='everything'>
      <div className="container">
        <div className="groupic">
          <img src="./eotm.jpg" alt="employee of the month" id="eotm" />
        </div>
        <div className="centered">Employee of the Month</div>
        <div className="notcentered">
          Reconize your peers. Vote for your favorites. Celebrate the winners.
        </div>
        <button type="button" className="button1">
          Vote
        </button>
        <Link href="/nomination-page">
            <button type="button" className="button2">
            Nominate
            </button>
        </Link>
        
      </div>
      <h2 className='h2' >Recent Winners</h2>
      <div className="jane">
        <div>
          <img src='' />
          <img src='./jane.jpg' alt="jane" id="jane" />
        </div>
        <div>
          <img src="./jill.jpg" alt="jill" id="jane" />
        </div>
        <div>
          <img src="./john.jpg" alt="john" id="jane" />
        </div>
      </div>
      <h3 className='h3' >
        Jane Doe <br /> July 2024
      </h3 >
      <h4 className='h4'>
        Jill Doe <br /> June 2024
      </h4>
      <h5 className='h5'>
        John Doe <br /> May 2024
      </h5>
      </div>
    </main>
  </>

  );
}

export default Homepage;