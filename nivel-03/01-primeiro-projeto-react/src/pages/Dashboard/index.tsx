import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/23743419?v=4"
            alt="`Leonardo Quintania"
          />
          <div>
            <strong>leonardoquintania/pokemon-app-vue</strong>
            <p>Projeto em VUE consumindo a API do POKEMON</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/23743419?v=4"
            alt="`Leonardo Quintania"
          />
          <div>
            <strong>leonardoquintania/pokemon-app-vue</strong>
            <p>Projeto em VUE consumindo a API do POKEMON</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/23743419?v=4"
            alt="`Leonardo Quintania"
          />
          <div>
            <strong>leonardoquintania/pokemon-app-vue</strong>
            <p>Projeto em VUE consumindo a API do POKEMON</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/23743419?v=4"
            alt="`Leonardo Quintania"
          />
          <div>
            <strong>leonardoquintania/pokemon-app-vue</strong>
            <p>Projeto em VUE consumindo a API do POKEMON</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
