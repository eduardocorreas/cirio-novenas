import React from 'react';
import { colors } from '../../styles';
import Card from '../../components/Card';

export function navigationOptionsHome() {
  return {
    title: 'Seja bem vindo',
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
}

function Home() {
  return (
    <>
      <Card title="Novena" description="Tudo pronto? Vamos iniciar a novena!" />
      <Card title="Ensaio" description="Reúna a galera e vamos treinar para animar a novena!" />
      <Card
        title="Aprenda"
        description="Fique por dentro de todas as orações e 
      mistérios do Santo Terço"
      />
    </>
  );
}

export default Home;
