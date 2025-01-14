import {Link} from "react-router-dom"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "./ui/button"
import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "@/config"
import { stripHtml } from "@/utils/htmlParser"
import BlogPageSkeleton from "./skeletons/BlogPageSkeleton"

type Blog = {
    id: string;
    title: string;
    content: string;
    author: {
        name: string;
    }
}
const BlogComponent = () => {

      const [blogs, setBlogs] = useState<Blog[]>([]);
      const [loading, setLoading] = useState(true)

      useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }})
            setBlogs(res.data.blogs)
            setLoading(false)
        }
        fetch()
      }, [])
      
      return (
        <div>{loading ? <BlogPageSkeleton/> : <div className="min-h-screen bg-background px-10 lg:px-20  ">
          <main className="container py-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <Card key={blog.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center space-x-4 ">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={blog.author.name[0]} alt={blog.author.name[0]} />
                        <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{blog.author.name}</p>
                        <p className="text-sm text-muted-foreground">25-05-05</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                    <p className="text-muted-foreground">{stripHtml((blog.content))}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <p className="text-sm text-muted-foreground">{Math.ceil(blog.content.split(/\s+/).length / 200)} min read</p>
                    <Link to={`/blog/${blog.id}`}><Button>Read More</Button></Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </main>
        </div>}</div>
        
      )
}

export default BlogComponent