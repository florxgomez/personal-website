import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("jsx", jsx);

export function PostCodeBlock({
  className,
  children,
}: {
  className: string;
  children: string;
}) {
  const language = className?.replace("lang-", "");
  return className ? (
    <div>
      <SyntaxHighlighter
        language={language.toLowerCase()}
        style={materialDark}
        customStyle={{
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "0.8rem",
          width: "100%",
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className={"bg-gray-200 p-1 rounded text-red-500 m-[1px]"}>
      {children}
    </code>
  );
}
