import Head from 'next/head'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import MotionMain from "@/components/motionmain";
import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>WisdomIT Portfolio</title>
        <meta name="description" content="안녕하세요, 디자인에 진심인 풀스택 개발자 임현명입니다!" />
        <meta name="og:image" content="/thumbnail.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MotionMain>

      </MotionMain>
    </>
  )
}
