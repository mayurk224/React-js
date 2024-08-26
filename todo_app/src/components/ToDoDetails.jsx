import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";

function ToDoDetails({
  openDialog,
  todoDetails,
  setOpenDialog,
  setToDoDetails,
}) {
  return (
    <>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setToDoDetails(null);
              setOpenDialog(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ToDoDetails;
