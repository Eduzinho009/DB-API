import style from "./App.module.css";
//import { Btn } from "./components/btn";
import { Menu } from "./components/menu";
//import { Card } from "./components/card";

import p1 from "./assets/images/s2-imagen.png";

import logo from "./assets/images/image.png"
//import { cards } from './assets/mock/cards';

import { useState } from "react";

function App() {
  const defaultPhoneNumber = "5541997545587";

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    Mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleZap = () => {
    const { name, email, message } = formData;

    const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
  Nome:%20${name}%0D%0A
  Email:%20${email}%0D%0A
  Mensagem:%20${message}%0D%0A`;

    window.open(urlZAPZAP, "_blank");
  };

  return (
    <>
      <Menu s1="Inspiração" s2="Quer falar com o Dev"/>
      <main>
        <section id="s1" className={style.s1}>
          <img src={logo} alt="" />
           <button><a href={'/requisicao'}>Acessar a nossa API</a></button>
        </section>
        <section id="s2" className={style.s2}>
          <div className="s2-texto">
              <h1>Inspiração</h1>
              <h4>O conceito de uma API inspirada em Dragon Ball geralmente surge do desejo de tornar acessível a vasta quantidade de informações do universo da franquia. Desde personagens icônicos e suas transformações até poderes, sagas e locais emblemáticos, uma API pode organizar e estruturar esses dados de forma eficiente para desenvolvedores e fãs.</h4>
              <button><a href="https://www.youtube.com/watch?v=VuY0ABWfjSE">o que é dragon ball?</a></button>
          </div>
          <div className="s2-imagen">
            <img src={p1} alt="seila" />
          </div>
        </section>
        <section id="s3" className={style.s3}>
          <h1>Quer falar com o DEV</h1>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Mensagem</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          <button onClick={handleZap}>Enviar mensagem</button>
        </section>
      </main>
    </>
  );
}

export default App;
