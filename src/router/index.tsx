import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, Menu} from '../pages';
import Female from '../pages/Female';
import Male from '../pages/Male';
import Simp from '../pages/Simp';
import Artt from '../pages/Artt';
const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Female"
        component={Female}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Simp"
        component={Simp}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Artt"
        component={Artt}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Male"
        component={Male}
        options={{headerShown: false}}
      />
      
     
    </Stack.Navigator>
  );
};
export default index;