import { caps } from "@/font";

export default function PostHeading({ children }: { children: string[] }) {
  return (
    <h1 className={`!text-[34px] ${caps.className} !-mb-2`}>{children[0]}</h1>
  );
}
