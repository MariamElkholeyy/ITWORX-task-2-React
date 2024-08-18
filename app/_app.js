import { NominationProvider } from '../nominationContext';
import Home from '../pages/index';

function MyApp({ Component, pageProps }) {
  return (
    <NominationProvider>
      <Home {...pageProps} />
    </NominationProvider>
  );
}

export default MyApp;