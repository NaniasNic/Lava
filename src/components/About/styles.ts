import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const LogoWrapper = styled(motion.section)`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    padding: 0 100px;

    > h1 {
        color: ${props => props.theme.colors.text};
        font-size: 5rem;
        line-height: 110px;
    }

    > h3 {
        font-size: 1.4rem;
        text-transform: uppercase;
        margin-bottom: 14px;
        letter-spacing: 3px;
        color: ${props => props.theme.colors.subText};
    }

    > hr {
        width: 60px;
        border: 2px ${props => props.theme.colors.text} solid;
    }
`;

export const InfoWrapper = styled(motion.section)`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        color: ${props => props.theme.colors.text};
        font-size: 3.5rem;
        line-height: 60px;
    }

    > h3 {
        font-size: 1rem;
        text-transform: uppercase;
        margin-bottom: 14px;
        letter-spacing: 3px;
        color: ${props => props.theme.colors.desc};
    }

    > hr {
        width: 60px;
        border: 1px ${props => props.theme.colors.desc} solid;
        margin-bottom: 40px;
    }

    > p {
        color: ${props => props.theme.colors.desc};
        font-size: 16px;
        line-height: 30px;
    }
`;