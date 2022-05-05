import "./Footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Aquí termina{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - Scrollear hacia arriba -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href=""
           target={"blank"}
          >
          <BsInstagram className="social" />
        </a>
        <a href=""
           target={"blank"}
        >
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="#">
          {" "}
          <TiSocialDribbble className="social" />
        </a>

        <a href=""
           target={"blank"}
          >
          <TiSocialYoutube className="social" />
        </a>

        <a href=""
           target={"blank"}>
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
