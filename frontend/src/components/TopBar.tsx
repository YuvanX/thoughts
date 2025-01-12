import { RiBox2Fill } from "@remixicon/react"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"


const TopBar = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full flex justify-between bg-white dark:bg-black  h-20 items-center fixed z-50 px-5 lg:px-20">
    <div className=" flex gap-2 items-center">
      <div>
        <RiBox2Fill />
      </div>
      <div className="font-space font-semibold text-xl">Thoughts</div>
    </div>
    <div className="flex items-center gap-2 lg:gap-5">
      <div>
        <Button className="font-space" onClick={() => navigate('/signup')}>Sign up</Button>
      </div>
        <div>
            <Button className="font-space" onClick={() => navigate('/signin')}>Login</Button>
        </div>
    </div>
  </div>
  )
}

export default TopBar