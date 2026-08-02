import TanStackIcon from "../icons/TanStackIcon";
import { Badge } from "../ui/badge";

const TanStackBadge = () => {
  return (
    <a href="https://tanstack.com" target="_blank">
      <Badge variant="outline">
        <TanStackIcon />
        TanStack Libraries
      </Badge>
    </a>
  );
};

export default TanStackBadge;
