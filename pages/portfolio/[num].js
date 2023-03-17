import Head from 'next/head'
import styled from 'styled-components'
import MotionMain from "@/components/motionmain";
import { useState, useEffect } from 'react';
import { connectToDatabase } from '@/lib/mongodb';
import { device } from '@/styles/global-style';
import NavProgressBar from '@/components/navProgressBar';
import { useRouter } from 'next/router'
import SectionName from '@/components/sectionName';
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

export const getServerSideProps = async (context) => {
    
    //DB 연결
    const { client } = await connectToDatabase();
    //const isConnected = client.topology.s.state === 'connected';
  
    const db = client.db("wisdomit");
    const pageNum = parseInt(context.params.num)
    
    const data = await db.collection("portfolio").findOne({num: pageNum})
  
    return {
        props: {
            data: JSON.stringify(data)
        }
    }
  
  }
  

  const Section = styled.div`
  width: 100vw;
  text-align: center;

  @media ${device.mobile} {
      padding: 50px 30px;
  }

  @media ${device.tablet} {
      padding: 120px 0px;
  }
`

const SectionInner = styled.div`
  display: inline-block;
  text-align: left;

  @media ${device.mobile} {
      width: 100%;
      padding: 0px;
  }

  @media ${device.tablet} {
      width: 700px;
      padding: 0px;
  }

  @media ${device.desktop} {
      width: 1000px;
  }
`
  
export default function Portfolio(props) {

    const data = JSON.parse(props.data)
    const router = useRouter()

    const navOnClick = (item) => {
        router.push(`/#${item}`)
    }
    
    useEffect(() => {
        document.querySelector(`#top`).scrollIntoView({ behavior: 'smooth', block: 'start' })
    },[])

    return (
        <>
          <Head>
            <title>WisdomIT Portfolio</title>
            <meta name="description" content={`WisdomIT Portfolio | ${data.title} | ${data.summary}`} />
            <meta name="og:image" content="/thumbnail.png" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <MotionMain>
                <NavProgressBar nav="portfolio" navOnClick={navOnClick} />
                <Section id="top">
                    <SectionInner>
                        <SectionName name="PORTFOLIO" />
                        <PortfolioDiv>
                            <PortfolioH1>{data.title}</PortfolioH1>
                            <PortfolioYear>{data.year} {data.type === 'personal' ? '개인' : '팀'}프로젝트</PortfolioYear>
                            <PortfolioTags>
                                {data.tag.map((e, i) => <PortfolioTag key={i} first={i===0}>{e.toUpperCase()}</PortfolioTag>)}
                            </PortfolioTags>
                            {data.body.intro.type === 'image'
                                ? <PortfolioIntroImg src={`/images/intro/${data.body.intro.src}`} />
                                : <PortfolioIntroYoutube src={data.body.intro.src} allowFullScreen />}
                            <PortfolioSummaryTitle>SUMMARY</PortfolioSummaryTitle>
                            <PortfolioSummary>{data.summary}</PortfolioSummary>
                            <PortfolioMarkdown
                                rehypePlugins={[rehypeRaw, rehypeHighlight]}
                                remarkPlugins={[remarkGfm]}
                            >{data.body.markdown}</PortfolioMarkdown>
                        </PortfolioDiv>
                    </SectionInner>
                </Section>
          </MotionMain>
    </>
  )
}

const PortfolioDiv = styled.div`
    
    @media ${device.mobile} {
        padding: 0px;
    }

    @media ${device.tablet} {
        border-radius: 40px;
        border: 1px solid var(--black10);
        box-shadow: 0px 3px 10px var(--black10);
        padding: 60px 40px;
    }

`

const PortfolioH1 = styled.h1`

    font-weight: 800;
    text-align: center;
    margin: 0px;
    word-break: keep-all;
    
    @media ${device.mobile} {
        font-size: 28px;
        line-height: 28px;
        margin-bottom: 8px;
    }

    @media ${device.tablet} {
        font-size: 40px;
        line-height: 40px;
        margin-bottom: 20px;
    }
`

const PortfolioYear = styled.p`
    
    font-weight: 600;
    text-align: center;
    margin: 0px;
    color: var(--lightgray);
    
    @media ${device.mobile} {
        font-size: 12px;
        line-height: 12px;
        margin-bottom: 20px;
    }

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 40px;
    }
`

const PortfolioTags = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media ${device.mobile} {
        gap: 2px;
        margin-bottom: 40px;
    }

    @media ${device.tablet} {
        gap: 8px;
        margin-bottom: 40px;
    }
`

const PortfolioTag = styled.p`
    display: inline-block;
    margin: 0px;
    padding: 3px 6px;
    font-size: 10px;
    border-radius: 5px;
    font-weight: 600;
    font-family: 'Montserrat';
    background-color: ${props => props.first ? 'var(--blue)' : 'var(--gray)'};
    color: ${props => props.first ? 'var(--white)' : 'var(--black)'};

    @media ${device.mobile} {
        padding: 2px 4px;
        font-size: 8px;
    }

    @media ${device.tablet} {
        padding: 3px 6px;
        font-size: 12px;
    }
`

const PortfolioIntroImg = styled.img`
    
    width: 100%;
    border-radius: 20px;
    border: 0px;

    @media ${device.mobile} {
        margin-bottom: 40px;
    }

    @media ${device.tablet} {
        margin-bottom: 60px;
    }
`

const PortfolioIntroYoutube = styled.iframe`

    width: 100%;
    border: 0px;

    @media ${device.mobile} {
        height: 220px;
        border-radius: 10px;
    }

    @media ${device.tablet} {
        height: 350px;
        border-radius: 20px;
    }
    
    @media ${device.desktop} {
        height: 520px;
    }
`

const PortfolioSummaryTitle = styled.h2`

    font-family: 'Montserrat';
    font-weight: 600;
    color: var(--blue);
    margin: 0px;

    @media ${device.mobile} {
        font-size: 18px;
        line-height: 18px;
        margin-top: 40px;
        margin-bottom: 12px;
    }

    @media ${device.tablet} {
        font-size: 24px;
        line-height: 24px;
        margin-top: 80px;
        margin-bottom: 10px;
    }
    
    @media ${device.desktop} {
        padding: 0px 40px;
    }
`

const PortfolioSummary = styled.p`

    color: var(--black);
    font-weight: 300;
    word-break: keep-all;
    white-space: pre-wrap;
    margin: 0px;

    @media ${device.mobile} {
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 20px;
    }

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 20px;
    }
    
    @media ${device.desktop} {
        padding: 0px 40px;
    }
`

const PortfolioMarkdown = styled(ReactMarkdown)`

    @media ${device.desktop} {
        padding: 0px 40px;
    }

    & h2 {
        font-family: 'Montserrat';
        font-weight: 600;
        color: var(--blue);
        margin: 0px;

        @media ${device.mobile} {
            font-size: 18px;
            line-height: 18px;
            margin-top: 40px;
            margin-bottom: 12px;
        }

        @media ${device.tablet} {
            font-size: 24px;
            line-height: 24px;
            margin-top: 80px;
            margin-bottom: 10px;
        }
    }

    & p {
        color: var(--black);
        font-weight: 300;
        //white-space: pre-wrap;
        margin: 0px;

        @media ${device.mobile} {
            font-size: 12px;
            line-height: 18px;
            margin-bottom: 20px;
        }

        @media ${device.tablet} {
            font-size: 16px;
            line-height: 28px;
            margin-bottom: 16px;
        }
    }

    & ul, & ol {

        border: 2px solid var(--black10);
        border-radius: 12px;
        
        @media ${device.mobile} {
            margin: 0px;
            margin-bottom: 20px;
            padding: 8px;
            padding-left: 24px;
        }

        @media ${device.tablet} {
            margin: 0px;
            margin-bottom: 16px;
            padding: 12px;
            padding-left: 24px;
        }
    }

    & li {
        font-weight: 400;
        
        @media ${device.mobile} {
            font-size: 12px;
            line-height: 12px;
            margin: 8px;
        }

        @media ${device.tablet} {
            font-size: 14px;
            line-height: 14px;
            margin: 8px;
        }
    }

    & code {
        
        background-color: var(--black10);
        font-family: 'NanumGothicCoding';
        margin: 0px 2px;
        border-radius: 3px;
        vertical-align: middle;
        font-weight: 400;

        @media ${device.mobile} {
            font-size: 12px;
            line-height: 12px;
            padding: 1px 4px;
        }

        @media ${device.tablet} {
            font-size: 14px;
            line-height: 14px;
            padding: 2px 4px;
        }
    }
`