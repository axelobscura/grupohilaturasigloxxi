import Menu from "../components/Menu";
import Image from 'next/image';

const productos = [
  {
    id: 1,
    name: "Chalecos",
    description: "",
    imageUrl: "/productos/chalecos.jpg",
  },
  {
    id: 2,
    name: "Toallas Faciales",
    description: "TOALLA FACIAL CON CENEFA,  Y SIN CENEFA. \nMEDIDA DE 30 X 30 cm CON UN PESO DE 50 GR.  MANEJAMOS DIFERENTES COLORES:",
    imageUrl: "/productos/toallas.jpg",
  },
  {
    id: 3,
    name: "Toallas Pullman",
    description: "Toalla pullman en color blanco con una cenefa y medida de 40 x 75 cm, con un peso de 140 gr. ",
    imageUrl: "/productos/gorras.jpg",
  },
  {
    id: 4,
    name: "Toallas de Manos",
    description: "Toallas de manos con cenefa,  medidas de 60 x 1.10 cm y peso de 300 gr.",
    imageUrl: "/productos/gorras.jpg",
  },
  {
    id: 5,
    name: "Toallas de Medio Baño",
    description: "Toalla sin cenefa con medida de 70 x 1.30 cm con peso de 450 gr.",
    imageUrl: "/productos/gorras.jpg",
  },
  {
    id: 6,
    name: "Toallas de Baño",
    description: "Toalla de baño con cenefa de 80 x 1.50 cm, con peso de 700 gr.",
    imageUrl: "/productos/gorras.jpg",
  },
  {
    id: 7,
    name: "Toallas de Alberca",
    description: "Toalla de alberca con medida 90 x 1.70 cm peso de 800 gr. ",
    imageUrl: "/productos/gorras.jpg",
  },
  {
    id: 8,
    name: "Salida de Baño",
    description: "Salida de baño para dama en diferentes colores",
    imageUrl: "/productos/gorras.jpg",
  },
  {
    id: 9,
    name: "Batas de Baño",
    description: "Salida de baño para dama en diferentes colores",
    imageUrl: "/productos/gorras.jpg",
  },
  {
    id: 10,
    name: "Playera Polo, Cuello V, cuello redondo",
    description: "Salida de baño para dama en diferentes colores",
    imageUrl: "/productos/gorras.jpg",
  },
  {
    id: 11,
    name: "Camisas y Blusas para uniformes",
    description: "Salida de baño para dama en diferentes colores",
    imageUrl: "/productos/gorras.jpg",
  },
  {
    id: 12,
    name: "Chamarras",
    description: "Salida de baño para dama en diferentes colores",
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
                <Image src={imageUrl} alt={name} width={500} height={500} className="w-full h-48 object-cover" />
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
