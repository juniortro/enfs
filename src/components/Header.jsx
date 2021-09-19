import * as React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 root: {
   flexGrow: 1,
 },
 menuButton: {
   marginRight: theme.spacing(2),
 },
 title: {
   flexGrow: 1,
 },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Enfs - Encontre um enfermeiro(a)
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
    </div>
  );
}