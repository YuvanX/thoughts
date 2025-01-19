import {  RiArrowLeftLine } from "@remixicon/react"
import { useNavigate } from "react-router-dom"

const ArrowButton = () => {
    const navigate = useNavigate();
  return (
    <div className="w-10 h-10 rounded-lg border border-customColor flex items-center justify-center  cursor-pointer">
        <div onClick={() => navigate(-1)}>
            <RiArrowLeftLine />
        </div>
    </div>
  )
}

export default ArrowButton