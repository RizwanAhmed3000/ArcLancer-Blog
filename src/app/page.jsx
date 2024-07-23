import CategoryList from "@/Components/CategoryList/CategoryList";
import FeaturedBlog from "@/Components/FeaturedBlog/FeaturedBlog";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[100%]">
      <FeaturedBlog />
      <CategoryList />
    </main>
  );
}
