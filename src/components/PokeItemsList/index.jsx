import React, { useState } from 'react'
import { FlatList } from 'react-native'

// custom components
import Loading from '../Loading'
import MainScreen from '../MainScreen'
import PokeItemCard from '../PokeItemCard'

// utils
import { getApi } from '../../services/api'

// mocks
import { pokeItems } from '../../../mocks/pokeItems'

// styles
import { colors } from '../../../theme'

const requestLimit = 30

function PokeItemsList() {
    const [data, setData] = useState(pokeItems)
    const [loading, setLoading] = useState(false)
    const [offset, setOffset] = useState(12)

    async function loadPokeItems() {
        if (loading) {
            return
        }

        setLoading(true)

        const response = await getApi(`item?limit=${ requestLimit }&offset=${ offset }`)
        setData([...data, ...response.results])
        setOffset(offset + requestLimit)
        setLoading(false)
    }

	return (
		<MainScreen backgroundColor={ colors.default }>
            <FlatList
                data={ data }
                renderItem={ ({ item }) => <PokeItemCard item={ item } /> }
                keyExtractor={ item => String(item.name) }
                removeClippedSubviews={ true }
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                numColumns={ 2 }
                onEndReached={ loadPokeItems }
                onEndReachedThreshold={ 0.5 }
                showsVerticalScrollIndicator={ false }
            />

            { loading && <Loading />}
        </MainScreen>
	)
}

export default PokeItemsList
