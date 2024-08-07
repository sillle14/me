import { Box, Link, styled, Typography } from "@mui/material";
import { EntryType } from "../pages/entryType";
import { Link as RouterLink } from "react-router-dom";
import ScrollToTop from "../scrollToTop";

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  paddingTop: `${theme.spacing(2)}`,
}));
const VertImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "600px",
  paddingTop: `${theme.spacing(2)}`,
}));

const Entry = ({
  entry,
  previous,
  next,
}: {
  entry: EntryType;
  previous?: string;
  next?: string;
}) => {
  const drivingMiles = entry.drivingMiles ? (
    <Typography sx={{ fontWeight: "bold" }}>
      {entry.drivingMiles} miles driven
    </Typography>
  ) : null;
  const drivingKilometers = entry.drivingKilometers ? (
    <Typography sx={{ fontWeight: "bold" }}>
      {entry.drivingKilometers} kilometers driven
    </Typography>
  ) : null;

  const hikingMiles = entry.hikingMiles ? (
    <Typography sx={{ fontWeight: "bold" }}>
      {entry.hikingMiles} miles hiked
    </Typography>
  ) : null;

  const content = entry.content.map((content, i) => {
    if (content.type === "p") {
      return <Typography key={i}>{content.text}</Typography>;
    } else {
      // TODO: don't hard code road-trip.
      const source = `https://storage.googleapis.com/road-trip/road-trip/${content.source}.jpeg`;
      const image = content.vert ? (
        <VertImage alt={content.alt} src={source} />
      ) : (
        <StyledImage alt={content.alt} src={source} />
      );
      return (
        <Box key={i} display="flex" flexDirection="column" alignItems="center">
          {image}
          <Box sx={{ textAlign: "center", typography: "caption" }}>
            {content.caption}
          </Box>
        </Box>
      );
    }
  });

  const navigation = [];
  if (previous) {
    navigation.push(
      <Link
        key="prev"
        to={`../${previous}`}
        component={RouterLink}
        underline="hover"
      >
        Previous
      </Link>
    );
  }
  if (previous && next) {
    navigation.push(<span key="space">&nbsp;|&nbsp;</span>);
  }
  if (next) {
    navigation.push(
      <Link
        key="next"
        to={`../${next}`}
        component={RouterLink}
        underline="hover"
      >
        Next
      </Link>
    );
  }

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
      >{`${entry.date} - Day ${entry.day}`}</Typography>
      <Typography variant="h5">{entry.location}</Typography>
      {drivingMiles}
      {drivingKilometers}
      {hikingMiles}
      {content}
      <Box sx={{ textAlign: "center" }}>
        <ScrollToTop />
        {navigation}
      </Box>
    </>
  );
};

export default Entry;
