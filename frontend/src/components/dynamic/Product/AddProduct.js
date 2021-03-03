import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import SaveIcon from "@material-ui/icons/Save";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

const styles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(1),
  },
  textfield: {
    margin: theme.spacing(1),
    // width: '800px'
  },
}));
export default function AddProduct() {
  const classes = styles();
  return (
    <Container>
      <Paper variant="outlined" className={classes.paper}>
        <Typography variant="h3" className={classes.title}>
          New Product
        </Typography>
        <Divider style={{ margin: "10px" }} />
        <Grid container style={{ flexDirection: "column" }}>
          <TextField
            required
            label="Product Name"
            variant="outlined"
            className={classes.textfield}
          />
          <TextField
            required
            label="Product Code"
            variant="outlined"
            className={classes.textfield}
          />

          <TextField
            required
            label="Opening Stock"
            variant="outlined"
            className={classes.textfield}
          />
          <SelectWithCreateOption
            label="Category"
            className={classes.textfield}
            option={[{ title: "cloth" }, { title: "food" }]}
          />
          <SelectWithCreateOption
            label="Brand"
            className={classes.textfield}
            option={[{ title: "gaza" }, { title: "liqure" }]}
          />

          <TextField
            required
            label="Price"
            variant="outlined"
            className={classes.textfield}
          />
          <TextField
            required
            label="Cost"
            variant="outlined"
            className={classes.textfield}
          />

          <TextField
            label="Product Details"
            multiline
            rows={4}
            variant="outlined"
            className={classes.textfield}
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.textfield}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
}

//material ui autocomplete Component

const filter = createFilterOptions();

function SelectWithCreateOption(props) {
  const [value, setValue] = React.useState(null);

  return (
    <Autocomplete
      options={props.option}
      className={props.className}
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== "") {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="create-option-on-the-fly"
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(option) => option.title}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label={props.label} variant="outlined" />
      )}
    />
  );
}
