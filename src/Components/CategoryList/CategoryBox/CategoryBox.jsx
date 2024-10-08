import Image from "next/image"
import Link from "next/link"

const CategoryBox = ({ data }) => {
    // console.log(data)
    return (
        <Link href={`/Category?cat=${data.slug}`}>
            <div className="bg-theme-gray-light shadow-md w-[150px] h-[60px] rounded text-[18px] flex items-center justify-center cursor-pointer dark:bg-theme-black dark:border-theme-white dark:border-[2px] dark:hover:bg-theme-white dark:hover:text-theme-black transition duration-150 gap-2">
                <span className="icon relative w-[35px] h-[35px] rounded-full">
                    {data?.image && <Image src={`/${data.image}`} fill className="object-cover rounded-full"/>}
                </span>
                {data.title}
            </div>
        </Link>
    )
}

export default CategoryBox