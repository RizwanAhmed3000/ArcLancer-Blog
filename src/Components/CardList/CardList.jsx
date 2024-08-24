import React from 'react'
import BlogCard from './BlogCard/BlogCard'
import Pagination from '../Pagination/Pagination'

const CardList = () => {
    const array = [1, 2, 3, 4, 5, 6]
    return (
        <div className='cardListContainer'>
            <h1 className='text-[32px] font-semibold mb-[20px]'>Recent Blogs</h1>
            <div className="postListContainer">
                {
                    array.map((data, index) => (
                        <BlogCard data={data} key={index} />
                    ))
                }
            </div>
            <Pagination />
        </div>
    )
}

export default CardList