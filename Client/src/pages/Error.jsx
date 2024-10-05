import { Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Stack
      spacing={3}
      direction={"column"}
      sx={{
        alignItems: "center",
        mt: 4,
      }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Typography variant="h1" align="center">
        Error 404 | Page not Found
      </Typography>
      <Button variant="contained" size="sm">
        <Link to={"/"}>Go to Homepage</Link>
      </Button>
    </Stack>
  );
};

export default Error;
