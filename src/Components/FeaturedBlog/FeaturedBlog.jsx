import Image from "next/image"

const FeaturedBlog = () => {
    return (
        <div className="featureConatiner w-[100%] h-[calc(100vh-70px)] py-[50px] relative">
            <div className="mainTitle mt-[50px] mb-[100px] relative">
                <div className="bg-theme-black dark:bg-theme-white h-[32px] w-1 absolute bottom-[2px] left-[-10px]"></div>
                <h1 className="text-[20px]">This is the <br /> <b className="text-[32px] leading-8 tracking-widest">Headlines</b></h1>
            </div>
            <div className="heading">
                <h1 className="text-[28px] font-semibold">This is the blog heading</h1>
            </div>
            <div className="smallDesc bg-inherit w-[40%] text-[15px] mb-[60px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis illo voluptatum eligendi quos, ratione facilis rem fugiat nihil non sapiente cumque labore, velit explicabo tempora quis itaque voluptatem modi delectus.
            </div>
            <button className="bg-theme-orange rounded py-3 px-6 hover:bg-theme-orange-soft transition duration-150">
                Read More
            </button>
            <div className="absolute right-[20%] top-0 h-[100%] w-[40%] rounded-tl-[10.5rem]">
                <div className="imgContainer w-[100%] h-[100%] relative rounded-tl-[10.5rem]">
                    <Image src='/img1.jpg' className="object-cover rounded-tl-[10.5rem]" fill />
                </div>
            </div>
            <div className="absolute right-0 top-0 h-[70%] w-[18%] rounded-br-[10.5rem]">
                <div className="imgContainer w-[100%] h-[100%] relative rounded-br-[10.5rem]">
                    <Image src='/img1.jpg' className="object-cover rounded-br-[10.5rem]" fill />
                </div>
            </div>
        </div>
    )
}

export default FeaturedBlog