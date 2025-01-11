import { RiBox2Fill } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./mode-toggle";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between bg-background border-b h-20 items-center fixed z-50">
      <div className="px-10 lg:px-20 flex gap-2 items-center">
        <div>
          <RiBox2Fill />
        </div>
        <div className="font-space font-semibold text-xl">Thoughts</div>
      </div>
      <div className="flex items-center gap-5 pr-10 lg:pr-20">
        <div>
          <Button>New post</Button>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ModeToggle/>
      </div>
    </div>
  );
};

export default NavBar;
