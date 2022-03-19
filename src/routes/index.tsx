import { Routes, Route, Navigate } from 'react-router-dom'

// Mudanças na v6:
// Redirect foi mudado para Navigate
// Routes está no lugar de Switch

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<p>Páina inicial</p>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
};