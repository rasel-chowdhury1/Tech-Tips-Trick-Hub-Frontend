import { Button } from "@nextui-org/button";
import Image from "next/image";

const articles = [
  {
    title: "Top 10 Hidden Gems to Visit in Europe",
    content:
      "Discover the lesser-known but equally breathtaking destinations in Europe that will leave you in awe, from charming villages to stunning coastlines.",
    upvotes: 150,
    image: "/popular/Europe.jpeg",
    author: "Emily Wanderlust",
  },
  {
    title: "How to Travel on a Budget Without Sacrificing Comfort",
    content:
      "Learn practical tips on how to save money while traveling, from finding affordable accommodations to scoring the best flight deals, without compromising your comfort.",
    upvotes: 250,
    image: "/popular/comfort.jpg",
    author: "John Backpacker",
  },
  {
    title: "The Ultimate Packing Guide for Every Type of Trip",
    content:
      "Master the art of packing with our comprehensive guide that covers everything from short getaways to long-term travel, ensuring you have everything you need without overpacking.",
    upvotes: 300,
    image: "/popular/Packing-Guide.jpg",
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
