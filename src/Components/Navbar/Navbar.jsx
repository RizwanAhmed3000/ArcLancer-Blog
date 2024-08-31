import Link from "next/link"
import Social from "./SocialLinks/Social"
import ToggleTheme from "../ToggleTheme/ToggleTheme"
import AuthLink from "../AuthLink/AuthLink"
import Links from "./Links/Links"
import HamburgerMenu from "../Hamburger/HamburgerMenu"

const Navbar = () => {
    return (
        <div className="navContainer py-[10px] flex items-center justify-between h-[60px]">
            <div className="social flex flex-1 tabletLg:hidden">
                <Social />
            </div>
            <div className="logo flex flex-1 justify-center tabletLg:justify-start">
                <Link href={`/`}>
                    <h1 className="text-[32px] font-extrabold tracking-widest text-theme-black dark:text-theme-white desktopSm:text-[28px]">Arclancer</h1>
                </Link>
            </div>
            <div className="links flex gap-[20px] desktopSm:gap-[10px] flex-1 justify-end items-center">
                <div className="tabletRg:hidden">
                    <ToggleTheme />
                </div>
                <Links />
                <AuthLink />
                <div className="hidden tabletRg:flex">
                    <HamburgerMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar