import React from 'react'
import BlogCard from './BlogCard/BlogCard'
import Pagination from '../Pagination/Pagination'

const getData = async (page) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, { cache: "no-store" })
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json();
}


const CardList = async ({ page }) => {
    const array = [1, 2, 3, 4, 5, 6]
    const {posts, count} = await getData(page);
    // console.log(posts)

    const postPerPage = 2

    const hasPrev = postPerPage * (page - 1) > 0;
    const hasNext = postPerPage * (page - 1) + postPerPage < count

    return (
        <div className='cardListContainer'>
            <h1 className='text-[32px] font-semibold mb-[20px]'>Recent Blogs</h1>
            <div className="postListContainer">
                {
                    posts?.map((data) => (
                        <BlogCard data={data} key={data._id} />
                    ))
                }
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
        </div>
    )
}

export default CardList