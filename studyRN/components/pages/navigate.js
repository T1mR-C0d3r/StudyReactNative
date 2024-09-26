import React from 'react'
import Home from './Home'
import SecondPage from './SecondPage'


import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function Navigate() {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home page'
                    component={Home}
                    options={
                        {
                            title: 'Home page',
                            headerStyle: { backgroundColor: 'red'}
                        }
                    }
                />
                <Stack.Screen
                    name='Second page'
                    component={SecondPage}
                    options={{title: 'Second page'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}