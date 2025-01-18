import { stripHtml } from "@/utils/htmlParser";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { CalendarDays } from "lucide-react";

const UserBlogComponent = ({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: string;
}) => {
  return (
    <div className="w-full flex flex-col  border rounded-lg h-60 p-4 relative">
      <div>
      <div className="flex-grow">
        <div className="font-semibold text-2xl line-clamp-2">{title}</div>
        <div className="font-light pt-2 line-clamp-3">{stripHtml(content)}</div>
      </div>
        <div className="flex justify-between items-center pt-4">
          <div className="font-light text-sm  flex items-center gap-1">
            <CalendarDays className="mr-2 h-4 w-4" />
            <div>25/05/2005</div>
          </div>
          <Link to={`/blog/${id}`}>
            <Button>Read More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserBlogComponent;
