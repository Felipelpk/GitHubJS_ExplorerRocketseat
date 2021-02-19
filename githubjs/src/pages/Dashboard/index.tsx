import React from 'react';
import { Title, Form, Repository } from './style'
import Logo from '../../assets/images/Logo.svg'
import { FiChevronRight} from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <>
    <img src={Logo} alt="GitHub Explorer"/>
    <Title> Explore repositórios no GitHub </Title>
    <Form>
      <input placeholder="Digite o nome do repositório..."></input>
      <button type="submit">Pesquisar</button>
    </Form>

    <Repository>
      <a href="#">
       <img src="https://xesque.rocketseat.dev/users/avatar/profile-a4693f7c-4be6-4946-a043-05b6b991cc55-1607568202383.jpg" alt="Felipe ALves de Oliveira"/>
       <div>
       <strong>Hub 1.0</strong>
       <p>Meu Primeiro Projeto com React</p>
       </div>

       <FiChevronRight size={20}/>
      </a>

      <a href="#">
       <img src="https://avatars.githubusercontent.com/u/44594611?s=460&v=4" alt="Felipe ALves de Oliveira"/>
       <div>
       <strong>GitHubJS</strong>
       <p>Meu Primeiro Projeto com React</p>
       </div>

       <FiChevronRight size={20}/>
      </a>

      <a href="#">
       <img src="https://avatars.githubusercontent.com/u/44594611?s=460&v=4" alt="Felipe ALves de Oliveira"/>
       <div>
       <strong>GitHubJS</strong>
       <p>Meu Primeiro Projeto com React</p>
       </div>

       <FiChevronRight size={20}/>
      </a>
    </Repository>
    </>
    );
};

export default Dashboard;