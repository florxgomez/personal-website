import Links from "@/components/Links";
import Image from "next/image";
import Link from "next/link";

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
          <p className="text-xl mt-16">
            👋🏻 Hi! I am a Web Developer based in Buenos Aires 🇦🇷, specialized in
            building apps with{" "}
            <span
              className={
                "underline underline-offset-4 decoration-4 decoration-yellow-500"
              }
            >
              JavaScript
            </span>
            , {""}
            <span
              className={
                "underline underline-offset-4 decoration-4 decoration-blue-500"
              }
            >
              TypeScript
            </span>
            ,{" "}
            <span
              className={
                "underline underline-offset-4 decoration-4 decoration-cyan-400"
              }
            >
              React
            </span>
            ,{" "}
            <span
              className={
                "underline underline-offset-4 decoration-4 decoration-teal-400"
              }
            >
              TailwindCSS
            </span>{" "}
            &{" "}
            <span
              className={
                "underline underline-offset-4 decoration-4 decoration-green-600"
              }
            >
              Node
            </span>
            .
          </p>
          <p className="mt-6 text-lg">
            I am currently working at{" "}
            <span className={"font-bold"}>JP Morgan</span>.
          </p>
          <p className="mt-6 text-lg">
            I write{" "}
            <Link href={"/blog"}>
              <span className="underline underline-offset-4 decoration-4 decoration-primary hover:text-primary dark:hover:text-primary-dark dark:decoration-primary-dark">
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
