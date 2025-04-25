import style from "./card.module.css";

export const Card = (props) => {
    return (
        <>
        <section className={style.carta}>
        <div className={style.wrapCard}>
            <img className={style.img} src={props.img} alt={props.text} />
        </div>
        <div className={style.texto}>
            <h3>{props.text}</h3><br />
            <p><strong>Poder (KI):</strong><br /> {props.power}</p>
            <p><strong>Raça:</strong><br /> {props.race}</p>
            <p><strong>KI Máximo:</strong><br /> {props.maxKi}</p>
            <p><strong>Afiliado:</strong><br /> {props.affiliation}</p>
        </div>
        </section>
        </>
    );
};
