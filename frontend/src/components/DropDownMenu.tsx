import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const DropDownMenu = () => {
    const navigate = useNavigate()
  return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="w-9 h-9 flex text-white font-semibold font-space text-sm justify-center items-center bg-customColor rounded-full">
            <div>{localStorage.getItem("name")?.[0]}</div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-1.5">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate('/userblogs')}>My blogs</DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/settings')}>Settings</DropdownMenuItem>
          <DropdownMenuItem onClick={() => {localStorage.removeItem("token"); navigate('/home')}}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

  );
};

export default DropDownMenu;
