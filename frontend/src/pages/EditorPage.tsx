import NavBar from "@/components/NavBar";
import TipTap from "@/components/TipTap";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BACKEND_URL } from "@/config";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import axios from "axios";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditorPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);

  async function handlePublish() {
    setError("");
    setSuccess("");
    setIsPublishing(true);

    if (!title.trim()) {
      setError("Please enter a title for your blog post.");
      setIsPublishing(false);
      return;
    }

    if (!content.trim()) {
      setError("Please enter some content for your blog post.");
      setIsPublishing(false);
      return;
    }
    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title: title,
          content: content,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setSuccess("Blog post published successfully!");
      await new Promise((r) => setTimeout(r, 800));
      navigate("/blogs");
    } catch (e) {
      setError("Failed to publish the blog post. Please try again.");
    } finally {
      setIsPublishing(false);
    }
  }
  return (
    <div className="bg-background h-screen bottom-0">
      <NavBar />
      <div className="p-4">
        <div className="flex justify-center mb-6 mt-28">
          <div className="flex justify-between w-[800px] items-center">
            <div className="flex gap-5 items-center">
              <div>
                <Avatar className="bg-customColor text-white items-center justify-center">
                  <AvatarImage src="lol" />
                  <AvatarFallback>
                    {localStorage.getItem("name")?.[0]}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <div>{localStorage.getItem("name")}</div>
                <div className="text-xs">{`Draft in ${localStorage.getItem(
                  "name"
                )}`}</div>
              </div>
            </div>
            <Button className="min-w-20" onClick={handlePublish}>
              {isPublishing ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Publish"
              )}
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[800px] space-y-6">
            <textarea
              className="w-full text-4xl bg-background font-bold border-none px-0 shadow-none resize-none focus:ring-0 focus:outline-none mt-6 overflow-x-hidden overflow-y-hidden"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              rows={2} 
              maxLength={100} 
            />
            <TipTap onContentChange={setContent} />
          </div>
        </div>
        <div>
          <div className="fixed bottom-4 left-0 right-0 flex justify-center px-4">
            <div className="max-w-[800px] w-full space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert
                  variant="default"
                  className="bg-green-100 text-green-800 border-green-300"
                >
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
