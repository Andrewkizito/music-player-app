// Importing helper modules
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"

// Importing screens
import Home from "../screens/Home/Home"

// Creating stack
const Stack = createNativeStackNavigator()

const Main = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Main
