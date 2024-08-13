import React from 'react'
import BlogCard from './BlogCard/BlogCard'

const CardList = () => {
    return (
        <div className='cardListContainer flex-[5]'>
            <h1 className='text-[32px] font-semibold mb-[20px]'>Recent Blogs</h1>
            <div className="postListContainer">
                <BlogCard />
                {/* <BlogCard />
                <BlogCard />
                <BlogCard /> */}
            </div>
        </div>
    )
}

export default CardList