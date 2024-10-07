const BannerSection = () => {
  return (
    <div>
      <section
        className="cursor-pointer mt-20 relative overflow-hidden h-64 "
        style={{
          backgroundImage: "url(https://i.ibb.co/vHV1HzM/banner-Imge.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      />
    </div>
  );
};

export default BannerSection;
