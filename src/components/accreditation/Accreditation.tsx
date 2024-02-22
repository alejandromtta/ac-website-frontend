import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Accreditation.module.scss";
const Accreditation = () => {
  const [doc, setDoc] = useState<string>("");

  return (
    <div className="accreditation">
      <div className="w-11/12 pb-2 m-auto border-b-4 border-orange">
        <p className="mt-10 ml-20 text-3xl text-gray-500">Acreditacion</p>
      </div>
      <div className="flex flex-col justify-center text-center align-middle">
        <p className="mt-5 ml-10 mr-10 md:ml-20 md:mr-20">
          Pensando en el bienestar de nuestros trabajadores capacitado y con el
          fin de prestar un mejor servicio ponemos a su disposición nuestros
          documentos legales que nos acreditan el cumplimiento por parte de la
          compañía en las normas NTC 6072, ministerio de trabajo como ente
          regulador de los cursos de espacios confinados y alturas, resolución
          4272 de 2021, licencia de seguridad y salud en el trabajo emitida por
          la secretaria de salud.
        </p>
        <div className="flex flex-col justify-center m-auto mt-5 mb-8 space-y-6 align-middle md:space-y-0 md:space-x-6 md:flex-row">
          <Button
            onClick={(e) => setDoc("Norm")}
            className="w-40 h-10 bg-primary"
            variant="primary"
          >
            Licencia SST
          </Button>
          <Button
            onClick={(e) => setDoc("Resolution")}
            className="w-40 h-10 bg-primary"
            variant="primary"
          >
            Resolución
          </Button>
          <Button
            onClick={(e) => setDoc("Tec")}
            className="w-40 h-10 bg-primary"
            variant="primary"
          >
            Norma Técnica
          </Button>
          <Button
            onClick={(e) => setDoc("Quality")}
            className="w-40 h-10 bg-primary"
            variant="primary"
          >
            Certf. Calidad
          </Button>
          <Button
            onClick={(e) => setDoc("Min")}
            disabled
            className="w-40 h-10 bg-primary"
            variant="primary"
          >
            Ministerio
          </Button>
        </div>
        <div className="flex flex-col justify-center mt-10 mb-20 align-middle ">
          {doc === "Norm" ? (
            <>
              {" "}
              <Button
                className="w-32 h-10 ml-4 bg-primary"
                variant="primary"
                target="_blank"
                href="https://drive.google.com/file/d/1TaMlE0Jwh44ljwqa8slDfR5QSzajW_Cy/view?usp=drive_link"
              >
                Descargar
              </Button>
              <iframe
                className="h-96 md:h-900 accreditation"
                title="Licencia Ac Alturas y Confinados"
                src="https://es.scribd.com/embeds/703811965/content?start_page=1&view_mode=scroll&access_key=key-DMhUZL77RgyX1GaLO1I7"
                scrolling="no"
              />
            </>
          ) : doc === "Resolution" ? (
            <>
              {" "}
              <Button
                className="w-32 h-10 ml-4 bg-primary"
                variant="primary"
                target="_blank"
                href="https://drive.google.com/file/d/1Ipb6VP0qdNeD7UCr6LaACurSmmiEOEHh/view?usp=sharing"
              >
                Descargar
              </Button>
              <iframe
                className="h-96 md:h-900 accreditation"
                title="DOC-20231127-WA0037."
                src="https://es.scribd.com/embeds/693894416/content?start_page=1&view_mode=scroll&access_key=key-3ZjwaDdRgurUyfR14ZYd"
                scrolling="no"
              />
            </>
          ) : doc === "Quality" ? (
            <>
              {" "}
              <Button
                className="w-32 h-10 ml-4 bg-primary"
                variant="primary"
                target="_blank"
                href="https://drive.google.com/file/d/1LBpW-r-uNoly_EiXjq89xMEx1ZOTPYez/view?usp=sharing"
              >
                Descargar
              </Button>
              <iframe
                className="h-96 md:h-900 accreditation"
                title="Ac Alturas y Confinados Sociedad Por Acciones Simplificada"
                src="https://es.scribd.com/embeds/703813791/content?start_page=1&view_mode=scroll&access_key=key-vv4aSDdDeNbM6Up0Q1oP"
                scrolling="no"
              />
            </>
          ) : doc === "Min" ? (
            <>
              {" "}
              <Button
                className="w-32 h-10 ml-4 bg-primary"
                variant="primary"
                target="_blank"
                href="https://drive.google.com/file/d/193cYApVb1BHhjW4np7pbs9VOXUPWXzC3/view?usp=sharing"
              >
                Descargar
              </Button>
              <iframe
                className="w-32 h-10 ml-4 bg-primary"
                title="72.Oficio de Ministerio de Trabajo"
                src="https://es.scribd.com/embeds/707495888/content?start_page=1&view_mode=scroll&access_key=key-Llj1a8YGA9Eu2x1qwXLN"
                scrolling="no"
                id="doc_30856"
              />
            </>
          ) : (
            <>
              {" "}
              <Button
                className="w-32 h-10 ml-4 bg-primary"
                variant="primary"
                target="_blank"
                href="https://drive.google.com/file/d/1lEdAOGdwKsD0iRcxm1d8UFyfr8BZ4jQ7/view?usp=sharing"
              >
                Descargar
              </Button>
              <iframe
                className="h-96 md:h-900"
                title="NTC6072.Doc Centros de Formación y Entrenamiento en Proteccion Contra Caidas"
                src="https://es.scribd.com/embeds/693184096/content?start_page=1&view_mode=scroll&access_key=key-8sj9ok5GjPTfI6DYLs6z"
                scrolling="no"
                id="doc_65826"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
