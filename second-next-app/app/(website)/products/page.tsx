"use client";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/Types/Product";
import { getData } from "@/Utils/GetData";
import Product from "@/Components/Product";
import Loading from "./loading";

const Page = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { products }: { products: IProduct[] } = await getData(
          "https://dummyjson.com/products"
        );
        setProducts(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter(({ title }) => {
    return title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto max-w-7xl ">
      <input
        type="text"
        placeholder="search"
        className="border border-stone-900 m-5 px-2 py-1 rounded-md"
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
      />
      <div className="px-5 py-5 grid grid-cols-4 gap-5">
        {filteredProducts.map((item: IProduct) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Page;
