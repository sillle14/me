import { Grid, Typography, Link, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Main = () => (
  <>
    <Grid container rowSpacing={1}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h5">Denmark</Typography>
        <Box display="flex" flexDirection="column">
          <Link to="day-1" component={RouterLink} underline="hover">
            June 29th - Day 1
          </Link>
          <Link to="day-2" component={RouterLink} underline="hover">
            June 30th - Day 2
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h5">Sweden</Typography>
        <Box display="flex" flexDirection="column">
          <Link to="day-3" component={RouterLink} underline="hover">
            July 1st - Day 3
          </Link>
        </Box>
      </Grid>
      {/* <Grid item xs={12} sm={4}>
        <Typography variant="h5">Norway</Typography>
        <Box display="flex" flexDirection="column">
        </Box>
      </Grid> */}
    </Grid>
  </>
);

export default Main;
