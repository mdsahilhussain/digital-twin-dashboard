"use client";

import { ReactNode } from "react";
import { useStore } from "@/lib/store";

type SplitLayoutProps = {
  leftChildren: ReactNode;
  rightChildren: ReactNode;
};

const SplitLayout = ({ leftChildren, rightChildren }: SplitLayoutProps) => {
  const { verificationMode } = useStore();

  if (!verificationMode) {
    return <>{leftChildren}</>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-10">
      <div className="lg:w-1/2 w-full">{leftChildren}</div>
      <div className="lg:w-1/2 w-full bg-gray-900 rounded-2xl p-4">
        {rightChildren}
      </div>
    </div>
  );
};

export default SplitLayout;
