import React, { useState } from "react";
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
        <p className="mt-5 ml-20 mr-20">
          Pensando en el bienestar de nuestros trabajadores capacitados y con el
          fin de prestar un mejor servicio ponemos a su disposicion nuesros
          documentos legales que nos acreditan el cumplimiento por parte de la
          compañia en las normas NTC 6072, ministerio de trabajo como ente
          reguklar de los cursos de espacios confinados y alturas, resolucion
          4272 de 2021, licencia de seguridad y salud en el trabajo emitida por
          la secretaria de salud.
        </p>
        <div className="flex flex-col justify-center m-auto mt-5 mb-8 space-y-6 align-middle md:space-y-0 md:space-x-6 md:flex-row">
          <Button
            onClick={(e) => setDoc("Norm")}
            className="w-40 h-10 bg-primary"
            variant="primary"
          >
            Norma Tecnica
          </Button>
          <Button
            onClick={(e) => setDoc("Resolution")}
            className="w-40 h-10 bg-primary"
            variant="primary"
          >
            Resolucion
          </Button>
          <Button disabled className="w-40 h-10 bg-primary" variant="primary">
            Acreditacion
          </Button>
        </div>
        <div className="flex flex-col justify-center mb-20 ml-20 mr-20 align-middle ">
          {doc === "Norm" ? (
            <>
              {" "}
              <p className="scribd">
                Centros de Formación y Entrenamiento en Proteccion Contra Caidas
              </p>
              <iframe
                className="h-96 md:h-900"
                title="NTC6072.Doc Centros de Formación y Entrenamiento en Proteccion Contra Caidas"
                src="https://es.scribd.com/embeds/693184096/content?start_page=1&view_mode=scroll&access_key=key-8sj9ok5GjPTfI6DYLs6z"
                scrolling="no"
                id="doc_65826"
              />
            </>
          ) : (
            <>
              <p className="mt-10 ">
                direccionSST-43047-10-20231117095651 by Alejandro Motta on
                Scribd
              </p>
              <iframe 
                className="h-96 md:h-900 accreditation"
                title="direccionSST-43047-10-20231117095651"
                src="https://es.scribd.com/embeds/693191153/content?start_page=1&view_mode=scroll&access_key=key-80lSBRx8cr0MhhJxgf82"
                scrolling="no"
                id="doc_20776"
              ></iframe>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
