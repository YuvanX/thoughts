import { RiBox2Fill } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { useNavigate } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full flex justify-between bg-background border-b h-20 items-center fixed z-50">
      <div className="px-10 lg:px-20 flex gap-2 items-center">
        <div>
          <RiBox2Fill />
        </div>
        <div onClick={() => navigate('/blogs')} className="font-space font-semibold text-xl cursor-pointer">Thoughts</div>
      </div>
      <div className="flex items-center gap-5 pr-10 lg:pr-20">
        
        <DropDownMenu/>
        <ModeToggle/>
        <div>
          <Button className="font-space" onClick={() => navigate('/newpost')}>New post</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
