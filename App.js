import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Trekking from './screens/Trekking';
import Footer from './screens/Footer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName='Home'>
      //     <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      //     <Stack.Screen name='Trekking' component={Trekking} options={{ headerShown: false }} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      <View>
        <Footer />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
