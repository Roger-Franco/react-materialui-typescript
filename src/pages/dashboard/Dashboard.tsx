import { BarraDeFerramentas } from '../../shared/components';
import { LayoutBasedePagina } from '../../shared/layouts';

export const Dashboard = () => {
  return (
    <LayoutBasedePagina
      titulo='Página inicial'
      barraDeFerramentas={(
        <BarraDeFerramentas
          mostrarInputBusca
          textoBotaoNovo='Novaaa'
        />
      )}
    >
      Testando
    </LayoutBasedePagina>
  );
};