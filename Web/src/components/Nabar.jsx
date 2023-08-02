import logo from "../assets/imgs/Airbnb-Logo-768x279.png";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import LinkPersonalizado from "./Link";
import { useLocation } from "react-router-dom";

import { FaUser } from "react-icons/fa";
export default function Nabar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMeu = () => {
    setIsOpen((valor) => !valor);
  };
  const nomeRota = useLocation();
  console.log(nomeRota.pathname);
  return (
    <div>
      <div className="w-screen border-b-[1px] h-[9vh] flex items-center justify-between p-8">
        <LinkPersonalizado caminho={"/"}>
          {" "}
          <img src={logo} alt="" height={130} width={130} />{" "}
        </LinkPersonalizado>

        <div className="hidden sm:block">
          <div
            className=" flex items-center justify-between w-[35vh] 
      h-[4vh] px-4 shadow-md transition hover:shadow-xl border-[1px] rounded-full"
          >
            <div className="flex flex-row items-center justify-between w-[100%]">
              <p className="">comece sua busca</p>
              <div className="rounded-full flex items-center">
                <CiSearch size={23} className="bg-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-row gap-10 items-center">
            <div
              onClick={openMeu}
              className="rounded-full border-[1px] relative flex justify-center cursor-pointer transition shadow-md hover:shadow-xl items-center h-[5vh] w-[7vh]"
            >
              <IoIosMenu size={25} />
              <FaUser size={25} />
            </div>
            {isOpen && (
              <>
                <div className="bg-white  w-[150px] left-[88%]  absolute top-20 mr-10 flex flex-col items-center gap-3 shadow-lg transition hover:shadow-2xl rounded-md py-3 ">
                  <div className=" w-[100%] flex items-center justify-center cursor-pointer ">
                    Login
                  </div>
                  <div className=" w-[100%] flex items-center justify-center cursor-pointer ">
                    Registro
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
