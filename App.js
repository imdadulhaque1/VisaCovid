import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from "./src/Components/Welcome";
import FaceScan from "./src/Components/FaceScan";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Face Scan" component={FaceScan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
