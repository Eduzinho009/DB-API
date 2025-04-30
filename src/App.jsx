import { useState } from "react";
import style from "./App.module.css";
import { Menu } from "./components/menu";

import logo from "./assets/images/image.png";

function VideoToggle() {
  const [mostrar, setMostrar] = useState(false);

  const alternarVideo = () => {
    setMostrar(!mostrar);
  };

  return (
    <div>
      <button onClick={alternarVideo} className={style.video}>O que é Dragon Ball?</button>
      {mostrar && (
        <div >
          <iframe
          className={style.videolegal}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VuY0ABWfjSE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

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
    const { nome, email, Assunto } = formData;

    const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
  Nome:%20${nome}%0D%0A
  Email:%20${email}%0D%0A
  Assunto:%20${Assunto}%0D%0A`;

    window.open(urlZAPZAP, "_blank");
  };

  return (
    <>
      <Menu s1="API" s2="Quer falar com o Dev" style={{ width: "100%" }} />
      <main>
        <section id="s1" className={style.s1}>
          <img src={logo} alt="principio" className={style.logoS1} />
          <div className={style.butao}>
            <button>
              <a href={"/requisicao"} style={{ fontSize: "14px" }}>
                Acessar a nossa API
              </a>
            </button>
          </div>
        </section>

        <section id="s3" className={style.s2}>
          <h1>Quer falar com o DEV?</h1>
          <h5>Coloque as informações nos blocos de textos e coloque o seu assunto</h5>

          <div className={style.inputS2}>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
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
            <label htmlFor="Assunto">Assunto:</label>
            <br />
            <textarea
              name="Assunto"
              id="Assunto"
              value={formData.Assunto}
              onChange={handleChange}
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>

          <button onClick={handleZap} className={style.botaoS2}>
              Enviar mensagem
            </button>

          <div className={style.botoesS2}>
            <VideoToggle />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
