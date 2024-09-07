import CategoryBox from "./CategoryBox/CategoryBox"

const getData = async () => {
    const res = await fetch('http://localhost:3000//api/categories', { cache: "no-store" })
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json();
}

const CategoryList = async () => {

    const data = await getData();
    // console.log(data)
    return (
        <>
            <h1 className="text-[32px] font-semibold mb-[20px]">
                Popular Categories
            </h1>
            <div className="w-[100%] flex items-center justify-evenly gap-[50px] flex-wrap py-[10px]">
                {
                    data?.data.map((item, index) => (
                        <CategoryBox data={item} key={item._id} />
                    ))
                }
            </div>
        </>
    )
}

export default CategoryList