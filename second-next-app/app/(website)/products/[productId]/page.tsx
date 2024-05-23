import React from "react";
import Image from "next/image";
import { getData } from "@/Utils/GetData";

interface IProps {
  params: {
    productId: string;
  };
}


const page = async ({ params }: IProps) => {
  const { title, description, thumbnail } = await getData(
    `https://dummyjson.com/products/${params.productId}`
  );

  return (
    <>
      {title ? (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <Image src={thumbnail} alt="thumbnail" width={300} height={300} />
        </div>
      ) : (
        <p className="text-red-600 text-2xl">data tapilmadi</p>
      )}
    </>
  );
};

export default page;
