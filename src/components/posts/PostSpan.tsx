import "../../../public/styles.css";
export default function PostSpan({ children }: { children: string[] }) {
  console.log(children);
  return <span className={"blue-highlight"}>{children[0]}</span>;
}
