import react, { useContext } from "react"

import * as S from "./styles";

import { ThemeContext } from "styled-components";

import Switch from "react-switch";

interface HeadingProps {
    toggleTheme(): void;
}

export function Header(props: HeadingProps) {
    const { colors, title } = useContext(ThemeContext);

    const variantsLogo = {
        first: { opacity: 0, y: 70 },
        last: { opacity: 1, y: 0 }
    }
    
    const variantsMenu = {
        first: { opacity: 0, x: -70 },
        last: { opacity: 1, x: 0 }
    }

    return (
        <S.Container>
            <S.Logo
                initial="first"
                whileInView="last"
                variants={variantsLogo}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: "spring", stiffness: 30, delay: 0.8 }}
            >
                L
            </S.Logo>

            <S.Menu
                initial="first"
                whileInView="last"
                variants={variantsMenu}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: "spring", stiffness: 30, delay: 1.5 }}
            >
                <a href="">About</a>

                <a href="">Articles</a>

                <button>
                    Sabscribe
                </button>

                <Switch 
                    onChange={props.toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    handleDiameter={20}
                    offColor="#ccc"
                    onColor='#001aff'
                />
            </S.Menu>
        </S.Container>
    )
}