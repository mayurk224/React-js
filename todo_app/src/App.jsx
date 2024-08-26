import React, { useEffect, useState } from "react";
import Styles from "./styles.module.css";
import ToDoItem from "./components/ToDoItem";
import ToDoDetails from "./components/ToDoDetails";
import { Skeleton } from "@mui/material";

function App() {
  const [todo, setToDo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setToDoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  async function fetchToDoList() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/todos");
      const result = await response.json();
      // console.log(result);
      if (result?.todos && result?.todos.length > 0) {
        setLoading(false);
        setToDo(result?.todos);
      } else {
        setLoading(false);
        setErrorMsg("");
        setToDo([]);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Something went wrong");
    }
  }
  async function fetchDetailsofCurrentTodo(getCurrentTodoId) {
    // console.log(getCurrentTodoId);
    try {
      const response = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoId}`
      );
      const result = await response.json();
      if (result) {
        setToDoDetails(result);
        setOpenDialog(true);
      } else {
        setToDoDetails(null);
        setOpenDialog(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchToDoList();
  }, []);

  if (loading) {
    return <Skeleton value="rectangular" width={650} height={650} />;
  }
  return (
    <div className={Styles.mainWrapper}>
      <h2 className={Styles.headerTitle}>ToDo App using Material Ui</h2>
      <div className={Styles.todoListWrapper}>
        {todo && todo.length > 0
          ? todo.map((todoItem) => (
              <ToDoItem
                fetchDetailsofCurrentTodo={fetchDetailsofCurrentTodo}
                todos={todoItem}
              />
            ))
          : null}
      </div>
      <ToDoDetails
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        todoDetails={todoDetails}
        setToDoDetails={setToDoDetails}
      />
    </div>
  );
}

export default App;
