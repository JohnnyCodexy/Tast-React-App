import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Validation from "../context/context";
import { useContext } from "react";
import Checkmark from "./checkmark";

export default function CircularDeterminate() {
  const ctx = useContext(Validation);
  let valid = false;
  let n = 0;
  for (let i = 0; i < ctx.length; i++) {
    if (ctx[i] === true) {
      n++;
    }
  }
  console.log(n);
  if (n === 4) {
    valid = true;
  } else if (n > 0 && n < 4) {
    valid = false;
  }

  return (
    <React.Fragment>
      {valid && <Checkmark className="checkmark-large"></Checkmark>}
      {!valid && (
        <Stack
          className="hidden"
          sx={{ color: "white", backgroundcolor: "black" }}
          spacing={2}
          direction="row"
        >
          <CircularProgress
            color="inherit"
            variant="determinate"
            value={n * 25}
          />
        </Stack>
      )}
    </React.Fragment>
  );
}
