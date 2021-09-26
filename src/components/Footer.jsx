import {
  Box, Container, Grid, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(6),
    },
  },
  links: {
    cursor: 'pointer',
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="/#">
              <Typography className={classes.links} color="textSecondary" variant="subtitle1">Ajuda e contato</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="/#">
              <Typography className={classes.links} color="textSecondary" variant="subtitle1">Dicas de segurança</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="/#">
              <Typography className={classes.links} color="textSecondary" variant="subtitle1">Anunciar pedido</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="/#">
              <Typography className={classes.links} color="textSecondary" variant="subtitle1">Plano profissional</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
