import React from "react";
import CartItem from "./CartItem";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        {/* dividing the cols */}
        <div className="col-span-2">
          {[1, 1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            {/* DIVIDER OR USE HR FIOR LINES */}
            <Divider />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹ 4,098.00</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">-₹ 4,08</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delievery</span>
                <span className="text-green-600">Free</span>
              </div>
              <Divider />
              <div className="flex justify-between pt-3 text-black">
                <span>Total Amount</span>
                <span className="text-green-600">₹ 45678</span>
              </div>
            </div>
            <Button
              variant="contained"
              className="w-full  mt-5"
              color="secondary "
              sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
