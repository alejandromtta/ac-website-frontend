import { IHomeCard } from "../home-card";
import schedule from "../../assets/images/agenda-icon.svg";
import Time from "../../assets/images/tiempo-icon.svg";
import Certified from "../../assets/images/insignia-icon.svg";
export * from "./Home";

export const cardsInformation: IHomeCard[] = [
  {
    icon: schedule,
    title: "Agenda tu curso",
    description:
      "Facilita el agendamiento de tu curso para gestionar y tener proridad en los programas requeridos.",
    id: "1",
  },
  {
    icon: Time,
    title: "Tiempo.",
    description:
      "Reserva de acuerdo a tu comidad, contamos con jornadas de capacitacion de acuerdo a tus necesidades.",
    id: "2",
  },
  {
    icon: Certified,
    title: "Certificacion",
    description:
      "Finalizada y aprobada la capacitacion se enviara certificacion en trabajo seguro de alturas.",
    id: "3",
  },
];
