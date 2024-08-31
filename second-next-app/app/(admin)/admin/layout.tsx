import Link from "next/link";
import React from "react";
import "../../globals.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Link href="/" className="inline-block p-2 decoration-black">Ana sehifeye kecid</Link>
      {children}
    </div>
  );
};

export default layout;
