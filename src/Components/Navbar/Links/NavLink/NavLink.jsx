"use client"
import { ThemeContext } from "@/Context/ThemeContext";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext } from "react";

const NavLink = ({ item }) => {
    const path = usePathname();
    const { theme } = useContext(ThemeContext);
    // console.log(path)
    return (
        <Link href={item.path} className={`font-semibold hover:text-theme-black dark:hover:text-theme-white transition duration-150 ${path === item.path ? "text-theme-black dark:text-theme-white" : "text-theme-gray"}`}>
            {item.title}
        </Link>
    )
}

export default NavLink