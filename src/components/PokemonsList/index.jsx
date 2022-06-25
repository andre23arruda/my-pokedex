import React, { useState } from 'react'
import { FlatList } from 'react-native'

// custom components
import MainScreen from '../MainScreen'
import PokemonCard from '../PokemonCard'

// mocks
import { pokemons } from '../../../mocks/pokemons'

// styles
import { colors } from '../../../theme'
import { getApi } from '../../services/api'

const initialOffset = 12
const requestLimit = 30
const lastPokemon = 898
const maxOffset = lastPokemon - (requestLimit + initialOffset)

function PokemonsList() {
    const [data, setData] = useState(pokemons)
    const [loading, setLoading] = useState(false)
    const [offset, setOffset] = useState(initialOffset)

    async function loadPokemons() {
        if (loading) {
            return
        }

        if (offset < maxOffset) {
            setLoading(true)
            const response = await getApi(`pokemon?limit=${ requestLimit }&offset=${ offset }`)
            setLoading(false)
            setData([...data, ...response.results])
            setOffset(offset + requestLimit)
        } else {
            setLoading(true)
            const response = await getApi(`pokemon?limit=${ lastPokemon - offset }&offset=${ offset }`)
            setData([...data, ...response.results])
        }
        return
    }

	return (
		<MainScreen backgroundColor={ colors.default }>
            <FlatList
                data={ data }
                renderItem={ ({ item }) => <PokemonCard pokemon={ item } /> }
                keyExtractor={ item => String(item.name) }
                removeClippedSubviews={ true }
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                numColumns={ 2 }
                onEndReached={ loadPokemons }
                onEndReachedThreshold={ 0.25 }
                showsVerticalScrollIndicator={ false }
            />
        </MainScreen>
	)
}

export default PokemonsList
