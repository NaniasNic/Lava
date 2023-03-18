import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled.header`
    height: 60px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`;

export const Logo = styled(motion.h1)`
    color: ${props => props.theme.colors.text};
`;

export const Menu = styled.nav`
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

    > button {
        padding: 5px 10px;
        background-color: transparent;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: ${props => props.theme.colors.text};
        border: 2px ${props => props.theme.colors.text} solid;
    }
`;