import { useState, Dispatch, SetStateAction, useRef, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ isDark, setIsDark }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <nav className="sticky border-b-2 border-black bg-white dark:bg-slate-900 dark:border-white">
        <div className="flex justify-between mx-auto container py-5 items-center transition-all px-2">
          <span className="font-bold text-2xl">
            <a href="/">joy lodra 👨‍💻</a>
          </span>

          <ul className="hidden md:flex space-x-4">
            <li className="hoverTransition">
              <a href="/#about">about me</a>
            </li>
            <li className="hoverTransition">
              <a href="/#blog">blog</a>
            </li>
            <li className="hoverTransition">
              <a href="/#portfolio">portfolio</a>
            </li>
            <li className="hoverTransition">
              <a href="/#contact">contact</a>
            </li>
          </ul>

          <div className="flex gap-4">
            {isDark ? (
              <SunIcon
                onClick={() => setIsDark(!isDark)}
                className="cursor-pointer md:inline hoverTransition animate-fadeIn"
                width={24}
                height={24}
              />
            ) : (
              <MoonIcon
                onClick={() => setIsDark(!isDark)}
                className="cursor-pointer md:inline hoverTransition animate-fadeIn"
                width={24}
                height={24}
              />
            )}

            {!openMenu ? (
              <Bars2Icon
                onClick={() => setOpenMenu(!openMenu)}
                className="md:hidden cursor-pointer hoverTransition z-20"
                width={24}
                height={24}
              />
            ) : (
              <XMarkIcon
                onClick={() => setOpenMenu(!openMenu)}
                className="animate-fadeIn md:hidden cursor-pointer hoverTransition z-30"
                width={24}
                height={24}
              />
            )}
          </div>
        </div>
      </nav>
      <ul
        className={`${openMenu ? "animate-fadeIn" : "animate-fadeOut hidden"} 
    bg-white z-20 transition-all opacity-95 block w-full p-10 rounded-b-xl space-y-10 border-b-4 border-black text-center md:hidden dark:border-white dark:bg-slate-900`}
      >
        <li className="hoverTransition">
          <a onClick={() => setOpenMenu(!openMenu)} href="/#about">
            about me
          </a>
        </li>
        <li className="hoverTransition">
          <a onClick={() => setOpenMenu(!openMenu)} href="/#blog">
            blog
          </a>
        </li>
        <li className="hoverTransition">
          <a onClick={() => setOpenMenu(!openMenu)} href="/#portfolio">
            portfolio
          </a>
        </li>
        <li className="hoverTransition">
          <a onClick={() => setOpenMenu(!openMenu)} href="/#contact">
            contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
