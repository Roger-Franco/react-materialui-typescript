import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBasedePagina } from '../../shared/layouts';

export const Dashboard = () => {
  return (
    <LayoutBasedePagina
      titulo='Página inicial'
      barraDeFerramentas={(
        <FerramentasDeDetalhe
          mostrarBotaoVoltar={false}
        />
      )}
    >
      Testando
    </LayoutBasedePagina>
  );
};