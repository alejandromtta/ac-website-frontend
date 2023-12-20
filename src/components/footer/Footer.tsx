import REACT from "react";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import maps from "../../assets/images/maps.png";
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
          href="https://maps.app.goo.gl/9YFvBcUezQzUiYgaA"
        >
          {" "}
          <img
            className="h-7 w-7"
            alt="alturas y confinados ubicacion"
            src={maps}
          />
        </a>
      </div>
      <p className="flex flex-col justify-center mt-4 text-center break-words align-middle ">
        Calle 75 bis Nº 85 – 42 Bogota D.C. - acalturasyconfinadossas@gmail.com{" "}
        <br />
        <span className="text-xs">2023 Alturas y Confinados SAS</span>
      </p>
    </div>
  );
};

export default Footer;
