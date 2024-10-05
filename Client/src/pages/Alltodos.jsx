import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import TodoTable from "../components/TodoTable";
const Alltodos = () => {
  return (
    <Box sx={{ width: "100%", mt: 5 }}>
      <Stack spacing={2} alignItems={"center"} direction={"column"}>
        <Typography variant="h3" fontSize={30} fontWeight={600}>
          Your Todos
        </Typography>
        <TodoTable />
      </Stack>
    </Box>
  );
};

export default Alltodos;
