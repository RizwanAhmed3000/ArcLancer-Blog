import CategoryBox from "./CategoryBox/CategoryBox"
import business from "../../../public/business.jpg"
import Link from "next/link"

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
    return (
        <>
            <h1 className="text-[32px] font-semibold mb-[20px]">
                Popular Categories
            </h1>
            <div className="w-[100%] flex items-center justify-evenly gap-[50px] flex-wrap py-[10px]">
                {
                    category.map((item, index) => (
                        <Link href={"/"}>
                            <CategoryBox data={item} key={index} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default CategoryList