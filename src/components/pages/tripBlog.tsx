import { Route, Routes } from "react-router";
import Page from "../helpers/page";
import Entry from "../blog/entry";
import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { EntryType } from "./entryType";

const TripBlog = ({
  posts,
  title,
  children,
}: {
  posts: Array<EntryType>;
  title: string;
  children: JSX.Element;
}) => {
  const postComps = posts.map((post, i) => {
    const previous = i > 0 ? `day-${posts[i - 1].day}` : undefined;
    const next = i < posts.length - 1 ? `day-${posts[i + 1].day}` : undefined;
    return (
      <Route
        key={i}
        path={`day-${post.day}`}
        element={<Entry entry={post} next={next} previous={previous} />}
      ></Route>
    );
  });

  return (
    <Page maxWidth="lg">
      <Link to="" component={RouterLink} underline="hover" color="inherit">
        <Typography variant="h3" component="h1">
          {title}
        </Typography>
      </Link>
      <Routes>
        <Route path="" element={children} />
        {postComps}
      </Routes>
    </Page>
  );
};

export default TripBlog;
