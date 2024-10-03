import { Metadata } from "next";
import { WidgetsGrid } from "@/components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "General app stats",
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">General information</span>
      <WidgetsGrid />
    </div>
  );
}
