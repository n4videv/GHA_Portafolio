import "./Button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Leer más
      </a>
      <a href="#contact" className="btn sec">
        Ponte en contacto
      </a>
    </div>
  );
}

export default Buttons;
