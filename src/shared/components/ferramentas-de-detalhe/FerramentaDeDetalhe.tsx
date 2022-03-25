import { Add } from '@mui/icons-material';
import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}


export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={1}
      display='flex'
      gap={1}
      alignItems='center'
      component={Paper}
    >
      {mostrarBotaoSalvar && (
        <Button
          variant='contained'
          color='primary'
          disableElevation
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>} /* {<Add></Add>} */
        >Salvar</Button>
      )}
      {mostrarBotaoSalvarEFechar && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<Icon>save</Icon>} /* {<Icon>add</Icon>} */
        >Salvar e voltar</Button>
      )}
      {mostrarBotaoApagar && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>} /* {<Icon>add</Icon>} */
        >Apagar</Button>
      )}
      {mostrarBotaoNovo && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>} /* {<Icon>add</Icon>} */
        >{textoBotaoNovo}</Button>
      )}
      <Divider variant='middle' orientation='vertical' />
      {mostrarBotaoVoltar && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>} /* {<Icon>add</Icon>} */
        >Voltar</Button>
      )}
    </Box>
  );
};