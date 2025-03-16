import "../../../public/styles.css";
import React from "react";

export default function PostSection({ children }: { children: string[] }) {
  return <li className={"list-disc ml-10 mb-1"}>{children}</li>;
}
