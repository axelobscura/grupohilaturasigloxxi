import Menu from "../components/Menu";

export default function Contacto() {
  return (
    <div className="bg-zinc-50 font-sans h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-[3fr_1fr] h-full">
        <div className="bg-gray-100 h-full flex flex-col justify-center items-start border-l-50 border-brand-blue shadow-lg">
          <h1 className="text-brand text-3xl sm:text-9xl font-bold p-3 pl-5">GRUPO HILATURA</h1>
          <h2 className="text-brand-blue text-2xl sm:text-7xl font-bold p-3 pl-5 border-b-2 w-full mb-5 pb-5">SIGLO XXI, S.A. DE C.V.</h2>
          <h3 className="text-brand-green text-2xl sm:text-5xl font-bold p-3 pl-5">Contacto</h3>
        </div>
        <div className="bg-brand-green flex flex-col justify-center items-start h-full p-2">
          <Menu />
        </div>
      </div>
    </div>
  );
}
