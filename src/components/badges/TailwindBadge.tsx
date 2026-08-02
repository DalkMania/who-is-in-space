import TailwindIcon from "../icons/TailwindIcon";
import { Badge } from "../ui/badge";

const TailwindBadge = () => {
  return (
    <a href="https://tailwindcss.com" target="_blank">
      <Badge variant="outline">
        <TailwindIcon />
        Tailwind CSS
      </Badge>
    </a>
  );
};

export default TailwindBadge;
