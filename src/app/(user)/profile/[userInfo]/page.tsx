import ErrorBoundary from "@/src/components/ErrorBoundary";
import UserInformation from "./_components/UserInformation";
import { Suspense } from "react";
import Loader from "@/src/components/ui/Loader";

type TProps = {
  params: any;
};

const DynamicProfile = ({ params }: TProps) => {
  const userId = params?.userInfo;

  return (
    <>
      <ErrorBoundary fallback={<p>Error</p>}>
        <Suspense fallback={<Loader />}>
          <UserInformation userId={userId} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default DynamicProfile;
