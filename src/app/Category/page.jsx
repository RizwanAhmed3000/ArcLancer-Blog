import CardList from '@/Components/CardList/CardList'
import SideMenu from '@/Components/SideMenu/SideMenu'
import React from 'react'

const CategoryBlog = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1
    const { cat } = searchParams
    return (
        <div>
            <h1 className='bg-theme-orange text-theme-white text-[32px] font-bold text-center rounded py-[15px] my-[25px]'>{`${cat} Blogs`}</h1>
            <div className="flex gap-[50px] my-[20px] tabletRg:flex-col">
                <div className='flex-[5]'>
                    <CardList page={page} cat={cat} />
                </div>
                <div className='flex-[2]'>
                    <SideMenu />
                </div>
            </div>
        </div>
    )
}

export default CategoryBlog