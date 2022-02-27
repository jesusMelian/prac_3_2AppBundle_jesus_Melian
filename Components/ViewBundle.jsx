import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

export const ViewBundle = ({value}) => {
  return (
    <View >
        {value < 0 ?
            <Text style={styles.totalDown}>{value}</Text>
        :
        <Text style={styles.totalUp}>{value}</Text>
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
        width: '50%'
    },
    totalUp: {
        color: 'black',
        fontSize: 19,
        backgroundColor: '#565656',
        padding: 5
    }
})