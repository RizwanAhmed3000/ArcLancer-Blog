import CategoryName from "@/Components/CategoryName/CategoryName"
import Image from "next/image"
import Link from "next/link"


const SideCard = () => {
    return (
        <Link href={'/'} className="flex items-center gap-[20px] mt-[25px]">
            <div className="imageContainer relative aspect-square flex-1">
                <Image src={'/food.jpg'} fill className="object-cover rounded-full"/>
            </div>
            <div className="textContainer flex-[4] flex flex-col gap-[5px]">
                <CategoryName category={"Travel"} type={"small"}/> 
                <div className="title text-[18px] font-semibold">
                    Lorem ipsum dolor
                </div>
                <div className="detail flex items-center gap-[5px]">
                    <span className="text-theme-gray text-[12px]">
                        Author
                    </span>
                    <span>-</span>
                    <span className="text-theme-orange text-[12px]">
                        21/8/2024
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default SideCard