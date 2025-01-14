import axios from "axios";
import BlogPage from "@/components/BlogPage";
import { BACKEND_URL } from "@/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedBlogPageSkeleton from "@/components/skeletons/DetailedBlogPage";

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
  const [loading, setLoading] = useState(true)

  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setBlog(res.data.post);
      setLoading(false)
    };
    fetch();
  }, [id]);
  console.log(blog);

  return (
    <div>
      {loading ? <DetailedBlogPageSkeleton/> : <div>
      <BlogPage
        id={blog.id}
        author={blog.author.name}
        title={blog.title}
        content={blog.content}
      />
    </div>}
    </div>
  );
};

export default DetailedBlogPage;
