"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/catalogo", label: "Catálogo de productos" },
  { href: "/catalogo.pdf", label: "Otros productos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <ul className="uppercase w-full">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              className={`text-white text-2xl p-3 pl-5 border w-full block my-1 ${
                isActive ? "bg-gray-900" : "hover:bg-slate-900"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}