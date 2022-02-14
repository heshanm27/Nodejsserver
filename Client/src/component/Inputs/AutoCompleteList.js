import { TextField } from "@material-ui/core";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import React from "react";

export default function AutoCompleteList(props) {
  const filter = createFilterOptions();
  const { label, options, optionLabel, value, selectItem, onChange } = props;
  return (
    <Autocomplete
      value={value}
      onChange={onChange}
      freeSolo
      selectOnFocus
      handleHomeEndKeys
      fullWidth
      loading={true}
      id="free-solo-with-text-demo"
      options={options}
      getOptionLabel={optionLabel}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
}
