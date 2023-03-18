import * as S from "./styles";

export function About() {
    const variantsInfo = {
        first: { opacity: 0, x: -50 },
        last: { opacity: 1, x: 0 }
    }

    return (
        <S.Container
            initial="first"
            whileInView="last"
            variants={variantsInfo}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.8 }}
        >
            <h1>Lava</h1>

            <h3>Black sand beach</h3>
            
            <hr />
        </S.Container>
    )
}