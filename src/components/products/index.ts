import serviceIcon from "../../assets/images/services.svg";
import productOne from "../../assets/images/producto_1.jpg";
import productTwo from "../../assets/images/producto_2.jpg";
import productThree from "../../assets/images/producto_3.jpg";
export * from "./Products";

export interface IServices {
  [key: string]: any;
}
export const products: any = {
  WORKINGUP: {
    name: "Trabajo en Alturas",
    description:
      "En AC ALTURAS Y CONFINADOS SAS disponemos de un centro de formación y entrenamiento para trabajo en alturas equipado para cubrir las necesidades de formación y entrenamiento, aprobados por el ministerio de trabajo y certificados por bureau veritas colombia para capacitar en los roles de formación: Jefe de Area, trabajador autorizado, coordinador de trabajo en alturas, reentrenamiento para trabajador autorizado y actualización de coordinador, andamiero, rescate vertical, entre otros.",
    services: [
      "CORDINATOR",
      "AUTHORIZED",
      "RETRAINING",
      "AREA",
      "RECORDINATOR",
    ],
    src: "",
    alt: "",
    extra: "",
  },
  DOCUMENTATION: {
    name: "Documentaciòn e implementaciòn SG_SST",
    description:
      "Un sistema ISO: 9001:2015, ISO 14001:2015 y ISO:45001:2018 proporciona el marco para permitirle cumplir con las crecientes expectativas de los clientes en cuanto a la responsabilidad corporativa, así como los requerimientos regulatorios y legales. Implementar el Sistema de Gestión en Seguridad y Salud en el Trabajo, a través del diseño de estrategias para el cumplimiento de los estándares mínimos, con el fin de controlar y reducir los accidentes de trabajo, enfermedades laborales y ausentismo que puedan afectar el desempeño de los colaboradores, contratistas, clientes entre otros. Dichas actividades de vigilancia se realizarán en visitas de seguimiento mensuales, semestrales o anuales (de acuerdo a como lo requiera el cliente) .",
    services: [],
    src: productOne,
    alt: "",
    extra: "",
  },
  AUDIT: {
    name: "Auditoria de Seguimiento",
    description:
      "El desarrollo de auditorías de Sistemas Integrados de Gestión involucra la planificación, ejecución, verificación y seguimiento de la aplicación de las normas ISO.De acuerdo con los requisitos de la norma NTC NTC-ISO/IEC 17067:2013 (La norma definida por la Organización Internacional de Normalización (ISO) permite mejorar la eficacia de los procesos de las empresas y establecer un sistema de gestión integral (ISO 9001, ISO 14001, ISO 45001) reconocido a nivel mundial que se aplica a los productos y servicios) para el sistema 6 de certificación (procesos y Servicios) se hace necesaria la realización de actividades de vigilancia con el fin de verificar que el producto continúa conforme de acuerdo con las especificaciones definidas en el referente normativo establecido. Dichas actividades de vigilancia se realizarán en visitas de seguimiento mensuales, semestrales o anuales (de acuerdo a como lo requiera el cliente o contratante) .",
    services: [],
    src: productTwo,
    alt: "",
    extra: "",
  },
  VERTICAL: {
    name: "Rescate vertical",
    description:
      "Son los procedimientos técnicos tendientes a lograr la recuperación de una persona que ha quedado atrapada, lesionada, accidentada en lugares altos, implementando sistemas adecuados que reúnan todas las condiciones de seguridad necesarias para garantizar el éxito de la operación.",
    services: [],
    src: productThree,
    alt: "",
    extra: "",
  },
  SCAFFOLDING: {
    name: "Armador de andamios",
    description:
      "Armar, montar y desmontar andamios y plataformas apoyadas. Arma, monta y desmonta plataformas de madera de hasta 2m de altura y metálicas modulares de ensamble inmóviles) con diferentes tipos de unión de rápido, apoyados en armazones (móviles e piezas, según la documentación técnica e indicaciones recibidas por el responsable a cargo, aplicando en todos los casos criterios de calidad, normas específicas y de seguridad e higiene.      ",
    services: [],
    src: "",
    alt: "",
    extra: "",
  },
  SECURITY: {
    name: "Equipos de Seguridad",
    description:
      "Nos destacamos en distribuir equipos de protección contra caídas claves en la industria que permiten diseñados para prevenir o detener las caídas libres, compuestas por un dispositivo de prensión del cuerpo que se conecta a un punto de anclaje mediante un sistema de conexión.",
    services: ["SALE", "INSPECTION"],
    src: "",
    alt: "",
    extra: "",
  },
};

