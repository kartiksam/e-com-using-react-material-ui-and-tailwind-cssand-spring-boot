import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    // already inbuilt class es directly workls here by giving name other wise give each div ourself name abndf then specify in new file and add file to it.
    <div
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border
      "
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">No-filter</h3>
        <p className="mt-2 text-sm text-gray-500">Men Solid pure Kurta</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
