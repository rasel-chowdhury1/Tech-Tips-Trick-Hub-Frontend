import { Card, CardBody } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import { ReactNode } from "react";

type TTabs = {
  id: string;
  label: string;
  content: ReactNode;
};

type TProps = {
  tabs: TTabs[];
};

const CustomTab = ({ tabs }: TProps) => {
  return (
    <div className="flex w-full flex-col">
      <Tabs fullWidth aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card shadow="none">
              <CardBody>{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default CustomTab;
