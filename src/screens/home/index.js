import React from 'react';
import { ScrollView, View } from 'react-native';
import { colors } from '../../styles';
import general from '../../styles/general';
import Card from '../../components/Card';
import imgTerco from '../../assets/img/terco.png';
import imgMusica from '../../assets/img/musica.png';
import imgOracao from '../../assets/img/oracao.png';

export function navigationOptionsHome() {
  return {
    title: 'Seja bem vindo',
    headerStyle: general.header,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
}

function Home(props) {
  return (
    <>
      <ScrollView style={general.scrollview}>
        <View style={general.container}>
          <Card
            title="Novena"
            description="Tudo pronto? Vamos iniciar a novena!"
            img={imgTerco}
            sendTo="Novena"
            props={props}
          />
          <Card
            title="Ensaio"
            description="Reúna a galera e vamos treinar para animar a novena!"
            img={imgMusica}
            sendTo="Ensaio"
            props={props}
          />
          <Card
            title="Terço Mariano"
            description="Fique por dentro de todas as orações e 
      mistérios do Santo Terço"
            img={imgOracao}
            sendTo="Aprenda"
            props={props}
          />
        </View>
      </ScrollView>
    </>
  );
}

export default Home;
