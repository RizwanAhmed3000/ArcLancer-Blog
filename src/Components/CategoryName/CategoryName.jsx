import React from 'react'

const CategoryName = ({category, type}) => {
    return (
        <span className={`${type === "small" && "text-[12px]"} categoryName bg-theme-gray-light py-[5px] px-[10px] rounded w-max`}>{category}</span>
    )
}

export default CategoryName