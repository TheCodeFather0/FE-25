import React from "react";

const Loading = () => {
  return (
    <div className="container mx-auto max-w-7xl py-5">
      <div className="px-5 py-5 grid grid-cols-4 gap-5">
        {[...Array(12).keys()].map((i) => {
          return (
            <div key={i} className="border border-zinc-400 p-2 rounded-md animate-pulse">
              <h2 className="bg-stone-200 py-2"></h2>
              <p className="bg-stone-200 py-2 my-3"></p>
              <div className="bg-stone-200 h-24"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Loading;
