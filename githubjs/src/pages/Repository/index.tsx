import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Header, HeaderInfoRepository, RepositoryInfoUser } from './style';
import Logo from '../../assets/images/Logo.svg'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Link } from 'react-router-dom';
import api  from '../../services/api';

interface RepositoryParms {
  repository: string;
}

export interface IRepository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

// const Repository: React.FC = () => {
//   const { params } = useRouteMatch<RepositoryParms>();
//   return
// };

const Repository: React.FC = () => {

  const [IRepository, setIRepository] = useState<IRepository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { params } = useRouteMatch<RepositoryParms>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setIRepository(response.data)
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data)
    });
  }, [params.repository])
  
  return(
    <>
    <Header>
      <img src={Logo} alt="GitHub Explorer"/>
      <Link to="/">
      <FiChevronLeft />
        Voltar
      </Link>
    </Header>
    <HeaderInfoRepository>
      <header>
      <img src={IRepository?.owner.avatar_url} alt={IRepository?.owner.login}/>
      <div>
      <strong>{IRepository?.full_name}</strong>
      <p>{IRepository?.description}</p>
      </div>
      </header>
          <ul>
            <li>
              <strong>{IRepository?.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{IRepository?.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{IRepository?.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
    </HeaderInfoRepository>
    <RepositoryInfoUser>
    {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
    </RepositoryInfoUser>
    </>
  );
};

export default Repository;