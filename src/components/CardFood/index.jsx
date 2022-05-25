import React, { useState } from "react";
import { Dimensions } from "react-native";
import {
  Pressable,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

export const CardFood = ({
  name,
  image,
  isFav,
  price,
  rating,
  description,
  Food,
}) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const [imageLoaded, setImageLoaded] = useState(true);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("FoodInfo", {
          name: name,
          image: image,
          isFav: isFav,
          price: price,
          rating: rating,
          description: description,
          food: Food,
        });
      }}
      style={[
        tw`p-3 bg-red-600 max-w-[50vw] items-center  m-1 w-[45%] rounded bg-white my-2`,
        { maxWidth: windowWidth * 0.45 },
        style.shadow,
      ]}
    >
      <View style={tw`w-[110px] h-[110px]`}>
        {imageLoaded && (
          <View
            style={tw`w-full bg-gray-50 rounded-full h-full justify-center items-center`}
          >
            <ActivityIndicator size="small" color="#ff0000" />
          </View>
        )}
        <Image
          source={{
            uri: image[0],
          }}
          onLoad={() => {
            setImageLoaded(false);
          }}
          style={tw`w-full h-full rounded-full`}
        />
      </View>
      <Text style={tw`text-xl font-bold`}>{name}</Text>
      <Text style={tw`text-xl `}>{price} Dh</Text>
      <View
        style={tw`absolute top-2 right-2 flex-row items-center justify-center`}
      >
        <Ionicons name="md-heart" size={24} color={isFav ? "red" : "black"} />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
