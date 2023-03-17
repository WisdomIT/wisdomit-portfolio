import styled from 'styled-components'
import { device } from '@/styles/global-style';

const NavProgressBarDiv = styled.div`
    display: flex;
    position: fixed;
    left: 0px;
    top: calc(50% - 280px / 2);
    padding: 30px;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    z-index: 2;
    backdrop-filter: blur(10px);
    border-radius: 0px 20px 20px 0px;

    @media ${device.mobile} {
        display: none;
    }

    @media ${device.tablet} {
        display: flex;
    }
`

const NavProgressBarBtn = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6px;
    align-items: center;
    cursor: pointer;

    &:hover div {
        background-color: var(--blue);
    }
    &:hover p {
        color: var(--black);
        font-weight: 600;
    }
`

const NavProgressBarBtnPoint = styled.div`
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 4px;
    background-color: ${props => props.active ? 'var(--blue)' : 'var(--gray)'};
    transition: all .2s;
`

const NavProgressBarBtnName = styled.p`
    display: inline-block;
    margin: 0px;
    padding: 0px;
    font-family: 'Montserrat';
    font-size: 12px;
    line-height: 12px;
    color: ${props => props.active ? 'var(--black)' : 'var(--gray)'};
    font-weight: ${props => props.active ? '600' : '300'};
    transition: all .2s;
`

const NavProgressBarLine = styled.div`
    position: absolute;
    top: 36px;
    left: 32px;
    width: 3px;
    background-color: var(--blue20);
    transition: all .5s;
    z-index: -1;
`

const NavProgressBar = (props) => {
    const nav = props.nav
    const navOnClick = props.navOnClick

    return <NavProgressBarDiv>
        <NavProgressBarLine style={{
            height: nav === 'welcome' ? 0 :
                nav === 'portfolio' ? 52 :
                    nav === 'techstack' ? 104 :
                        nav === 'about' ? 156 : 208
        }} />
        <NavProgressBarItems item="welcome"
            active={nav === 'welcome'}
            pass={true}
            onClick={() => navOnClick('welcome')} />
        <NavProgressBarItems item="portfolio"
            active={nav === 'portfolio'}
            pass={nav === 'portfolio' || nav === 'techstack' || nav === 'about' || nav === 'contact'}
            onClick={() => navOnClick('portfolio')} />
        <NavProgressBarItems item="tech stack"
            active={nav === 'techstack'}
            pass={nav === 'techstack' || nav === 'about' || nav === 'contact'}
            onClick={() => navOnClick('techstack')} />
        <NavProgressBarItems item="about me"
            active={nav === 'about'}
            pass={nav === 'about' || nav === 'contact'}
            onClick={() => navOnClick('about')} />
        <NavProgressBarItems item="contact"
            active={nav === 'contact'}
            pass={nav === 'contact'}
            onClick={() => navOnClick('contact')} />
    </NavProgressBarDiv>
}

const NavProgressBarItems = (props) => {
    const item = props.item
    const active = props.active
    const pass = props.pass

    return <NavProgressBarBtn {...props}>
        <NavProgressBarBtnPoint active={pass} />
        <NavProgressBarBtnName active={active} >{item.toUpperCase()}</NavProgressBarBtnName>
    </NavProgressBarBtn>
}

export default NavProgressBar