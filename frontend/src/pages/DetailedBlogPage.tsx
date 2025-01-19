import axios from "axios";
import BlogPage from "@/components/BlogPage";
import { BACKEND_URL } from "@/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedBlogPageSkeleton from "@/components/skeletons/DetailedBlogPage";
import NavBar from "@/components/NavBar";
import ArrowButton from "@/components/Arrow";

type Blog = {
  author: {
    name: string;
  };
  title: string;
  content: string;
  createdAt: string;
};

const DetailedBlogPage = () => {
  const [blog, setBlog] = useState<Blog>({
    author: { name: "" },
    title: "",
    content: "",
    createdAt: ""
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
      <NavBar/>
      <div>
      {loading ? <DetailedBlogPageSkeleton/> : <div className="pt-16">
        <div className="mt-10 ml-4 lg:ml-20 mb-5"><ArrowButton/></div>
      <BlogPage
        author={blog.author.name}
        title={blog.title}
        content={blog.content}
        createdAt={blog.createdAt}
      />
    </div>}
    </div>
    </div>
  );
};

export default DetailedBlogPage;
