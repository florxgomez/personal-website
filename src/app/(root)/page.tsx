import Links from "@/components/Links";
import Image from "next/image";
import Link from "next/link";
import "../../../public/styles.css";
import { caps } from "@/font";

export default function Home() {
  return (
    <>
      <h1 className={`text-6xl mt-12 ${caps.className}`}>
        Hello! I&apos;m Flor <span className="text-3xl">🌷</span>
      </h1>
      <Links />
      <div className={"flex md:flex-row items-center flex-col"}>
        <Image
          src="/flor.png"
          alt="A girl's face behind a computer"
          width={200}
          height={200}
        />
        <div className={"text-center sm:text-left sm:ml-10"}>
          <p className="sm:text-xl sm:mt-16 mt-6 text-xl">
            I&apos;m a Frontend Engineer based in Buenos Aires, Argentina 🇦🇷
            <br />
            I&apos;m really into CSS, animation and accessibility. <br />I
            create websites and interactive digital experiences with{" "}
            <span
              className={
                "underline underline-offset-4 decoration-[3px] decoration-yellow-500"
              }
            >
              JavaScript/TypeScript
            </span>
            ,{" "}
            <span
              className={
                "underline underline-offset-4 decoration-[3px] decoration-cyan-400"
              }
            >
              React
            </span>
            ,{" "}
            <span
              className={
                "underline underline-offset-4 decoration-[3px] decoration-teal-400"
              }
            >
              TailwindCSS
            </span>{" "}
            &{" "}
            <span
              className={
                "underline underline-offset-4 decoration-[3px] decoration-green-600"
              }
            >
              Next
            </span>
            .
          </p>
          <p className="mt-3 sm:text-lg text-md">
            I&apos;m currently working at{" "}
            <span className={"font-bold"}>JP Morgan Chase</span>.
          </p>
          <p className="mt-3 sm:text-lg text-md">
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
