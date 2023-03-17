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
        padding-bottom: 100px;
    }

    @media ${device.tablet} {
        padding: 120px 0px;
        min-height: 100vh;
        padding-bottom: 0px;
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

const SectionContact = (props) => {

    const setNav = props.setNav
    
    const onHover = () => {
        setNav('contact')
    }

    return <Section id="contact" onMouseEnter={onHover}>
        <SectionInner>
            <SectionName name="CONTACT" />
            <ContactFlex>
                <ContactBtns background="var(--white)" color="var(--black)" flex="3" icon="email" text="bs03166@naver.com" href="mailto:bs03166@naver.com" />
                <ContactBtns background="#FAE100" color="#371D1E" flex="2" icon="kakaotalk" text="@WISDOMIT" href="http://qr.kakao.com/talk/drssPcW0amQOpxyBTS0WU.KDwy8-" />
                <ContactBtns background="#5869EA" color="var(--white)" flex="2" icon="discord" text="위즈#0806" href="https://discord.com/users/939018545415729172" />
            </ContactFlex>
        </SectionInner>
    </Section>
}

const ContactFlex = styled.div`

    display: flex;

    @media ${device.mobile} {
        flex-direction: column;
        padding: 0px;
        gap: 12px;
    }

    @media ${device.tablet} {
        flex-direction: row;
        gap: 24px;
    }

    @media ${device.desktop} {
        padding: 0px 64px;
        gap: 32px;
    }
`

const ContactBtns = (props) => {
    
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 1 })

    const onClick = (href) => {
        window.open(
            href,
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    return <ContactBtnsDiv ref={ref} style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                background: props.background
            }} flex={props.flex} onClick={() => onClick(props.href)}>
        <ContactBtnsIcon src={`/images/${props.icon}.png`} />
        <ContactBtnsText style={{color: props.color}}>{props.text}</ContactBtnsText>
    </ContactBtnsDiv>
}

const ContactBtnsDiv = styled.div`
    display: block;
    position: relative;
    border: 1px solid var(--black10);
    border-radius: 15px;
    box-shadow: 0px 3px 10px var(--black10);
    transition: all .5s;
    cursor: pointer;

    @media ${device.mobile} {
        flex-direction: column;
        height: 120px;
    }

    @media ${device.tablet} {
        flex: ${ props => props.flex };
        height: 160px;
    }

    &:hover {
        transform: scale(1.05) !important;
    }
`

const ContactBtnsIcon = styled.img`

    position: absolute;
    object-fit: contain;
    
    @media ${device.mobile} {
        width: 40px;
        height: 40px;
        left: 24px;
        top: 24px;
    }

    @media ${device.tablet} {
        width: 60px;
        height: 60px;
        left: 24px;
        top: 24px;
    }
`

const ContactBtnsText = styled.p`

    position: absolute;
    font-family: 'Montserrat', 'Pretendard';
    font-weight: 600;
    margin: 0px;

    @media ${device.mobile} {
        font-size: 18px;
        line-height: 18px;
        right: 24px;
        bottom: 24px;
    }

    @media ${device.tablet} {
        font-size: 20px;
        line-height: 20px;
        right: 24px;
        bottom: 24px;
    }

    @media ${device.desktop} {
        font-size: 24px;
        line-height: 24px;
    }
`

export default SectionContact