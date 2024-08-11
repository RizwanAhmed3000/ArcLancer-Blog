import Image from "next/image"

const FeaturedBlog = () => {
    return (
        <div className="featureConatiner w-[100%] h-[calc(100vh-70px)] py-[50px] relative tabletRg:flex tabletRg:flex-col tabletRg:justify-center tabletSm:items-center">
            <div className="hidden tabletSm:flex absolute top-0 w-[100%]">
                <div className="imgContainer w-[100%] h-[210px] relative ">
                    <Image src='/img1.jpg' className="object-cover" fill />
                </div>
            </div>
            <div className="mainTitle tabletSm:bg-theme-white tabletSm:dark:!bg-theme-black tabletSm:w-[100%] tabletSm:flex tabletSm:justify-center tabletRg:mb-[50px] mt-[50px] mb-[100px] tabletSm:mb-[20px] relative">
                <div className="tabletSm:hidden bg-theme-black dark:bg-theme-white h-[32px] w-1 absolute bottom-[2px] left-[-10px]"></div>
                <h1 className="text-[20px]">This is the <br className=""/> <b className="text-[36px] leading-8 tracking-widest">Headlines</b></h1>
            </div>
            <div className="heading">
                <h1 className="text-[28px] font-semibold tabletSm:text-center">This is the blog heading</h1>
            </div>
            <div className="smallDesc bg-inherit tabletRg:w-[60%] tabletSm:!w-[100%] w-[40%] text-[15px] mb-[60px] tabletSm:text-center tabletSm:mb-[30px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis illo voluptatum eligendi quos, ratione facilis rem fugiat nihil non sapiente cumque labore, velit explicabo tempora quis itaque voluptatem modi delectus.
            </div>
            <button className="bg-theme-orange rounded tabletRg:w-[50%] py-3 px-6 hover:bg-theme-orange-dark transition duration-150">
                Read More
            </button>
            <div className="flex">
                <div className="tabletSm:hidden tabletRg:right-0 tabletRg: absolute right-[20%] top-0 h-[100%] w-[35%] rounded-tl-[10.5rem]">
                    <div className="imgContainer w-[100%] h-[calc(100vh-100px)] relative rounded-tl-[10.5rem]">
                        <Image src='/img1.jpg' className="object-cover rounded-tl-[10.5rem]" fill />
                    </div>
                </div>
                <div className="tabletRg:hidden absolute right-0 top-0 h-[70%] w-[18%] rounded-br-[10.5rem]">
                    <div className="imgContainer w-[100%] h-[100%] relative rounded-br-[10.5rem]">
                        <Image src='/img1.jpg' className="object-cover rounded-br-[10.5rem]" fill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBlog