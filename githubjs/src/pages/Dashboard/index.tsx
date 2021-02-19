import React, { useState, FormEvent, useEffect } from 'react';
import { Title, Form, Repository, Error } from './style'
import Logo from '../../assets/images/Logo.svg'
import { FiChevronRight} from 'react-icons/fi';
import api from '../../services/api';
import { toast } from 'react-toastify';

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@GithubJs:repositories')

    if (storageRepositories) {
      return JSON.parse(storageRepositories)
    }
    return[];
  });

  useEffect(() => {
    localStorage.setItem('@GithubJs:repositories', JSON.stringify(repositories))
  }, [repositories]);
 
  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault();
    if (!newRepo) {
      toast.error('Digite o nome/autor do repositório')
      return;
    }

    try {
      const response = await api.get(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('')
      toast.success('Repositório adicionado com sucesso!')

    } catch (error) {
      toast.error('Repositório não encontrado')
    }
  }

  return (
    <>
    <img src={Logo} alt="GitHub Explorer"/>
    <Title> Explore repositórios no GitHub </Title>
    <Form hasError={!!inputError} onSubmit={handleAddRepository}>
      <input 
      value={newRepo}
      onChange={e => setNewRepo(e.target.value)}
      placeholder="Digite o nome do repositório...">
      </input>
      <button type="submit">Pesquisar</button>
    </Form>

    {inputError  && <Error>{inputError}</Error>}

    <Repository>
      {repositories.map(Repository => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a key={Repository.full_name} href="#">
              <img src={Repository.owner.avatar_url} 
              alt={Repository.owner.avatar_url}/>
              <div>
              <strong>{Repository.full_name}</strong>
              <p>{Repository.description}</p>
              </div>
       
              <FiChevronRight size={20}/>
             </a>
      ))}
    </Repository>
    </>
    );
};

export default Dashboard;