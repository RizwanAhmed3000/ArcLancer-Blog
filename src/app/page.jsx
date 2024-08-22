import CardList from "@/Components/CardList/CardList";
import CategoryList from "@/Components/CategoryList/CategoryList";
import FeaturedBlog from "@/Components/FeaturedBlog/FeaturedBlog";
import SideMenu from "@/Components/SideMenu/SideMenu";
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
      <div className="flex gap-[50px] my-[20px] tabletRg:flex-col">
        <div>
          <CardList />
        </div>
        <div> 
          <SideMenu />
        </div>
      </div>
    </main>
  );
}
