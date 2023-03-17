import styled, { keyframes } from 'styled-components'
import { device } from '@/styles/global-style';
import SectionName from '@/components/sectionName';
import { useRef } from 'react'
import { useInView } from 'framer-motion';

const Section = styled.div`
    width: 100vw;
    text-align: center;

    @media ${device.mobile} {
        padding: 50px 30px;
    }

    @media ${device.tablet} {
        min-height: 100vh;
        padding: 120px 0px;
        padding-bottom: 200px;
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

const SectionAbout = (props) => {

    const setNav = props.setNav
    
    const onHover = () => {
        setNav('about')
    }

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 1 })

    return <Section id="about" onMouseEnter={onHover}>
        <SectionInner>
            <SectionName name="ABOUT ME" />
            <AboutTitle ref={ref} style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0
            }}>
                디자인에 진심인 개발자,<br/>임현명입니다<AboutLogo src="/images/logo.png" />
            </AboutTitle>
            <AboutText>
                개발을 이해하는 디자이너는 초기 디자인 단계에서부터 <b>개발 효율적인 UX/UI 디자인이 가능</b>하고<br />
                디자인을 이해하는 개발자는 <b>디자인의 의도를 쉽게 파악</b>하고 좀 더 <b>사용자 친화적인 개발</b>이 가능합니다.<br />
                디자이너와 개발자는 <b>결과물에 대한 높은 분석력을 요구하며, 새로운 것을 창조한다는 점</b>에서 일맥상통한다고 생각합니다.
            </AboutText>
            <AboutTextWithIcon>
                <AboutTextWithIconIcon src="/images/designer.png" />
                <AboutTextWithIconText>
                    <b>저는 디자이너로서</b><br />
                    수치에 기반한 효율적이고 깔끔하며 트렌디한 디자인을 추구하고<br />
                    <b style={{color: 'var(--blue)'}}>사용자 중심의 좋은 UI / UX를 항상 고민</b>하고 공부하고 있습니다.
                </AboutTextWithIconText>
            </AboutTextWithIcon>
            <AboutTextWithIcon>
                <AboutTextWithIconIcon src="/images/developer.png" />
                <AboutTextWithIconText>
                    <b>저는 개발자로서</b><br />
                    <b style={{color: 'var(--blue)'}}>웹 / 앱 / 서버 / 네트워크 전반에 대한 높은 이해</b>로<br />
                    다양한 방법을 통한 효율적이고 안정적인 시스템을 구축하고<br />
                    하루가 다르게 발전하는 새로운 기술을 공부하고 클린 코드를 적용하기 위해 노력합니다.
                </AboutTextWithIconText>
            </AboutTextWithIcon>
            <AboutText>
                저는 <b>완벽주의자 기질</b>을 타고난 사람입니다.<br />
                맡은 바 제 일은 제 마음에 들 때까지 최선을 다하고, 제 스스로 결과물에 만족할때까지 멈추지 않습니다.
            </AboutText>
        </SectionInner>
    </Section>
}

const AboutTitle = styled.h1`

    margin: 0px;
    font-weight: 800;
    word-break: keep-all;
    color: var(--black);
    transition: all .5s;

    @media ${device.mobile} {
        font-size: 40px;
        line-height: 48px;
        padding: 0px;
        margin-bottom: 40px;
    }

    @media ${device.tablet} {
        font-size: 60px;
        line-height: 72px;
        margin-bottom: 64px;
    }

    @media ${device.desktop} {
        padding: 0px 64px;
    }
`

const AboutLogo = styled.img`

    vertical-align: middle;

    @media ${device.mobile} {
        width: 40px;
        height: 40px;
        margin-left: 8px;
        margin-bottom: 8px;
    }

    @media ${device.tablet} {
        width: 60px;
        height: 60px;
        margin-left: 12px;
        margin-bottom: 12px;
    }
`

const AboutTextP = styled.p`
    margin: 0px;
    font-weight: 400;
    color: var(--black);
    word-break: keep-all;
    transition: all .5s;

    @media ${device.mobile} {
        font-size: 12px;
        line-height: 18px;
        padding: 0px;
        margin-bottom: 20px;
    }

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 32px;
    }

    @media ${device.desktop} {
        padding: 0px 64px;
    }
`

const AboutText = (props) => {
    
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 1 })

    return <AboutTextP ref={ref} style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0
    }}>
        {props.children}
    </AboutTextP>
}

const AboutTextWithIcon = (props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 1 })

    return <AboutTextWithIconDiv ref={ref} style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0
    }}>
            {props.children}
        </AboutTextWithIconDiv>
}

const AboutTextWithIconDiv = styled.div`
    display: flex;
    transition: all .5s;
    
    @media ${device.mobile} {
        flex-direction: column;
        padding: 0px;
        margin-bottom: 20px;
        gap: 8px;
    }

    @media ${device.tablet} {
        flex-direction: row;
        margin-bottom: 32px;
        gap: 12px;
    }

    @media ${device.desktop} {
        padding: 0px 64px;
    }
`

const AboutTextWithIconIcon = styled.img`
    @media ${device.mobile} {
        width: 20px;
        height: 20px;
    }

    @media ${device.tablet} {
        width: 24px;
        height: 24px;
    }
`

const AboutTextWithIconText = styled.p`

    margin: 0px;
    word-break: keep-all;

    @media ${device.mobile} {
        font-size: 12px;
        line-height: 18px;
    }

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 24px;
    }
`

export default SectionAbout