import { Spinner } from "@nextui-org/spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black/10 fixed inset-0 z-[999] backdrop-blur-md">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
