import { Routes, Route, HashRouter } from "react-router-dom";
import {
  StyledEngineProvider,
  styled,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import green from "@mui/material/colors/green";

import Home from "./components/pages/home";
import NavBar from "./components/navbar";
import Projects from "./components/pages/projects";
import TripBlog from "./components/pages/tripBlog";
import roadTripPosts from "./content/roadTrip/posts";
import RoadTripHome from "./content/roadTrip/main";
import scandinaviaPosts from "./content/scandinavia2024/posts";
import ScandinaviaHome from "./content/scandinavia2024/main";

const theme = createTheme();

const Root = styled("div")({
  position: "absolute",
  minHeight: "100%",
  width: "100%",
  boxSizing: "border-box",
  background: green[100],
});

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Root>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route
                path="road-trip/*"
                element={
                  <TripBlog title="Road Trip 2023" posts={roadTripPosts}>
                    <RoadTripHome />
                  </TripBlog>
                }
              />
              <Route
                path="scandinavia-2024/*"
                element={
                  <TripBlog title="Scandinavia 2024" posts={scandinaviaPosts}>
                    <ScandinaviaHome />
                  </TripBlog>
                }
              />
            </Routes>
          </Root>
        </HashRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
