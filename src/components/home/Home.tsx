import React from "react";
import './Home.scss'
import HomeCard from "../home-card/HomeCard";
const Home = () => {
  return (
    <div className="home">
      <div className="firstView">
      <div className="justify-start mt-40 ml-2 w-608 md:ml-6">
      <div className="text-xl font-bold text-left md:text-5xl">
        <p className="text-white">
          En <span className="text-orange-400">seguridad</span> no hay atajos; cero riesgos,<br/> cien por ciento <span className="text-orange-400">tranquilidad.</span>
        </p>
      </div>
      <div className="text-lg text-left text-white mt-11">
        <p>Bienvenidos a nuestra compañía; somos una entidad especializada en capacitación de entrenamiento en protección contra caídas para trabajo seguro en alturas, </p>
      </div>
      <div className="justify-start homeFirstViewButton">
        <button>Vamos!</button>
      </div>
    </div>
    </div>
    <div className="secondView">
      <p>¡Soñamos con dar oportunidades que <br/> transforman vidas positivamente!</p>
      <HomeCard/>
    </div>
    </div>
  );
};

export default Home;
