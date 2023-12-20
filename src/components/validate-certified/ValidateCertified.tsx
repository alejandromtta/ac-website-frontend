import React, { useState } from "react";
import CertifiedTable from "../certified-table/CertifiedTable";
import { Button, Form, FormControl } from "react-bootstrap";
import "./ValidateCertified.scss";
import { dataFake } from "../certified-table";

export default function ValidateCertified() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any>([]);
  const [isSearch, isSetSearch] = useState<any>(false);
  const onChangeData = (value: any): any => {
    setData(
      dataFake?.filter(
        (e: any): any => e?.document_number?.toString() === value
      ) || []
    );
  };
 
  return (
    <div className="validateCertified">
      <div className="w-11/12 pb-2 m-auto border-b-4 border-orange">
      <p className="mt-10 ml-20 text-3xl text-gray-500"> Validar Certificado</p>
      </div>
      <div className="flex justify-center mt-5 mb-4 text-center align-middle">
        <p>
          {" "}
          Desde esta pantalla podrás verificar tus certificados mediante tu numero de documento, digitando lo en el buscador, donde veras la fecha, id, empresa y nivel.
        </p>
      </div>
      <Form
        className="flex pl-10 pr-10 mt-10"
        onSubmit={(e) => {
          e.preventDefault();
          search && onChangeData(search);
          isSetSearch(true);
        }}
      >
        <FormControl
          type="number"
          placeholder="Buscar por numero de documento..."
          className="me-2"
          aria-label="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Button
          className="text-white bg-primary"
          onClick={(e) => {
            search && onChangeData(search);
            isSetSearch(true);
          }}
          variant="dark"
        >
          Search
        </Button>
      </Form>
      {!!data.length && (
        <>
          {" "}
          <div className="flex flex-col mt-10 ml-10 md:ml-20">
            <p className="font-bold">Nombre: {data && data[0]?.name}</p>
            <p className="font-bold">
              Numero de documento: {data && data[0]?.document_number}
            </p>
          </div>
          <CertifiedTable data={data} />
        </>
      )}
      {isSearch && !data.length && (
        <p className="mt-4 text-2xl text-center text-bold">
          {" "}
          No se han encontrado registros para este documento.{" "}
        </p>
      )}
    </div>
  );
}
