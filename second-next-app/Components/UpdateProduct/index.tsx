"use client";
import { getData } from "@/Utils/GetData";
import React from "react";

const UpdateProduct = ({ id }: { id: number }) => {
  const updateProduct = async () => {
    const data = await getData("http://localhost:3001/products/" + id);

    const title = prompt("enter new title", data.title);
    const description = prompt("enter new description", data.description);
    const thumbnail = prompt("enter new thumbnail", data.thumbnail);

    if (title && description && thumbnail) {
      fetch("http://localhost:3001/products/" + id, {
        method: "PUT",
        body: JSON.stringify({
          title,
          description,
          thumbnail,
        }),
      }).then((res) => {
        if (res.status === 200) {
          alert("ugurla deyisdirildi");
          location.reload();
        }
      });
    } else {
      alert("xanalar bos buraxila bilmez");
    }
  };
  return (
    <button className="mx-1 text-2xl" onClick={updateProduct}>
      ✒️
    </button>
  );
};

export default UpdateProduct;
