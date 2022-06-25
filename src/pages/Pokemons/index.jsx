import React from 'react'

// navigation
import { createStackNavigator } from '@react-navigation/stack'

// custom components
import PokemonDetail from '../../components/PokemonDetail'
import PokemonsList from '../../components/PokemonsList'


const AppStack = createStackNavigator()


function Pokemons() {
	return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="PokemonsList" component={ PokemonsList } />
            <AppStack.Screen name="PokemonDetail" component={ PokemonDetail } />
        </AppStack.Navigator>
	)
}

export default Pokemons
