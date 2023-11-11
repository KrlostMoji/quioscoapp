import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";

const Sidebar = () => {

  const {categorias} = useQuiosco()
  console.log(categorias);
  return (
    <>
      <Image 
        width={300} 
        height={100} 
        src='/assets/img/logo.svg' 
        alt='logotipo del quiosco café'
      />
      <nav className='mt-10'>
        {categorias.map(categoria => (
          <Categoria
            key={categoria.id}
            categoria={categoria}
          >
          </Categoria>
        ))}
      </nav>
    </>
  )
};

export default Sidebar;