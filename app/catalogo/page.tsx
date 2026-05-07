import Menu from "../components/Menu";
import Image from 'next/image';

const productos = [
  {
    id: 1,
    name: "Chalecos",
    description: "Playeras de alta calidad con impresión personalizada.",
    imageUrl: "/productos/playeras.jpg",
  },
  {
    id: 2,
    name: "Toallas Faciales",
    description: "Sudaderas cómodas y duraderas con diseños únicos.",
    imageUrl: "/productos/sudaderas.jpg",
  },
  {
    id: 3,
    name: "Toallas Pullman",
    description: "Gorras modernas con bordados personalizados.",
    imageUrl: "/productos/gorras.jpg",
  },
  {
    id: 3,
    name: "Toallas de Manos",
    description: "Gorras modernas con bordados personalizados.",
    imageUrl: "/productos/gorras.jpg",
  },
];

export default function Catalogo() {
  return (
    <div className="bg-zinc-50 font-sans h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-[3fr_1fr] h-full">
        <div className="bg-gray-100 h-full flex flex-col justify-center items-start border-l-50 border-brand-blue shadow-lg">
          <h1 className="text-brand text-3xl sm:text-9xl font-bold p-3 pl-5">GRUPO HILATURA</h1>
          <h2 className="text-brand-blue text-2xl sm:text-7xl font-bold p-3 pl-5 border-b-2 w-full mb-5 pb-5">SIGLO XXI, S.A. DE C.V.</h2>
          <h3 className="text-brand-green text-2xl sm:text-5xl font-bold p-3 pl-5">Catálogo de productos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 p-5 w-full">
            {productos.map(({ id, name, description, imageUrl }) => (
              <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={imageUrl} alt={name} width={30} height={30} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-xl font-bold mb-2">{name}</h4>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-brand-green flex flex-col justify-center items-start h-full p-2">
          <Menu />
        </div>
      </div>
    </div>
  );
}
