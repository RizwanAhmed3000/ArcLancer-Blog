import CategoryName from "@/Components/CategoryName/CategoryName"
import Image from "next/image"
import Link from "next/link"

const BlogCard = ({ data, key }) => {
    // console.log(data)
    const { title, slug, desc, categorySlug, userEmail, createdAt } = data
    return (
        <div className="cardConatiner flex items-center gap-[25px] mb-[50px] tabletSm:flex-col" key={key}>
            <div className="img relative h-[200px] object-cover flex-1 tabletSm:w-[100%] tabletSm:h-[80px]">
                <Image src={"/Travel.jpg"} fill className="rounded" />
            </div>
            <div className="text flex-[2] flex flex-col gap-[5px]">
                <div className="details flex gap-[20px] items-center">
                    <span className="postedAt text-theme-orange">{createdAt.substring(0, 10)}</span>
                    <CategoryName category={categorySlug} />
                </div>
                <Link href={"/"}>
                    <h1 className="text-[22px] font-semibold">{title}</h1>
                </Link>
                <p className="text-gray-500">{desc}</p>
                <Link href={"/"} className="font-semibold underline-offset-4 underline hover:text-theme-orange transition duration-150  w-fit">
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default BlogCard