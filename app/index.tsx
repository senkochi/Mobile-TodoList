import { Image, Text, View } from "react-native";
import { images } from "../constants/images";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Image source={images.bg} className="absolute w-full h-full" />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
