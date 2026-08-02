import ReactIcon from "../icons/ReactIcon";
import { Badge } from "../ui/badge";

const ReactBadge = () => {
  return (
    <a href="https://tailwindcss.com" target="_blank">
      <Badge variant="outline">
        <ReactIcon />
        React
      </Badge>
    </a>
  );
};

export default ReactBadge;
