import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Header } from './style';
import Logo from '../../assets/images/Logo.svg'
import { FiChevronLeft } from "react-icons/fi"
import { Link } from 'react-router-dom';

interface RepositoryParms {
  repository: string;
}

// const Repository: React.FC = () => {
//   const { params } = useRouteMatch<RepositoryParms>();
//   return
// };

const Repository: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { params } = useRouteMatch<RepositoryParms>();
  return(
    <Header>
      <img src={Logo} alt="GitHub Explorer"/>
      <Link to="/">
      <FiChevronLeft />
        Voltar
      </Link>
    </Header>
  );
};

export default Repository;