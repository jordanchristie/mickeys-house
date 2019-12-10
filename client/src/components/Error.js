import React from "react";
import { ErrorMessage } from "./styledComponents";
export default function Error({ error }) {
  return (
    <ErrorMessage>Something went wrong. Refresh the page maybe?</ErrorMessage>
  );
}
