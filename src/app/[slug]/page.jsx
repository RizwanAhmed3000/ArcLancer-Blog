import Comments from '@/Components/Comments/Comments'
import SideMenu from '@/Components/SideMenu/SideMenu'
import Image from 'next/image'
import React from 'react'

const SingleBlogPage = () => {
    return (
        <div className='container'>
            <div className="imgContainer w-[100%] h-[350px] relative  rounded-tl-[5rem] rounded-br-[5rem]">
                <Image src='/img1.jpg' className="object-cover rounded-tl-[5rem] rounded-br-[5rem]" fill />
            </div>
            <div className="mainHeading my-[15px]">
                <h1 className='text-[32px] font-bold tracking-widest text-balance'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit adipisicing elitadipisicing elit</h1>
            </div>
            <div className="authorDetail flex gap-[20px] items-center mb-[15px]">
                <div className='w-[50px] h-[50px] relative rounded-full'>
                    <Image src='/img1.jpg' className="object-cover rounded-full" fill />
                </div>
                <div>
                    <p className="name text-theme-orange font-semibold text-[18px]">Author</p>
                    <p className="date text-theme-gray text-[14px]">24 August 2024</p>
                </div>
            </div>
            <div className="flex gap-[50px] my-[20px] tabletRg:flex-col">
                <div className='flex-[5]'>
                    <div className="postTextContainer">
                        <p className='blogText mb-[15px] text-[18px] tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus unde impedit numquam explicabo veniam obcaecati et porro itaque praesentium dicta. Expedita neque suscipit voluptates dolorem doloremque quos architecto, illum eaque sequi magnam iusto at reiciendis dicta excepturi, fugiat itaque nisi eveniet laudantium? Reprehenderit harum provident sapiente dicta eveniet blanditiis obcaecati nam dolores amet iste quam distinctio rerum eligendi laboriosam sint aspernatur excepturi consequatur temporibus a, dolorum tempora minima veniam aliquid accusantium? Esse vitae a id distinctio. Aspernatur, rerum! Praesentium ullam similique modi quis nobis architecto, voluptatibus vero unde quam neque repellat magni porro, aliquid, assumenda esse? Voluptatum, consectetur repellat cupiditate illum necessitatibus, placeat laborum cupiditate sint ratione dolorum aliquam dolorem quisquam! Nobis repellat repellendus laborum perferendis a quam neque, in iure?</p>
                        <p className='blogText mb-[15px] text-[18px] tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus unde impedit numquam explicabo veniam obcaecati et porro itaque praesentium dicta. Expedita neque suscipit voluptates dolorem doloremque quos architecto, illum eaque sequi magnam iusto at reiciendis dicta excepturi, fugiat itaque nisi eveniet laudantium? Reprehenderit harum provident sapiente dicta eveniet blanditiis obcaecati nam dolores amet iste quam distinctio rerum eligendi laboriosam sint aspernatur excepturi consequatur temporibus a</p>
                        <p className='blogText mb-[15px] text-[18px] tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus unde impedit numquam explicabo veniam obcaecati et porro itaque praesentium dicta. Expedita neque suscipit voluptates dolorem doloremque quos architecto, illum eaque sequi magnam iusto at reiciendis dicta</p>
                    </div>
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