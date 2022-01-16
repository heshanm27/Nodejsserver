import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import Container from "@material-ui/core/Container";
const TextInput = (props) => {
  const { inputfileds, onChange, setInputFilds } = props;

  const handleAddFields = () => {
    setInputFilds([...inputfileds, { info: "" }]);
  };
  const handleRemoveFields = (index) => {
    const values = [...inputfileds];
    values.splice(index, 1);
    setInputFilds(values);
  };
  return (
    <Container>
      {inputfileds.map((inputField, index) => {
        return (
          <div>
            <TextField
              name="info"
              label="Extra Details"
              variant="outlined"
              value={inputField.info}
              key={index}
              onChange={(e) => onChange(index, e)}
              style={{
                marginLeft: "-20%",
                marginBottom: "20px",
                width: "80%",
              }}
            />
            <IconButton onClick={() => handleRemoveFields(index)}>
              <RemoveIcon />
            </IconButton>
          </div>
        );
      })}
      <Button
        variant="outlined"
        onClick={handleAddFields}
        color="primary"
        endIcon={<AddIcon />}
        style={{ marginLeft: "-70%" }}
      >
        Add Extra Details
      </Button>
    </Container>
  );
};

export default TextInput;
