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

const SectionTechStack = (props) => {

    const setNav = props.setNav
    
    const onHover = () => {
        setNav('techstack')
    }

    return <Section id="techstack" onMouseEnter={onHover}>
        <SectionInner>
            <SectionName name="TECH STACK" />
            <TechStackList>
                <TechStackItems>
                    <TechStackTitle>WEB</TechStackTitle>
                    <TechStackItem icon="html5" name="html5" />
                    <TechStackItem icon="css3" name="css3" />
                    <TechStackItem icon="js" name="js" />
                    <TechStackItem icon="php" name="php" />
                    <TechStackItem icon="react" name="react" />
                    <TechStackItem icon="nextjs" name="next.js" />
                </TechStackItems>
                <TechStackItems>
                    <TechStackTitle>APP</TechStackTitle>
                    <TechStackItem icon="nodejs" name="node.js" />
                    <TechStackItem icon="react" name={`react\nnative`} />
                    <TechStackItem icon="flutter" name="flutter" />
                    <TechStackItem icon="electron" name="electron" />
                </TechStackItems>
                <TechStackItems>
                    <TechStackTitle>DB</TechStackTitle>
                    <TechStackItem icon="sql" name="sql" />
                    <TechStackItem icon="mongodb" name="mongodb" />
                    <TechStackItem icon="redis" name="redis" />
                </TechStackItems>
                <TechStackItems>
                    <TechStackTitle>DESIGN</TechStackTitle>
                    <TechStackItem icon="photoshop" name="photoshop" />
                    <TechStackItem icon="illustrator" name="illustrator" />
                    <TechStackItem icon="figma" name="figma" />
                    <TechStackItem icon="aftereffects" name={`after\neffects`} />
                </TechStackItems>
                <TechStackItems>
                    <TechStackTitle>ETC</TechStackTitle>
                    <TechStackItem icon="linux" name="linux" />
                    <TechStackItem icon="network" name="network" />
                    <TechStackItem icon="git" name="git" />
                    <TechStackItem icon="docker" name="docker" />
                </TechStackItems>
            </TechStackList>
        </SectionInner>
    </Section>
}

const TechStackList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 64px;
    gap: 24px;
    
    @media ${device.mobile} {
        padding: 0px;
    }

    @media ${device.desktop} {
        padding: 0px 64px;
    }
`

const TechStackItemsDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--white);
    border: 1px solid var(--black10);
    border-radius: 30px;
    box-shadow: 0px 3px 10px var(--black10);
    width: 100%;
    transition: all .5s;
    
    @media ${device.mobile} {
        height: 80px;
        gap: 8px
    }

    @media ${device.tablet} {
        height: 100px;
    }

    &:hover {
        transform: scale(1.05) !important;
    }
`

const TechStackItems = (props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 1 })

    return <TechStackItemsDiv ref={ref} style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0
    }}>{props.children}</TechStackItemsDiv>
}

const TechStackTitle = styled.p`

    color: var(--black);
    font-family: 'Montserrat';
    font-weight: 600;
    text-align: center;
    margin: 0px;

    @media ${device.mobile} {
        font-size: 14px;
        line-height: 14px;
        width: 100px;
    }

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 16px;
        width: 100px;
    }

    @media ${device.desktop} {
        width: 120px;
    }
`

const TechStackItem = (props) => {
    return <TechStackItemDiv>
        <TechStackItemIcon src={`/images/techstack/${props.icon}.png`} />
        <TechStackItemName>{props.name.toUpperCase()}</TechStackItemName>
    </TechStackItemDiv>
}

const TechStackItemDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${device.mobile} {
        gap: 2px;
        width: 24px;
    }

    @media ${device.tablet} {
        gap: 8px;
        width: 88px;
    }

    @media ${device.desktop} {
        width: 100px;
    }
`

const TechStackItemIcon = styled.img`
    
    width: 100%;
    object-fit: contain;
    
    @media ${device.mobile} {
        height: 32px;
    }

    @media ${device.tablet} {
        height: 32px;
    }
`

const TechStackItemName = styled.p`
    color: var(--black);
    font-family: 'Montserrat';
    font-weight: 600;
    text-align: center;
    white-space: pre-wrap;
    margin: 0px;
    
    @media ${device.mobile} {
        font-size: 4px;
        line-height: 4px;
    }

    @media ${device.tablet} {
        display: block;
        font-size: 10px;
        line-height: 10px;
    }
`

export default SectionTechStack