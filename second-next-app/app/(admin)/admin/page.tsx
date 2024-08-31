import DeleteProduct from "@/Components/DeleteProduct";
import UpdateProduct from "@/Components/UpdateProduct";
import { IProduct } from "@/Types/Product";
import { getData } from "@/Utils/GetData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const url = "http://localhost:3001/products";

const page = async () => {
   const data = await getData("http://localhost:3001/products");

  return (
    <div>
      <div className="px-5 py-5 grid grid-cols-4 gap-5">
        {data.map((item: IProduct) => {
          return (
            <div
              key={item.id}
              className="border border-zinc-400 p-2 rounded-md"
            >
              <h2 className="truncate">{item.title}</h2>
              <p className="truncate">{item.description}</p>
              <Image
                className="h-20 mt-5"
                src={item.thumbnail}
                alt="product image"
                width={100}
                height={100}
                loading="lazy"
              />
              <Link
                href={`products/${item.id}`}
                className="inline-block bg-blue-500 text-white px-5 py-1 mt-5 rounded-sm"
              >
                More
              </Link>
              
              <DeleteProduct id={item.id}/>
              <UpdateProduct id={item.id}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};
 
export default page;
