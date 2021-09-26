import {useState} from 'react';
import Link from 'next/link'
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Divider,
 } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';

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
 userName: {
   marginLeft: 6,
 },
 divider: {
   margin: '8px 0',
 },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu);
  
  return (
    <>
        <AppBar position="static" elevation={3}>
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Enfs
              </Typography>
              <Link href="/user/publish">
                <Button color="inherit" variant="outlined">Login</Button>
              </Link>
              <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                {
                  true == true
                  ? <Avatar src="https://source.unsplash.com/random" />
                  : <AccountCircle />  
                }
                <Typography variant="subtitle2" color="secondary" className={classes.userName}>
                  Carlos Junior
                </Typography>
              </IconButton>

              <Menu 
                anchorEl={anchorUserMenu}
                open={openUserMenu}
                onClose={() => setAnchorUserMenu(null)}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Link href="/user/dashboard">
                  <MenuItem>Meus pedidos</MenuItem>
                </Link>
                <Link href="/user/publish">
                  <MenuItem>Publicar novo pedido</MenuItem>
                </Link>
                <Divider className={classes.divider}/>
                <MenuItem>Sair</MenuItem>
              </Menu>
            </Toolbar>
          </Container>
        </AppBar>
    </>
  );
}