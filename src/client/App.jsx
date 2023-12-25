import React from "react";
import Grid from "./components/Grid.jsx";

export default function App({ data }) {
  return <Grid repos={data} />;
}
