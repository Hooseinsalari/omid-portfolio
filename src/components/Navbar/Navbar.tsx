import { ImportIcon, LogoIcon, MenuIcon } from "@/lib/icons/icons";
import Link from "next/link";

function Navbar() {
  return (
    <div className="px-[120px] py-[22px] flex items-center justify-between absolute top-0 right-0 left-0">
      <div className="flex items-center gap-4">
        <span className="mb-3.5">
          <LogoIcon />
        </span>
        <span className="text-[#343A3F] text-xl font-medium">Omid Iravani</span>
      </div>
      <div className="flex items-center gap-1 ">
        <Link
          href="#"
          className="text-[#343A3F] text-base font-normal underline underline-offset-2"
        >
          Linkedin
        </Link>
        <span className="text-[#A2A9B0] text-base font-normal">/</span>
        <Link
          href="#"
          className="text-[#343A3F] text-base font-normal underline underline-offset-2"
        >
          Dribbble
        </Link>
        <span className="text-[#A2A9B0] text-base font-normal">/</span>
        <Link
          href="#"
          className="text-[#343A3F] text-base font-normal underline underline-offset-2"
        >
          Instagram
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#21272A]">
          <ImportIcon />
          <span className="text-[#21272A] text-base font-medium leading-7">
            CV
          </span>
        </div>
        <button className="bg-[#21272A] rounded-full p-3.5">
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
