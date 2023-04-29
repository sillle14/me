import { Grid, Typography, styled, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
import odometer from '../../assets/road-trip/odometer.jpeg'

const StyledImage = styled('img')(({theme}) => ({
    width: '100%',
    padding: `${theme.spacing(2)} 0`
}))

const Main = () => <>
    <StyledImage src={odometer} alt="starting odometer" />
    <Typography sx={{mb: 1}}>We're driving across the country! Follow along on our adventures.</Typography>
    <hr></hr>
    <Grid container rowSpacing={1}>
        <Grid item xs={12} sm={4}>
            <Typography variant="h5">Heading West</Typography>
            <Link to="day-1" component={RouterLink} underline="hover">May 29th - Day 1</Link>
        </Grid>
        {/* <Grid item xs={12} sm={4}>
            <Typography variant="h5">Rocky Mountain National Park</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Typography variant="h5">Yellowstone and the Tetons</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Typography variant="h5">Rainier and Olympic</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Typography variant="h5">Glacier</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Typography variant="h5">Heading Back East</Typography>
        </Grid> */}
    </Grid>
</>

export default Main
