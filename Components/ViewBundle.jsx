import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import Colors from '../Constants/Colors';

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
        backgroundColor: Colors.secondary,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        width: '50%',
        borderColor: Colors.primary
    },
    totalUp: {
        color: 'white',
        fontSize: 19,
        backgroundColor: Colors.secondary,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.primary
    }
})