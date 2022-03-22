import { Routes, Route, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

// Mudanças na v6:
// Redirect foi mudado para Navigate
// Routes está no lugar de Switch

export const AppRoutes = () => {
  const { toggleDrawerOpen, setdrawerOptions } = useDrawerContext();

  useEffect(() => {
    setdrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página Inicial',
      },
      {
        icon: 'star',
        path: '/cidades',
        label: 'Cidades',
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button
        variant='contained' color='primary'
        onClick={toggleDrawerOpen}>toggle Drawer</Button>} />
      <Route path="/cidades" element={<Button
        variant='contained' color='primary'
        onClick={toggleDrawerOpen}>Cidades</Button>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};