import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

export const ViewBundle = ({value}) => {
  return (
    <View>
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
        color: 'red'
    },
    totalUp: {
        color: 'black'
    }
})