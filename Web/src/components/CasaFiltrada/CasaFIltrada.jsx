import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineUndo } from "react-icons/ai";
import { IoMdPin } from "react-icons/io";

export default function CasaFIltrada() {
  const { id } = useParams();

  const [dataById, setDataById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getHomeByid = async () => {
    try {
      const url = `http://localhost:3333/home/${id}`;
      const response = await fetch(url);
      const responseData = await response.json();
      setDataById(responseData);
      setIsLoading(false);
    } catch (error) {
      console.log("erro ao obter dados");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getHomeByid();
  }, []);

  return (
    <div>
      {isLoading ? (
        <>
          <div className="flex items-center justify-center  flex-col h-[70vh] gap-2">
            <h1>Loading</h1>
            <button className="pl-4">
              <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                <AiOutlineUndo size={20} />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <>
          <h1>Casa Filtrada</h1>
          <ul>
            <li key={dataById.id}>{dataById.local}</li>
          </ul>
        </>
      )}
    </div>
  );
}
