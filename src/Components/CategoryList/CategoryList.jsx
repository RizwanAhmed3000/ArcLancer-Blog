import CategoryBox from "./CategoryBox/CategoryBox"

const CategoryList = () => {
    const category = [
        {
            categoryName: "Sports",
            icon: "⚽",
        },
        {
            categoryName: "Tech",
            icon: "💻",
        },
        {
            categoryName: "Politics",
            icon: "😎",
        },
        {
            categoryName: "World",
            icon: "🌏",
        },
        {
            categoryName: "Fashion",
            icon: "💄",
        },
    ]
    return (
        <>
            <h1 className="text-[32px] font-semibold mb-[20px]">
                Popular Categories
            </h1>
            <div className="w-[100%] flex items-center justify-evenly gap-[50px] flex-wrap py-[10px]">
                {
                    category.map((item, index)=>(
                        <CategoryBox icon={item.icon} categoryName={item.categoryName} key={index}/>
                    ))
                }
            </div>
        </>
    )
}

export default CategoryList