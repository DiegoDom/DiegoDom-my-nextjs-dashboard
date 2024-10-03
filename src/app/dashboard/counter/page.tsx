import { Metadata } from "next";
import { CartCounter } from "@/shopping-cart";

export const metadata: Metadata = {
  title: "Counter",
  description: "Client side local state",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Items into the shopping cart</span>
      <CartCounter value={7} />
    </div>
  );
}
