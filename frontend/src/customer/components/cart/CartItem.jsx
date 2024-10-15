import { IconButton, Button } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// icon sare mui icons se mil jate hai
const CartItem = () => {
  return (
    <div classname="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://m.media-amazon.com/images/I/51dAV1h36zL._AC_AA180_.jpg"
            alt="cartimage"
          />
        </div>
        {/* using tailwind here whi whatsap pr sb hai ar baki spring bhi start krnsa h aage ka revise ar usko bhi use krna h */}
        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            HUION HS64 Graphics Drawing Tablet Battery-Free Stylus Android
            Windows macOS
          </p>
          <p className="opacity-70">HS64, 6.3 x 4 inch</p>
          <p className="opacity-70 mt-2"> Seller</p>
          <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
            <p className="font-semibold">$199</p>
            <p className="opacity-50 line-through">$12</p>
            <p className="text-green-600 font-semibold">6%off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3 </span>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        {/* jo things ek sath u8nhe ek div ke inside wrap kro */}
        <div>
          <Button>remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
