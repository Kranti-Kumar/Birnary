import { NavigationContainer } from "@react-navigation/native";

import Decimal from "./src/Decimal";
import Binary from "./src/Binary";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Decimal" component={Decimal} />
        <Stack.Screen name="Binary" component={Binary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
