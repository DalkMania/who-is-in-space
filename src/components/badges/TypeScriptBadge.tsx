import TypeScriptIcon from "../icons/TypeScriptIcon";
import { Badge } from "../ui/badge";

const TypeScriptBadge = () => {
  return (
    <a href="https://www.typescriptlang.org" target="_blank">
      <Badge variant="outline">
        <TypeScriptIcon />
        TypeScript
      </Badge>
    </a>
  );
};

export default TypeScriptBadge;
