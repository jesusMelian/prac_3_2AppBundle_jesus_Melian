import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { ViewBundle } from './ViewBundle'
import Colors from '../Constants/Colors';

export const Header = ({value}) => {
  return (
    <View style={styles.header}>
        <ViewBundle value={value}/>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      top: 30,
      width: "100%",
      height: 60,
      backgroundColor: Colors.header,
      justifyContent: 'center',
      alignItems: 'center',
    }
})