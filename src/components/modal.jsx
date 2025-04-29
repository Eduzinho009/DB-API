import style from './modal.module.css';
import closeIcon from '../assets/images/close.png';


function ModalInfo({ data, close }) {
    if (!data) return null;

    console.log("Dados recebidos no modal:", data); // Debug para verificar os dados

    return (
        <>

        
        <div className={style.tt}>

                <div className={style.voltarAPI}>
                <button onClick={close}>
                    <img src={closeIcon} alt="Fechar modal" style={{width: "30px"}}/>
                </button>
                </div>

                <div className={style.ttDentro}>
            
                    <div className={style.ttImagem}>
                    <img src={data.image} alt="Imagem do personagem"/>
                    </div>

                    <div className={style.ttTexto}>
                    <h3>{data.name}</h3><br />
                    <p><strong>Ki base:</strong><br /> {data.ki ? data.ki : "Não disponível"}</p>
                    <p><strong>Raça:</strong><br /> {data.race}</p>
                    <p><strong>KI Máximo:</strong><br /> {data.maxKi}</p>
                    <p><strong>Afiliado:</strong><br /> {data.affiliation}</p>
                    </div>

                    </div>
                </div>
        </>
    );
}

export default ModalInfo;
