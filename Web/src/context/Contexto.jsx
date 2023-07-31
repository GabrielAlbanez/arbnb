import { createContext, useState , useContext} from "react";

const Tema = createContext();

export default function TemaProvider({ children }) {
  const [tema, setTema] = useState(null);
  return (
    <Tema.Provider value={{ tema, setTema }}>{children}</Tema.Provider>
  );


}

  export function useTema(){
    return useContext(Tema)
  }
