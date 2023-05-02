import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      width="fit-content"
      flexWrap="wrap"
      useFlexGap
      gap={2}
      justifyContent="space-around"
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetails={item} />}
          {item.id.playlistId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
