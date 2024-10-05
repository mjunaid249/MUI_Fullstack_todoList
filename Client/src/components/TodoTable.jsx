import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container, IconButton } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import axios from "axios";
import { toast } from "react-toastify";

export default function TodoTable() {
  const [todos, setTodos] = React.useState([]);
  const getTodos = async () => {
    const res = await axios.get("http://localhost:4000/get");
    setTodos(res.data);
  };

  React.useEffect(() => {
    getTodos();
  }, []);

  const removeTodo = async (id) => {
    const res = await axios.delete(`http://localhost:4000/delete/${id}`);
    console.log(res.data);
    getTodos();
    toast.warning("Todo deleted", {
      autoClose: 1500,
    });
  };

  return (
    <TableContainer>
      <Container>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align="center">Todo</TableCell>
              <TableCell align="center">Date & Time</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, index) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{todo.title}</TableCell>
                  <TableCell align="center">{todo.createdAt}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="delete"
                      size="medium"
                      onClick={() => removeTodo(todo._id)}
                    >
                      <DeleteRoundedIcon
                        fontSize="inherit"
                        sx={{ color: "#d81b60" }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </TableContainer>
  );
}
