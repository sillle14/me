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
                <Link to="day-5" component={RouterLink} underline="hover">June 2nd - Day 5</Link>
                <Link to="day-6" component={RouterLink} underline="hover">June 3rd - Day 6</Link>
                <Link to="day-7" component={RouterLink} underline="hover">June 4th - Day 7</Link>
            </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Typography variant="h5">Rocky Mountain National Park</Typography>
            <Box display="flex" flexDirection="column">
                <Link to="day-8" component={RouterLink} underline="hover">June 5th - Day 8</Link>
                <Link to="day-9" component={RouterLink} underline="hover">June 6th - Day 9</Link>
                <Link to="day-10" component={RouterLink} underline="hover">June 7th - Day 10</Link>
                <Link to="day-11" component={RouterLink} underline="hover">June 8th - Day 11</Link>
                <Link to="day-12" component={RouterLink} underline="hover">June 9th - Day 12</Link>
                <Link to="day-13" component={RouterLink} underline="hover">June 10th - Day 13</Link>
                <Link to="day-14" component={RouterLink} underline="hover">June 11th - Day 14</Link>
            </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Typography variant="h5">Yellowstone and the Tetons</Typography>
            <Box display="flex" flexDirection="column">
                <Link to="day-15" component={RouterLink} underline="hover">June 12th - Day 15</Link>
                <Link to="day-16" component={RouterLink} underline="hover">June 13th - Day 16</Link>
                <Link to="day-17" component={RouterLink} underline="hover">June 14th - Day 17</Link>
                <Link to="day-18" component={RouterLink} underline="hover">June 15th - Day 18</Link>
                <Link to="day-19" component={RouterLink} underline="hover">June 16th - Day 19</Link>
                <Link to="day-20" component={RouterLink} underline="hover">June 17th - Day 20</Link>
                <Link to="day-21" component={RouterLink} underline="hover">June 18th - Day 21</Link>
            </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Typography variant="h5">Rainier and Olympic</Typography>
            <Box display="flex" flexDirection="column">
                <Link to="day-22" component={RouterLink} underline="hover">June 19th - Day 22</Link>
                <Link to="day-23" component={RouterLink} underline="hover">June 20th - Day 23</Link>
                <Link to="day-24" component={RouterLink} underline="hover">June 21th - Day 24</Link>
                <Link to="day-25" component={RouterLink} underline="hover">June 22th - Day 25</Link>
                <Link to="day-26" component={RouterLink} underline="hover">June 23th - Day 26</Link>
                <Link to="day-27" component={RouterLink} underline="hover">June 24th - Day 27</Link>
                <Link to="day-28" component={RouterLink} underline="hover">June 25th - Day 28</Link>
            </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Typography variant="h5">Glacier</Typography>
            <Box display="flex" flexDirection="column">
                <Link to="day-29" component={RouterLink} underline="hover">June 26th - Day 29</Link>
            </Box>
        </Grid>
        {/* <Grid item xs={12} sm={4}>
            <Typography variant="h5">Heading Back East</Typography>
        </Grid> */}
    </Grid>
</>

export default Main
