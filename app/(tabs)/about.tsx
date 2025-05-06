import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.text}>No nosso site, trazemos as últimas notícias e informações sobre os esportes no Brasil. Nosso foco é manter você atualizado com as novidades, resultados e análises dos principais eventos esportivos, desde futebol até modalidades menos cobertas. Com uma abordagem única, oferecemos conteúdo relevante, entrevistas exclusivas e uma visão detalhada do universo esportivo brasileiro. Aqui, você encontra tudo o que precisa para acompanhar de perto o esporte nacional. </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: '#2490ae'
  },
  text:{
    color: '#fff',
    fontSize: 20,
    fontFamily: 'monospace',
  },
  box:{
    width: 300
  }
})