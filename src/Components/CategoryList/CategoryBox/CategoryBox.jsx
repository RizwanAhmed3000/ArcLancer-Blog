import Image from "next/image"

const CategoryBox = ({ data }) => {
    // console.log(data)
    return (
        <div>
            <div className="bg-theme-gray-light drop-shadow-sm w-[150px] h-[50px] rounded text-[18px] flex items-center justify-center cursor-pointer dark:bg-theme-black dark:border-theme-white dark:border-[2px] dark:hover:bg-theme-white dark:hover:text-theme-black transition duration-150 gap-2">
                <span className="icon relative w-[35px] h-[35px] rounded-full">
                    <Image src={`/${data.icon}`} fill className="object-cover rounded-full"/>
                </span>
                {data.categoryName}
            </div>
        </div>
    )
}

export default CategoryBox