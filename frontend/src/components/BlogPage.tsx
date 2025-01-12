import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { CalendarIcon } from "lucide-react";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import { useMemo } from "react";

const BlogPage = ({
  id,
  author,
  content,
  title,
}: {
  id: string;
  author: string;
  content: string;
  title: string;
}) => {

  content = useMemo(() => DOMPurify.sanitize(content,{
    FORBID_ATTR: ['style'],
  }), [content])

  return (
    <div className="flex justify-center pt-10 overflow-y-scroll">
      <div className="max-w-3xl min-w-[350px] md:min-w-[500px] lg:min-w-[600px] px-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="flex items-center gap-4 mt-6">
          <Avatar className="w-10 h-10 rounded-full bg-gray-700 flex justify-center items-center">
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div className="font-semibold">
            <div>{author}</div>
            <div className="font-light text-sm flex items-center gap-1">
              <CalendarIcon className="mr-1 h-4 w-4" />
              March 15, 2025
            </div>
          </div>
        </div>
        <div className="mt-10 font-normal leading-8 text-lg">{parse(content)}</div>
      </div>
    </div>
  );
};

export default BlogPage;