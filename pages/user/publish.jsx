import { Button, Container, Select, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import TemplateDefault from '../../src/templates/Default';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8,0,6),
  },
  boxContainer: {
    paddingBottom: theme.spacing(3),
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: '1px 1px 10px rgba(0,0,0,0.5)'
  }
}))

const Publish = () => {
  const classes = useStyles();
  return (
    <TemplateDefault>
      <Container maxWidth="md" className={classes.container}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary">
          Publicar novo atendimento
        </Typography>
        <Typography component="h5" variant="h5" align="center" color="textPrimary">
          Quanto mais detalhes, melhor!
        </Typography>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}> 
          <Typography component="h6" variant="h6" color="textPrimary">
            Título do Anúncio
          </Typography>
          <TextField 
            label="ex.: Enfermeiro assistêncial"
            size="small"
            fullWidth
          />
          <br /><br />
          <Typography component="h6" variant="h6" color="textPrimary">
            Categoria
          </Typography>
          <Select
            native
            value=""
            fullWidth
            onChange={() => {}}
            inputProps={{
              name: 'age',
            }}
          >
            <option value="">Selecione</option>
            <option value={1}>Medições</option>
            <option value={2}>Acompanhamentos</option>
            <option value={3}>Medicações</option>
            <option value={4}>Outros</option>
          </Select>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Imagens
          </Typography>
          <Typography component="div" variant="body2" color="textPrimary">
            A primeira imagem é a foto principal do seu atendimento
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Descrição
          </Typography>
          <Typography component="div" variant="body2" color="textPrimary">
            Escreva os detalhes
          </Typography>
          <TextField 
            multiline
            rows={6}
            variant="outlined"
            fullWidth
          />
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
            Dados de Contato
          </Typography>
          <TextField
            label="Nome" 
            variant="outlined"
            size="small"
            fullWidth
          />
          <br /><br />
          <TextField
            label="E-mail" 
            variant="outlined"
            size="small"
            fullWidth
          />
          <br /><br />
          <TextField
            label="Telefone" 
            variant="outlined"
            size="small"
            fullWidth
          />
          <br /><br />
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box textAlign="right">
          <Button variant="contained" color="primary">Publicar Anúncio</Button>
        </Box>

      </Container>
    </TemplateDefault>
  )
}

export default Publish;