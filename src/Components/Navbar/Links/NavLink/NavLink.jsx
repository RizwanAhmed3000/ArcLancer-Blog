"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ item }) => {
    const path = usePathname();
    // console.log(path)
    return (
        <Link href={item.path} className={`text-theme-gray font-semibold hover:text-theme-black transition duration-150 ${path === item.path && "text-black"}`}>
            {item.title}
        </Link>
    )
}

export default NavLink