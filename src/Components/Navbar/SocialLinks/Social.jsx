import Link from "next/link";
import { FaFacebook, FaInstagram, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

const Social = () => {
    return (
        <div class="flex items-center gap-3">
            <Link href={"/"} className="p-[2px] border-transparent hover:border-theme-black  border-2 rounded transition duration-150 ease-out hover:ease-in">
                <FaFacebook fontSize={20} />
            </Link>
            <Link href={"/"} className="p-[2px] border-transparent hover:border-theme-black  border-2 rounded transition duration-150 ease-out hover:ease-in">
                <FaInstagram fontSize={20}/>
            </Link>
            <Link href={"/"} className="p-[2px] border-transparent hover:border-theme-black  border-2 rounded transition duration-150 ease-out hover:ease-in">
                <FaSquareXTwitter fontSize={20}/>
            </Link>
            <Link href={"/"} className="p-[2px] border-transparent hover:border-theme-black  border-2 rounded transition duration-150 ease-out hover:ease-in">
                <FaLinkedin fontSize={20}/>
            </Link>
        </div>

    )
}

export default Social