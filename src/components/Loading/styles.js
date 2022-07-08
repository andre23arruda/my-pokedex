import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    loadingContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(255,0,0,0.3)',
    },

    image: {
        height: 50,
        width: 50,
        alignSelf: 'center',
    }
})