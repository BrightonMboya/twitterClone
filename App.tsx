import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Edit Profile", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
