import "./Tecnology.css";

const Qualifications = () => {
  return (
    <>
      <span className="quali-text">Tecnologías:</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>html</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div className="content bootstrap"></div>
          <h1>bootstrap</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>react</h1>
        </div>
        <div className="qualification">
          <div className="content php"></div>
          <h1>php</h1>
        </div>
        <div className="qualification">
          <div className="content sass"></div>
          <h1>sass</h1>
        </div>
        <div className="qualification">
          <div className="content mysql"></div>
          <h1>mysql</h1>
        </div>
      </div>
    </>
  );
};

export default Qualifications;
