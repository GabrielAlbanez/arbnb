import React, { useEffect, useState } from "react";
import CarrouselImg from "../components/CarrouselImg";
import { AiOutlineUndo } from "react-icons/ai";
import { IoMdPin } from "react-icons/io";
import FilterBar from "../components/FilterBar";
import { useTema } from "../context/Contexto";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {paisSelecioanaod,setPaisSelecioanado} = useTema()

  const fetchData = () => {
    setTimeout(async () => {
      try {
        const response = await fetch("http://localhost:7903/home", {
          cache: "default",
        });
        if (!response.ok) {
          throw new Error("Erro ao obter os dados.");
        }
        const responseData = await response.json();
        const homes = responseData.casas; // Acessando a propriedade "casas" da resposta
        setData(homes);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro na requisição:", error);
        setIsLoading(false);
      }
    }, [2000]);
  };

   const dataFiltrado = data.filter((casas)=> casas.pais === paisSelecioanaod)

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data)
  console.log(paisSelecioanaod)

  return (
    <div className="text-3xl p-10  w-screen  ">
      <FilterBar/>
      <div>
        {isLoading ? (
          <div className="flex items-center justify-center  flex-col h-[70vh] gap-2" >
            <h1>Loading</h1>
            <button className="pl-4">
              <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                <AiOutlineUndo size={20}/>
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex flex-row gap-10 pt-10 flex-wrap items-center justify-center w-[100%]">

            {paisSelecioanaod === null ? (
              <>
               {data.map((casas) => (
              <div
                key={casas.id}
                className="shadow-2xl aspect-square rounded-xl bg-center  "
              >
                {/* <div>
                <img src={casas.imagens.img1} alt="" height={400} width={400} className="rounded-md" />
              </div> */}
                <div>
                  <CarrouselImg
                    id={casas.id}
                    img1={casas.imagens.img1}
                    img2={casas.imagens.img2}
                    img3={casas.imagens.img3}
                  />
                </div>
                <div className="flex flex-col gap-1 p-2">
                  <div className="text-lg"><p>${casas.preco} por noite</p></div>
                   <div className="text-lg flex flex-row items-center"><IoMdPin size={20}/>{casas.local}</div>
                  <div className="text-lg">{casas.pais}</div>
                </div>
              </div>
            ))}
              </>
            ) : 
            <>
            
            {dataFiltrado.map((casas) => (
              <div
                key={casas.id}
                className="shadow-2xl aspect-square rounded-xl bg-center "
              >
                {/* <div>
                <img src={casas.imagens.img1} alt="" height={400} width={400} className="rounded-md" />
              </div> */}
                <div>
                  <CarrouselImg
                    id={casas.id}
                    img1={casas.imagens.img1}
                    img2={casas.imagens.img2}
                    img3={casas.imagens.img3}
                  />
                </div>
                <div className="flex flex-col gap-1 p-2">
                  <div className="text-lg"><p>${casas.preco} por noite</p></div>
                   <div className="text-lg flex flex-row items-center"><IoMdPin size={20}/>{casas.local}</div>
                  <div className="text-lg">{casas.pais}</div>
                </div>
              </div>
            ))}
            </>
            
            }
            
           
          </div>
        )}
      </div>
    </div>
  );
}
