import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, useTheme, useMediaQuery } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  const theme = useTheme();
  const isSmall = useMediaQuery("(min-width:700px) and (max-width:900px)");

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{ width: "100%", position: "sticky", top: "86p" }}
            py={{ md: 1, sx: 5 }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#FFF"
              variant="h5"
              fontWeight="bold"
              p={2}
              sx={{
                color: theme.palette.mode === "dark" ? "white" : "#424242",
              }}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{
                    sm: "subtitle",
                    md: "h6",
                  }}
                  color={theme.palette.mode === "dark" ? "white" : "#424242"}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, sx: 5 }}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "90vh", overflow: "auto" }}
        >
          <Videos videos={videos} direction={isSmall ? "row" : "column"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
