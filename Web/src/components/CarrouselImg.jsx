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
        background: `url(${imagems[contador]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="rounded-xl mx-auto overflow-hidden"
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: `20rem`,
          padding: "1rem",
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
