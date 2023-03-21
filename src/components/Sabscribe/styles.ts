import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled.section`
    width: 100%;
    height: 90vh;
    background-color: ${props => props.theme.colors.backgroundSub};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WrapperContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
        font-size: 60px;
        font-weight: lighter;
        color: white;
    }

    > h3 {
        font-size: 20px;
        text-transform: uppercase;
        color: ${props => props.theme.colors.desc};
        letter-spacing: 2px;
        margin-bottom: 20px;
    }

    > hr {
        display: none;
    }

    > input {
        height: 44px;
        width: 450px;
        padding: 20px;
        background-color: ${props => props.theme.colors.background};
        border: 1px ${props => props.theme.colors.desc} solid;
        margin-bottom: 20px;
        outline: none;
    }

    > button {
        background-color: transparent;
        border: 2px white solid;
        padding: 8px 25px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: white;
        cursor: pointer;
    }

    @media screen and (max-width: 600px) {
        > button {
            height: 44px;
            width: 450px;
        }

        > hr {
            display: block;
            width: 80px;
            margin-bottom: 20px;
        }
    }

    @media screen and (max-width: 490px) {    
        > h1 {
            font-size: 50px;
        }

        > h3 {
            font-size: 16px;
        }

        > input {
            width: 350px;
        }

        > button {
            width: 350px;
        }
    }
`;