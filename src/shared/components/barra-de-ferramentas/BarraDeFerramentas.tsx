import { Add } from '@mui/icons-material';
import { Box, Button, Paper, TextField, useTheme } from '@mui/material';

interface IBarraDeFerramentasProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
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
      {mostrarInputBusca && (
        <TextField
          size='small'
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
          placeholder='Pesquisar...'
        />
      )}

      <Box flex={1} display="flex" justifyContent='end'>
        {mostrarBotaoNovo && (
          <Button
            variant='contained'
            color='primary'
            disableElevation
            onClick={aoClicarEmNovo}
            endIcon={<Add></Add>} /* {<Icon>add</Icon>} */
          >{textoBotaoNovo}</Button>
        )}
      </Box>
    </Box>
  );
};