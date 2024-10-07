import React from "react";
import { Avatar, Grid, Box } from "@mui/material";
import Rating from "@mui/material/Rating";
const ProductReviewCard = () => {
  return (
    <div>
      {/* same we did in the previous footer page normal button div or capital these are componenst we use via frtam,ework */}
      <Grid container spacing={2} gap={3}>
        {/* 1st grid */}
        <Grid item xs={1}>
          <Box>
            {/* to make it sqURE WE HAVE GIVEN height and width same */}
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        {/* // 2 grid */}
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Raaam</p>
              <p className="opacity-70">April 5,2024</p>
            </div>
          </div>

          <Rating
            value={4.5}
            name="half-rating"
            readOnly
            precision={0.5}
          ></Rating>
          <p>nice product,I love this shirt</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
