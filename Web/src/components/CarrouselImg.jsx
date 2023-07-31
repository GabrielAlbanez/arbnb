import React, { useState } from "react";
import { GrFormPrevious,GrFormNext } from "react-icons/gr";

export default function CarrouselImg({ img1, img2, img3, id }) {
  const imagems = [img1, img2, img3];
  const [contador, setContador] = useState(0);

  const avançar = () => {
    // Verificar se o contador chegou ao final da array, para voltar ao início
    setContador((prevContador) => (prevContador + 1) % imagems.length);
    /*
      Vamos supor que prevContador é 0 (primeira imagem) e a array imagems possui 3 elementos (0, 1 e 2). Ao chamar avançar, a fórmula (prevContador + 1) % imagems.length resultará em (0 + 1) % 3, que é igual a 1. Portanto, o contador será atualizado para 1, avançando para a segunda imagem na array.
        
        
        */
  };

  const voltar = () => {
    /*
    Suponha que o contador seja 0 (primeira imagem) e a array imagems tenha 3 elementos (0, 1 e 2). Ao chamar voltar, a fórmula (prevContador - 1 + imagems.length) % imagems.length resultará em (0 - 1 + 3) % 3, que é igual a 2. Portanto, o contador será atualizado para 2, retrocedendo para a última imagem na array.
        
        
        */

    setContador(
      (prevContador) => (prevContador - 1 + imagems.length) % imagems.length
    );
  };


  return (
    <div key={id} style={{ width: `300px`, height: `300px`, backgroundImage: `url(${imagems[contador]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="rounded-xl">
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <div onClick={voltar} className="bg-white rounded-full border-[1px]"><GrFormPrevious size={30}/></div>
        <div onClick={avançar} className="bg-white rounded-full border-[1px]"><GrFormNext size={30}/></div>
      </div>
    </div>
  );
}
    