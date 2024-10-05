import AboutUs from "@/src/components/UI/AboutUs/AboutUs";
import AuthorTeam from "@/src/components/UI/AuthorTeam/AuthorTeam";

const Page = () => {
  return (
    <div>
      <div className="py-12">
        {/* Main Heading Section */}
        <div className=" mx-auto text-center   light light:bg-[#F9F9F9] dark dark:bg-[#1A1A1A] p-7">
          <h1 className="text-4xl font-semibold mb-8   ">About Us</h1>
        </div>
        <div className="container mx-auto">
          <AboutUs />
        </div>

        {/* Subheading Section */}
        {/* <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Meet Our Publishing Authors</h2>
          <p className="mt-4 ">
            At [Your Publishing House Name], we believe in the power of
            storytelling. Our dedicated authors are committed to bringing
            diverse voices and fresh perspectives to the literary world.
          </p>
          <p className="mt-2 ">
            Wherever and whenever you need us, we are here for you – contact us
            for all your support needs. Be it technical assistance, general
            queries, or information support, our team is always ready to help.
          </p>
          <p className="mt-2 ">
            Join us on this exciting journey of exploration and knowledge.
            Together, we can turn ideas into reality and inspire readers around
            the globe.
          </p>
        </div> */}
      </div>

      <div>
        <AuthorTeam />
      </div>
    </div>
  );
};

export default Page;
