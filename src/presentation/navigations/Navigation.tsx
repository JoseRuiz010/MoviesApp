import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { DetailScreen } from '../screens/Details/DetailScreen';

export type RootStackParams = {
  Home: undefined,
  Details: { movieId: number }
}
const Stack = createStackNavigator<RootStackParams>();
export function Navigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
}