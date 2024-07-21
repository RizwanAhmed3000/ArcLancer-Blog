"use client"

import Link from "next/link"
import { useState } from "react"
import ToggleTheme from "../ToggleTheme/ToggleTheme"

const HamburgerMenu = () => {

    const [open, setOpen] = useState(false)
    console.log(open)

    return (
        <>
            <div className="burger w-[20px] h-[16px] flex flex-col justify-between cursor-pointer" onClick={() => setOpen(!open)}>
                <div className="line w-[100%] h-[2px] bg-theme-black dark:bg-theme-white"></div>
                <div className="line w-[100%] h-[2px] bg-theme-black dark:bg-theme-white"></div>
                <div className="line w-[100%] h-[2px] bg-theme-black dark:bg-theme-white"></div>
            </div>
            {
                open && (
                    <>
                        {/* <div className="overlay w-[100%] h-[100vh] top-0 left-0 right-0 bottom-0 bg-slate-300 absolute"></div> */}
                        <div className="responsiveMenu absolute top-[100px] right-[0px] bg-theme-white dark:bg-theme-black drop-shadow-xl h-[calc(100vh-100px)] w-[50%] z-10 flex flex-col items-center justify-center gap-8">
                            <Link href={"/"} className="text-[28px] font-semibold">Home</Link>
                            <Link href={"/about"} className="text-[28px] font-semibold">About</Link>
                            <Link href={"/contact"} className="text-[28px] font-semibold">Contact</Link>
                            <ToggleTheme />
                        </div>
                    </>
                )
            }
        </>
    )
}

export default HamburgerMenu