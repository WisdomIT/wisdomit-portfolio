import styled, { keyframes } from 'styled-components'
import { device } from '@/styles/global-style';
import SectionName from '@/components/sectionName';
import { useRef } from 'react'
import { useInView } from 'framer-motion';
import { useRouter } from 'next/router'

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

const SectionPortfolio = (props) => {

    const setNav = props.setNav
    
    const onHover = () => {
        setNav('portfolio')
    }

    const data = props.data

    return <Section id="portfolio" onMouseEnter={onHover}>
        <SectionInner>
            <SectionName name="PORTFOLIO" />
            <PortfolioList>
                {data.map((e, i) => <PortfolioItem key={i} data={e} /> )}
            </PortfolioList>
        </SectionInner>
    </Section>
}

const PortfolioList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 64px;
    gap: 24px;
    
    @media ${device.mobile} {
        padding: 0px;
    }

    @media ${device.tablet} {
        padding: 0px 64px;
    }
`

const PortfolioItem = (props) => {
    const data = props.data

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    const router = useRouter()

    return <PortfolioItemDiv ref={ref} style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0
    }}>
        <PortfolioItemThumbnail src={`/images/portfolio/${data.thumbnail}.png`} />
        <PortfolioItemData>
            <PortfolioItemTitle>{data.title}<PortfolioItemTitleSpan>_{data.year} {data.type === 'personal' ? '개인' : '팀'}</PortfolioItemTitleSpan></PortfolioItemTitle>
            <PortfolioItemTags>
                {data.tag.map((e, i) => <PortfolioItemTag key={i} first={i===0}>{e.toUpperCase()}</PortfolioItemTag>)}
            </PortfolioItemTags>
            <PortfolioItemSummary>{data.summary}</PortfolioItemSummary>
            <PortfolioItemBtns>
                {data.link !== null ? <PortfolioItemBtn href={data.link} target="_blank">방문하기</PortfolioItemBtn> : <></>}
                <PortfolioItemBtn onClick={() => router.push(`/portfolio/${data.num}`)} blue>더 알아보기</PortfolioItemBtn>
            </PortfolioItemBtns>
        </PortfolioItemData>
    </PortfolioItemDiv>
}

const PortfolioItemDiv = styled.div`
    display: flex;
    border-radius: 40px;
    border: 1px solid var(--black10);
    box-shadow: 0px 3px 10px var(--black10);
    transition: all .5s;
    
    @media ${device.mobile} {
        flex-direction: column;
        gap: 8px;
        padding: 20px;
    }

    @media ${device.tablet} {
        gap: 20px;
        padding: 20px;
    }

    @media ${device.desktop} {
        flex-direction: row;
    }

    &:hover {
        transform: scale(1.02) !important;
    }
`

const PortfolioItemThumbnail = styled.img`

    object-fit: cover;
    border-radius: 20px;

    @media ${device.mobile} {
        width: 100%;
        height: 160px;
        margin-bottom: 12px;
    }

    @media ${device.tablet} {
        width: 100%;
        height: 240px;
    }

    @media ${device.desktop} {
        width: 420px;
        height: 240px;
        margin-bottom: 0px;
    }
`

const PortfolioItemData = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    @media ${device.mobile} {
        padding: 0px;
    }

    @media ${device.tablet} {
        padding: 12px;
    }
`

const PortfolioItemTitle = styled.h1`
    vertical-align: bottom;
    color: var(--black);
    margin: 0px;
    font-weight: 800;
    word-break: keep-all;

    @media ${device.mobile} {
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 8px;
    }

    @media ${device.tablet} {
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 8px;
    }
`

const PortfolioItemTitleSpan = styled.span`
    vertical-align: bottom;
    color: var(--lightgray);
    font-weight: 600;

    @media ${device.mobile} {
        font-size: 12px;
        line-height: 12px;
        margin-left: 8px;
    }

    @media ${device.tablet} {
        font-size: 12px;
        line-height: 12px;
        margin-left: 12px;
    }
`

const PortfolioItemTags = styled.div`
    display: flex;
    flex-direction: row;

    @media ${device.mobile} {
        gap: 2px;
        margin-bottom: 12px;
    }

    @media ${device.tablet} {
        gap: 4px;
        margin-bottom: 12px;
    }
`

const PortfolioItemTag = styled.p`
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
        font-size: 10px;
    }
`

const PortfolioItemSummary = styled.p`
    font-weight: 400;
    margin: 0px;
    word-break: keep-all;
    color: var(--black);
    flex: 1;
    white-space: pre-wrap;

    @media ${device.mobile} {
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 20px;
    }

    @media ${device.tablet} {
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 12px;
        overflow: hidden;
    }
    
    @media ${device.desktop} {
        margin-bottom: 0px;
    }
`

const PortfolioItemBtns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 8px;
`

const PortfolioItemBtn = styled.a`

    background-color: ${props => props.blue ? 'var(--blue)' : 'var(--gray)'};
    color: ${props => props.blue ? 'var(--white)' : 'var(--black)'};
    border-radius: 40px;
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
    transition: all .2s;
    
    @media ${device.mobile} {
        font-size: 12px;
        line-height: 12px;
        padding: 16px 28px;
    }

    @media ${device.tablet} {
        font-size: 12px;
        line-height: 12px;
        padding: 12px 20px;
    }

    &:hover {
        transform: scale(1.1);
    }
`

export default SectionPortfolio