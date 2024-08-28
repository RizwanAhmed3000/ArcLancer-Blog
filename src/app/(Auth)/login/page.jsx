import Button from '@/Components/OrangeButton/Button'
import React from 'react'

const LoginPage = () => {
    return (
        <div className='container h-[90vh] flex items-center justify-center'>
            <div className="wrapper w-[100%] h-[90%] flex">
                <div className="left flex-1 flex flex-col items-center justify-center gap-[35px]">
                    <div className="text">
                        <h1 className='text-center text-[32px] font-semibold'>Welcome Back!</h1>
                        <p className='text-center text-[14px]'>Enter Your Account Details</p>
                    </div>
                    <div className="sso flex flex-col gap-[10px]">
                        <button className='flex items-center justify-center gap-3 w-[300px] py-[5px] px-[10px] rounded bg-white text-theme-black'>
                            <span >
                                <svg class="icon" viewBox="0 0 24 24" className='w-[20px] h-[20px]'>
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                    <path d="M1 1h22v22H1z" fill="none"></path>
                                </svg>
                            </span>
                            Login With Google
                        </button>
                        <button className='flex items-center justify-center gap-3 w-[300px] py-[5px] px-[10px] rounded bg-white text-theme-black'>
                            <svg class="icon" viewBox="0 0 24 24" className='w-[20px] h-[20px]'>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                            </svg>
                            Login With GitHub
                        </button>
                    </div>
                    <div className="seprator w-[100%] flex items-center justify-center gap-[20px]">
                        <div className='bg-theme-orange h-[3px] w-[33%]'></div>
                        <p className='text-[18px] font-semibold'>Or</p>
                        <div className='bg-theme-orange h-[3px] w-[33%]'></div>
                    </div>
                    <div className="inputs flex flex-col gap-[15px]">
                        <input type="text" placeholder='Email or Username' className='w-[300px] py-[5px] px-[10px] rounded bg-white outline-theme-orange placeholder:text-theme-black' />
                        <input type="password" placeholder='Password' className='w-[300px] py-[5px] px-[10px] rounded bg-white outline-theme-orange placeholder:text-theme-black' />
                        <p className='text-end text-theme-orange cursor-pointer mr-1'>Forgot Password</p>
                    </div>
                    <Button text={'Sign In'} />
                </div>
                <div className="right flex-1 bg-theme-black flex flex-col items-center justify-center gap-[35px]">
                    <div className="text">
                        <h1 className='text-center text-[32px] font-semibold text-white'>Join Us!</h1>
                        <p className='text-center text-[14px] text-white'>Create Your Account</p>
                    </div>
                    <div className="sso flex flex-col gap-[10px]">
                        <button className='flex items-center justify-center gap-3 w-[300px] py-[5px] px-[10px] rounded bg-white text-theme-black'>
                            <span >
                                <svg class="icon" viewBox="0 0 24 24" className='w-[20px] h-[20px]'>
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                    <path d="M1 1h22v22H1z" fill="none"></path>
                                </svg>
                            </span>
                            Login With Google
                        </button>
                        <button className='flex items-center justify-center gap-3 w-[300px] py-[5px] px-[10px] rounded bg-white text-theme-black'>
                            <svg class="icon" viewBox="0 0 24 24" className='w-[20px] h-[20px]'>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                            </svg>
                            Login With GitHub
                        </button>
                    </div>
                    <div className="seprator w-[100%] flex items-center justify-center gap-[20px]">
                        <div className='bg-theme-orange h-[3px] w-[33%]'></div>
                        <p className='text-[18px] font-semibold text-white'>Or</p>
                        <div className='bg-theme-orange h-[3px] w-[33%]'></div>
                    </div>
                    <div className="inputs flex flex-col gap-[15px]">
                        <input type="text" placeholder='Username' className='w-[300px] py-[5px] px-[10px] rounded bg-white outline-theme-orange placeholder:text-theme-black' />
                        <input type="text" placeholder='Email or Username' className='w-[300px] py-[5px] px-[10px] rounded bg-white outline-theme-orange placeholder:text-theme-black' />
                        <input type="password" placeholder='Password' className='w-[300px] py-[5px] px-[10px] rounded bg-white outline-theme-orange placeholder:text-theme-black' />
                        <p className='text-end text-theme-orange cursor-pointer mr-1'>Forgot Password</p>
                    </div>
                    <Button text={'Join Us'} />
                </div>
            </div>
        </div>
    )
}

export default LoginPage