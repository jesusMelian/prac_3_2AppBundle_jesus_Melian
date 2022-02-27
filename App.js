import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Header } from './Components/Header';
import { ModalAdd } from './Components/ModalAdd';
import { ViewBundle } from './Components/ViewBundle';

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
  return (
    <View style={styles.container}>
      <Header value={value} />
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
    backgroundColor: "#5856D6",
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
