import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../app/screen/LogIn';
import secondePage from '../app/screen/secondePage';
import ElevatorStatus from '../app/screen/ElevatorStatus';



const Stack = createStackNavigator();

export const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="secondePage" component={secondePage} />
            <Stack.Screen name="ElevatorStatus" component={ElevatorStatus} />
        </Stack.Navigator>
    </NavigationContainer>
)