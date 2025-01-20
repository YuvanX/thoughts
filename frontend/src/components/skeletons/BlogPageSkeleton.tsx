import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

const BlogPageSkeleton = () => {
  const blogs = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
  ];
  return (
    <div className="min-h-screen bg-background px-5 md:px-10 lg:px-20 pt-28 overflow-hidden">
      <main className="container mx-auto  py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => {
            return (
              <Card key={blog.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-2 lg:space-x-4">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        <Skeleton className="w-10 max-w-[240px] h-10 rounded-full" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Skeleton className="w-40 max-w-[240px] h-[20px] mb-1" />
                      <Skeleton className="w-20 max-w-[240px] h-[20px] " />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">
                    <Skeleton className="w-96 max-w-[240px] h-[20px]" />
                  </h2>
                  <Skeleton className="w-96 max-w-[240px] h-[20px]" />
                  <br />
                  <Skeleton className="w-96 max-w-[240px] h-[20px]" />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-muted-foreground">
                    <Skeleton className="w-[100px] max-w-[240px] h-[20px]" />
                  </p>
                  <Skeleton className="w-28 max-w-[240px] h-10" />
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default BlogPageSkeleton;
