import React, { useEffect, useState } from "react";
import CarrouselImg from "../components/CarrouselImg";
import { AiOutlineUndo } from "react-icons/ai";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    setTimeout(async () => {
      try {
        const response = await fetch("http://localhost:3333/home", {
          cache: "default",
        });
        if (!response.ok) {
          throw new Error("Erro ao obter os dados.");
        }
        const responseData = await response.json();
        const homes = responseData.casas; // Acessando a propriedade "casas" da resposta
        setData(homes);
        console.log(homes);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro na requisição:", error);
        setIsLoading(false);
      }
    }, [2000]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-3xl p-10  w-screen  ">
      home
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
            {data.map((casas) => (
              <div
                key={casas.id}
                className="shadow-2xl aspect-square rounded-md bg-center "
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
                <div>
                  <div>local</div>
                  <div>{casas.preco}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
