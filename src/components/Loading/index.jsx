import React from 'react'
import { Image, View } from 'react-native'

import pokeballImg from '../../assets/pokeball.gif'
import styles from './styles'


function Loading() {
	return (
		<View style={ styles.loadingContainer }>
			<Image
				resizeMode="cover"
				source={ pokeballImg }
				style={ styles.image }
			/>
		</View>
	)
}

export default Loading
