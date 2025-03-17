import Links from "@/components/Links";
import Image from "next/image";
import Link from "next/link";
import "../../../public/styles.css";
import {
  myFont,
  caps,
  recoletaRegular,
  recoletaBold,
  recoletaSemiBold,
  poppins,
} from "@/font";

export default function Home() {
  return (
    <>
      <div className={"mt-7"}>
        <div className="flex flex-row items-center justify-center gap-2">
          <Image
            src="/flor.png"
            alt="A girl's face behind a computer"
            width={200}
            height={200}
          />
          <h1 className={`text-center mt-10`}>
            <div className={`${myFont.className} text-5xl mb-3`}>
              hey hello,
            </div>{" "}
            <div
              className={`${recoletaSemiBold.className} sm:text-6xl text-5xl mb-2`}
            >
              I&apos;m Flor
            </div>
          </h1>
        </div>
        <Links />
        <div className={"flex items-center flex-col justify-center"}>
          <div className={`text-center ${poppins.className}`}>
            <p className="sm:text-[20px] mt-10 text-[16px] sm:text-nowrap">
              I&apos;m a Frontend Engineer based in Buenos Aires, Argentina 🇦🇷
              <br />
              I&apos;m really into CSS, animation and accessibility. <br />I
              create websites and interactive digital experiences with <br />
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
            <p className="mt-5 sm:text-lg">
              I&apos;m currently working at{" "}
              <span className={"font-bold"}>JP Morgan Chase</span>.
            </p>
            <p className="sm:text-lg text-md">
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
      </div>
    </>
  );
}
