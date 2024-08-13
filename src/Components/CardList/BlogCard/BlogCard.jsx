import Image from "next/image"

const BlogCard = () => {
    return (
        <div className="cardConatiner">
            <div className="img relative w-[100px] h-[100px] object-cover">
                <Image src={"/Travel.jpg"} fill className="rounded"/>
            </div>
            <div className="text">
                <div className="details">
                    <span className="postedAt">8/13/2024</span>
                    <span className="categoryName">Travel</span>
                </div>
                <h1>This is the blog main title</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod enim hic ex libero amet quis, temporibus omnis quisquam tenetur dignissimos laborum earum excepturi itaque exercitationem eligendi. Impedit doloribus facere hic repellat laudantium porro aliquam iste eum. Ratione rerum, omnis voluptates fugiat tempore repellat numquam nesciunt aspernatur architecto autem ullam voluptatibus?</p>
                <div className="readMore">
                    Read More
                </div>
            </div>
        </div>
    )
}

export default BlogCard