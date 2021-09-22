import {useState} from 'react';
import {
  Button, Container, IconButton, Select, TextField, Typography,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useDropzone} from 'react-dropzone'
import { DeleteForever } from '@material-ui/icons';

import TemplateDefault from '../../src/templates/Default';

const useStyles = makeStyles((theme) => ({
  mask: {},
  mainImage: {},
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  boxContainer: {
    paddingBottom: theme.spacing(3),
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: '1px 1px 10px rgba(0,0,0,0.5)',
  },
  thumbsContainer: {
    display: 'flex',
    marginTop: 15,
    flexWrap: 'wrap',
  },
  dropzone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 200,
    height: 150,
    margin: '0 15px 15px 0',
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black',
  },
  thumb: {
    width: 200,
    height: 150,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
    margin: '0 15px 15px 0',

    '& $mainImage': {
      backgroundColor: '#125512',
      padding: '6px 10px',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },

    '&:hover $mask': {
      display: 'flex',
    },

    '& $mask': {
      backgroundColor: 'rgba(0,0,0,0.7)',
      height: '100%',
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
}));

const Publish = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]); 

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map(file => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })
     setFiles([...files, ...newFiles]);
    }
  })

  const handleRemoveFile = fileName => {
    const newFileState = files.filter(file => file.name !== fileName);
    console.log(fileName);
    setFiles(newFileState);
  }

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
          <br />
          <br />
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
          <Box className={classes.thumbsContainer}>
            <Box className={classes.dropzone} {...getRootProps()}>
              <input {...getInputProps()}/>
              <Typography variant="body2" color="textPrimary">
                Clique para adicionar ou arraste a imagem para aqui.
              </Typography>
            </Box>

            {
              files.map((file, index) => (
                  <Box
                    key={file.name}
                    className={classes.thumb}
                    style={{ backgroundImage: `url(${file.preview})` }}
                  >
                    {
                      index === 0 ?
                        <Box className={classes.mainImage}>
                          <Typography variant="body" color="secondary">
                            Principal
                          </Typography>
                        </Box>
                        : null
                    }
                    <Box className={classes.mask}>
                      <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                        <DeleteForever fontSize="medium" />
                      </IconButton>
                    </Box>
                  </Box>
              ))
            }


          </Box>
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
          <br />
          <br />
          <TextField
            label="E-mail"
            variant="outlined"
            size="small"
            fullWidth
          />
          <br />
          <br />
          <TextField
            label="Telefone"
            variant="outlined"
            size="small"
            fullWidth
          />
          <br />
          <br />
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box textAlign="right">
          <Button variant="contained" color="primary">Publicar Anúncio</Button>
        </Box>

      </Container>
    </TemplateDefault>
  );
};

export default Publish;
