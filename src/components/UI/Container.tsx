const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto max-w-8xl pt-16 px-3 md:px-6 flex-grow ">
      {children}
    </div>
  );
};

export default Container;
