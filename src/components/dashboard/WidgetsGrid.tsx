"use client";

import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget title={`${counter}`} subTitle="Products into the cart" href="/dashboard/counter" label="Counter" icon={<IoCartOutline size={70} className="text-blue-600" />} />
    </div>
  );
};
