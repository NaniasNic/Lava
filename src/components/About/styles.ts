import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled(motion.section)`
    width: 100%;
    height: 90vh;
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