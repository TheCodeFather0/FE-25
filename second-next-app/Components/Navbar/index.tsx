"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { title: "Home", path: "/" },
    { title: "Products", path: "/products" },
    { title: "Admin", path: "/admin" },
  ];

  return (
    <div className="bg-stone-900 text-white py-3 px-4 flex gap-8 text-2xl">
      {links.map(({ title, path }) => (
        <Link key={title} href={path} className={pathname === path ? 'active' : ''}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
