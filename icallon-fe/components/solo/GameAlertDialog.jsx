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

export const GameAlertDialog = ({ open, onAccept, round }) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Start Game?</AlertDialogTitle>
          <AlertDialogDescription>
            Click continue to start round {round}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogCancel onClick={onAccept}>Continue</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};
