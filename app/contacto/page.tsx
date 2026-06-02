import Menu from "../components/Menu";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from "next/dist/client/link";

export default function Contacto() {
  return (
    <div className="bg-zinc-50 font-sans h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-[3fr_1fr] h-full">
        <div className="bg-gray-100 h-full flex flex-col justify-center items-start border-l-50 border-brand-blue shadow-lg">
          <h1 className="text-brand text-3xl sm:text-9xl font-bold p-3 pl-5">GRUPO HILATURA</h1>
          <h2 className="text-brand-blue text-2xl sm:text-7xl font-bold p-3 pl-5 border-b-2 w-full mb-5 pb-5">SIGLO XXI, S.A. DE C.V.</h2>
          <h3 className="text-brand-green text-2xl sm:text-5xl font-bold p-3 pl-5">Contacto</h3>
          <p className="pl-5">SOMOS LA OPCION PERFECTA PARA TI COMPROMETIDOS CON NUESTRA LABOR CUMPLIMOS CON NUESTROS TIEMPOS DE ENTREGA BRINDANDOTE EL MEJOR servicio Y CALIDAD EN LOS PRODUCTOS</p>
          <p className="pl-5 text-4xl font-bold my-5 mb-2 flex"><FaSquarePhone className="mr-3" /> 55 5037 4681</p>
          <p className="pl-5 text-4xl font-bold my-2 flex"><MdEmail className="mr-3" /> <Link href="mailto:contacto@grupohilatura.mx">contacto@grupohilatura.mx</Link></p>
          <p className="pl-5 text-4xl font-bold my-2 flex"><FaSquareInstagram className="mr-3" /> Grupo Hilatura Siglo XXI</p>
        </div>
        <div className="bg-brand-green flex flex-col justify-center items-start h-full p-2">
          <Menu />
        </div>
      </div>
    </div>
  );
}
