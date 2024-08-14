import Image from "next/image"
import Link from "next/link"

const BlogCard = ({data}) => {
    return (
        <div className="cardConatiner flex items-center gap-[25px] mb-[50px]">
            <div className="img relative h-[200px] object-cover flex-1">
                <Image src={"/Travel.jpg"} fill className="rounded" />
            </div>
            <div className="text flex-[2] flex flex-col gap-[5px]">
                <div className="details flex gap-[20px] items-center">
                    <span className="postedAt text-theme-orange">8/13/2024</span>
                    <span className="categoryName bg-theme-gray-light py-[5px] px-[10px] rounded">Travel</span>
                </div>
                <Link href={"/"}>
                    <h1 className="text-[22px] font-semibold">This is the blog main title</h1>
                </Link>
                <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod enim hic ex libero amet quis, temporibus omnis quisquam tenetur dignissimos laborum earum excepturi itaque exercitationem eligendi. Impedit doloribus facere.</p>
                <Link href={"/"} className="font-semibold underline-offset-4 underline hover:text-theme-orange transition duration-150  w-fit">
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default BlogCard