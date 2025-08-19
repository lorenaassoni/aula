import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';

type Props = {
    onSelect: (image: ImageSourcePropType) => void;
    onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
    const [emoji] = useState<ImageSourcePropType[]>({
        require("../assets/images/emoji1.png"),
        require("../assets/images/emoji2.png"),
        require("../assets/images/emoji3.png"),
        require("../assets/images/emoji4.png"),
        require("../assets/images/emoji5.png"),
        require("../assets/images/emoji6.png"),
    });

    return (
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={Platform.0S === 'web'}
        data={emoji}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => (
            <Pressable
            onPress={() => {
                onselect(item);
                onCloseModal();
            }}>
                <Image source={item} key={index} style={StyleSheet.image} />
            </Pressable>
        )}
    );
}