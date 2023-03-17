import Head from 'next/head'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import MotionMain from "@/components/motionmain";
import { useState, useEffect } from 'react';
import { connectToDatabase } from '@/lib/mongodb';
import NavProgressBar from '@/components/navProgressBar';
import SectionWelcome from '@/components/sectionWelcome';
import SectionPortfolio from '@/components/sectionPortfolio';
import SectionTechStack from '@/components/sectionTechstack';
import SectionAbout from '@/components/sectionAbout';
import SectionContact from '@/components/sectionContact';

export const getServerSideProps = async (context) => {
    
  //DB 연결
  const { client } = await connectToDatabase();
  //const isConnected = client.topology.s.state === 'connected';

  const db = client.db("wisdomit");
  
  let data = await db.collection("portfolio").find().toArray()
  data.forEach(e => delete e.body)

  return {
      props: {
          data: JSON.stringify(data)
      }
  }

}

export default function Home(props) {
  const [nav, setNav] = useState('welcome')
  const data = JSON.parse(props.data)
  
  const navOnClick = (item) => {
    document.querySelector(`#${item}`).scrollIntoView({ behavior: 'smooth', block: 'start' })
    setNav(item)
  }

  return (
    <>
      <Head>
        <title>WisdomIT Portfolio</title>
        <meta name="description" content="안녕하세요, 디자인에 진심인 풀스택 개발자 임현명입니다!" />
        <meta name="og:image" content="/thumbnail.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MotionMain>
        <NavProgressBar nav={nav} navOnClick={navOnClick} />
        <SectionWelcome setNav={setNav} />
        <SectionPortfolio setNav={setNav} data={data} />
        <SectionTechStack setNav={setNav} />
        <SectionAbout setNav={setNav} />
        <SectionContact setNav={setNav} />
      </MotionMain>
    </>
  )
}
