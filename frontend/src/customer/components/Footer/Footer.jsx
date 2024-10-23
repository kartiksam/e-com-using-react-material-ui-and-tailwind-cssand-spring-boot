import React from "react";
import { Grid, Typography, Button } from "@mui/material";
// normnal button thius
// grid structure by def 12 mt-10 margin top
const Footer = () => {
  // simple if want to create using div diff and inside trhem we will put content there
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              ABOUT
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              BLOG
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              PRESS
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              JOBS
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              PARTNERS
            </Button>
          </div>
        </Grid>

        {/* 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Support
            </Button>
          </div>
        </Grid>
        {/* 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Api Status
            </Button>
          </div>
        </Grid>
        {/* 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My company. all rights reserved
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Kartik Sharma-7011679411
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
