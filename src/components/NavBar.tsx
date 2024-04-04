import Link from "next/link";
import ToggleMode from "./ToggleMode";

export default function NavBar() {
  return (
    <nav className="container mx-auto mt-6 text-lg">
      <ul className="flex flex-row sm:gap-8 gap-5 items-center justify-center">
        <li className="hover:text-primary dark:hover:text-primary-dark">
          <Link href={"/"}>home</Link>
        </li>
        <li className="hover:text-primary dark:hover:text-primary-dark">
          <Link href={"/projects"}>projects</Link>
        </li>
        <li className="hover:text-primary dark:hover:text-primary-dark">
          <Link href={"/notes"}>notes</Link>
        </li>
        <li className="hover:text-primary dark:hover:text-primary-dark">
          <Link href={"mailto:florxgomez@gmail.com"}>contact</Link>
        </li>
        <ToggleMode />
      </ul>
    </nav>
  );
}
