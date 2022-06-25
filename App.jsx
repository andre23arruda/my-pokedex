import React from 'react'
import AppLoading from 'expo-app-loading'

import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p'

import Routes from './routes'


export default function App() {

	let [fontsLoaded] = useFonts({
		PressStart2P: PressStart2P_400Regular,
	})

	if (!fontsLoaded) {
		return <AppLoading />
	}

	return <Routes />
}
