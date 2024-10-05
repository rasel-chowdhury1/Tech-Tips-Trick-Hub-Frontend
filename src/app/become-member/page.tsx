"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

import PremiumMonthlyMember from "@/src/components/UI/BecomeAmember/PremiumMonthlyMember";
import PremiumYearlyMember from "@/src/components/UI/BecomeAmember/PremiumYearlyMember";

export default function page() {
  const [selected, setSelected] = React.useState("photos");

  return (
    <div>
      <div>
        <div className="flex items-center justify-between p-4 mb-16 bg-[#F9F9F9] dark:bg-[#b4b1b1] shadow-md">
          {/* Banner content */}
          <div className="flex items-center space-x-2 mx-auto">
            <p className="text-sm text-gray-900 dark:text-black text-center">
              <Link
                className="text-2xl text-black font-semibold dark:text-black font-serif"
                href="/"
              >
                Gadget <span className="text-pink-500">Guru Hub</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-semibold font-serif">
          Support great writing and access all stories on{" "}
          <span className="text-pink-500">Gadget Guru Hub</span>.
        </h1>
      </div>

      {/* Payment options */}
      <div className="flex justify-center max-w-3xl mx-auto mb-8">
        <div className="flex w-full flex-col items-center">
          <Tabs
            aria-label="Options"
            selectedKey={selected}
            variant="bordered"
            onSelectionChange={setSelected}
          >
            <Tab key="pay monthly" title="Pay Monthly">
              <Card>
                <CardBody>
                  <PremiumMonthlyMember />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="pay annually" title="Pay Annually">
              <Card>
                <CardBody>
                  <PremiumYearlyMember />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
