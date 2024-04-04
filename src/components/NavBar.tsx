import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="container mx-auto mt-6 text-lg">
      <ul className="flex flex-row gap-8 items-center justify-center">
        <li className="hover:text-primary">
          <Link href={"/"}>home</Link>
        </li>
        <li className="hover:text-primary">
          <Link href={"/projects"}>projects</Link>
        </li>
        <li className="hover:text-primary">
          <Link href={"/notes"}>notes</Link>
        </li>
        <li className="hover:text-primary">
          <Link href={"mailto:florxgomez@gmail.com"}>contact</Link>
        </li>
      </ul>
    </nav>
  );
}
