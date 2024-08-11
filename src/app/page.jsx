import CategoryList from "@/Components/CategoryList/CategoryList";
import FeaturedBlog from "@/Components/FeaturedBlog/FeaturedBlog";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[100%]">
      <div className="my-[20px]">
        <FeaturedBlog />
      </div>
      <div className="categoryContainer my-[20px]">
        <CategoryList />
      </div>
    </main>
  );
}
