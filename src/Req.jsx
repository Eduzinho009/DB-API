import { useEffect, useState } from "react";
import { api } from "./api/api";
import { Card } from "./components/card";
import sair from "./assets/images/sair.png";
import logo from "./assets/images/image.png"
import style from './Req.module.css';

export default function Req() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [erro, setErro] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (page < 1 || page > 6) {
            setErro(true);
            return;
        }

        api.get(`/characters?page=${page}`)
            .then((res) => {
                setErro(false);
                setData(res.data.items);
            })
            .catch((error) => {
                setErro(true);
                console.error(error);
            });
    }, [page]);

    // Filtrar os personagens com base no nome digitado
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
        <a href={"/"} >
            <img src={sair} alt="botao" className={style.sairAPI} style={{ width: "50px", cursor: "pointer" }} />
        </a>
            <br /><br /><br />
            <section className={style.inicio}>
                <img src={logo} alt="logo" style={{width: "50vh"}} />
                <br />
                <input className={style.inputAPI}
                    type="text"
                    placeholder="Pesquisar personagem..."
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
                <br />
                <input
                    className={style.inputAPI}
                    type="number"
                    placeholder="Digite uma página de 1 até 6"
                    value={page}
                    min="1"
                    max="6"
                    onChange={(event) => {
                        setPage(event.target.value); // Permite edição livre
                    }}
                    onBlur={(event) => {
                        const numValue = Number(event.target.value);
                        if (numValue < 1 || numValue > 6 || isNaN(numValue)) {
                            setPage(1); // Retorna ao valor mínimo se for inválido
                        } else {
                            setPage(numValue); // Atualiza se for válido
                        }
                    }}
                />
                {erro && <p style={{ color: "red" }}>Essa Página não existe, é de 1 até 6</p>}
                <br /><br />
                <div className={style.wrapCardsRow}>
                    {filteredData.map((item, index) => (
                        <div className={style.wrapAll1} key={index}>
                            <Card img={item.image} text={item.name} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
