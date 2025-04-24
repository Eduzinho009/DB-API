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
    Assunto: "",
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
      <Menu s1="API" s2="Quer falar com o Dev" style={{width: "100%"}}/>
      <main>


        <section id="s1" className={style.s1}>
          <img src={logo} alt="principio" className={style.logoS1}/>
          <div className={style.butao}>
           <button><a href={'/requisicao'} style={{fontSize: "14px"}}>Acessar a nossa API</a></button>
           </div>
        </section>


        <section id="s3" className={style.s2}>
          <h1>Quer falar com o DEV?</h1>
          <h5>coloque as informações nos blocos de textos e coloque o seu assunto</h5>
          
          <div className={style.inputS2}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nome"
            />
          </div>

          <div className={style.inputS2}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>

          <div className={style.mensagemS2}>
            <label htmlFor="message">Assunto:</label><br />
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

        <div className={style.botoesS2}>
          <button onClick={handleZap} className={style.botaoS2}>Enviar mensagem</button>
          <a href="https://www.youtube.com/watch?v=VuY0ABWfjSE" style={{fontSize: "14px"}} className={style.queroNota}>o que é dragon ball?</a>
          </div>

        </section>


      </main>
    </>
  );
}

export default App;
