import { RiBox2Fill, RiCloseFill, RiMenuFill } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { useNavigate } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const NavBar = () => {
  const [hamburger, setHamburger] = useState(false);

  function handleToogle() {
    setHamburger(!hamburger);
  }

  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between bg-background border-b h-20 items-center fixed z-50">
      <div className="px-10 lg:px-20 flex gap-2 items-center">
        <div>
          <RiBox2Fill />
        </div>
        <div
          onClick={() => navigate("/blogs")}
          className="font-space font-semibold text-xl cursor-pointer"
        >
          Thoughts
        </div>
      </div>

      <div className="lg:hidden pr-10">
        <button onClick={handleToogle} aria-label="Toogle Menu">
          {hamburger ? <RiCloseFill size={24} /> : <RiMenuFill size={24} />}
        </button>
      </div>

      <div className="hidden lg:flex items-center gap-5 pr-10 lg:pr-20">
        <DropDownMenu />
        <ModeToggle />
        <div>
          <Button className="font-space" onClick={() => navigate("/newpost")}>
          <Plus className="size-4" />
            New post
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {hamburger && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-50 border-b bg-background p-4 shadow-lg lg:hidden"
          >
            <div className="absolute  left-0 w-full bg-background border-b shadow-md lg:hidden">
              <div className="flex flex-col gap-2 p-5 font-space ">
                <div>
                  <div
                    className="hover:bg-slate-800 hover:text-white p-2 rounded cursor-pointer"
                    onClick={() => navigate("/userBlogs")}
                  >
                    My blogs
                  </div>
                </div>

                <div
                  className="hover:bg-slate-800 p-2 rounded cursor-auto hover:text-white"
                  onClick={() => navigate("/settings")}
                >
                  Settings
                </div>
                <div
                  className="hover:bg-slate-800 p-2 rounded cursor-pointer hover:text-white"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/home");
                  }}
                >
                  Logout
                </div>
                <div className="w-full">
                  <Button
                    className="font-space w-full"
                    onClick={() => navigate("/newpost")}
                  >
                    <Plus className="size-4" />
                    New post
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hamburger && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-black/50 lg:hidden"
            onClick={() => setHamburger(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
