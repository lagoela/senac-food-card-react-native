import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList } from "react-native";
import { FoodCard } from "./components/foodCard";

foodData = [
  {
    foodName: "Hamburger",
    foodCalories: "70 Calories",
    foodPrice: "12.00",
    foodImage: require("./assets/hamburger.jpg"),
  },
  {
    foodName: "Pizza",
    foodCalories: "100 Calories",
    foodPrice: "15.00",
    foodImage: require("./assets/pizza.png"),
  },
  {
    foodName: "Hotdog",
    foodCalories: "50 Calories",
    foodPrice: "10.00",
    foodImage: require("./assets/hot-dog.jpg"),
  },
];

export default function App() {
  return (
    <View className="h-screen flex flex-col justify-center items-center">
      <Text className="text-3xl font-bold pb-4">Food Menu</Text>
      <View>
        {foodData.map((food, index) => {
          return (
            <View key={index} className='w-[100%] mb-4'>
              <FoodCard
              foodName={food.foodName}
              foodCalories={food.foodCalories}
              foodPrice={food.foodPrice}
              foodImage={food.foodImage}
            />
            </View>
          );
        })}  
      </View>
    </View>
  );
}
