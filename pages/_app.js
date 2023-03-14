import { AnimatePresence } from 'framer-motion';
import { GlobalStyles } from '@/styles/global-style';

export default function App({ Component, pageProps, router }) {
  return (<>
    <GlobalStyles />
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.pathname} />
    </AnimatePresence>
  </>)
}
