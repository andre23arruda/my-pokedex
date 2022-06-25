import React from 'react'
import { ScrollView, View } from 'react-native'
import { useRoute } from '@react-navigation/core'

// custom components
import CustomText from '../CustomText'
import PokemonCarousel from '../PokemonCarousel'

// utils
import { removeNewLine } from '../../utils/formatString'
import { kg2lbs, meter2feet, roundValue } from '../../utils/unitTransform'

// styles
import styles from './styles'
import { pokemonTypeColors } from '../../../theme'


function PokemonDetail() {
    const route = useRoute()
    const item = route.params
    const mainType = item.types[0].type.name

	return (
        <ScrollView style={ [styles.detail, { backgroundColor: pokemonTypeColors[mainType].light }] }>
            <View style={ styles.top }>
                <PokemonCarousel data={item.images} />

                <CustomText style={ styles.name }>
                    {/* #{ item.id }*/}
                    { item.name }
                </CustomText>
            </View>

            <View style={ styles.types }>
                { item.types.map((item) => (
                    <CustomText
                        style={ [styles.typeValue, { backgroundColor: pokemonTypeColors[item.type.name].dark }]  }
                        key={ item.type.name }
                    >
                        { item.type.name.toUpperCase() }
                    </CustomText>
                ))}
            </View>

            <CustomText style={ styles.description }>
                { removeNewLine(item.description) }
            </CustomText>

            <View style={ styles.block }>
                <CustomText style={ styles.paddingVertical }>
                    Weight: { kg2lbs(item.weight * 0.1) }lbs ({ roundValue(item.weight * 0.1) }kg)
                </CustomText>

                <CustomText style={ styles.paddingVertical }>
                    Height: { meter2feet(item.height * 0.1)  }ft ({ roundValue(item.height * 10) }cm)
                </CustomText>
            </View>

            <View style={ styles.block }>
                <CustomText style={ styles.paddingBottom }>
                    Abilities:
                </CustomText>

                { item.abilities.map((item) => (
                    <CustomText
                        key={ item.ability.name }
                        style={ styles.titleCase }
                    >
                        » { item.ability.name }
                    </CustomText>
                ))}
            </View>

            <View style={ [styles.block, styles.lastBlock] }>
                { item.stats.map((item) => (
                    <CustomText
                        key={ item.stat.name }
                        style={ styles.titleCase }
                    >
                        { item.stat.name }: { item.base_stat }
                    </CustomText>
                ))}
            </View>


        </ScrollView>
	)
}

export default PokemonDetail
