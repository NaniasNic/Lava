import * as S from "./styles";

export function About() {
    const variantsLogo = {
        first: { opacity: 0, x: -50 },
        last: { opacity: 1, x: 0 }
    }

    const variantsInfo = {
        first: { opacity: 0, y: 50 },
        last: { opacity: 1, y: 0 }
    }

    return (
        <S.Container>    
            <S.LogoWrapper
                initial="first"
                whileInView="last"
                variants={variantsLogo}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: "spring", stiffness: 30, delay: 1.5 }}
            >
                <h1>Lava</h1>

                <h3>Black sand beach</h3>

                <hr />
            </S.LogoWrapper>

            <S.InfoWrapper
                initial="first"
                whileInView="last"
                variants={variantsInfo}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: "spring", stiffness: 30, delay: 0.8 }}
            >
                <h1>Slow travelling</h1>

                <h3>A travel blog</h3>

                <hr />

                <p>
                    We look to provide the most authentic contentt from athletes, adventure, <br />
                    explorers travellers autound the world. Our long them mission is to educate <br />
                    inspire and enuble all peoples to experience & protect wildeness
                </p>
            </S.InfoWrapper>
        </S.Container>
    )
}