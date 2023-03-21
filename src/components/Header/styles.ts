import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled.header`
    width: 100%;
    height: 60px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    position: fixed;

    @media screen and (max-width: 600px) {
        justify-content: flex-end;
    }
`;

export const Logo = styled(motion.h1)`
    font-size: 36px;
    color: ${props => props.theme.colors.text};

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const Menu = styled(motion.nav)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 34px;

    > a {
        font-size: 16px;
        text-decoration: none;
        color: ${props => props.theme.colors.text};
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 3px;
    }

    > h3 {
        padding: 5px 10px;
        background-color: transparent;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: ${props => props.theme.colors.text};
        border: 2px ${props => props.theme.colors.text} solid;
    }

    @media screen and (max-width: 600px) {        
        > a {
            display: none;
        }

        > h3 {
            display: none;
        }

        > button {
            display: block;
        }
    }
`;