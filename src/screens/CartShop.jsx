import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

import ColorPicker from "react-native-wheel-color-picker";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function CartShop() {
  const cart = useSelector((state) => state.cart);
  const [color, setColor] = React.useState("#000000");

  return (
    <ScrollView style={[tw``]}>
      <View style={[tw`w-full flex-row  justify-between px-3`]}>
        <Text style={[tw`text-2xl font-black my-6 `]}>My Cart</Text>
        <Text style={[tw`text-2xl font-black my-6 `]}>{cart.total} dh</Text>
      </View>

      <View style={[tw`w-full justify-between px-3`]}>
        {cart.cart.map((item, index) => (
          <View
            key={index}
            style={[
              tw`flex-row mb-5 p-3 justify-between items-center items-center w-full rounded-xl bg-white`,
            ]}
          >
            <Image
              style={[tw`w-10 h-10 rounded-full`]}
              source={{
                uri: item.image,
              }}
            />
            <View
              style={[
                tw`flex-row p-3 justify-between items-center items-center flex-1 rounded-xl bg-white`,
              ]}
            >
              <Text style={[tw`text-2xl font-black`]}>{item.name}</Text>
              <Text style={[tw`text-2xl font-black`]}>{item.price} dh</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
