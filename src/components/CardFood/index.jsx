import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    View,
  } from "react-native";
import { Ionicons } from "@expo/vector-icons";

  import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

export const CardFood = ({ name, img, isFav, price, rating, description , Food }) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("FoodInfo", {
            name: name,
            img: img,
            isFav: isFav,
            price: price,
            rating: rating,
            description: description,
            food: Food,
          });
        }}
        style={tw`p-3 bg-red-600 items-center  m-1 w-[45%] rounded bg-white border-2 border-gray-300`}
      >
        <View style={tw`w-[110px] h-[110px]`}>
          <Image
            source={{
              uri: img,
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