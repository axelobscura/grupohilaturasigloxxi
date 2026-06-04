import Image from "next/image";

export default function Logotipo() {
  return (
    <div className="fixed top-0 right-0 bg-white" >
      <Image
        src="/logotipo.svg"
        alt="Logotipo de Grupo Hilatura Siglo XXI"
        width={200}
        height={100}
        className="object-contain h-auto w-auto"
      />
    </div>
  );
}