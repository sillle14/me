import { Route, Routes } from "react-router";
import Page from "../helpers/page";
import Main from "../roadTrip/main";
import Entry from "../roadTrip/entry";
import posts from "../roadTrip/posts";
import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'

const RoadTrip = () => {
    const postComps = posts.map((post, i) => {
        const previous = i > 0 ? `day-${posts[i - 1].day}` : undefined
        const next = i < posts.length - 1 ? `day-${posts[i + 1].day}` : undefined
        return <Route 
            key={i} 
            path={`day-${post.day}`} 
            element={<Entry entry={post} next={next} previous={previous}/>}
        ></Route>
    })

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