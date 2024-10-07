import CustomModal from "@/src/components/ui/CustomModal";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { TUserFollowing } from "@/src/types";

interface FollowerModalProps {
  isOpen: boolean;
  onClose: () => void;
  followers: TUserFollowing[];
}

const FollowerModal = ({ isOpen, onClose, followers }: FollowerModalProps) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Followers"
      footer={false}
    >
      <div>
        {followers.length >= 0 && (
          <p className="text-center mb-5">No Followers Available</p>
        )}
        {followers?.map((item) => (
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
            <Button>Follow back</Button>
          </div>
        ))}
      </div>
    </CustomModal>
  );
};

export default FollowerModal;
