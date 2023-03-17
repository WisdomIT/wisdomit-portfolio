import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import { useInView } from 'framer-motion';
import { device } from '@/styles/global-style';

const Section = styled.h1`
    display: block;
    font-family: 'Montserrat';
    color: var(--black);
    font-weight: 800;
    margin: 0px;
    padding: 0px;
    text-decoration-line: underline;
    text-decoration-color: var(--blue);
    text-underline-position: below;
    transition: all .5s;

    @media ${device.mobile} {
        font-size: 24px;
        line-height: 24px;
        text-decoration-thickness: 4px;
        text-underline-offset: 3px;
        margin-bottom: 40px;
    }

    @media ${device.tablet} {
        font-size: 30px;
        line-height: 30px;
        text-decoration-thickness: 5px;
        text-underline-offset: 3px;
        margin-bottom: 60px;
    }
`

const SectionName = (props) => {

    //const ref = useRef(null)
    //const isInView = useInView(ref, { once: true, amount: 1 })

    return <Section /* ref={ref} style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0
    }} */>{props.name}</Section>
}

export default SectionName