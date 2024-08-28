import Link from 'next/link'
import React from 'react'
import Button from '../OrangeButton/Button'

const AuthLink = () => {
    const isLogin = false
    return (
        <>
            {
                !isLogin ? (
                    <Link href={"/login"} className=''>
                        <Button text={`login`}/>
                    </Link>
                ) : (
                    <>
                        <Link href={"/writeBlog"} className='text-theme-gray font-semibold hover:text-theme-black transition duration-150'>Write</Link>
                        <span className='text-theme-gray font-semibold hover:text-theme-black transition duration-150 cursor-pointer'>Logout</span>
                    </>
                )
            }
        </>
    )
}

export default AuthLink