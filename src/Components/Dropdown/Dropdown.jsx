import { signOut } from 'next-auth/react'

const Dropdown = () => {
    return (
        <div className='z-10 absolute border-[2px] bg-theme-white shadow-md flex items-center justify-center rounded py-[15px] px-[40px] top-[50px] right-[5px]'>
            <p className='text-theme-gray dark:hover:text-theme-white font-semibold hover:text-theme-black transition duration-150 cursor-pointer' onClick={signOut}>Logout</p>
        </div>
    )
}

export default Dropdown