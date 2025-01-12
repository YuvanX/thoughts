import axios from "axios";
import BlogPage from "@/components/BlogPage";
import { BACKEND_URL } from "@/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Blog = {
  id: string;
  author: {
    name: string;
  };
  title: string;
  content: string;
};

const DetailedBlogPage = () => {
  const [blog, setBlog] = useState<Blog>({
    id: "",
    author: { name: "" },
    title: "",
    content: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setBlog(res.data.post);
    };
    fetch();
  }, [id]);
  console.log(blog);

  return (
    <div>
      <BlogPage
        id={blog.id}
        author={blog.author.name}
        title={blog.title}
        content={blog.content}
      />
    </div>
  );
};

export default DetailedBlogPage;
