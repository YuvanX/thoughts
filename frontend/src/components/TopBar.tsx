import { RiBox2Fill } from "@remixicon/react"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"


const TopBar = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full flex justify-between bg-white dark:bg-black  h-20 items-center fixed z-50">
    <div className="px-10 lg:px-20 flex gap-2 items-center">
      <div>
        <RiBox2Fill />
      </div>
      <div className="font-space font-semibold text-xl">Thoughts</div>
    </div>
    <div className="flex items-center gap-5 pr-10 lg:pr-20">
      <div>
        <Button onClick={() => navigate('/signup')}>Sign up</Button>
      </div>
        <div>
            <Button onClick={() => navigate('/signin')}>Login</Button>
        </div>
    </div>
  </div>
  )
}

export default TopBar