import { useParams } from 'react-router-dom';

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  return (
    <p>DetalheDePessoas {id}</p>
  );
};