import { IconButton, Typography, useTheme, Icon, useMediaQuery, Theme } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseDePaginaprops {
  titulo: string,
  barraDeFerramentas?: ReactNode
}

export const LayoutBasedePagina: React.FC<ILayoutBaseDePaginaprops> = ({ children, titulo, barraDeFerramentas }) => {
  // const smDown = useMediaQuery(theme.breakpoints.down('sm')); # Alternativa seria descer essa linha
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display='flex' flexDirection='column' gap={1}>
      <Box padding={1} display='flex' alignItems='center' gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          overflow='hidden'
          whiteSpace='nowrap'
          textOverflow='ellipsis'
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
        >
          {titulo}
        </Typography>
      </Box>

      {
        barraDeFerramentas && (
          <Box>
            {barraDeFerramentas}
          </Box>
        )
      }

      <Box flex={1} overflow='auto'> {/* esse overflow scrolla apenas esse box */}
        {children}
      </Box>
    </Box >
  );
};