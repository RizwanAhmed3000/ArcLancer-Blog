"use client"
import Link from 'next/link'
import Button from '../OrangeButton/Button'
import { usePathname } from "next/navigation"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Dropdown from '../Dropdown/Dropdown'
import { useState } from 'react'

const AuthLink = () => {
    const { data, status } = useSession()
    const isLogin = status === 'unauthenticated' ? false : true
    const path = usePathname();
    // console.log(data?.user)
    const [open, setOpen] = useState(false)
    return (
        <>
            {
                !isLogin ? (
                    <Link href={"/login"} className=''>
                        <Button text={`login`} />
                    </Link>
                ) : (
                    <>
                        <Link href={"/write"} className={`font-semibold hover:text-theme-black dark:hover:text-theme-white transition duration-150 ${path == "write" ? "text-theme-black dark:text-theme-white" : "text-theme-gray"}`}>Write</Link>
                        <div className='relative w-[45px] h-[45px] rounded-full object-cover cursor-pointer' onClick={() => setOpen(!open)}>
                            <Image src={data?.user.image} fill className='rounded-full object-cover' />
                            {
                                open && <Dropdown />
                            }
                        </div>
                    </>
                )
            }
        </>
    )
}

export default AuthLink