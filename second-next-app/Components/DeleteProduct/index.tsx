"use client"
import { getData } from "@/Utils/GetData";
import React from "react";

const DeleteProduct = ({ id }: { id: number }) => {
  const delProduct = async() => {
    const isAgree = confirm("brat silirsenmi?")
    
    if (isAgree) {
        fetch('http://localhost:3001/products/' + id,{
            method:'DELETE'
        }).then((res) => {
            alert("ugurla silindi...")
            location.reload();
        })
    }
    
  };
  return (
    <button className="mx-1 text-2xl" onClick={delProduct}>
      🗑️
    </button>
  );
};

export default DeleteProduct;
