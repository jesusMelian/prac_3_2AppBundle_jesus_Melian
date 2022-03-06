import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Header } from './Components/Header';
import { ModalAdd } from './Components/ModalAdd';
import { ViewBundle } from './Components/ViewBundle';
import { ListTransactions } from './screens/ListTransactions';
import Colors from './Constants/Colors';

export default function App() {
  const [value, setValue] = useState(0);
  const [listTransactions, setListTransactions] = useState([]);
  const [viewModalAdd, setViewModalAdd] = useState(false);
  const [id, setId] = useState(0);

  const handleChangeTransaction = (valor, description, date) => {
    setId(id+1)
    setListTransactions((transactions) => [...transactions, {id: id, value: valor, description: description, date: date}])
    setValue(value + parseFloat(valor));
  }

  const handleRemoveTransaction = (id) => {
    setListTransactions(listTransactions.filter(transactions => transactions.id != id));
    //SE DESCUENTA
    const BEFORETRANSACTION = listTransactions.filter((transactions) => transactions.id === id);
    const beforeValue = value - parseFloat(BEFORETRANSACTION[0].value);
    setValue(beforeValue);
  }
  const handleEditTransaction = (id, valor, description, date) => {
    handleRemoveTransaction(id);
    //LE QUITO EL VALOR ANTERIOR
    const BEFORETRANSACTION = listTransactions.filter((transactions) => transactions.id === id);
    const beforeValue = value - parseFloat(BEFORETRANSACTION[0].value);
    setValue(beforeValue);
    setListTransactions((transactions) => [...transactions, {id: id, value: valor, description: description, date: date}])
    //LE SUMO EL VALOR EDITADO
    setValue(beforeValue + parseFloat(valor));
  }
  return (
    <View style={styles.container}>
      <Header value={value} />
      <ListTransactions listTransactions={listTransactions} onEdit={handleEditTransaction} onDelete={handleRemoveTransaction}/>
      <TouchableOpacity onPress={() => {setViewModalAdd(true)}} style={styles.fabLocationBL}>
        <View style={styles.fab}>
          <Image source={require("./Icons/plus.png")} style={styles.tinyIcon}/>
        </View>
      </TouchableOpacity>
      <ModalAdd viewModal={viewModalAdd} setViewModal={setViewModalAdd} setTransaction={handleChangeTransaction} id={id}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  fab: {
    backgroundColor: Colors.botons,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center'
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 0,
    right: 65
  },
  tinyIcon: {
    width: 60,
  }
});
