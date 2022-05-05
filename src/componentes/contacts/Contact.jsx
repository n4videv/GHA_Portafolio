import "./Contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contáctame</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/channel/UCG3yrlp0Z-_35aBYfHgb6Xg"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>_canal Youtube_</span>
          </h2>
        </a>

        {/* https://crear.wa.link/ */}
        <a
          href="https://wa.link/9n82k2"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+51 910139973</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/_germanhuaytalla/" 
           className="contact instagram"
           target={"blank"}
        >
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>_Perfil_</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
