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
            A

            <Switch 
                onChange={props.toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={20}
                offColor="#ccc"
                onColor='#001aff'
            />
        </S.Container>
    )
}