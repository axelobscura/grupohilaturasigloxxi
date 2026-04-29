import Menu from "../components/Menu";

export default function QuienesSomos() {
  return (
    <div className="bg-zinc-50 font-sans h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-[3fr_1fr] h-full">
        <div className="bg-gray-100 h-full flex flex-col justify-center items-start border-l-50 border-brand-blue shadow-lg">
          <h1 className="text-brand text-3xl sm:text-9xl font-bold p-3 pl-5">GRUPO HILATURA</h1>
          <h2 className="text-brand-blue text-2xl sm:text-7xl font-bold p-3 pl-5 border-b-2 w-full mb-5 pb-5">SIGLO XXI, S.A. DE C.V.</h2>
          <h3 className="text-brand-green text-2xl sm:text-5xl font-bold p-3 pl-5">Quiénes Somos</h3>
          <p className="text-gray-700 text-2xl p-3 pl-5">En Grupo Hilatura Siglo XXI llevamos más de 30 años dando vida a las marcas a través de la publicidad textil. Creemos que cada prenda es una oportunidad para transmitir identidad, estilo y dejar una huella en quien la ve y la usa.<br/><br/>Nos apasiona ayudarte a posicionar tu marca, a hacerla memorable y a reflejar su esencia en cada detalle, combinando calidad, diseño y funcionalidad.<br/><br/>Trabajamos con todo tipo de empresas: desde farmacéuticas, pastelerías y restaurantes, hasta negocios enfocados en la belleza femenina, entendiendo que cada marca tiene una historia única que merece ser contada.<br/><br/>Más que productos, creamos experiencias. Buscamos que cada cliente no solo reciba calidad, sino que sienta confianza, cercanía y la certeza de haber elegido un aliado que realmente se involucra en el crecimiento de su marca.</p>
        </div>
        <div className="bg-brand-green flex flex-col justify-center items-start h-full p-2">
          <Menu />
        </div>
      </div>
    </div>
  );
}
