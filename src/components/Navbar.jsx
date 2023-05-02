import React from "react";
import { Stack, Switch, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { LightModeOutlined, NightlightOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const Navbar = ({ theme, setTheme }) => {
  const appliedTheme = useTheme();
  const isSmall = useMediaQuery(appliedTheme.breakpoints.up("md"));
  const handleChange = () => {
    setTheme(!theme);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      {isSmall ? (
        <Stack direction="row" alignItems="center">
          <LightModeOutlined />
          <Switch checked={theme} onChange={handleChange} />
          <NightlightOutlined />
        </Stack>
      ) : null}
    </Stack>
  );
};

export default Navbar;
