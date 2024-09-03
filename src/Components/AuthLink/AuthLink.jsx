"use client"
import Link from 'next/link'
import Button from '../OrangeButton/Button'
import { usePathname } from "next/navigation"
import { signOut, useSession } from 'next-auth/react'

const AuthLink = () => {
    const { status } = useSession()
    const isLogin = status === 'unauthenticated' ? false : true
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
                            <span className='text-theme-gray dark:hover:text-theme-white font-semibold hover:text-theme-black transition duration-150 cursor-pointer' onClick={signOut}>Logout</span>
                    </>
                )
            }
        </>
    )
}

export default AuthLink