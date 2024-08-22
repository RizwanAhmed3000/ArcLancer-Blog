import React from 'react'
import SideCard from './SideCard/SideCard'
import CategoryBox from '../CategoryList/CategoryBox/CategoryBox'

const SideMenu = () => {
    const category = [
        {
            categoryName: "Business",
            icon: 'business.jpg',
        },
        {
            categoryName: "Travel",
            icon: "Travel.jpg",
        },
        {
            categoryName: "Politics",
            icon: "politics.jpg",
        },
        {
            categoryName: "Culture",
            icon: "culture.png",
        },
        {
            categoryName: "Fashion",
            icon: "fashion.jpg",
        },
        {
            categoryName: "Food",
            icon: "food.jpg",
        },
    ]

    return (
        <div className='sideMenuContainer flex-[2]'>
            <h2 className='smallTitle text-theme-gray'>{`What's hot`}</h2>
            <h1 className='mainTitle text-[32px] font-semibold'>Most Popular</h1>
            <div className="first">
                <SideCard />
                <SideCard />
                <SideCard />
                <SideCard />
            </div>
            <h2 className='smallTitle text-theme-gray mt-[25px]'>Discover By Topics</h2>
            <h1 className='mainTitle text-[32px] font-semibold'>Categories</h1>
            <div className="category mt-[25px] flex flex-wrap items-center gap-[20px]">
                {
                    category.map((item, index) => (
                        <span className='bg-theme-gray-light shadow-md w-[100px] h-[40px] flex items-center justify-center rounded cursor-pointer dark:bg-theme-black dark:border-theme-white dark:border-[2px] dark:hover:bg-theme-white dark:hover:text-theme-black transition duration-150' key={item.categoryName}>
                            {
                                item.categoryName
                            }
                        </span>
                    ))
                }
            </div>
            <h2 className='smallTitle text-theme-gray mt-[25px]'>Pick By Editor</h2>
            <h1 className='mainTitle text-[32px] font-semibold'>{`Editor's Pick`}</h1>
            <div className="first">
                <SideCard />
                <SideCard />
                <SideCard />
                <SideCard />
            </div>
        </div>
    )
}


export default SideMenu