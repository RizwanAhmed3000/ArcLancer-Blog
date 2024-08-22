import Link from "next/link"
import Social from "../Navbar/SocialLinks/Social"


const Footer = () => {
    return (
        <div className="flex flex-col">
            <div className="container flex justify-between py-[50px] gap-[60px] tabletRg:flex-col">
                <div className="left flex-1 flex flex-col gap-[30px]">
                    <Link href={`/`} className="logo text-[32px] font-bold hover:text-theme-orange transition duration-150 cursor-pointer">Arclancer Blogs</Link>
                    <div className="desc text-theme-gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas repellat nam est a consectetur! At facilis consequuntur quibusdam ratione, culpa minus quam officiis aspernatur? Dolor numquam sunt sed eum facilis.</div>
                    <Social />
                </div>
                <div className="right flex-1 flex">
                    <div className="links flex-1 flex flex-col gap-[5px]">
                        <h2 className="text-[24px] font-semibold">Links</h2>
                        <Link href={`/`} className="hover:text-theme-orange transition duration-150">Home</Link>
                        <Link href={`/`} className="hover:text-theme-orange transition duration-150">About</Link>
                        <Link href={`/`} className="hover:text-theme-orange transition duration-150">Contat</Link>
                        <Link href={`/`} className="hover:text-theme-orange transition duration-150">Blogs</Link>
                        <Link href={`/`} className="hover:text-theme-orange transition duration-150">Login</Link>
                        <Link href={`/`} className="hover:text-theme-orange transition duration-150">Register</Link>
                    </div>
                    <div className="tags flex-1 flex flex-col gap-[5px]">
                        <h2 className="text-[24px] font-semibold">Categories</h2>
                        <p className="hover:text-theme-orange transition duration-150 cursor-pointer">Business</p>
                        <p className="hover:text-theme-orange transition duration-150 cursor-pointer">Tech</p>
                        <p className="hover:text-theme-orange transition duration-150 cursor-pointer">Food</p>
                        <p className="hover:text-theme-orange transition duration-150 cursor-pointer">Fashion</p>
                        <p className="hover:text-theme-orange transition duration-150 cursor-pointer">Travel</p>
                        <p className="hover:text-theme-orange transition duration-150 cursor-pointer">Styles</p>
                    </div>
                </div>
            </div>
            <footer className="bg-theme-gray-light dark:bg-theme-black text-center shadow-md py-[10px]">
                <p>&copy; 2024 Arclancer Blog. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer