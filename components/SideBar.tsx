"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SideBarItem from "./SideBarItem";
import Library from "./Library";
interface Sidebar {
  children: React.ReactNode;
}
const SideBar: React.FC<Sidebar> = ({ children }) => {
  const pathname = usePathname();
  const route = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      {/* {children} */}
      <div
        className="
            hidden
            md:flex
            flex-col
            gap-y-2
            bg-black
            h-full
            w-[300px]
            p-2
            "
      >
        <Box className="">
          <div
            className="  
                    flex flex-col gap-y-5 px-5 py-4
                    "
          >
            {route.map((item, index) => (
              <SideBarItem key={index} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library/>
        </Box>
        
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  );
};

export default SideBar;
