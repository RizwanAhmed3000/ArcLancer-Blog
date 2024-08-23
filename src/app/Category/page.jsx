import CardList from '@/Components/CardList/CardList'
import SideMenu from '@/Components/SideMenu/SideMenu'
import React from 'react'

const CategoryBlog = () => {
    return (
        <div>
            <h1 className='bg-theme-orange text-theme-white text-[32px] font-bold text-center rounded py-[15px] my-[25px]'>{`Business Blogs`}</h1>
            <div className="flex gap-[50px] my-[20px] tabletRg:flex-col">
                <div>
                    <CardList />
                </div>
                <div>
                    <SideMenu />
                </div>
            </div>
        </div>
    )
}

export default CategoryBlog