import React from "react";
import AddressCard from "./../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import { Grid, Box } from "@mui/material";
import { purple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star"; // Correct import

const OrderDetails = () => {
  return (
    // large screens px-20 otherwise px-5
    <div className="px-5 lg:px-20">
      <div className="border">
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>

      <div className="space-y-5 border-rounded">
        {[1, 1, 1, 1].map((item) => (
          <Grid
            container
            spacing={2}
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            {/* Grid item containing product image and details */}
            <Grid item xs={6}>
              <div className="flex cursor-pointer">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://m.media-amazon.com/images/I/51dAV1h36zL._AC_AA180_.jpg"
                  alt="Product"
                />
                <div className="ml-5 space-y-2">
                  <p className="mb-2">HUION HS64 Graphics</p>
                  <p className="opacity-50 text-xs font-semibold">Size: M</p>
                  <p className="opacity-50 text-xs font-semibold">
                    Color: Black
                  </p>
                </div>
              </div>
            </Grid>

            {/* Grid item for rating and review */}
            <Grid item>
              <Box sx={{ color: purple[500] }}>
                <StarIcon fontSize={"1rem"} />
                <span className="ml-2">Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
