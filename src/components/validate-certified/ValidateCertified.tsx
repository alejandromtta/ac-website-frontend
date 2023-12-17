import React, { useState } from 'react'
import CertifiedTable from '../certified-table/CertifiedTable'
import { Button, Form, FormControl } from 'react-bootstrap';
import './ValidateCertified.scss'
import { dataFake } from '../certified-table';

export default function ValidateCertified() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any>([])

  const onChangeData = (value: any):any => {
    setData(dataFake?.filter((e:any):any => e?.document_number?.toString() === value) || []);
  };
console.log(data)
  return (
    <div className="validateCertified">
       <p className="mt-10 ml-20 text-3xl text-gray-500"> Validar Certificado</p>
            <Form
          className="flex pl-10 pr-10 mt-10"
          onSubmit={e => {
          e.preventDefault();
          onChangeData(search)
        }}>
          <FormControl
            type="number"
            placeholder="Buscar por numero de documento..."
            className="me-2"
            aria-label="Search"
            onChange={(e) => {
              setSearch(e.target.value);
          }}/>
          <Button className="text-white bg-primary" onClick={e=> search && onChangeData(search)} variant="dark">Search</Button>
        </Form>
      <div className="flex flex-col mt-10 ml-10 md:ml-20">


 <p className="font-bold">Nombre: {data && data[0]?.name}</p>
 <p className="font-bold">Numero de documento: {data && data[0]?.document_number}</p>
 </div>
 <CertifiedTable data={data}/>
 </div>

  )
}
