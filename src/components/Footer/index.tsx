import * as S from "./styles";

export function Footer() {
    const variantsLogo = {
        first: { opacity: 0, y: -70 },
        last: { opacity: 1, y: 0 }
    }
    
    const variantsMenu = {
        first: { opacity: 0, y: -70 },
        last: { opacity: 1, y: 0 }
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
                transition={{ type: "spring", stiffness: 30, delay: 1 }}
            >
                <a href="">About</a>

                <a href="">Articles</a>

                <h3>sabscribe</h3>
            </S.Menu>
        </S.Container>
    )
}