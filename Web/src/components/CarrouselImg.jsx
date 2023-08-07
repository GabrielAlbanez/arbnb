import React, { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function CarrouselImg({ img1, img2, img3, id }) {
  const imagems = [img1, img2, img3];
  const [contador, setContador] = useState(0);

  const avançar = () => {
    setContador((prevContador) => (prevContador + 1) % imagems.length);
  };

  const voltar = () => {
    setContador(
      (prevContador) => (prevContador - 1 + imagems.length) % imagems.length
    );
  };

  return (
    <div
      style={{
        width: `20rem`,
        maxWidth: `30rem`,
        height: `20rem`,
        position: "relative",
        overflow: "hidden", // Adiciona o overflow para evitar que os botões fiquem fora do container
      }}
      className="rounded-xl mx-auto"
    >
      <img
        src={imagems[contador]}
        alt="Imagem"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: `20rem`,
          padding: "1rem",
          position: "relative", // Adiciona o posicionamento relativo para manter os botões no fluxo normal
        }}
      >
        <div onClick={voltar} className="bg-white rounded-full p-2">
          <GrFormPrevious size={30} />
        </div>
        <div onClick={avançar} className="bg-white rounded-full p-2">
          <GrFormNext size={30} />
        </div>
      </div>
    </div>
  );
}
