import HomePageBg from "@/components/HomePageBg"
import TopBar from "@/components/TopBar"
import { BackgroundLines } from "@/components/ui/background-lines"

const Home = () => {
  return (
    <div>
       <TopBar/>
       <HomePageBg/>
    </div>
  )
}

const Text = () => {
    return <div className="text-white pt-20">
        Dive into a world of ideas, stories, and insights. Thoughts is your personal space to explore, create, and share meaningful content with a community that values authentic expression
    </div>
}

export default Home