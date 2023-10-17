import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Curve from "./Curve";
import { NAV_LINKS } from "../../lib/data";
import SideLink from "./Link";
import ThemeSwitcher from "../general/ThemeSwitcher";
import { SmallScreenContext } from "../../Contexts/SmallScreenContext";


export default function Nav() {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);
  const { theme, toggleTheme, setIsActive } = useContext(SmallScreenContext);

  const themeMode = theme === "light" ? "dark" : "light";

  const toggleSwitch = () => {
    toggleTheme();
    setIsActive(false)
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      className={`bg-light-primary fixed right-0 top-0 z-50 h-screen w-full lg:w-[70vw]`}
    >
      <div className="flex h-full flex-col justify-between p-16">
        <div className="nav flex flex-col gap-3 text-4xl">
          <p className="border-b border-gray-600 text-sm uppercase text-gray-600">
            Menu
          </p>

          <ul className="py-4">
            {NAV_LINKS.map((data, index) => {
              return (
                <SideLink
                  key={data.id}
                  data={{ ...data, index }}
                  isActive={pathname == data.path}
                  setSelectedIndicator={setPathname}
                />
              );
            })}
          </ul>

          <div className="text-light flex flex-col sm:flex-row sm:items-center items-start gap-5 text-base">
            <div className="text-normal">
              <p>Get in touch</p>
              <p className="">info@sparkr.studio</p>
            </div>
            <div
              className={`text-light flex cursor-pointer items-center rounded-md border px-6 py-3 font-normal transition-all`}
              onClick={toggleSwitch}
            >
              <ThemeSwitcher />
              <span className="pl-2 whitespace-nowrap">Switch to {themeMode} mode</span>
            </div>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
