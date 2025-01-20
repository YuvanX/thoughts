import { RiBox2Fill, RiCloseFill, RiMenuFill } from "@remixicon/react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TopBar = () => {
  const [hamburger, setHamburger] = useState(false);
  const navigate = useNavigate();

  function handleToggle() {
    setHamburger((prev) => !prev);
  }

  return (
    <div className="w-full flex justify-between bg-white dark:bg-black h-20 items-center fixed z-50 px-5 lg:px-20">
      
      <div className="flex gap-2 items-center">
        <div>
          <RiBox2Fill />
        </div>
        <div className="font-space font-semibold text-xl">Thoughts</div>
      </div>

      
      <div className="lg:hidden pr-10">
        <button onClick={handleToggle} aria-label="Toggle Menu">
          {hamburger ? <RiCloseFill size={24} /> : <RiMenuFill size={24} />}
        </button>
      </div>

      
      <div className="hidden lg:flex items-center gap-2 lg:gap-5">
        <Button className="font-space" onClick={() => navigate("/signup")}>
          Sign up
        </Button>
        <Button className="font-space" onClick={() => navigate("/signin")}>
          Login
        </Button>
      </div>

     
      <AnimatePresence>
        {hamburger && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-16 z-50 bg-background border-b shadow-lg p-5 lg:hidden"
            >
              <div className="flex flex-col gap-4 font-space">
                <Button
                  className="w-full"
                  onClick={() => {
                    navigate("/signup");
                    setHamburger(false);
                  }}
                >
                  Sign up
                </Button>
                <Button
                  className="w-full"
                  onClick={() => {
                    navigate("/signin");
                    setHamburger(false);
                  }}
                >
                  Sign in
                </Button>
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setHamburger(false)}
              aria-hidden="true"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TopBar;
