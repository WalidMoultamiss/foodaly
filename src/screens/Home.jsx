import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { SIZES } from "../constants/theme";
//navigation
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

import { Button, Icon } from "react-native-elements";
import { PharmacyInfo } from "../components/modals/PharmacyInfo";
import { CardFood } from "../components/CardFood";

const Food = [
  {
    name: "Spicy Chicken cool",
    img: "https://morocco.burgerking.me/Images/Products/CHICKEN%20TENDERGRILL.jpg",
    isFav: true,
    price: 10,
    rating: 5,
    description: "Spicy Chicken cool description",
  },
  {
    name: "Spicy Chicken",
    img: "https://morocco.burgerking.me/Images/Products/CHICKEN%20ROYALE.jpg",
    isFav: false,
    price: 10,
    rating: 3,
    description: "Spicy Chicken cool description",
  },
  {
    name: "Spicy Chicken",
    img: "https://morocco.burgerking.me/Images/Products/CHICKEN%20CRISP.jpg",
    isFav: false,
    price: 10,
    rating: 4,
    description: "Spicy Chicken cool description",
  },
  {
    name: "Spicy Chicken",
    img: "https://morocco.burgerking.me/Images/Products/FISH%20ROYALE.jpg",
    isFav: false,
    price: 10,
    rating: 3,
    description: "Spicy Chicken cool description",
  },
];

export default function Home() {
  const [InfoModalVisible, setInfoModalVisible] = useState(false);
  const [PharmacyInfos, SetPharmacyInfos] = useState({});
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={tw`p-3  pt-4 `}>
        <Text style={tw`text-3xl font-bold`}>Our Food</Text>
      </View>
      <View style={tw`p-3 flex-wrap flex-row w-full justify-evenly pt-0`}>
        {Food?.map((item, index) => (
          <CardFood key={index} {...{ ...item, Food }} />
        ))}
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: SIZES.width,
    height: SIZES.height,
  },
});
