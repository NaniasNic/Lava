import * as S from "./styles";

export function Articles() {
    const variantsLogo = {
        first: { opacity: 0, y: 70 },
        last: { opacity: 1, y: 0 }
    }

    const variantsCards = {
        first: { opacity: 0, x: -50 },
        last: { opacity: 1, x: 0 }
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
            
            <S.CardsContainer
                initial="first"
                whileInView="last"
                variants={variantsCards}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: "spring", stiffness: 30, delay: 0.8 }}
            >
                {
                    [
                        { cardId: "Card one", back: ("../../public/img-barco.jpg") ,firstTitle: "Tunza", secondTitle: "Rugged Port" },
                        { cardId: "Card two",  back: ("../../public/img-teste.jfif") ,firstTitle: "Timor", secondTitle: "Untouched Beaches" },
                        { cardId: "Card three", back: ("../../public/img-oceano.jfif") ,firstTitle: "Lombook", secondTitle: "Endless Lava" },
                    ].map(cardsName => (
                        <S.Card
                            key={cardsName.cardId}
                        >
                            <div className="img">                                
                                <img src={cardsName.back} alt="" />
                            </div>

                            <div className="text">                                
                                <h1>{cardsName.firstTitle}</h1>

                                <h3>{cardsName.secondTitle}</h3>

                                <hr />
                            </div>
                        </S.Card>
                    ))
                }
            </S.CardsContainer>
        </S.Container>
    )
}