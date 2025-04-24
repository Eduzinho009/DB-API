import './menu.css';
import logo from "../assets/images/logo.png";

export const Menu = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Aqui está o logo dentro da navbar */}
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" style={{ height: "70px" }} />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a href={'/requisicao'} style={{marginTop: "8px"}}>{props.s1}</a>
                        <a className="nav-link" href="#s3">{props.s2}</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}