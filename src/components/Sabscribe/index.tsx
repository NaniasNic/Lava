import * as S from "./styles";

export function Sabscribe() {
    const variantsSab = {
        first: { opacity: 0, x: -50 },
        last: { opacity: 1, x: 0 }
    }

    return (
        <S.Container>
            <S.WrapperContainer
                initial="first"
                whileInView="last"
                variants={variantsSab}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: "spring", stiffness: 30, delay: 1 }}
            >
                <h1>Sabscribe</h1>
                
                <h3>Sign-up to our newsletters</h3>
                
                <hr />
                
                <input type="text" placeholder="Your email" />
                
                <button>Sabmit</button>
            </S.WrapperContainer>
        </S.Container>
    )
}