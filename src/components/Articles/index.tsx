import * as S from "./styles";

import Tunza from "../../assets/img-barco.jpg";
import Timor from "../../assets/img-teste.jfif";
import Loombok from "../../assets/img-oceano.jfif";

export function Articles() {
    const variantsLogo = {
        first: { opacity: 0, y: 70 },
        last: { opacity: 1, y: 0 }
    }
    
    const variantsCard = {
        first: { opacity: 0 },
        last: { opacity: 1 }
    }

    return (
        <S.Container>
            <S.LogoArticles
                initial="first"
                whileInView="last"
                variants={variantsLogo}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: "spring", stiffness: 30, delay: 0.8 }}
            >
                <h1>Latest articles</h1>

                <h3>our most recent posts</h3>

                <hr />
            </S.LogoArticles>

            <S.CardsContainer>
                <S.Card
                    initial="first"
                    whileInView="last"
                    variants={variantsCard}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 30, delay: 0.8 }}
                >
                    <div className="img">
                        <img src={Tunza} alt="Tunza" />
                    </div>

                    <div className="text">
                        <h1>Tunza</h1>

                        <h3>Rugged Port</h3>

                        <hr />
                    </div>
                </S.Card>
                
                <S.Card
                    initial="first"
                    whileInView="last"
                    variants={variantsCard}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 30, delay: 0.8 }}
                >
                    <div className="img">
                        <img src={Timor} alt="Timor" />
                    </div>

                    <div className="text">
                        <h1>Timor</h1>

                        <h3>Untouched Beaches</h3>

                        <hr />
                    </div>
                </S.Card>
                
                <S.Card
                    initial="first"
                    whileInView="last"
                    variants={variantsCard}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 30, delay: 0.8 }}
                >
                    <div className="img">
                        <img src={Loombok} alt="Lombook" />
                    </div>

                    <div className="text">
                        <h1>Lombook</h1>

                        <h3>Endless Lava</h3>

                        <hr />
                    </div>
                </S.Card>
            </S.CardsContainer>
        </S.Container>
    )
}