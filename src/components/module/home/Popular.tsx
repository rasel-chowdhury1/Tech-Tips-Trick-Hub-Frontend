import { Button } from "@nextui-org/button";
import Image from "next/image";
import b1Img from "@/src/assets/banner/techMaster3.png";
import b3Img from "@/src/assets/banner/techMaster4.png";
import b2Img from "@/src/assets/banner/techMaster6.png";
const articles = [
  {
    title: "Understanding Cloud Architecture",
    content:
      "Cloud computing has revolutionized the way software applications are deployed and scaled.",
    upvotes: 150,
    image: b1Img,
    author: "Piklu",
  },
  {
    title: "Getting Started with Machine Learning",
    content:
      "Machine learning is transforming industries by enabling systems to learn from data..",
    upvotes: 250,
    image: b3Img,
    author: "Rasel",
  },
  {
    title: "Natural Language Processing with Python",
    content:
      "NLP is a branch of AI that enables computers to understand and process human language.",
    upvotes: 300,
    image: b2Img,
    author: "Sara Nomad",
  },
];

const Popular = () => {
  return (
    <div className="py-5 mb-10">
      <div className="flex flex-col justify-center items-center">
        <h3 className="subHeading">Most Popular</h3>
        <h2 className="heading">Explore top Articles</h2>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10 lg:mb-10 mb-5">
        {articles.map((item, index) => {
          return (
            <div key={index} className="space-y-3">
              <Image
                src={item.image}
                alt="popular-article"
                height={400}
                width={400}
                className="rounded-2xl w-full lg:h-[300px] object-cover"
              />
              <h3 className="text-xl font-semibold">
                {item.title.slice(0, 35)}...
              </h3>
              <p>{item.content.slice(0, 80)}...</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center pt-5">
        <Button className="custom-btn" radius="sm">
          Explore More Articles
        </Button>
      </div>
    </div>
  );
};

export default Popular;
