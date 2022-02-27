import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export const ViewTransactions = ({transaction, key, onEdit, onDelete}) => {
    console.log(transaction.value.substring(0,1) === "-");
    return (
        <View style={styles.list}>
                <View style={styles.negative} key={key}>
                    {transaction.value.substring(0,1) === "-" ?
                        <Text style={styles.titleNegative}>{transaction.value + " €"}</Text>
                    :
                        <Text style={styles.title}>{transaction.value + " €"}</Text>
                    }
                    <Text style={styles.description}>{transaction.description}</Text>
                    <Text style={styles.date}>{transaction.date}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#474747',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10
    },
    titleNegative: {
        color: 'red',
        fontSize: 26,
    },
    title: {
        color: '#6200EE',
        fontSize: 26,
    },
    description: {
        color: 'white',
        fontSize: 26,
    },
    date: {
        color: '#BB86FC',
        fontSize: 26,
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})
