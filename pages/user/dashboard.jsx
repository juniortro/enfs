import { 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Container, 
  Grid, 
  Typography 
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import TemplateDefault from '../../src/templates/Default';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6)
  },
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  }
}))

export default function Home() {
  const classes = useStyles();

  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="h1" variant="h2" align="center">
          Enfermeiros
        </Typography>

        <Button variant="contained" color="primary" className={classes.buttonAdd}> 
          Publicar novo atendimento
        </Button>
      </Container>

      <Container maxWidth="md">
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
              <CardActions>
                <Button size="small" color="primary">Editar</Button>
                <Button size="small" color="primary">Remover</Button>
              </CardActions>
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
              <CardActions>
                <Button size="small" color="primary">Editar</Button>
                <Button size="small" color="primary">Remover</Button>
              </CardActions>
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
              <CardActions>
                <Button size="small" color="primary">Editar</Button>
                <Button size="small" color="primary">Remover</Button>
              </CardActions>
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
              <CardActions>
                <Button size="small" color="primary">Editar</Button>
                <Button size="small" color="primary">Remover</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}