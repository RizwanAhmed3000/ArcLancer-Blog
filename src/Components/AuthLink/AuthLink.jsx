"use client"
import Link from 'next/link'
import React from 'react'
import Button from '../OrangeButton/Button'
import { usePathname } from "next/navigation"

const AuthLink = () => {
    const isLogin = true
    const path = usePathname();
    // console.log(path)
    return (
        <>
            {
                !isLogin ? (
                    <Link href={"/login"} className=''>
                        <Button text={`login`}/>
                    </Link>
                ) : (
                    <>
                            <Link href={"/write"} className={`font-semibold hover:text-theme-black dark:hover:text-theme-white transition duration-150 ${path == "write" ? "text-theme-black dark:text-theme-white" : "text-theme-gray"}`}>Write</Link>
                            <span className='text-theme-gray dark:hover:text-theme-white font-semibold hover:text-theme-black transition duration-150 cursor-pointer'>Logout</span>
                    </>
                )
            }
        </>
    )
}

export default AuthLink