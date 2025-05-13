import { Text, View, StyleSheet } from "react-native";

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

const PlaceholderImage = require('@/assets/images/imagemsite.png');

export default function Index() {
  const [selectedImage, setSelectedImage ] = useState<string | undefined>(undefined);
  
  const pickImageAsync = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Você não selecionou uma imagem!')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-Vindo ao Nosso Site!</Text>
      <Text style={styles.text}>Seja membro!</Text>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync} />
        <Button label="Use essa foto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:"center",
    backgroundColor: '#2490ae'
  },
  text:{
    color: '#fff',
    fontSize: 20,
    fontFamily: 'monospace',
  },
  imageContainer:{
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})