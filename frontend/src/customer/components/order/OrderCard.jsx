import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
const OrderCard = () => {
  return (
    // className or diurect put tailwind css name or either by manual and in other class
    <div className="p-5 shadow-lg hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        {/* inside puts three itmes price name and other three sections */}
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://m.media-amazon.com/images/I/51dAV1h36zL._AC_AA180_.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="mb-2">HUION HS64 Graphics </p>
              <p className="opacity-50 text-xs font-semibold ">Size: M</p>
              <p className="opacity-50 text-xs font-semibold ">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>र1099</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered On March 05</span>
              </p>
              <p className="text-xs">Your Item Has Been Delivered</p>
            </div>
          )}
          {/* mui icons and components are duifferent */}
          {false && (
            <p>
              <AdjustIcon />
              <span> Expected Delivery On March 05</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
