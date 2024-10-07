import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal is being used outside it's provider")
  }

  return context;
}
