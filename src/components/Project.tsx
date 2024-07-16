import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/types";

export default function Project({
  title,
  description,
  repoUrl,
  stack,
}: Project) {
  return (
    <a href={repoUrl} target="_blank" rel="noopener noreferrer">
      <Card className="rounded-[10px] max-w-sm hover:bg-primary-transparent">
        <CardHeader>
          <CardTitle className="text-primary-dark">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="-mb-3 -mt-1 lg:mb-0 lg:mt-0">
          <p>{stack}</p>
        </CardFooter>
      </Card>
    </a>
  );
}
