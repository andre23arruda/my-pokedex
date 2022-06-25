import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'

// custom components
import CustomText from '../CustomText'

// utils
import { pokemonImageLink, getApi, nullImageLink } from '../../services/api'
import { extractIdFromUrl, getEnglishText, removeHyphen } from '../../utils/formatString'
import { showAlert } from '../../utils/messages'

// styles
import styles from './styles'


function PokemonCard({ pokemon }) {

    const navigation = useNavigation()
    const pokemonId = extractIdFromUrl(pokemon.url)
    // const [pokemonImage, setPokemonImage] = useState(`${ pokemonImageLink }/${ pokemonId }.gif`)
    const [pokemonImage, setPokemonImage] = useState(`${ pokemonImageLink }/ani/${  pokemon.name }.gif`)


    function handleAlternativeImage() {
        // setPokemonImage(`${ pokemonImageLinkAlternative }/${ pokemonId }.png`)
        setPokemonImage(nullImageLink)
    }

    async function getDetail(pokemon_id) {
        const response = await getApi(`pokemon/${ pokemon_id }`)
        const responseComplement = await getApi(`pokemon-species/${ pokemon_id }`)
        // console.log(response)
        try {
            if (response.abilities) {
				navigation.navigate('PokemonDetail', {
					abilities: response.abilities,
					id: response.id,
					name: response.name,
					rawName: pokemon.name,
					types: response.types,
					height: response.height,
					weight: response.weight,
                    stats: response.stats,
                    description: getEnglishText(responseComplement.flavor_text_entries).flavor_text,
                    imageNormal: `${ pokemonImageLink }/ani/${ pokemon.name }.gif`,
                    imageShiny: `${ pokemonImageLink }/ani-shiny/${ pokemon.name }.gif`,
                    images: responseComplement.varieties.map(variety => ({
                        id: variety.pokemon.name,
                        image: `${ pokemonImageLink }ani/${ variety.pokemon.name }.gif`
                    })),
				})
            } else {
                showAlert()
            }
        } catch(err) {
            showAlert()
        }
    }

	return (
        <TouchableOpacity
            style={ styles.informacao }
            activeOpacity={ 0.8 }
            onPress={ () => getDetail(pokemonId) }
        >
            <CustomText style={ styles.name }>
                #{ pokemonId } { removeHyphen(pokemon.name) }
            </CustomText>

            <Image
                style={ styles.image }
                source={{ uri: pokemonImage }}
                onError={ handleAlternativeImage }
            />
        </TouchableOpacity>
	)
}

export default PokemonCard
