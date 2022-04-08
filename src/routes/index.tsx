import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard, ListagemDeCidade } from '../pages';

// Mudanças na v6:
// Redirect foi mudado para Navigate
// Routes está no lugar de Switch

export const AppRoutes = () => {
  const { setdrawerOptions } = useDrawerContext();

  useEffect(() => {
    setdrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página Inicial',
      },
      {
        icon: 'location_city',
        path: '/cidades',
        label: 'Cidades',
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/cidades" element={<ListagemDeCidade />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};