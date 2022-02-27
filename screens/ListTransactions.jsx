import React from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import { ViewTransactions } from '../Components/ViewTransactions'

export const ListTransactions = (listTransactions, onEdit, onDelete) => {
    console.log("LISTA: ",listTransactions.listTransactions);
    console.log("onDelete: ",onDelete);
  return (
    <View style={styles.listData}>
         <FlatList data={listTransactions.listTransactions} renderItem={ itemData => {
                console.log("TRANSACCION: ",itemData.item)
                return(
                    <ViewTransactions
                    transaction={itemData.item}
                    // image={image}
                    onEdit={onEdit} 
                    onDelete={onDelete}
                    />
                )
            }
            }/>
    </View>
  )
}

const styles = StyleSheet.create({
    listData: {
        display: 'flex',
        position: 'absolute',
        top: 90,
        width: '95%',
        margin: 10,
    }
})
