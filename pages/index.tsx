import Head from 'next/head'
import Image from 'next/image'
import BodyHeader from '../src/components/BodyHeader';
import GlobalStyle from '../styles/global';

import Header from '../src/components/Header';
import Portfolio from '../src/components/Portfolio';
import { Container } from '../styles/style';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <BodyHeader />
        <Portfolio />
        <Footer />
      </Container>
    </>
  )
}
