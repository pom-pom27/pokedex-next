"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavbar {}

const Navbar = ({}: INavbar) => {
  const pathname = usePathname();

  return (
    <div className=" bg-primary">
      <nav className="bg-primary flex justify-between text-white font-bold items-center  max-w-7xl m-auto">
        <Link href={"/"}>
          <h1 className="text-xl">PokeDex</h1>
        </Link>
        <div className="flex gap-3">
          <Link
            className={`p-3 cursor-pointer ${
              pathname === "/" ? "selected-nav" : ""
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`p-3 cursor-pointer  ${
              pathname === "/compare" ? "selected-nav" : ""
            }`}
            href="/compare?pokemon1=bulbasaur&pokemon2="
          >
            Compare
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
