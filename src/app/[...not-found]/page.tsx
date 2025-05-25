import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
};

export default function NotFound() {
  return (
    <div className="h-screen pb-24 flex flex-col items-center justify-center font-semibold">
      <p className="text-8xl">404</p>
      <p className="text-4xl">Not Found</p>
    </div>
  );
}
