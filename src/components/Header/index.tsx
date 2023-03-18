import react, { useContext } from "react"

import * as S from "./styles";

import { ThemeContext } from "styled-components";

import Switch from "react-switch";

interface HeadingProps {
    toggleTheme(): void;
}

export function Header(props: HeadingProps) {
    const { colors, title } = useContext(ThemeContext);

    return (
        <S.Container>
            <h1>L</h1>



            <S.Menu>
                <a href="">About</a>

                <a href="">Articles</a>

                <button>Sabscribe</button>

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