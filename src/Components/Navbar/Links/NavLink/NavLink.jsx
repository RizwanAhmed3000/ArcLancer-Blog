"use client"
import { ThemeContext } from "@/Context/ThemeContext";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext } from "react";

const NavLink = ({ item }) => {
    const path = usePathname();
    const { theme } = useContext(ThemeContext);
    console.log(theme)
    return (
        <Link href={item.path} className={`font-semibold ${theme === 'dark' && "dark:bg-dark-orange-soft"} hover:text-theme-black transition duration-150 ${path === item.path ? "text-black" : "text-theme-gray"}`}>
            {item.title}
        </Link>
    )
}

export default NavLink