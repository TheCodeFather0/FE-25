import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/Types/Product";

const Product = ({ id, title, description, thumbnail }: IProduct) => {
  return (
    <div className="border border-zinc-400 p-2 rounded-md">
      <h2 className="truncate">{title}</h2>
      <p className="truncate">{description}</p>
      <Image
        className="h-20 mt-5"
        src={thumbnail}
        alt="product image"
        width={100}
        height={100}
        loading="lazy"
      />
      <Link
        href={`products/${id}`}
        className="inline-block bg-blue-500 text-white px-5 py-1 mt-5 rounded-sm"
      >
        More
      </Link>
    </div>
  );
};

export default Product;
