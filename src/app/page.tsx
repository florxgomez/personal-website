import Links from "@/components/Links";
import Image from "next/image";
import Link from "next/link";
import "../../public/styles.css";

export default function Home() {
  return (
    <>
      <h1 className="text-[42px] mt-12 font-bold">Florencia Gómez</h1>
      <Links />
      <div className={"flex md:flex-row items-center flex-col"}>
        <Image
          src="/flor.png"
          alt="A girl's face behind a computer"
          width={200}
          height={200}
        />
        <div className={"text-center sm:text-left sm:ml-10"}>
          <p className="sm:text-xl sm:mt-16 mt-6 text-md">
            👋🏻 Hi! I am a{" "}
            <span className="pink-highlight">Frontend Engineer</span> based in
            Buenos Aires 🇦🇷, specialized in building apps with{" "}
            <span className={"yellow-highlight"}>JavaScript</span>, {""}
            <span className={"darker-blue-highlight"}>TypeScript</span>,{" "}
            <span className={"blue-highlight"}>React</span>,{" "}
            <span className={"teal-highlight"}>TailwindCSS</span> &{" "}
            <span className={"green-highlight"}>Node</span>.
          </p>
          <p className="mt-6 sm:text-lg text-md">
            I am currently working at{" "}
            <span className={"font-bold"}>JP Morgan</span>.
          </p>
          <p className="mt-6 sm:text-lg text-md">
            I write{" "}
            <Link href={"/blog"}>
              <span className="underline decoration-wavy underline-offset-3 decoration-2 decoration-primary hover:text-primary dark:hover:text-primary-dark dark:decoration-primary-dark">
                notes
              </span>
            </Link>{" "}
            about Web Development related concepts.
          </p>
        </div>
      </div>
    </>
  );
}
