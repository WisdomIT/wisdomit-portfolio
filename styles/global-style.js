import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
        --white: #FFF;
        --dark: #222;
        --black: #000;
        --gray: #D9D9D9;
        --lightgray: #777;
        --darkgray: #333;
        --blue: #008CFF;
        --red: #FF3C3C;
        --green: #10C900;
        --orange: #FF9900;
        --yellow: #FFB800;
        --white5: rgba(255,255,255,0.05);
        --white10: rgba(255,255,255,0.1);
        --white20: rgba(255,255,255,0.2);
        --white50: rgba(255,255,255,0.5);
        --white80: rgba(255,255,255,0.8);
        --black5: rgba(0,0,0,0.05);
        --black10: rgba(0,0,0,0.1);
        --black20: rgba(0,0,0,0.2);
        --black50: rgba(0,0,0,0.5);
        --black80: rgba(0,0,0,0.8);
        --blue5: rgba(0, 140, 255, 0.05);
        --blue10: rgba(0, 140, 255, 0.1);
        --blue20: rgba(0, 140, 255, 0.2);
        --blue50: rgba(0, 140, 255, 0.5);
        --blue80: rgba(0, 140, 255, 0.8);
        --linear-blue: linear-gradient(0deg, #00D1FF 0%, #0085FF 100%);
        --webkit-linear-blue: -webkit-linear-gradient(0deg, #00D1FF 0%, #0085FF 100%);
        --linear-black1: linear-gradient(180deg, #000 0%, #111 100%);
        --linear-black2: linear-gradient(180deg, #000 0%, #222 100%);
        --blur: blur(30px);
    }
    
    * {
        box-sizing: border-box;
        font-family: Pretendard;

        -webkit-touch-callout: none;
        
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;

        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
    }
    
    input { 
        -webkit-user-select : auto;
    }

    img, a[href] {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
    }

    html {
        -webkit-text-size-adjust: 100%;
    }

    html, body {
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    body {
        background: var(--white);
    }

    ::-webkit-scrollbar {
        width: 8px;  /* 세로축 스크롤바 길이 */
        height: 8px;  /* 가로축 스크롤바 길이 */
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--black10);
        border: 1px solid var(--white10);
        border-radius: 10px;
    }
`

export const size = {
    mobile: 0,
    tablet: 768,
    desktop: 1200
}

export const device = {
    mobile: `(min-width: ${size.mobile}px)`,
    tablet: `(min-width: ${size.tablet}px)`,
    desktop: `(min-width: ${size.desktop}px)`
};
