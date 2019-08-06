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

function Home(props) {
  return (
    <>
      <Card
        title="Novena"
        description="Tudo pronto? Vamos iniciar a novena!"
        sendTo="Novena"
        props={props}
      />
      <Card
        title="Ensaio"
        description="Reúna a galera e vamos treinar para animar a novena!"
        sendTo="Ensaio"
        props={props}
      />
      <Card
        title="Aprenda"
        description="Fique por dentro de todas as orações e 
      mistérios do Santo Terço"
        sendTo="Aprenda"
        props={props}
      />
    </>
  );
}

export default Home;
