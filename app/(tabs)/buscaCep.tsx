import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useBuscaCep } from '@/hooks/useBuscaCep'; // Importa o hook

export default function buscaCep() {
  const { cep, setCep, endereco, buscarCEP } = useBuscaCep(); // Usando o hook

  return (
    <View style={styles.container}>
      <Text>Consulte seu CEP</Text>

      <TextInput
        style={styles.textInput}
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o CEP"
        keyboardType="numeric"
      />

      <Text>{cep}</Text>

      <Button
        title="Buscar"
        onPress={buscarCEP}
      />

      {endereco.logradouro !== '' && (
        <View style={styles.resultado}>
          <Text>Logradouro: {endereco.logradouro}</Text>
          <Text>Bairro: {endereco.bairro}</Text>
          <Text>Cidade: {endereco.localidade}</Text>
          <Text>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 10,
  },
  resultado: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
});
