import { View, Text, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { withExpoSnack, styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export function FoodCard({ foodName, foodImage, foodPrice, foodCalories }) {
  return (
    <StyledView className="flex flex-row w-[80%] rounded-md shadow-lg p-4 bg-zinc-50">
      <View className="flex flex-grow ">
        <Text className="text-xl pb-2 font-semibold">{foodName}</Text>
        <View className="flex flex-row items-center gap-1 pl-1">
          <FontAwesome5 name="fire" size={12} color="red" />
          <Text className="text-zinc-400">{foodCalories}</Text>
        </View>
        <Text className='pt-2 text-base font-bold text-yellow-500'>${foodPrice}</Text>
      </View>
      <View className="flex flex-shrink-0 w-[30%] items-center justify-center col-span-1">
        <Image
          source={foodImage}
          className="object-cover rounded-full w-[64px] h-[64px]"
        />
      </View>
    </StyledView>
  );
}
