import "../../../public/styles.css";
export default function PostSpan({ children }: { children: string[] }) {
  return <span className={"text-wrap blue-highlight"}>{children[0]}</span>;
}
