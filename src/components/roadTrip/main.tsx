import { Grid, Typography, styled, Link, Box } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
import start from '../../assets/road-trip/start.jpeg'

const StyledImage = styled('img')(({theme}) => ({
    width: '100%',
    padding: `${theme.spacing(2)} 0`
}))

const Main = () => <>
    <StyledImage src={start} alt="Lewis and Julia in the car about to start the trip." />
    <Typography sx={{mb: 1}}>We're driving across the country! Follow along on our adventures.</Typography>
    <hr></hr>
    <Grid container rowSpacing={1}>
        <Grid item xs={12} sm={4}>
            <Typography variant="h5">Heading West</Typography>
            <Box display="flex" flexDirection="column">                
                <Link to="day-1" component={RouterLink} underline="hover">May 29th - Day 1</Link>
                <Link to="day-2" component={RouterLink} underline="hover">May 30th - Day 2</Link>
                <Link to="day-3" component={RouterLink} underline="hover">May 31th - Day 3</Link>
                <Link to="day-4" component={RouterLink} underline="hover">June 1st - Day 4</Link>
            </Box>
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
