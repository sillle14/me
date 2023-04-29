import { Route, Routes } from "react-router";
import Page from "../helpers/page";
import Main from "../roadTrip/main";
import Entry from "../roadTrip/entry";
import odometer from '../../assets/road-trip/odometer.jpeg'
import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'

const posts = [
    {
        date: 'May 29th',
        day: 1,
        location: 'Boston, MA - Akron, OH',
        drivingMiles: 100,
        hikingMiles: 10,
        content: [
            {
                type: 'p' as 'p',
                text: 'This is the first paragraph. On this first day of driving, we did a bunch of things. Also, francesca is the ' +
                'best cat ever and we miss her already. Also, there are some more things to say. And we also want to keep going with this ' +
                'blog and yaddy yaddy yah and etc etc. Is this enough to break the line?'
            },
            {
                type: 'img' as 'img',
                alt: 'cat',
                source: odometer,
                caption: 'This is Francesca'
            },
            {
                type: 'p' as 'p',
                text: 'This is the next paragraph'
            },
        ]
    }
]

const RoadTrip = () => {
    const postComps = posts.map(
        (post, i) => <Route key={i} path={`day-${post.day}`} element={<Entry entry={post}/>}></Route>
    )

    return <Page maxWidth="lg">
        <Link to="" component={RouterLink} underline="hover" color='inherit'>
            <Typography variant="h3" component="h1">Road Trip 2023</Typography>
        </Link>
        <Routes>
            <Route path='' element={<Main/>}/>
            {postComps}
        </Routes>
    </Page>
}

export default RoadTrip