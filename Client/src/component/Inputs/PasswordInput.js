import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@material-ui/core";
import React, { useState } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
  root: {
    margintop: "20px",
    marginBottom: "20px",
  },
}));
export default function PasswordInput(props) {
  const { label, value, setvalue, error, ...others } = props;
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        color="secondary"
        variant="outlined"
      >
        <InputLabel htmlFor={label}>{label}</InputLabel>
        <OutlinedInput
          required
          name="password"
          type={showPassword ? "text" : "password"}
          id="password"
          value={value}
          onChange={setvalue}
          color="secondary"
          error={error ? true : false}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />

        {error && <FormHelperText error={true}>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
}
