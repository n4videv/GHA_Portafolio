import "./Proyectos.css";

const Proyectos = () => {
  return (
    <div id="proyects" className="container proyects-container">
      <h1 className="proyect-txt">Proyectos:</h1>
      <div className="proyect proyect-1">
        <div className="proyect-img"></div>
        <div className="proyect-info">
          <h1 className="name">Clon Netflix:</h1>
          <h3 className="position">Fecha</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-proyect">
            <span>Observar</span>
          </a>
        </div>
      </div>

      <div className="proyect proyect-2">
        <div className="proyect-img"></div>
        <div className="proyect-info">
          <h1 className="name">E-commerce:</h1>
          <h3 className="position">Fecha</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-proyect">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="proyect proyect-3">
        <div className="proyect-img"></div>
        <div className="proyect-info">
          <h1 className="name">Restaurant:</h1>
          <h3 className="position">Fecha</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-proyect">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
