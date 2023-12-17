import { useMemo } from "react";
export * from './CertifiedTable';



export const  useColumns = ():any => {
 const columns = useMemo(
   () => [
     {
       Header: "Id",
       accessor: "id"
     },
     {
       Header: "Nivel",
       accessor: "level"
     },
     {
       Header: "Numero de documento",
       accessor: "document_number"
     },
     {
       Header: "Empleador",
       accessor: "empleator"
     }
   ],
   []
 );

 return columns;
}

export const dataFake:any = [
  {
    id: "044",
    level: "A3",
    document_number: 12042564,
    empleator: "Redeban",
    name: "Antonio"
  },
  {
    id: "045",
    level: "A2",
    document_number: 1000575708,
    empleator: "Redeban",
    name: "Andres"
  },
  {
    id: "0451",
    level: "A3",
    document_number: 1000575708,
    empleator: "Redeban",
    name: "Andres"
  },
  {
    id: "046",
    level: "A3",
    document_number: 100057454,
    empleator: "Redeban",
    name: "Rafael"
  },
]
