import { Input } from "@/components/ui/input";
import { BACKEND_URL } from "@/config";
import axios from "axios";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type UserBlogs = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
  };
};

const UserHeader = ({
  setBlog,
}: {
  setBlog: Dispatch<SetStateAction<UserBlogs[]>>;
}) => {
  const [searchInfo, setSearchInfo] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchInfo);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInfo]);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/blog/search`, {
          params: {
            value: debouncedValue
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setBlog(res.data.filteredBlogs);
      } catch(err) {
        console.log(`Error while fetching Blogs ${err}`)
      }
    };

    if(debouncedValue.trim() !== "") {
      sendRequest();
    } else {
      const fetch = async () => {
        const res = await axios.get(`${BACKEND_URL}/api/v1/blog/myblog`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setBlog(res.data.userBlogs)
      }
      fetch()
    }
  }, [debouncedValue, setBlog]);

  

  function handleEvent(event: ChangeEvent<HTMLInputElement>) {
    setSearchInfo(event.target.value);
  }

  return (
    <div className="flex flex-col items-center h-56 mt-28">
      <div className="w-20 h-20 bg-customColor rounded-full flex items-center justify-center text-xl mb-5">
        <span>Y</span>
      </div>

      <div className="text-center">
        <div className="text-3xl font-bold mb-2">{localStorage.getItem("name")}</div>
        <div className="font-light text-gray-500">@{localStorage.getItem("name")?.toLowerCase()}</div>
      </div>
      <Input
        onChange={handleEvent}
        className="w-96 mt-5"
        placeholder="Search blogs..."
        aria-label="Search blogs"
      />
    </div>
  );
};

export default UserHeader;
