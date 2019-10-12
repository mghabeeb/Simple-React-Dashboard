import React from "react";
import useStyle from "./app.style";
import { Link } from "react-router-dom";
// Material-UI
import { Box, TextField, Typography } from "@material-ui/core";

const App: React.FC = () => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <h1>Test app </h1>
      <Link to="/login">got to login</Link>
      <TextField variant="outlined" label="hi" />
      <Box textAlign="center" mt={10}>
        <Typography variant="h4">
          This is responsive font size check it out
        </Typography>
        <Typography variant="h1">Responsive h1</Typography>
        <Typography variant="h2">Responsive h2</Typography>
        <Typography variant="h3">Responsive h3</Typography>
        <Typography variant="h4">Responsive h4</Typography>
        <Typography variant="h5">Responsive h5</Typography>
      </Box>
    </div>
  );
};

export default App;
