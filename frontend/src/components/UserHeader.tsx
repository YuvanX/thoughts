import { Input } from "@/components/ui/input";

const UserHeader = () => {
  return (
    <div className="flex flex-col items-center h-56 mt-10">
      <div className="w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center text-xl mb-5">
        <span>Y</span>
      </div>

      <div className="text-center">
        <div className="text-3xl font-bold mb-2">Yuvan</div>
        <div className="font-light text-gray-500">@yuvan</div>
      </div>
      <Input
        className="w-96 mt-5"
        placeholder="Search blogs..."
        aria-label="Search blogs"
      />
    </div>
  );
};

export default UserHeader;
