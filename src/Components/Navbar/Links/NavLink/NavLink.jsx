"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ item }) => {
    const path = usePathname();
    return (
        <Link href={item.path} className={`font-semibold hover:text-theme-black transition duration-150 ${path === item.path ? "text-black" : "text-theme-gray"}`}>
            {item.title}
        </Link>
    )
}

export default NavLink