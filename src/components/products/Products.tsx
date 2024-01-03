import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { products, services } from ".";
import defaultImg from "../../assets/images/fondo.jpg";
import "./Product.scss";
const Products = () => {
  const [currentProduct, setCurrentProduct] = useState<any>(products.WORKINGUP);
  const [currentInfo, setCurrentInfo] = useState({
    name: "Trabajo en Alturas",
    description:
      "En AC ALTURAS Y CONFINADOS SAS disponemos de un centro de formación y entrenamiento para trabajo en alturas equipado para cubrir las necesidades de formación y entrenamiento, aprobados por el ministerio de trabajo y certificados por bureau veritas colombia para capacitar en los roles de formación: Jefe de Area, trabajador autorizado, coordinador de trabajo en alturas, reentrenamiento para trabajador autorizado y actualización de coordinador, andamiero, rescate vertical, entre otros.",
    src: "",
    extra: "",
  });
  const [currentService, setCurrentService] = useState<string>("");

  const { pathname } = useLocation();
  console.log(pathname.slice(10));
  console.log(currentService, "service");

  useEffect(() => {
    setCurrentProduct(products[pathname.slice(10)]);
    setCurrentInfo(products[pathname.slice(10)]);
    setCurrentService("");
  }, [pathname]);

  useEffect(() => {
    currentService && setCurrentInfo(services[currentService]);
  }, [currentService]);

  console.log(currentProduct);

  return (
    <div className="flex flex-col w-full pl-10 pr-10 ">
      <div className="w-11/12 pb-2 m-auto border-b-4 border-orange">
        <p className="mt-10 ml-20 text-3xl text-gray-500">
          {" "}
          Productos y Servicios{" "}
        </p>
      </div>
      <div
        className={`flex flex-row justify-end ${
          !!currentProduct?.services[0] ? "mt-7" : "mt-40"
        } space-x-5 align-middle`}
      >
        {!!currentProduct?.services[0] &&
          currentProduct.services?.map((e: any) => (
            <div
              key={e}
              onClick={() => setCurrentService(e)}
              className="flex flex-col items-center justify-center mb-4 overflow-hidden align-middle"
            >
              <img
                className="cursor-pointer h-14 w-14"
                src={services[e].src_icon}
                alt={services[e].alt}
              />
              <p className="w-20 text-xs text-center break-words h-14">
                {services[e].name}
              </p>
            </div>
          ))}
      </div>
      <div className="flex flex-col-reverse items-center justify-center align-middle mb-7 md:flex-row space-between space-x-11">
        <img
          src={currentInfo.src || defaultImg}
          className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] md:w-bg-cover shadow-lg product-img"
          alt="alturas y confinados ac"
        />
        <div className="flex flex-col">
          <p className="text-3xl mb-7">{currentInfo?.name || ""}</p>
          <p className="text-xl mb-7">{currentInfo?.description || ""}</p>
          <p>{currentInfo?.extra}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
