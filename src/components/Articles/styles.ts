import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled.section`
    height: 120vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1350px) {
        height: 250vh;
    }
`;

export const LogoArticles = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
        font-size: 50px;
        letter-spacing: 2px;
        line-height: 24px;
        color: ${props => props.theme.colors.text};
    }

    > h3 {
        font-size: 16px;
        line-height: 50px;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: ${props => props.theme.colors.desc};
    }

    > hr {
        width: 80px;
        border: 1px ${props => props.theme.colors.desc} solid;
        margin-bottom: 24px;
    }    
`;

export const CardsContainer = styled(motion.div)`
    display: flex;
    gap: 40px;

    @media screen and (max-width: 1350px) {
        flex-direction: column;
    }
`;

export const Card = styled.div`
    width: 400px;
    height: 550px;
    background-color: ${props => props.theme.colors.backgroundCard};
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    box-shadow: 0px 34px 21px -17px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 34px 21px -17px rgba(0, 0, 0, 0.5);
    position: relative;

    .text {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .text h1 {
        font-size: 26px;
        text-transform: uppercase;
        letter-spacing: 5px;
        line-height: 20px;
        color: white;
    }

    .text h3 {
        font-size: 14px;
        text-transform: uppercase;
        line-height: 40px;
        letter-spacing: 1px;
        color: gray;
    }

    .text hr {
        width: 40px;
        border: 1px ${props => props.theme.colors.desc} solid;
        margin-bottom: 30px;
    }

    .img {
        position: absolute;
        height: 100%;
    }

    .img img {
        width: 100%;
        height: 100%;
        filter: brightness(0.5);
    }

    @media screen and (max-width: 430px) {
        height: 400px;
        width: 300px;
    }
`;