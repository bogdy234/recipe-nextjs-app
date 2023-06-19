import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { IMeal } from "./interfaces/meal";

export default async function Home() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    { next: { tags: ["randomRecipe"] } }
  );
  const data = await res.json();
  const meal = data?.meals[0] as IMeal;

  return (
    <>
      <div className="min-h-screen flex flex-col justify-start">
        <Navbar />
        <div>Content</div>
        <Image
          width={200}
          height={200}
          src={meal.strMealThumb}
          alt={"recipe"}
        />
        <Footer />
      </div>
    </>
  );
}
