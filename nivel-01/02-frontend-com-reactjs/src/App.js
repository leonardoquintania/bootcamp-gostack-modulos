import React, { useEffect, useState } from 'react';
import Header from './components/Header';

import api from './services/api';
import './App.css';
import backgroundImage from './assets/background.jpg';
/* Componentes
 *Propriedade
 *Estado & Imutabilidade
 */

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => setProjects(response.data));
  }, []);

  async function handleAddProject() {
    // projects.push(`Novo Project ${Date.now()}`);
    // setProjects([...projects, `Novo Project ${Date.now()}`]);
    const response = await api.post('projects', {
      title: `Novo Project ${Date.now()}`,
      owner: 'Leonardo Quintania',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="HomePage" />
      <img src={backgroundImage} alt="Imagem" />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
      {/* <Header title="Projects">
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header> */}
    </>
  );
}
