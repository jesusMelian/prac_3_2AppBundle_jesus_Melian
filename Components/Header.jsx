import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { ViewBundle } from './ViewBundle'
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
      backgroundColor: '#414141',
      justifyContent: 'center',
      alignItems: 'center',
    }
})