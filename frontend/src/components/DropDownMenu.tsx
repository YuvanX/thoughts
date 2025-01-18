import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";

const DropDownMenu = () => {
    const navigate = useNavigate()
  return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="A"/>
            <AvatarFallback className="text-white">CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-1.5">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/userblogs')}>My blogs</DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/settings')}>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

  );
};

export default DropDownMenu;
