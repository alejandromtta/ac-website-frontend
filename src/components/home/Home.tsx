import "./Home.scss";
import HomeCard from "../home-card/HomeCard";
import { IHomeCard } from "../home-card";
import { cardsInformation } from ".";

const Home = () => {
  return (
    <div className="home">
      <div className="firstView">
        <div className="justify-start w-full mt-40 ml-2 md:w-608 md:ml-6">
          <div className="text-2xl text-left md:text-5xl">
            <p className="text-white">
              En <span className="text-orange-400">seguridad</span> no hay
              atajos; cero riesgos,
              <br /> cien por ciento{" "}
              <span className="text-orange-400">tranquilidad.</span>
            </p>
          </div>
          <div className="text-lg text-left text-white mt-11">
            <p>
            AC ALTURAS Y CONFINADOS, los recibe con las manos abiertas, estamos para acompañarte y brindarte mayor asesoría en el proceso de capacitación para trabajo seguro en alturas.{" "}
            </p>
          </div>
          <div className="justify-start homeFirstViewButton">
          <a
          rel="noreferrer"
          target="_blank"
          href="https://maps.app.goo.gl/9YFvBcUezQzUiYgaA"
        > <button className="flex flex-col justify-center m-auto mt-3 text-center align-middle">Inscribete</button> </a>
          </div>
        </div>
      </div>
      <div className="thirdView">
        <p className="thirdView__title">Bienvenido!</p>
        <div className="thirdView__descriptionContainer">
          <p className="thirdView__description">
          Somos una entidad especializada en formación y entrenamiento en protección contra caídas para trabajo seguro en alturas, dedicados a todas actividades relacionadas con el Sistema de Gestión de la Seguridad y Salud en el Trabajo.
          </p>
        </div>
      </div>
      <div className="secondView">
        <p className="secondView__title">
          ¡Soñamos con dar oportunidades que <br /> transforman vidas
          positivamente!
        </p>
        <div className="flex flex-col justify-center mt-40 ml-5 space-y-10 align-middle md:space-y-0 md:mr-0 md:space-x-10 md:flex-row">
          {cardsInformation.map(
            ({ icon, title, description, id }: IHomeCard) => (
              <HomeCard
                icon={icon}
                title={title}
                description={description}
                id={id}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
