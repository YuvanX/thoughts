import { Skeleton } from "../ui/skeleton";

const DetailedBlogPageSkeleton = () => {

  function SkeletonLoop() {
    const skeletons = [];
    for (let i = 0; i < 24; i++) {
      skeletons.push(
        <Skeleton className="w-[300px] md:w-[450px] lg:w-[550px] h-3 mt-5" />
      );
    }
    return <>{skeletons}</>;
  }

  return (
    <div className="flex justify-center pt-10 overflow-y-scroll">
      <div className="max-w-3xl min-w-[350px] md:min-w-[500px] lg:min-w-[600px] px-4">
        <h1 className="text-4xl font-bold">
          <Skeleton className="w-[350px] md:w-[500px] lg:w-[600px] h-5" />
          <Skeleton className="w-[350px] md:w-[500px] lg:w-[600px] h-5 mt-1" />
          <Skeleton className="w-[300px] md:w-[450px] lg:w-[550px] h-5 mt-1" />
        </h1>
        <div className="flex items-center gap-4 mt-6">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="font-semibold">
            <div>
              <Skeleton className="w-56 h-4" />
            </div>
            <div className="font-light text-sm flex items-center gap-1">
              <Skeleton className="w-32 h-3 mt-2" />
            </div>
          </div>
        </div>
        <div className="mt-10 font-normal leading-8 text-lg">
          {SkeletonLoop()}
        </div>
      </div>
    </div>
  );
};

export default DetailedBlogPageSkeleton;
