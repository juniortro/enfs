import {
  Typography,
  Box,
  InputBase,
  IconButton,
  Container,
  Grid,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TemplateDefault from '../src/templates/Default';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    margin: '30px 0',
  }
}))

const Home = () => {
  const classes = useStyles();

  return (
    <TemplateDefault>
      <Container maxWidth="md" className={classes.container}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary">
          O que deseja encontrar?
        </Typography>
        <Paper className={classes.searchBox}>
          <InputBase 
            placeholder="Ex.: Medir pressão"
            fullWidth
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>

        <Container maxWidth="md" classeName={classes.cardGrid}>
            <Typography component="h2" variant="h4" align="center" color="textPrimary">
              Destaques
            </Typography>
            <br />
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img" 
                    image={'https://source.unsplash.com/random'}
                    height="140"
                    title="Título da imagem"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Verificar pressão
                    </Typography>
                    <Typography>
                      R$ 30,00
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img" 
                    image={'https://source.unsplash.com/random'}
                    height="140"
                    title="Título da imagem"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Verificar pressão
                    </Typography>
                    <Typography>
                      R$ 30,00
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img" 
                    image={'https://source.unsplash.com/random'}
                    height="140"
                    title="Título da imagem"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Verificar pressão
                    </Typography>
                    <Typography>
                      R$ 30,00
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
      </Container>
    </TemplateDefault>
)};

export default Home;
