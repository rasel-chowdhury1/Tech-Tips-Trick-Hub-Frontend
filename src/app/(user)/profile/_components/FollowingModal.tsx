import CustomModal from "@/src/components/ui/CustomModal";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { TUserFollowing } from "@/src/types";

interface FollowingModalProps {
  isOpen: boolean;
  onClose: () => void;
  following: TUserFollowing[];
}

const FollowingModal = ({
  isOpen,
  onClose,
  following,
}: FollowingModalProps) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Following"
      footer={false}
    >
      <div>
        {following.length >= 0 && (
          <p className="text-center mb-5">No Following Available</p>
        )}
        {following?.map((item) => (
          <div key={item?._id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={item.avatar}
                alt="avatar"
                height={60}
                width={60}
                className="size-[60px] object-cover rounded-full"
              />
              <Link href={`/profile/${item._id}`}> {item?.name}</Link>
            </div>
            <Button>Unfollow</Button>
          </div>
        ))}
      </div>
    </CustomModal>
  );
};

export default FollowingModal;
