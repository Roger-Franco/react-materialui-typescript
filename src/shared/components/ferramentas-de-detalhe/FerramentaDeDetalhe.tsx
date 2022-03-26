import { Add } from '@mui/icons-material';
import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from '@mui/material';

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

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

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

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
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button
          variant='contained'
          color='primary'
          disableElevation
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>} /* {<Add></Add>} */
        >Salvar</Button>
      )}
      {(mostrarBotaoSalvarCarregando &&
        <Skeleton width={110} height={60} />
      )}
      {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando) && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<Icon>save</Icon>} /* {<Icon>add</Icon>} */
        >Salvar e voltar</Button>
      )}
      {(mostrarBotaoSalvarEFecharCarregando &&
        <Skeleton width={180} height={60} />
      )}
      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>} /* {<Icon>add</Icon>} */
        >Apagar</Button>
      )}
      {((mostrarBotaoApagarCarregando && !mostrarBotaoNovoCarregando) &&
        <Skeleton width={110} height={60} />
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
      {(mostrarBotaoNovoCarregando &&
        <Skeleton width={110} height={60} />
      )}
      <Divider variant='middle' orientation='vertical' />
      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>} /* {<Icon>add</Icon>} */
        >Voltar</Button>
      )}
      {(mostrarBotaoVoltarCarregando &&
        <Skeleton width={110} height={60} />
      )}
    </Box>
  );
};