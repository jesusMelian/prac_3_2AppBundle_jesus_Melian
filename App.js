import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Header } from './Components/Header';
import { ViewBundle } from './Components/ViewBundle';

export default function App() {
  const [value, setValue] = useState();
  const [listTransactions, setListTransactions] = useState([]);

  const handleChangeValue = (value) => {
    setValue(parseInteger(value));
  }
  return (
    <View style={styles.container}>
      <Header value={-1} />
      <TouchableOpacity style={styles.fabLocationBL}>
            <View style={styles.fab}>
              <Image source={require("./Icons/plus.png")} style={styles.tinyIcon}/>
            </View>
        </TouchableOpacity>
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
