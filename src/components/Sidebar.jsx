import { Stack, useTheme } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#fc1503",
          }}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "#fc1503",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
              color:
                category.name === selectedCategory
                  ? "white"
                  : theme.palette.mode === "dark"
                  ? "white"
                  : "#424242",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
