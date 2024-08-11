
const CategoryBox = ({ categoryName, icon }) => {
    return (
        <div>
            <div className="bg-theme-gray-light drop-shadow-sm w-[150px] h-[50px] rounded text-[18px] flex items-center justify-center cursor-pointer dark:bg-theme-black dark:border-theme-white dark:border-[2px] dark:hover:bg-theme-white dark:hover:text-theme-black transition duration-150">
                <span className="icon">{icon}</span>
                {categoryName}
            </div>
        </div>
    )
}

export default CategoryBox