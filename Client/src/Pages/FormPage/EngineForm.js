import React, { useEffect } from "react";
import { Form, useFrom } from "../../component/Form/useFrom";

import { makeStyles, Button, Grid, CircularProgress } from "@material-ui/core";
import Inputprop from "../../component/Inputs/Input";
import {
  addDoc,
  doc,
  updateDoc, collection,
} from "firebase/firestore";
import { db } from "../../init/firebaseinit";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const initialValues = {
  id:0,
  Code: "",
  Brand: "",
};

export default function EngineForm(props) {
  const {recordForEdit,addOrEdit} =props
  const { values, setValues, handleChanges, errors, setErrors } = useFrom(initialValues);
  const colRef = collection(db, "Engine");
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    let temp = {};

    temp.Brand = values.Brand ? "" : "This Field is Required";
    temp.Code = values.Code ? "" : "This Field is Required";
    console.log(temp);
    setErrors({
      ...temp,
    });
    //if all the proprties valid to the function that provide in every() it will return true  or if one fail it return false
    return Object.values(temp).every((x) => x == "");
  };



  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    console.log(validate());

    if (validate()) {
      addOrEdit(values)
      setIsLoading(false);
    } 
  
  }

  useEffect(()=>{

    if(recordForEdit != null){

      setValues({
        ...recordForEdit
      })
    }

  },[recordForEdit])
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Inputprop
            name="Brand"
            label="Engine Brand"
            value={values.Brand}
            onChange={handleChanges}
            error={errors.Brand}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Inputprop
            name="Code"
            label="Engine Code"
            value={values.Code}
            onChange={handleChanges}
            error={errors.Code}
          />
          <div>
            {isLoading && <CircularProgress color="secondary" />}
            {!isLoading && (
              <Button
                variant="contained"
                color="secondary"
                text="Submit"
                size="large"
                type="submit"
              >
                Submit
              </Button>
            )}
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
