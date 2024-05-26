import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

export const GameAlertDialog = ({ open, onAccept }) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. It will permanently delete the data
            from the server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogCancel onClick={onAccept}>Continue</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};
