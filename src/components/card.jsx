import style from "./card.module.css";

export const Card = (props) => {
    return (
        <>
        <section className={style.carta}>
        <div className={style.wrapCard}>
            <img className={style.img} src={props.img} alt={props.text} />
        </div>
        <div className={style.texto}>
            <h3>{props.text}</h3>
        </div>
        </section>
        </>
    );
};
