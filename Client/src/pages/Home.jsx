import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BasicStack() {
  const [task, setTask] = React.useState("");

  const navigate = useNavigate();

  async function submitTodo() {
    const res = await axios.post("http://localhost:4000/add", { title: task });
    console.log(res.data);
    setTask("");
    navigate("/todos");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (task !== "") {
          submitTodo();
          toast.success("Todo Added", {
            autoClose: 1500,
          });
        } else {
          toast.error("Cannot add empty todo", { autoClose: 1500 });
        }
      }}
    >
      <Box sx={{ width: "100%", mt: 5 }}>
        <Stack spacing={2} alignItems={"center"} direction={"column"}>
          <Typography variant="h3" fontSize={30} fontWeight={600}>
            Add Todo
          </Typography>
          <TextField
            id="outlined-basic"
            label="New Todo"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            sx={{ width: "50%" }}
            variant="outlined"
            autoFocus
          />
          <Button variant="contained" sx={{ width: "50%" }} type="submit">
            Add Todo
          </Button>
        </Stack>
      </Box>
    </form>
  );
}
