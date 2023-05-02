import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

const App = () => {
  const [theme, setTheme] = useState(true);
  const darkTheme = createTheme({
    palette: {
      mode: theme ? "dark" : "light",
    },
  });

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Box>
            <Navbar theme={theme} setTheme={setTheme} />
            <Routes>
              <Route path="/" exact element={<Feed />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/channel/:id" element={<ChannelDetail />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
