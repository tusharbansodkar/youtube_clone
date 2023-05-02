import { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  const theme = useTheme();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box sx={{ p: 2, overflowY: "auto", height: "90vh", flex: "2" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: theme.palette.mode === "dark" ? "white" : "#424242" }}
      >
        Search Results for :{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
