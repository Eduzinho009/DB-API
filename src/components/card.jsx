import style from "./card.module.css";


export const Card = ({ img, text }) => {
    return (
        <>
            <section className={style.carta}>
                <div className={style.wrapCard}>
                    <img className={style.img} src={img} alt={text} />
                </div>
                <div className={style.texto}>
                    <h3>{text}</h3><br />
                </div>
            </section>
        </>
    );
};
