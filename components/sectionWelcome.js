import styled, { keyframes } from 'styled-components'
import { device } from '@/styles/global-style';
import { useState, useEffect } from 'react'

const Section = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    @media ${device.mobile} {
        padding: 50px 30px;
    }

    @media ${device.tablet} {
        padding: 100px 160px;
    }
`

const SectionInner = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.mobile} {
        gap: 40px;
    }

    @media ${device.tablet} {
        gap: 60px;
    }
`

const WelcomeTitle = styled.h1`
    margin: 0px;
    padding: 0px;
    color: var(--black);
    font-weight: 300;
    word-break: keep-all;
    transition: all .5s;
    
    @media ${device.mobile} {
        font-size: 40px;
        line-height: 48px;
    }

    @media ${device.tablet} {
        font-size: 80px;
        line-height: 96px;
    }
`

const TitleGradient = styled.b`
    background: var(--webkit-linear-blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const WelcomeNickname = styled.p`
    margin: 0px;
    padding: 0px;
    color: var(--black);
    font-weight: 600;
    transition: all .5s;
    
    @media ${device.mobile} {
        font-size: 14px;
        line-height: 14px;
    }

    @media ${device.tablet} {
        font-size: 20px;
        line-height: 20px;
    }
`

const WelcomeNicknameLogo = styled.img`
    vertical-align: middle;

    @media ${device.mobile} {
        width: 20px;
        height: 20px;
        margin-right: 4px;
    }

    @media ${device.tablet} {
        width: 36px;
        height: 36px;
        margin-right: 8px;
    }
`

const WelcomeAnchorAnimation = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0px);
    }
`

const WelcomeAnchor = styled.img`

    position: absolute;
    animation: ${WelcomeAnchorAnimation} 2s 1s infinite;
    cursor: pointer;

    @media ${device.mobile} {
        width: 40px;
        left: calc(50% - 20px / 2);
        bottom: 40px;
    }

    @media ${device.tablet} {
        width: 62px;
        left: calc(50% - 62px / 2);
        bottom: 60px;
    }
`

const SectionWelcome = (props) => {

    const setNav = props.setNav

    const goDown = () => {
        document.querySelector(`#portfolio`).scrollIntoView({ behavior: 'smooth', block: 'start' })
        setNav('portfolio')
    }
    
    const onHover = () => {
        setNav('welcome')
    }

    const [animation, setAnimation] = useState(0)

    useEffect(() => {
        setTimeout(() => setAnimation(1),300)
        setTimeout(() => setAnimation(2),600)
    },[])

    return <Section id="welcome" onMouseEnter={onHover}>
        <SectionInner>
            <WelcomeTitle style={{
            transform: animation >= 1 ? "none" : "translateY(50px)",
            opacity: animation >= 1 ? 1 : 0
        }}>
                안녕하세요,<br />
                <b>디자인에 진심인 풀스택 개발자</b><br />
                <TitleGradient>임현명</TitleGradient>입니다!
            </WelcomeTitle>
            <WelcomeNickname style={{
            transform: animation >= 2 ? "none" : "translateY(50px)",
            opacity: animation >= 2 ? 1 : 0
        }}>
                <WelcomeNicknameLogo src="/images/logo.png" />WisdomIT
            </WelcomeNickname>
        </SectionInner>
        <WelcomeAnchor src="/images/welcomeanchor.png" onClick={goDown} />
    </Section>
}

export default SectionWelcome