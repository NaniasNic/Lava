import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled.footer`
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    @media screen and (max-width: 520px) {
        height: 300px;
        justify-content: center;
    }
`;

export const Logo = styled(motion.h1)`
    font-size: 36px;
    color: ${props => props.theme.colors.text};

    @media screen and (max-width: 520px) {
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
        cursor: pointer;
    }

    > h3 {
        padding: 5px 10px;
        background-color: transparent;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: ${props => props.theme.colors.text};
        cursor: pointer;
    }

    @media screen and (max-width: 520px) {
        flex-direction: column;

        > a {
            font-size: 24px;
        }

        > h3 {
            font-size: 24px;
        }
    }
`;