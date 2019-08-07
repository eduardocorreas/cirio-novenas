import React from 'react';
import { Text, Image, SafeAreaView, ScrollView, View } from 'react-native';
import general from '../../styles/general';
import tercoMariano from '../../assets/img/terco_mariano.png';

export function navigationOptionsTerco() {
  return {
    title: 'Terço Mariano',
    headerStyle: general.header,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
}

function Terco() {
  return (
    <SafeAreaView>
      <ScrollView style={general.scrollview}>
        <View style={general.container}>
          <View>
            <Text style={{ textAlign: 'center', fontSize: 16, padding: 20 }}>
              “Rezem o terço, todos os dias, para alcançarem a paz para o mundo e o fim da guerra.”
              (Nossa Senhora de Fátima)
            </Text>
          </View>
          <Image source={tercoMariano} />
          <View>
            <Text style={general.title}>Mistérios Gozosos (segunda-feira e sábado)</Text>
            <Text style={general.description}>
              1. Anunciação do anjo Gabriel a Nossa Senhora (Lc 1, 26-38)
              {'\n'}
              2. Visita de Nossa Senhora à sua prima Santa Isabel (Lc 1,39-56)
              {'\n'}
              3. Nascimento de Jesus em Jesus (Lc 2,1-21)
              {'\n'}
              4. Apresentação do Menino Jesus no templo (Lc 2,22-40)
              {'\n'}
              5. Encontro de Jesus no templo entre os doutores da lei (Lc 2,41-52)
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={general.title}>Mistérios Dolorosos (terça-feira e sexta-feira)</Text>
            <Text style={general.description}>
              1. Agonia de Jesus no horto das Oliveiras (Mt 26,36-56)
              {'\n'}
              2. Flagelação de Jesus atado à coluna (Mt 27,11-26)
              {'\n'}
              3.Coroação de espinhos de Jesus por seus algozes (Mt 27,27-31).
              {'\n'}
              4. Subida dolorosa do Calvário (Jo 19,17-24)
              {'\n'}
              5. Crucificação de Jesus (Jo 19,25-37)
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={general.title}>Mistérios Luminosos (quinta-feira)</Text>
            <Text style={general.description}>
              1. Batismo do Senhor no Jordão (Cor 5, 21 – Mt 3, 17)
              {'\n'}
              2. Bodas de Caná (Jo 2, 1-12)
              {'\n'}
              3. A proclamação do Reino (Mc 1, 15)
              {'\n'}
              4. A Transfiguração de Jesus (Lc 9, 35)
              {'\n'}
              5. Instituição da Eucaristia (Jo 13, 1)
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={general.title}>Mistérios Gloriosos (quarta-feira e domingo)</Text>
            <Text style={general.description}>
              1. Ressurreição de Nosso Senhor Jesus Cristo (Jo 20, 1-18)
              {'\n'}
              2. A ascensão Gloriosa de Jesus ao Céu (Lc 24, 50-53)
              {'\n'}
              3. Descida do Espírito Santo sobre os apóstolos e Maria no Cenáculo (At 2,1-13)
              {'\n'}
              4. Assunção Gloriosa de Nossa Senhora ao Céu (Sl 44,11-18)
              {'\n'}
              5.Coroação de Nossa Senhora no Céu (Ap 12, 1-4)
              {'\n'}
            </Text>
          </View>
          <Text style={general.title}>Orações</Text>
          <View>
            <Text style={general.title}>Creio</Text>
            <Text style={general.description}>
              Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu
              único Filho, Nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu na
              Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado morto e sepultado; desceu à
              mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita
              de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos; creio no
              Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos
              pecados, na ressurreição da carne, na vida eterna. Amém
            </Text>
          </View>
          <View>
            <Text style={general.title}>Pai Nosso</Text>
            <Text style={general.description}>
              Pai Nosso que estais nos Céus, santificado seja o vosso Nome, venha a nós o vosso
              Reino, seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia
              nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem
              ofendido, e não nos deixeis cair em tentação, mas livrai-nos do Mal. Amém
            </Text>
          </View>
          <View>
            <Text style={general.title}>Ave-Maria</Text>
            <Text style={general.description}>
              Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e
              bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós
              pecadores, agora e na hora da nossa morte. Amém
            </Text>
          </View>
          <View>
            <Text style={general.title}>Glória</Text>
            <Text style={general.description}>
              Glória ao Pai, ao Filho e ao Espírito Santo, como era no princípio, agora e sempre.
              Amém
            </Text>
          </View>
          <View>
            <Text style={general.title}>Jaculatória</Text>
            <Text style={general.description}>
              Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o
              céu e socorrei principalmente aqueles que mais precisarem da vossa Misericórdia.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Terco;
