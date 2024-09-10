import Comments from '@/Components/Comments/Comments'
import SideMenu from '@/Components/SideMenu/SideMenu'
import Image from 'next/image'
import React from 'react'

const getData = async (slug) => {
    // console.log(slug)
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, { cache: "no-store" })
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json();
}

const SingleBlogPage = async ({ params }) => {
    const { slug } = params;
    // console.log(params)
    const data = await getData(slug)
    const { post } = data
    // console.log(post)
    return (
        <div className='container'>
            {post?.image && <div className="imgContainer w-[100%] h-[350px] relative  rounded-tl-[5rem] rounded-br-[5rem]">
                <Image src='/img1.jpg' className="object-cover rounded-tl-[5rem] rounded-br-[5rem]" fill />
            </div>}
            <div className="mainHeading my-[15px]">
                <h1 className='text-[32px] font-bold tracking-widest text-balance'>{post?.title}</h1>
            </div>
            <div className="authorDetail flex gap-[20px] items-center mb-[15px]">
                {post?.user.image && <div className='w-[50px] h-[50px] relative rounded-full'>
                    <Image src={post?.user.image} className="object-cover rounded-full" fill />
                </div>}
                <div>
                    <p className="name text-theme-orange font-semibold text-[18px]">{post?.user?.name}</p>
                    <p className="date text-theme-gray text-[14px]">{post?.createdAt.substring(0, 10)}</p>
                </div>
            </div>
            <div className="flex gap-[50px] my-[20px] tabletRg:flex-col">
                <div className='flex-[5]'>
                    <div className="postTextContainer" dangerouslySetInnerHTML={{ __html: post?.desc }} />
                    <div className="commentsContainer">
                        <Comments />
                    </div>
                </div>
                <div className='flex-[2]'>
                    <SideMenu />
                </div>
            </div>
        </div>
    )
}

export default SingleBlogPage