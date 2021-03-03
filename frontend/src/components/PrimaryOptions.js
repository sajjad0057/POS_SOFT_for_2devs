import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function PrimaryOptions(props) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(props.data);
  }, [props.data]);
  const classes = useStyles();
  return (
    <Container>
      <Paper>
        <Grid container className={classes.root}>
          {data &&
            data.map((value, index) => (
              <Grid key={index} item>
                <Option
                  icon={value.icon}
                  title={value.title}
                  path={value.path}
                />
              </Grid>
            ))}
        </Grid>
      </Paper>
    </Container>
  );
}

const OptionStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    display: "flex",
  },
  label: { flexDirection: "column" },
}));
function Option(props) {
  const classes = OptionStyles();
  return (
    <Button
      component={Link}
      to={props.path}
      className={classes.root}
      classes={{ label: classes.label }}
      variant="outlined"
    >
      <props.icon />
      <Typography>{props.title}</Typography>
    </Button>
  );
}