export const services: IServices = {
  CORDINATOR: {
    name: "Coordinador \n de trabajo en alturas",
    description: `Descripcion: Este nivel está dirigido para el personal profesional, tecnico, tecnologo o persona capacitada que dentro del perfil de funciones se encuentre garantizar la seguridad de los trabajadores que se exponen a riesgos de caída, idenfificacion de peligros en el sitio en donde se realiza el trabajo, control de riesgos de trabajo en alturas en los sistemas y protocolos que respaldan la seguridad y el bienestar del mismo.`,
    alt: "",
    src_icon: serviceIcon,
    src: "",
    extra: "Duración: 80 Horas.",
  },
  AUTHORIZED: {
    name: "Trabajador Autorizado",
    description:
      "Descripcion: Este nivel va dirigo para todo aquel trabajador que realice labores en altura con riesgo de caída mayor a 2.0 metros, con relacion al plano de los pies del trabajador al plano horizontal inferior mas cercano a èl, que realice desplazamientos horizontales y/o verticales por las estructuras de acuerdo con la necesidad.",
    alt: "",
    src_icon: serviceIcon,
    src: "",
    extra: "Duración: 32 Horas",
  },
  RETRAINING: {
    name: "Re entrenamiento",
    description:
      "El reentrenamiento es un proceso de formacion complementaria con el proposito de reforzar el conocimiento,  habilidades y las destrezas en el desarrollo de trabajo en alturas, es un requisito del empleador para mantener activo a los trabajadores que se desempeñan realizando actividades de alto riesgo.",
    alt: "",
    src_icon: serviceIcon,
    src: "",
    extra: "Duración: 8 Horas",
  },
  AREA: {
    name: "Jefe de area",
    description:
      "Persona que toma decisiones administrativas en relacion la aplicacion de la resolucion en empresas en las que se haya identificado como prioritario el riesgo de caida por trabajo en alturas.",
    alt: "",
    src_icon: serviceIcon,
    src: "",
    extra: "Duración: 8 Horas",
  },
  RECORDINATOR: {
    name: "Actualizacion de coordinador",
    description:
      "Personal encargado de controlar los riesgos en alturas en los lugares de trabajo donde se realiza trabajo en alturas y esta en capacidad para aplicar medidas  correctivas inmediatas para controlar los riesgos asociados a dichos peligros que deben actualizar sus conocimientos en la norma de trabajo, lo deben realizar el trabajador que hayan realizado el curso de coordinador con resolucion anterior.",
    alt: "",
    src_icon: serviceIcon,
    src: "",
    extra: " Duración: 16 Horas",
  },
  SALE: {
    name: "Venta de equipos",
    description:
      "Venta de equipos de seguridad de acuerdo con la normatividad vigente, equipos como bloqueadores, eslingas, tie off, estribos, poleas, mosquetones, cuerdas, arneses y descendedores son solo algunos de los elementos para realizar trabajos en alturas.    ",
    alt: "",
    src_icon: serviceIcon,
    src: "",
    extra: "",
  },
  INSPECTION: {
    name: "inspecciòn de equipos ",
    description:
      "Revisamos e inspeccionamos sus equipos de protección contra caídas de acuerdo a la resolución 4272 de 2021",
    alt: "",
    src_icon: serviceIcon,
    src: "",
    extra: "",
  },
};
