import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

export const ViewBundle = ({value}) => {
  return (
    <View >
        {value < 0 ?
            <Text style={styles.totalDown}>{parseFloat(value).toFixed(2) + " €"}</Text>
        :
        <Text style={styles.totalUp}>{parseFloat(value).toFixed(2) + " €"}</Text>
        }
        
    </View>
  )
}

const styles = StyleSheet.create({
    totalDown: {
        color: 'red',
        fontSize: 19,
        backgroundColor: '#565656',
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        width: '50%',
        borderColor: '#BB86FC'
    },
    totalUp: {
        color: 'white',
        fontSize: 19,
        backgroundColor: '#565656',
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#BB86FC'
    }
})