import ArrowButton from "@/components/Arrow";
import UserBlogComponent from "@/components/UserBlogComponent";
import UserHeader from "@/components/UserHeader";
import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";
type UserBlogs = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
  };
};
const UserBlogsPage = () => {
  const [userBlogs, setUserBlogs] = useState<UserBlogs[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/myblog`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setUserBlogs(res.data.userBlogs);
      setLoading(false);
    };
    fetch();
  }, []);

  if(!userBlogs) {
    return <div className="w-full mt-28 flex justify-center items-center">
    <div>No Blogs avaliable...</div>
  </div>
  }

  return (
    <div>
      <div className="mt-10 ml-4 lg:ml-20 mb-5"><ArrowButton/></div>
      <UserHeader setBlog={setUserBlogs} />
      <div>
        {userBlogs.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 py-4 lg:px-8 lg:py-8">
            {userBlogs.map((blogs) => {
              return (
                <UserBlogComponent
                  title={blogs.title}
                  content={blogs.content}
                  createdAt={blogs.createdAt}
                  key={blogs.id}
                  id={blogs.id}
                />
              );
            })}
          </div>
        ) : (
          <div className="w-full mt-28 flex justify-center items-center">
            <div>No Blogs avaliable...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBlogsPage;
