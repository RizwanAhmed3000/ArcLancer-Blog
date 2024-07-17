import Link from "next/link"
import Social from "./SocialLinks/Social"
import ToggleTheme from "../ToggleTheme/ToggleTheme"
import AuthLink from "../AuthLink/AuthLink"
import Links from "./Links/Links"

const Navbar = () => {
    return (
        <div className="navContainer py-[10px] flex items-center justify-between h-[60px]">
            <div className="social flex flex-1 ">
                <Social />
            </div>
            <div className="logo flex flex-1 justify-center">
                <h1 className="text-[28px] font-extrabold tracking-widest text-theme-black dark:text-theme-white desktopSm:text-[32px]">Arclancer</h1>
            </div>
            <div className="links flex gap-[10px] desktopSm:gap-[20px] flex-1 justify-end items-center">
                <ToggleTheme />
                {/* <Link href={"/"} className="text-theme-gray font-semibold hover:text-theme-black transition duration-150">Home</Link>
                <Link href={"/"} className="text-theme-gray font-semibold hover:text-theme-black transition duration-150">Contact</Link>
                <Link href={"/"} className="text-theme-gray font-semibold hover:text-theme-black transition duration-150">About</Link> */}
                {/* <Link href={"/"}>Blog</Link> */}
                <Links />
                <AuthLink />
            </div>
        </div>
    )
}

export default Navbar