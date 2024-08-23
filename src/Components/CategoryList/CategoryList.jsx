import CategoryBox from "./CategoryBox/CategoryBox"

const CategoryList = () => {
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
    // console.log(category)
    return (
        <>
            <h1 className="text-[32px] font-semibold mb-[20px]">
                Popular Categories
            </h1>
            <div className="w-[100%] flex items-center justify-evenly gap-[50px] flex-wrap py-[10px]">
                {
                    category.map((item, index) => (
                        <CategoryBox data={item} key={index} />
                    ))
                }
            </div>
        </>
    )
}

export default CategoryList