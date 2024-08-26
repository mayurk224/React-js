import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

function ToDoItem({ todos, fetchDetailsofCurrentTodo }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h5" color={"text.secondary"}>
          {todos?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>fetchDetailsofCurrentTodo(todos?.id)}
          sx={{
            backgroundColor: "black",
            color: "white",
            opacity: "0.75",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
              opacity: "1",
            },
          }}
        >
          Show Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default ToDoItem;
