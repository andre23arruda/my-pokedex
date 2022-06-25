import React from 'react'

// navigation
import { createStackNavigator } from '@react-navigation/stack'

// custom components
import PokeItemDetail from '../../components/PokeItemDetail'
import PokeItemsList from '../../components/PokeItemsList'


const AppStack = createStackNavigator()


function PokeItems() {
	return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="PokeItemsList" component={ PokeItemsList } />
            <AppStack.Screen name="PokeItemDetail" component={ PokeItemDetail } />
        </AppStack.Navigator>
	)
}

export default PokeItems
