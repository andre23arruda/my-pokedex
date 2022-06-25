import React from 'react'

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// pages
import Pokemons from './src/pages/Pokemons';
import PokeItems from './src/pages/PokeItems';

// styles
import { colors } from './theme';

const Tab = createBottomTabNavigator();


export default function Routes() {
	return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.claro,
                    tabBarInactiveTintColor: colors.cinza,
                    tabBarActiveBackgroundColor: colors.claro,
                    tabBarInactiveBackgroundColor: colors.defaultDark,
                    tabBarStyle: {
                        height: 60
                    },
                    tabBarIconStyle: { display: 'none' },
                    tabBarLabelStyle: {
                        width: '100%',
                        flex: 1,
                        fontFamily: 'PressStart2P',
                        fontSize: 10,
                        lineHeight: 21,
                        paddingTop: 21,
                        marginTop: 3,
                        backgroundColor: colors.defaultDark
                    }

                }}
            >
                <Tab.Screen name="Pokémons" component={ Pokemons } />
                <Tab.Screen name="Itens" component={ PokeItems } />
            </Tab.Navigator>
        </NavigationContainer>
	)
}
