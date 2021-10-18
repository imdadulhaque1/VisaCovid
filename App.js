import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from "./src/Components/Welcome";
import FaceScan from "./src/Components/FaceScan";
import AccountsEntry from "./src/Components/AccountsEntry";
import RegistrationHome from "./src/Components/RegistrationHome";
// import MobileOTP from './src/Components/OTP/MobileOTP';
import NavigationTab from "./src/Components/Navigation/NavigationTab";

import AddCountry from "./src/Components/Home/HomeComponents/AddCountry/AddCountry";

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
        <Stack.Screen name="Login" component={AccountsEntry} />
        <Stack.Screen name="Registration" component={RegistrationHome} />
        <Stack.Screen name="Home" component={NavigationTab} />
        <Stack.Screen name="Face Scan" component={FaceScan} />

        <Stack.Screen name="Add Country" component={AddCountry} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
