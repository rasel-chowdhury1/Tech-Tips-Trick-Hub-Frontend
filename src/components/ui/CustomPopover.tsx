import { Button } from "@nextui-org/button";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { ReactNode } from "react";

type TProps = {
  title: ReactNode;
  children: ReactNode;
  icon?: boolean;
};

const CustomPopover = ({ title, icon = false, children }: TProps) => {
  return (
    <Popover placement="top" color="foreground">
      <PopoverTrigger>
        <Button isIconOnly={icon} className="capitalize">
          {title}
        </Button>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
