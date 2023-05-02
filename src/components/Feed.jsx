import { useState, useEffect } from "react";
import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Sidebar, Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {isSmall ? (
          <Typography
            className="copyright"
            variant="body2"
            sx={{
              mt: 1.5,
              color: theme.palette.mode === "dark" ? "white" : "#424242",
            }}
          >
            Copyright @ 2023 YouTube
          </Typography>
        ) : null}
      </Box>
      <Box sx={{ p: 2, overflowY: "auto", height: "90vh", flex: "2" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: theme.palette.mode === "dark" ? "white" : "#424242" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
