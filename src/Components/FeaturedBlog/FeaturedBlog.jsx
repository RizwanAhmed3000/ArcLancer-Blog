import Image from "next/image"

const FeaturedBlog = () => {
    return (
        <div className="featureConatiner w-[100%] h-[calc(100vh-60px)] bg-slate-400 p-[50px]">
            <div className="featureWrapper">
                <div className="mainTitle">
                    This is the Headlines
                </div>
                <div className="heading">
                    this is the blog heading
                </div>
                <div className="smallDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis illo voluptatum eligendi quos, ratione facilis rem fugiat nihil non sapiente cumque labore, velit explicabo tempora quis itaque voluptatem modi delectus.
                </div>
                <button>
                    Read More
                </button>
                <div className="imgContainer w-[500px] h-[500px] relative">
                    <Image src='/img1.jpg' className="object-contain" fill/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBlog