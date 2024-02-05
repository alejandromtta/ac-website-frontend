import REACT from "react";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import maps from "../../assets/images/maps.png";
import whatsapp from "../../assets/images/whatsapp.svg";
import "./Footer.scss";
const Footer: REACT.FC = () => {
  return (
    <div className="footer">
      <div className="flex justify-center gap-4 mt-8 align-middle cursor-pointer">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61553915856935"
        >
          {" "}
          <img
            className="h-7 w-7"
            alt="alturas y confinados facebook"
            src={facebook}
          />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/acalturasyconfinados/?hl=es"
        >
          {" "}
          <img
            className="h-7 w-7"
            alt="alturas y confinados instagram"
            src={instagram}
          />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://maps.app.goo.gl/hdMLDU8CQ38Z6yAi9"
        >
          {" "}
          <img
            className="h-7 w-7"
            alt="alturas y confinados ubicacion"
            src={maps}
          />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="Https://wa.me/573134838642"
        >
          {" "}
          <img
            className="h-7 w-7"
            alt="alturas y confinados ubicacion"
            src={whatsapp}
          />
        </a>
      </div>
      <p className="flex flex-col justify-center mt-4 text-center break-words align-middle ">
        Calle 75 bis Nº 85 – 42 Bogota D.C. - acalturasyconfinadossas@gmail.com{" "}
        <br />
        +57 3134838642
        <span className="text-xs">2023 Alturas y Confinados SAS</span>
      </p>
    </div>
  );
};

export default Footer;
