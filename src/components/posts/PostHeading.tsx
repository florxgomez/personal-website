import { caps } from "@/font";

export default function PostHeading({ children }: { children: string[] }) {
  return (
    <h1 className={`!sm:text-[34px] text-[30px] ${caps.className} !-mb-2 `}>
      {children[0]}
    </h1>
  );
}
