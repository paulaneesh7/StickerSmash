import { Image, ImageSource } from "expo-image";
import { StyleSheet } from "react-native";


interface ImageProp {
    imageSource: ImageSource,
    selectedImage?: string,
}


export default function ImageViewer({ imageSource, selectedImage }: ImageProp){
    const imgSource = selectedImage ? { uri: selectedImage } : imageSource;

    return (
        <Image source={imgSource} style={ styles.image }/>
    )
}


const styles = StyleSheet.create({
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
});